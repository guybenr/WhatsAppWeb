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
        <ul class="list-group users-list">
            <button type="button" class="list-group-item list-group-item-action" onClick={() => {props.setDetails(props.contactName)}}>
                <div class="sideBar-body">
                    <div class="avatar-icon">
                        <img src={ImageChat}></img>
                    </div>
                    <div class="sideBar-name">{props.contactName}
                    </div>
                    <span class="time-meta">{props.sentTime}</span>
                </div>
            </button>
        </ul>
    );
}

export default ContactItem