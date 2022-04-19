import UsersData from "../usersData/UsersData";
import ContactItem from "../contactItem/ContactItem";

function ContactListResult(props) {

    const contactsList = props.contactsList.map((contact, key) => {
        return <ContactItem contactName={contact.nameContact} sentTime={contact.massages[contact.massages.length - 1].time} showChat={props.showChat} setDetails={props.setDetails}/>
    });

    return (
        <div className="sideBar">
            {contactsList}
        </div>
    );
}

export default ContactListResult