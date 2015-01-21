
// initial contact list
function Contacts(){
	this.contactList = [] ;
};

// add new contact
Contacts.prototype.addContact = function(contact){
	this.contactList.push(contact) ;
};

// delete contact
Contacts.prototype.deleteContact = function(contact){
	var pos = this.contactList.indexOf(contact) ;
	contactList.splice(pos , 1) ;
};

// update contact
Contacts.prototype.updateContact = function(contact){
	//var pos = this.contactList.indexOf(contact) ;
	//contactList.splice(pos , 1) ;
};


