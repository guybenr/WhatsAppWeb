function Massage(props) {
    return (
        <>
            {props.isRecived ?
                <div>
                    {props.content}
                </div> :
                <div>
                    {props.content}
                </div>}
        </>
    );
}

export default Massage