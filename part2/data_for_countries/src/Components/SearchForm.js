import React from 'react'

const SearchForm = ({ keyword, handler }) => {
    return (
        <p>find countries <input value={keyword} onChange={handler}/></p>
    )
}

export default SearchForm
