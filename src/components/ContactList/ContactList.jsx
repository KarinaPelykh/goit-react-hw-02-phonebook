export const ContactList = ({contacts=[], title, }) => {
    return <>
        <h1>{ title}</h1>
    <ul>
        {
          contacts.map(item =>
            <li key={item.id}>{`${ item.name}:${item.number}`}</li>
      )
       }
      </ul>
    
    </>
}