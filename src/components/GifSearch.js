import React from "react";

function GifSearch({handleSubmit}) {


    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search"  />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>


        </>
    )

}

export default GifSearch;