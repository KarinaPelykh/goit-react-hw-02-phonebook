
import { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {
  state = {
    contacts:[],
    filter: "",
  };

  handleInputName = (name) => {
    this.setState({ name: name });
  };

  handleInputNumber = (number) => {
    this.setState({ number: number });
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(contact=> contact.name.toLowerCase() === name.toLowerCase());
if (existingContact) {
  alert(`${name} is already in the contacts!`);
} else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, id: crypto.randomUUID(), number }],
      }));
    }
  };

  handleInputSearchName = (filter) => {
    // this.setState({ filter: e.target.value });
    this.setState({ filter:filter});
    
  };

  handelDeleteContact = (id) => {

    this.setState(prevState => ({
    contacts:prevState.contacts.filter(item=> item.id !==id)
  })) 
}

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <ContactForm
          onAddContact={this.handleAddContact}
          onChangesName={this.handleInputName}
          onChangesNumber={this.handleInputNumber}
          value={name}
          number={number}
          title="Phonebook"
        />
        <ContactList value={filter}
          onInputSearchName={this.handleInputSearchName} onDeleteContact={this.handelDeleteContact} contacts={filteredContacts} title="Contacts" />
        
      </div>
    );
  }
}
