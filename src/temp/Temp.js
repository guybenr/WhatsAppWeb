import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";


function Temp(props) {
    return (
        <div class="row">
            <div class="col-5 sm">
                <div className="chatDetails">
                    <div className="circleProfile">
                        <img src="https://loremflickr.com/400/400"></img>
                    </div>
                    <div className="MyName position-relative">Adi Aviv
                        <button class="addChat btn btn-outline-secondary position-absolute bottom-0 end-0" type="submit" >+</button>
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
                    <ul class="list-group users-list">
                        <a href="/" class="list-group-item list-group-item-action">
                        Guy
                        </a>
                        <button type="button" class="list-group-item list-group-item-action">
                            <span><img src="/card-image.svg" alt="Italian Trulli"></img></span>
                            <span className="chat-contact">Guy</span>
                        </button>
                        <button type="button" class="list-group-item list-group-item-action">Guy</button>
                        <button type="button" class="list-group-item list-group-item-action">Guy</button>
                        <button type="button" class="list-group-item list-group-item-action">Guy</button>
                    </ul>
                </div>
            </div>
            <div class="col">
                Here the chat will be Kill me PLEASE!@!@!@!@!
            </div>
        </div>

    );
}

export default Temp;