import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            <button onClick={gotoNextPage}>More Info</button>
        </div>
    )
}