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
    const [contacts, setContacts] = React.useState(UsersData.usersChat.get(props.userLoginDetails).map((x) => x));
    const [showChat , setshowChat] = React.useState(false);
    const [detailsChat , setDetailsChat] = React.useState("");


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
        // adding the contact to the database
        UsersData.usersChat.get(userName).push(
            { nameContact: contactName.current.value, massages: [{ massage: '', isRecived: true, time: "18:19" }] }
        );
        contacts.push(
            { nameContact: contactName.current.value, massages: [{ massage: '', isRecived: true, time: "18:19" }] }
        );
        setToAddContact(false);
    }

    const doSearch = (query) => {
        setContacts(UsersData.usersChat.get(props.userLoginDetails).filter((contact) => contact.nameContact.includes(query)));
    }


    var chatImage;
    const showOpenChat = (event) => {
        event.preventDefault();
        setshowChat(true);
        for (let i = 0 ; i < UsersData.usersList.length ; ++i) {
            if (UsersData.usersList[i].userName === detailsChat) {
                chatImage = UsersData.usersList[i].image;
                break;
            }
        }
    }

    var name;
    var image;
    for (let i = 0 ; i < UsersData.usersList.length ; ++i) {
        if (UsersData.usersList[i].userName === props.userLoginDetails) {
            name = UsersData.usersList[i].nickName;
            image = UsersData.usersList[i].image;
            break;
        }
    }

    return (
        <div class="app">
            <div className="chatDetails">
                <div class="heading">
                    <div className="circleProfile">
                        <img src={image}></img>
                    </div>
                    <div className="MyName">{name}
                        <button class="addChat btn btn-outline-secondary" type="submit" onClick={showAddContactModal}>+</button>
                    </div>
                </div>
                <Search setSearchQuery={doSearch} />
                <ContactListResult contactsList={contacts} showChat={showOpenChat} setDetails={setDetailsChat}/>
            </div>
            {(detailsChat != "") && <Chat chatName={detailsChat} chatImage={chatImage}/>}
            <Modal show={toAddContact} onHide={() => setToAddContact(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input class="form-control me-2" type="search" placeholder="Contact's Identifier" aria-label="Search" ref={contactName}></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={addContact} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ChatScreen;