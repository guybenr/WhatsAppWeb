function Massage(props) {
    return (
        <>
            {props.isRecived ?
                <div className="messages sender">
                    <div class="message-text">
                        {props.content}
                    </div>
                </div> :
                <div className="messages reciver">
                    <div class="message-text">
                        {props.content}
                    </div>
                </div>}
        </>
    );
}

export default Massage