import React from 'react'

const Filter = ({newSearch, onChange}) => {

    return ( 
        <div>
            filter shown with 
            <input
                value={newSearch}
                onChange={onChange}
            />
        </div>
    )
}

export default Filter
