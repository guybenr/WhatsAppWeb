import { useRef } from "react";
import Massage from "../massage/Massage";
import React from "react";
import { Modal } from "react-bootstrap";
import { render } from "react-dom";
import useRecorder from "./useRecorder";


function Chat(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const [records, setRecord] = React.useState(false);
    const chatBoxMassage = React.createRef('');

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
                    <input id="searchText" type="text" class="form-control textBox" name="searchText"></input>
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
                <Modal.Footer className="sendRecord" type="button">
                send
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Chat;