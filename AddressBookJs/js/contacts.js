
function Contacts(){
	contactList = [] ; 
};

Contacts.prototype.addContact(contact){
	this.contactList.push(contact) ;
};

Contacts.prototype.deleteContact(contact){
	var pos = this.contactList.indexOf(contact) ;
	contactList.splice(pos , 1) ;
};




