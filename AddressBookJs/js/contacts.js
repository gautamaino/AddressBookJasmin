
// initial contact list
function Contacts(){
	this.contactList = [] ;
};

// add new contact
Contacts.prototype.addContact = function(contact){
	this.contactList.push(contact) ;
};

// delete contact
//Contacts.prototype.deleteContact = function(contact){
//	var pos = this.contactList.indexOf(contact) ;
//	contactList.splice(pos , 1) ;
//};
Contacts.prototype.deleteContact = function(position){
	//var pos = this.contactList.indexOf(contact) ;
	this.contactList.splice(position , 1) ;
};

// update contact
Contacts.prototype.updateContact = function(position, contact){
	//var pos = this.contactList.indexOf(contact) ;
	//contactList.splice(pos , 1) ;
	this.contactList[position] = contact;
};

// show contact
Contacts.prototype.showContact = function(position){
	//var pos = this.contactList.indexOf(contact) ;
	return this.contactList[position] ;
};

