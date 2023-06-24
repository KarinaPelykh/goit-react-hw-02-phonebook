
import PropTypes from "prop-types";
export const ContactList = ({ contacts = [], title, onDeleteContact, value, onInputSearchName }) => {
  console.log(contacts);
 const handelSubmit = e => {
       e.preventDefault()
       onInputSearchName('')
    }
    return <>
      <h2>{title}</h2>
      <>
    <p>Find contacts by name</p>
        <input onSubmit={handelSubmit}
          type="text"
          name="name"
          value={value}
onChange={(e) => {onInputSearchName(e.target.value)}}
        />

    </>
    <ul>
        {
          contacts.map(item =>
            <li key={item.id}>{`${item.name}:${item.number}`}
              <button  onClick={()=>{onDeleteContact(item.id)}}>Delete</button>
            </li>
      )
       }
      </ul>
    
    </>
}
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOF.shape({
      
//     }) ,
//     title:PropTypes.string,
//     onChangesName:PropTypes.func,
//     value:PropTypes.string,
//     onChangesNumber:PropTypes.func,
//     number:PropTypes.string
// }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
  onDeleteContact: PropTypes.func,
  value: PropTypes.string,
  onInputSearchName: PropTypes.func,
};