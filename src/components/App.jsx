import { Component } from "react"
import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"

export class App extends Component{
state = {
  contacts: [],
  name: '',
  number: ''
}

  handelInputName = (name) => {
this.setState({ name:name })
}
   
  hendelInputNumber = (number) => {
  this.setState({number:number})
  }
  hendelAddContact = (name, number)=> {
    this.setState(prevState => ({
    contacts: [...prevState.contacts, { name, id:crypto.randomUUID(), number}]
}))
   
  }

  render() {
  const {contacts, name, number} = this.state
    return <>
  
      <ContactForm
        onAddContact={this.hendelAddContact}
        onChangesName={this.handelInputName}
        onChangesNumber={this.hendelInputNumber}
        value={name}
        number={number}
      title=" Phonebook" />
      
      
      <ContactList  contacts={contacts} title=" Contacts"/>
</>
}
 
};
