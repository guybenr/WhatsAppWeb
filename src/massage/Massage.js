function Massage(props) {
    var HtmlContent;
    switch(props.type) {
        case "text":
            HtmlContent = props.isRecived ? <div className="reciever messages">
                                                <div className="message-text">
                                                    {props.content}
                                                </div>
                                            </div> 
                                            : <div className="sender messages">
                                                <div className="message-text">
                                                    {props.content}
                                                </div>
                                            </div>;
            break;
        case "audio":
            HtmlContent = props.isRecived ? <div>
                                                <audio src={props.content} controls className="messagesRecord messagesRecord-reciever" />
                                            </div>
                                            :
                                            <div>
                                                <audio src={props.content} controls className="messagesRecord messagesRecord-sender" />
                </div>
            break;
        case "video":
            HtmlContent = props.isRecived ? <div>
                                                <video className="videoMessage videoMessage-reciever" src={props.content} controls></video>
                                            </div>
                                                :
                                            <div>
                                                <video className="videoMessage videoMessage-sender" src={props.content} controls></video>
                                            </div>;
            break;
        case "image":
            HtmlContent = props.isRecived ? <div>
                                                <img className="imageMassage imageMassage-reciever" src={props.content} />
                                            </div>
                                                :
                                            <div>
                                                <img className="imageMassage imageMassage-sender" src={props.content} />
                                            </div>;
            break;
    }
    return (
        <>
            {props.isRecived ?
                <div>
                    {HtmlContent}
                    <span className="chat-time-reciever">{props.time}</span>
                </div> :
                <div>
                    {HtmlContent}
                    <span className="chat-time-sender">{props.time}</span>
                </div>}
        </>
    );
}

export default Massage