import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "../errorModal/ErrorModal";


function chatScreen(props) {
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
                        <a href="#" class="list-group-item list-group-item-action active">
                            Cras justo odio
                        </a>
                        <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                        <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                        <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                        <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
                    </ul>
                </div>
            </div>
            <div class="col">
                Here the chat will be Kill me PLEASE!@!@!@!@!
            </div>
        </div>

    );
}

export default chatScreen;