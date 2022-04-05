import { useRef } from "react";

function Search(props) {

    const searchBox = useRef('');

    const search = () => {
        props.setSearchQuery(searchBox.current.value)
    }

    return (
        <div class="searchBox">
            <div class="searchBox-inner">
                <input ref={searchBox} onKeyUp={search} id="searchText" type="text" class="form-control" name="searchText" placeholder="Search"></input>
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
        </div>
    );
}

export default Search;