export default function crudApp() {
    return {
        newContact: {
            name: '',
            birthdate: '',
            phone: '',
            email: ''
        },
        
        contacts: JSON.parse(localStorage.getItem('contacts')) || [],

        addContact() {
            this.contacts.push({ ...this.newContact });
            this.saveData();
            this.clearForm();
        },

        removeContact(index) {
            this.contacts.splice(index, 1);
            this.saveData();
        },

        saveData() {
            localStorage.setItem('contacts', JSON.stringify(this.contacts));
        },

        clearForm() {
            this.newContact = {
                name: '',
                birthdate: '',
                phone: '',
                email: ''
            };
        }
    };
}