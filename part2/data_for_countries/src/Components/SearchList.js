import React from 'react'

const SearchList = ({search, onClick}) => {
    return (
        search.map(result => {
            return (
                <p key={result.name}>
                    {result.name} <button id={result.name} type="button" onClick={onClick}>show</button>
                </p> 
            )

        }) 

    )
}

export default SearchList
