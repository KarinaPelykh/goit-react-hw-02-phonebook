export const ContactForm = ({ onAddNumber,onAddContact, title, onChangesName, value ,onChangesNumber, number}) => {
    
   const handelSubmit = e => {
       e.preventDefault()
       onAddContact(value,number)
       onChangesName("")
       onChangesNumber("")
    }
    return <div>
        <h1>{title }</h1>
<form  onSubmit ={handelSubmit}>
         <p>Name</p>
      <input
      type="text"
      name="name"
      pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
      title="Name may contain only letters and a single space in between. For example Rosie Simpson"
      required
      value={value}
     onChange={(e) => {onChangesName(e.target.value)}}
            />
     <p>Nomber</p>
      <input
      type="tel"
      name="number"
      pattern="^\d{3}(-?\d{2}){1,2}$"
      title="Phone number must be in the format 123-45-7 or 123457"
                required
                value={number}
                onChange={(e) => { onChangesNumber(e.target.value) }}
                
      />
      <button>Add contact</button>
      </form>
    </div>
}
