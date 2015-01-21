
function Contact( fname, lname , phone, email){
	this.fname = fname ;
	this.lname = lname ; 
	this.phone = phone ;
	this.email = email ;
}

Contact.prototype.validate(){
	if(this.fname == null);
		throw new Error("First Name cannot be null");
};

Contact.prototype.clear(){
	this.fname = null ;
	this.lname = null ;
	this.phone = null;
	this.email = null ;
};