
import PropTypes from "prop-types";
import styles from './ContactForm.module.css'
export const ContactForm = ({ onAddContact, title, onChangesName, value="", onChangesNumber, number=""}) => {
    
   const handelSubmit = e => {
       e.preventDefault()
       onAddContact(value,number)
       onChangesName("")
       onChangesNumber("")
    }
    return <>
        <h1>{title }</h1>
<form  className={styles.form} onSubmit ={handelSubmit}>
         <p className={styles.text}>Name</p>
      <input
      type="text"
      name="name"
      pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
      title="Name may contain only letters and a single space in between. For example Rosie Simpson"
      required
     value={value}
            
     onChange={(e) => {onChangesName(e.target.value)}}
            />
     <p className={styles.text}>Nomber</p>
      <input
      type="tel"
      name="number"
      pattern="^\d{3}(-?\d{2}){1,2}$"
      title="Phone number must be in the format 123-45-7 or 123457"
                required
                value={number}
                onChange={(e) => { onChangesNumber(e.target.value) }}
                
      />
      <button className={styles.btn}>Add contact</button>
      </form>
    </>
}
ContactForm.propTypes = {
    onAddContact:PropTypes.func ,
    title:PropTypes.string,
    onChangesName:PropTypes.func,
    value:PropTypes.string,
    onChangesNumber:PropTypes.func,
    number:PropTypes.string
}

