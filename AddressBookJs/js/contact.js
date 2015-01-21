// create contact object
function Contact( name, email, phone, address){
	this.name = name ;
	//this.lname = lname ;
	this.phone = phone ;
	this.email = email ;
	this.address = address ;
}


Contact.prototype.validate = function (){
	if(this.name == ""){
		throw new Error("First Name cannot be null");
	}
	else if(this.email == ""){
		throw new Error("Email cannot be null");
	}
	else if(this.phone == ""){
		throw new Error("Phone No cannot be null");
	}
	else if(this.address == ""){
		throw new Error("Address cannot be null");
	}else {
		return true;
	}
};

Contact.prototype.clear = function(){
	this.name = null ;
	this.phone = null;
	this.email = null;
	this.address = null;
};