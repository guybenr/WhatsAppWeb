function Massage(props) {
    var HtmlContent;
    switch(props.type) {
        case "text":
            HtmlContent = props.isRecived ? <div className="reciver messages">
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
            HtmlContent = <audio src={props.content} controls className="messagesRecord-reciver" />;
            break;
        case "video":
            HtmlContent = <video className="videoMessage" src={props.content} controls></video>;
            break;
        case "image":
            HtmlContent = <div>
                                <img className="imageMassage imageMassage-reciever" src={props.content} />
                        </div>;
            break;
    }
    return (
        <>
            {props.isRecived ?
                <div>
                    {HtmlContent}
                    <span className="time-meta chat-time-reciver">{props.time}</span>
                </div> :
                <div>
                    {HtmlContent}
                    <span className="time-meta chat-time-sender">{props.time}</span>
                </div>}
        </>
    );
}

export default Massage