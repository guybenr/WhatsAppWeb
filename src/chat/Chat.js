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
        let a = <audio src={audioURL} controls />;
        let currTime = new Date();
        currTime = currTime.getHours() + ":" + currTime.getMinutes();
        let currMassage = toSendMassage.current.value;
        props.massages.push({massage: a, isRecived: false, time: currTime});
        setReRender(!reRender);
    }

    const sendMassage = () => { // function send the massage to the contact
        let currTime = new Date();
        currTime = currTime.getHours() + ":" + currTime.getMinutes();
        let currMassage = toSendMassage.current.value;
        props.massages.push({massage: currMassage, isRecived: false, time: currTime});
        toSendMassage.current.value="";
        setReRender(!reRender);
    }
    //function handeling sending massage to a contact
    const handlePressingKey = (event) => {
        if(event.key !== "Enter" || toSendMassage.current.value === "")
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

    return (
        <div className="right-chat">
            <div class="headingChat">
                <div className="chatPhoto">
                    <img src={props.chatImage}></img>
                </div>
                <a className="chatName">{props.chatName}</a>
                <span class="heading-online">Online</span>
            </div>
            <div className="temp">
                {massagesList}
            </div>

            <div class="chat-box">
                <div class="toSend">
                    <input type="file" id="upload" accept="image/*" hidden />
                    <label class = "photo btn" id="photo" for="upload"></label>
                    <input type="file" id="upload" accept="video/*" hidden />
                    <label class = "video btn" id="photo" for="upload"></label>
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