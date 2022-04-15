import { useRef } from "react";
import Massage from "../massage/Massage";
import React from "react";
import { Modal } from "react-bootstrap";
import { render } from "react-dom";
import useRecorder from "./useRecorder";
import UsersData from "../usersData/UsersData";


function Chat(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const [records, setRecord] = React.useState(false);
    const [reRender, setReRender] = React.useState(false);
    const toSendMassage = React.createRef('');
    var massageContent = "";
    //open window for record
    const showRecordModal = (event) => {
        event.preventDefault();
        setRecord(true);
    }

    //function returns all of the Massage Components that are in the database
    const massagesList = props.massages.map((massage, key) => {
        if (massage.massage !== "")
            return <Massage content={massage.massage} isRecived={massage.isRecived} />
        return <></>
    });

    const sendRecord = (event) => {
        event.preventDefault();
        let recordContent = <audio src={audioURL} controls className="messagesRecord" />;
        let currTime = new Date();
        currTime = currTime.getHours() + ":" + currTime.getMinutes();
        props.massages.push({ massage: recordContent, isRecived: false, time: currTime });
        setRecord(false);
    }

    const sendMassage = () => { // function send the massage to the contact
        let currTime = new Date();
        currTime = currTime.getHours() + ":" + currTime.getMinutes();
        let currMassage = toSendMassage.current.value;
        props.massages.push({ massage: currMassage, isRecived: false, time: currTime });
        toSendMassage.current.value = "";
        setReRender(!reRender);
    }
    //function handeling sending massage to a contact
    const handlePressingKey = (event) => {
        if (event.key !== "Enter" || toSendMassage.current.value === "")
            return;
        event.preventDefault();
        sendMassage();
        // let contactData = UsersData.usersChat.get(props.chatName);
        // let a = contactData.find(e => e.nameContact===props.senderName);
        // //this condition checks wether the contact has already chat with the current username
        // if(a === undefined) { 
        //     contactData.push({nameContact: props.senderName, massages: 
        //                     [{massage: currMassage, isRecived: true, time: currTime}]});
        // } else {
        //     a.massages.push({massage: currMassage, isRecived: true, time: currTime})
        // }
    }

    var ImageChat;
    for (let i = 0; i < UsersData.usersList.length; ++i) {
        if (UsersData.usersList[i].userName === props.chatName) {
            ImageChat = UsersData.usersList[i].image;
            break;
        }
    }

    const sendImage = (event) => {
        massageContent = <div>
            <img className="imageMassage" src={URL.createObjectURL(event.target.files[0])} />
        </div>;
        sendFile();
    }


    const sendVideo = (event) => {
        massageContent = <div>
            <video controls className="videoMessage">
                <source src={URL.createObjectURL(event.target.files[0])} type="video/mp4"></source>
            </video>
        </div>
        sendFile();
    }



    const sendFile = (event) => {
        console.log(massageContent);
        let currTime = new Date();
        currTime = currTime.getHours() + ":" + currTime.getMinutes();
        props.massages.push({ massage: massageContent, isRecived: false, time: currTime });
        setReRender(!reRender);
    }

    return (
        <div className="right-chat">
            <div class="headingChat">
                <div className="chatPhoto">
                    <img src={ImageChat} className="profileImg"></img>
                </div>
                <a className="chatName">{props.chatName}</a>
                <span class="heading-online">Online</span>
            </div>
            <div className="allMessages">
                {massagesList}
                <div>
                    <img className="imageMassage" src="https://4.bp.blogspot.com/-DLjAz2-Krqk/U0pEVe2m1tI/AAAAAAAAA7s/ym3CglkFbwQ/s1600/Stunning.jpg"></img>
                </div>
                <div>
                    <video controls className="videoMessage">
                        <source src="https://cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div class="chat-box">
                <div class="toSend">
                    <input onChange={sendImage} type="file" id="upload" accept="image/*" hidden />
                    <label class="photo btn" id="photo" for="upload"></label>
                    <input onChange={sendVideo} type="file" id="upload" accept="video/*" hidden />
                    <label class="video btn" id="photo" for="upload"></label>
                    <button className="record" onClick={showRecordModal}></button>
                    <input onKeyPress={handlePressingKey} ref={toSendMassage} id="searchText" type="text" class="form-control textBox" name="searchText"></input>
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
            </div>
            <Modal show={records} onHide={() => setRecord(false)}>
                <Modal.Header className="headingRecord">
                    <div>Record</div>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <audio src={audioURL} controls />
                        <button onClick={startRecording} disabled={isRecording} className="startRecord">
                            start recording
                        </button>
                        <button onClick={stopRecording} disabled={!isRecording} className="stoptRecord">
                            stop recording
                        </button>
                    </div>
                </Modal.Body>
                <Modal.Footer className="sendRecord" type="button" onClick={sendRecord}>
                    send
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Chat;