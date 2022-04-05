import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import UsersData from "../usersData/UsersData";
import ContactItem from "../contactItem/ContactItem";

function Temp(props) {

    const [toAddContact, setToAddContact] = React.useState(false);
    const contactName = React.createRef('');

    const showAddContactModal = (event) => {
        event.preventDefault();
        setToAddContact(true);
    }

    // function adding the contact to the database
    const handleAddContact = (event) => {
        event.preventDefault();
        if (contactName.current.value === '') { // validation that the input isnt empty
            return;
        }
        let userName = "adi"//props.userLoginDetails; ********************
        // adding the contact to the database
        UsersData.usersChat.get(userName).push(
            { nameContact: contactName.current.value, massages: [{ massage: '', isRecived: true , time: "18:19"}] }
        );
        setToAddContact(false);
    }

    const contactsList = UsersData.usersChat.get("adi").map((contact, key) => {
        return <ContactItem contactName={contact.nameContact} sentTime={contact.massages[0].time} />
    });

    return (
        <div class="app">
            <div class="row">
                <div class="col-5 sm heading">
                    <div className="chatDetails">
                        <div class="heading">
                            <div className="circleProfile">
                                <img src="https://loremflickr.com/400/400"></img>
                            </div>
                            <div className="MyName">Adi Aviv
                                <button class="addChat btn btn-outline-secondary" type="submit" onClick={showAddContactModal}>+</button>
                            </div>
                        </div>
                        <div class="searchBox">
                            <div class="searchBox-inner">
                                <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search"></input>
                                <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </div>
                        <div className="sideBar">
                            {contactsList}
                        </div>

                    </div>
                </div>
                <div class="col">
                    Here the chat will be Kill me PLEASE!@!@!@!@!
                </div>
            </div>

            <Modal show={toAddContact} onHide={() => setToAddContact(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input class="form-control me-2" type="search" placeholder="Contact's Identifier" aria-label="Search" ref={contactName}></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleAddContact} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

export default Temp;




