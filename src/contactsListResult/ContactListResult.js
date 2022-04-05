import UsersData from "../usersData/UsersData";
import ContactItem from "../contactItem/ContactItem";

function ContactListResult(props) {

    const contactsList = props.contactsList.map((contact, key) => {
        return <ContactItem contactName={contact.nameContact} sentTime={contact.massages[0].time} />
    });


    return (
        <div className="sideBar">
            {contactsList}
        </div>
    );
}

export default ContactListResult