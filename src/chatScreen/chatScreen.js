import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";



function newChat() {
    return (
        <div class="custom-model-main">
            <div class="custom-model-inner">
                <div class="close-btn">×</div>
                <div class="custom-model-wrap">
                    <div class="pop-up-content-wrap">
                        <h2>Have a nice day!</h2>
                        <p>This is message box popup that revealed on button click.</p>
                    </div>
                </div>
            </div>
            <div class="bg-overlay"></div>
    </div>
    );
}

function chatScreen(props) {
    return (
        <div className="chatDetails">
            <div className="circleProfile">
                <img src="https://loremflickr.com/400/400"></img>
            </div>
            <div className="MyName position-relative">Adi Aviv
            <button class="addChat btn btn-outline-secondary position-absolute bottom-0 end-0" type="submit" onClick="newChat()">+</button>
            </div>
            <div>
                <nav class="navbar navbar-light bg-light searchBox">
                    <div class="container-fluid">
                        <form class="d-flex shadow-lg p-3 mb-5 bg-body rounded">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            
        </div>
    );
}

export default chatScreen;