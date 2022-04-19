import UsersData from "../usersData/UsersData";

function ContactItem(props) {

    var ImageChat;
    for (let i = 0; i < UsersData.usersList.length; ++i) {
        if (UsersData.usersList[i].userName === props.contactName) {
            ImageChat = UsersData.usersList[i].image;
            break;
        }
    }


    return (
        <ul className="list-group users-list">
            <button type="button" className="list-group-item list-group-item-action" onClick={() => {props.setDetails(props.contactName)}}>
                <div className="sideBar-body">
                    <div className="avatar-icon">
                        <img src={ImageChat}></img>
                    </div>
                    <div className="sideBar-name">{props.contactName}
                    </div>
                    <span className="time-meta">{props.sentTime}</span>
                </div>
            </button>
        </ul>
    );
}

export default ContactItem