import React from 'react'

const PersonForm = ({ onSubmit, states, handlers }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    name: <input 
                        value={states.name}
                        onChange={handlers.name}
                    /> 
                </div>
                <div>
                    number: <input
                        value={states.number}
                        onChange={handlers.number}
                    />
                </div>
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )


}

export default PersonForm
