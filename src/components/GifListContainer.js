import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const appKey = "xytyEwjK2j9RNhK7WdhNvficSpOO2fqG";







function GifListContainer() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);

    function handleSubmitEvent(event) {
        event.preventDefault();
        console.log(event.target.firstChild.value);
        setSearchQuery(event.target.firstChild.value);



        
    }

    
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${appKey}&rating=r&limit=3`)
            .then(resp => resp.json())
            .then(data => { setData(data.data) })
    }, [searchQuery])


    console.log(data);
    return (
        <>
            <GifSearch handleSubmit={handleSubmitEvent} />
            <GifList list={data} />
        </>

    )

}

export default GifListContainer;