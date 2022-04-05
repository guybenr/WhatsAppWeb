import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";


function chatScreen(props) {
    return (
        <div class="app">
            <div class="row">
                <div class="col-5 sm">
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
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="headingChat">
                        <div className="chatPhoto">
                            <img src="https://loremflickr.com/400/400"></img>
                        </div>
                        <a className="chatName">Adi Aviv</a>
                        <span class="heading-online">Online</span>
                    </div>
                </div>
                <div class="chat-box">
                    <div class="toSend">
                        <input id="searchText" type="text" class="form-control textBox" name="searchText"></input>
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill photo" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill video" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic record" viewBox="0 0 16 16">
                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default chatScreen;