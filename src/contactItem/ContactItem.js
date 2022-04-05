function ContactItem(props) {
    return (
        <ul class="list-group users-list">
            <button type="button" class="list-group-item list-group-item-action">
                <div class="sideBar-body">
                    <div class="avatar-icon">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png"></img>
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