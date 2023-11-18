import React from "react";



function GifList( {list} ) {





return (
    <>
        <ul>
            {list.map((item, index) => (
                <li key={index}><img src={item.images.original.url} alt={list.title}/></li>
                // <li key={index}><img src={item.url} alt={list.title}/></li>
            ))}
        </ul>
    </>
)

}

export default GifList;