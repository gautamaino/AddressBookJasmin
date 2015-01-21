// A $( document ).ready() block.
var allContactList = new Contacts();
$("#recordGrid").hide();
$("#newContactForm").hide();
$( document ).ready(function() {
    console.log( "ready!" );

    // event on form submit
    $("#contactForm").submit(function( event ){
        console.log( "form submit event" );

        name = $("#userName").val();
        email = $("#userEmail").val();
        phone = $("#userContact").val();
        address = $("#userAddress").val();

        var new_contact = new Contact(name, email, phone, address);

        //console.log(new_contact);
        console.log(new_contact.validate());
        console.log(new_contact);

        if (new_contact.validate()){
            allContactList.addContact(new_contact);
        }

        console.log(allContactList);

        event.preventDefault();
    });



    // view all records
    $("#viewRecords").click(function( event ){
        $("#newContactForm").hide();
        $("#recordGrid").show();

        //var allRecords = "";

        //console.log(allRecords);
        $("#recordTable tbody").html("");

        $.each(allContactList.contactList, function(index, val){

            var allRecords = "<tr>" +
            "<td>"+val.name+"</td>"+
            "<td>"+val.email+"</td>"+
            "<td>"+val.phone+"</td>"+
            "<td>"+val.address+"</td>"+
            "<td>"+index+"</td>"+
            "<td>"+index+"</td>"+
            "</tr>";

            //$("#recordTable tbody").html(allRecords);
            $("#recordTable tbody").append(allRecords);
            //allRecords += allRecords +"<tr>" +
            //"<td>"+val.name+"</td>"+
            //"<td>"+val.email+"</td>"+
            //"<td>"+val.phone+"</td>"+
            //"<td>"+val.address+"</td>"+
            //"<td>"+index+"</td>"+
            //"<td>"+index+"</td>"+
            //"</tr>";
        });

        //console.log(allRecords);


        //$("#recordTable tbody").html(allRecords);


        console.log("inside show div");

        event.preventDefault();
    });

    // view add new record form
    $("#addNewContact").click(function( event ){
        $("#newContactForm").show();
        $("#recordGrid").hide();

        console.log("inside show div ..... ");

        event.preventDefault();
    });



});