// A $( document ).ready() block.
var allContactList = new Contacts();
$("#recordGrid").hide();
$("#newContactForm").hide();
var editContactId = null;

$( document ).ready(function() {
    console.log( "ready!" );

    // event on form submit
    $("#saveBtn").click(function( event ){



        console.log( "form submit event" );

        name = $("#userName").val();
        email = $("#userEmail").val();
        phone = $("#userContact").val();
        address = $("#userAddress").val();

        var new_contact = new Contact(name, email, phone, address);

        if (new_contact.validate()){
            if (editContactId == null){
                allContactList.addContact(new_contact);
            }else{
                allContactList.updateContact(editContactId, new_contact);
            }
            //allContactList.addContact(new_contact);
        }

        console.log(allContactList);

        event.preventDefault();
    });



    // view all records
    $("#viewRecords").click(function( event ){
        $("#newContactForm").hide();
        $("#recordGrid").show();

        $("#recordTable tbody").html("");

        $.each(allContactList.contactList, function(index, val){

            var allRecords = "<tr>" +
            "<td>"+val.name+"</td>"+
            "<td>"+val.email+"</td>"+
            "<td>"+val.phone+"</td>"+
            "<td>"+val.address+"</td>"+
            "<td><button type='button' class='editRecord' value="+index+">Edit</button></td>"+
            "<td><button type='button' class='deleteRecord' value="+index+">Delete</button></td>"+
            "</tr>";

            $("#recordTable tbody").append(allRecords);

        });


        // bind click event on dynamically created buttons
        // edit button event
        $(".editRecord").on ("click" ,function( event ){
            console.log("edit button clicked");
            console.log(this.value);

            $("#newContactForm").show();
            $("#recordGrid").hide();


            var edirContact = allContactList.showContact(this.value);


            $("#userName").val(edirContact.name);
            $("#userEmail").val(edirContact.email);
            $("#userContact").val(edirContact.phone);
            $("#userAddress").val(edirContact.address);


            editContactId = this.value

        });


        // delete button event
        $(".deleteRecord").on ("click" ,function( event ){
            console.log("delete button clicked");
            console.log(this.value);
            allContactList.deleteContact(this.value);

            $("#recordTable tbody").html("");

            $.each(allContactList.contactList, function(index, val){

                var allRecords = "<tr>" +
                    "<td>"+val.name+"</td>"+
                    "<td>"+val.email+"</td>"+
                    "<td>"+val.phone+"</td>"+
                    "<td>"+val.address+"</td>"+
                    "<td><button type='button' class='editRecord' value="+index+">Edit</button></td>"+
                    "<td><button type='button' class='deleteRecord' value="+index+">Delete</button></td>"+
                    "</tr>";

                $("#recordTable tbody").append(allRecords);

            });
        });

        //console.log("inside show div");

        event.preventDefault();
    });

    // view add new record form
    $("#addNewContact").click(function( event ){
        $("#newContactForm").show();
        $("#recordGrid").hide();
        editContactId = null;

        console.log("inside show div ..... ");

        event.preventDefault();
    });

    //
    //$(".editRecord").on ("click" ,function( event ){
    //    console.log("edit button clicked");
    //});





});