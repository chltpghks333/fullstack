import React from 'react'

const CountryList = ({ searches, onClick }) => {

    return searches.map(search => {
        return (
            <p key={search.name}>{search.name}
                <button name={search.name} type='button' onClick={onClick}>
                    show
                </button>
            </p>
        )
    }) 

}

export default CountryList
