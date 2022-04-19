function Massage(props) {
    return (
        <>
            {props.isRecived ?
                <div>
                    {props.content}
                    <span className="time-meta chat-time-reciver">{props.time}</span>
                </div> :
                <div>
                    {props.content}
                    <span className="time-meta chat-time-sender">{props.time}</span>
                </div>}
        </>
    );
}

export default Massage