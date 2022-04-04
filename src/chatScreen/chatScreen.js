import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";


function chatScreen(props) {
    return (
        <div class="app">
            <div class="row">
                <div class="col-5 sm heading">
                    <div className="chatDetails">
                        <div class="heading">
                            <div className="circleProfile">
                                <img src="https://loremflickr.com/400/400"></img>
                            </div>
                            <div className="MyName">Adi Aviv
                                <button class="addChat btn btn-outline-secondary" type="submit" >+</button>
                            </div>
                        </div>
                        <div class="searchBox">
                            <div class="searchBox-inner">
                                <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search"></input>
                                <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </div>
                        <div className="sideBar">
                            <ul class="list-group users-list">
                                <button type="button" class="list-group-item list-group-item-action">
                                    <div class="sideBar-body">
                                        <div class="avatar-icon">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"></img>
                                        </div>
                                        <div class="sideBar-name">John Doe
                                        </div>
                                        <span class="time-meta">18:19</span>
                                    </div>
                                </button>
                                <button type="button" class="list-group-item list-group-item-action">
                                <div class="sideBar-body">
                                        <div class="avatar-icon">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"></img>
                                        </div>
                                        <div class="sideBar-name">John Doe
                                        </div>
                                        <span class="time-meta">18:19</span>
                                    </div>
                                </button>
                                <button type="button" class="list-group-item list-group-item-action">
                                <div class="sideBar-body">
                                        <div class="avatar-icon">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"></img>
                                        </div>
                                        <div class="sideBar-name">John Doe
                                        </div>
                                        <span class="time-meta">18:19</span>
                                    </div>
                                </button>
                                <button type="button" class="list-group-item list-group-item-action">
                                <div class="sideBar-body">
                                        <div class="avatar-icon">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png"></img>
                                        </div>
                                        <div class="sideBar-name">John Doe
                                        </div>
                                        <span class="time-meta">18:19</span>
                                    </div>
                                </button>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="col">
                    Here the chat will be Kill me PLEASE!@!@!@!@!
                </div>
            </div>
        </div>
    );
}

export default chatScreen;