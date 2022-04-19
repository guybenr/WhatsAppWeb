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
            return <Massage content={massage.massage} isRecived={massage.isRecived} time={massage.time} />
        return <></>
    });

    const sendRecord = (event) => {
        event.preventDefault();
        let recordContent = <audio src={audioURL} controls className="messagesRecord-reciver" />;
        let currTime = new Date();
        currTime = currTime.getHours() + ":" + currTime.getMinutes();
        props.massages.push({ massage: recordContent, isRecived: false, time: currTime });
        setRecord(false);
    }

    //function handeling sending massage to a contact
    const handlePressingKey = (event) => {
        if (event.key !== "Enter" || toSendMassage.current.value === "")
            return;
        event.preventDefault();
        sendText();
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
            <img className="imageMassage imageMassage-reciever" src={URL.createObjectURL(event.target.files[0])} />
        </div>;
        sendFile();
    }


    const sendVideo = (event) => {
        let file = event.target.files[0];
        getBase64(file);
    }

    const toTwoDigits = (time) => {
        if(time < 10) {
            return "0" + time;
        }
        return time;
    }

    const sendFile = (event) => {
        let currTime = new Date();
        currTime = toTwoDigits(currTime.getHours()) + ":" + toTwoDigits(currTime.getMinutes());
        console.log(massageContent);
        props.massages.push({ massage: massageContent, isRecived: false, time: currTime });
        props.setReRender(!props.reRender);
    }

    const getBase64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            massageContent = (<video className="videoMessage" src={reader.result} controls></video>);
            sendFile();
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    const sendText = (event) => {
        massageContent = <div className="reciver messages">
            <div className="message-text">
                {toSendMassage.current.value}
            </div>
        </div>
        toSendMassage.current.value = "";
        sendFile();
    }

    return (
        <div className="right-chat">
            <div className="headingChat">
                <div className="chatPhoto">
                    <img src={ImageChat} className="profileImg"></img>
                </div>
                <a className="chatName">{props.chatName}</a>
                <span className="heading-online">Online</span>
            </div>
            <div className="allMessages">
                {massagesList}
            </div>
            
            <div className="chat-box">
                <div className="toSend">
                    <input onInput={sendImage} type="file" id="upload" accept="image/*" hidden />
                    <label className="photo btn" id="photo" for="upload"></label>
                    <input onInput={sendVideo} type="file" id="video-upload" accept="video/*" hidden />
                    <label className="video btn" id="video" for="video-upload"></label>
                    <button className="record" onClick={showRecordModal}></button>
                    <input onKeyPress={handlePressingKey} ref={toSendMassage} type="text" class="form-control textBox"></input>
                    <span className="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
            </div>
            <Modal show={records} onHide={() => setRecord(false)}>
                <Modal.Body className="bodyRecordWin">
                    <div>
                        <audio src={audioURL} controls className="audio" />
                        <button onClick={startRecording} disabled={isRecording} className=" form-control startRecord">
                            Start recording
                        </button>
                        <button onClick={stopRecording} disabled={!isRecording} className=" form-control stoptRecord">
                            Stop
                        </button>
                    </div>
                </Modal.Body>
                <Modal.Footer className="sendRecord" type="button" onClick={sendRecord}>
                    Send
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Chat;