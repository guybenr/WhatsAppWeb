import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";
import UsersData from "../usersData/UsersData";
import { Modal, Button } from "react-bootstrap";
import ContactItem from "../contactItem/ContactItem";
import Search from "../search/Search";
import Chat from "../chat/Chat";
import ContactListResult from "../contactsListResult/ContactListResult";

function ChatScreen(props) {

    const [toAddContact, setToAddContact] = React.useState(false);
    const [contacts, setContacts] = React.useState(UsersData.usersChat.get(props.userLoginDetails));
    const [showChat, setshowChat] = React.useState(false);
    const [detailsChat, setDetailsChat] = React.useState("");
    const [reRender, setReRender] = React.useState(false);


    const contactName = React.createRef('');

    const showAddContactModal = (event) => {
        event.preventDefault();
        setToAddContact(true);
    }

    // function adding the contact to the database

    const addContact = (event) => {
        event.preventDefault();
        if (contactName.current.value === '') { // validation that the input isnt empty
            return;
        }
        let userName = props.userLoginDetails;
        // adding the contact to the database and check if the contact exist
        if (UsersData.usersChat.has(contactName.current.value) && !UsersData.usersChat.get(userName).some(e => e.nameContact===contactName.current.value)) {
            contacts.push(
                { nameContact: contactName.current.value, massages: [{ massage: "", isRecived: true, time: "", type: "" }] }
            );
            setToAddContact(false);
        }
        else {
            alert("Contact Identifier wrong")
        }
    }

    const doSearch = (query) => {
        setContacts(UsersData.usersChat.get(props.userLoginDetails).filter((contact) => contact.nameContact.includes(query)));
    }


    const showOpenChat = (event) => {
        event.preventDefault();
        setshowChat(true);
    }

    var name;
    var image;
    for (let i = 0; i < UsersData.usersList.length; ++i) {
        if (UsersData.usersList[i].userName === props.userLoginDetails) {
            name = UsersData.usersList[i].nickName;
            image = UsersData.usersList[i].image;
            break;
        }
    }


    return (
        <div className="app">
            <div className="chatDetails">
                <div className="heading">
                    <div className="circleProfile">
                        <img className="profileImg" src={image}></img>
                    </div>
                    <div className="MyName">{name}
                        <button className="addChat btn btn-outline-secondary" type="submit" onClick={showAddContactModal}>+</button>
                    </div>
                </div>
                <Search setSearchQuery={doSearch} />
                <ContactListResult contactsList={contacts} showChat={showOpenChat} setDetails={setDetailsChat} />
            </div>
            {(detailsChat !== "") && <Chat chatName={detailsChat} setReRender={setReRender} reRender={reRender}
                massages={UsersData.usersChat.get(props.userLoginDetails).find(element => element.nameContact === detailsChat).massages} />}
            <Modal show={toAddContact} onHide={() => setToAddContact(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input className="form-control me-2" type="search" placeholder="Contact's Identifier" aria-label="Search" ref={contactName}></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={addContact} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ChatScreen;