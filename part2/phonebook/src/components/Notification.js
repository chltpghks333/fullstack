import React from 'react'

const Notification = ({ msg }) => {

    const success = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        border: '4px solid green', 
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const fail = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        border: '4px solid red', 
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if(msg===null) {
        return null
    }else if(msg.includes('Information')) {
        return (
            <div style={fail}>
                {msg}
            </div>
        )
    }else {
        return (
            <div style={success}>
                {msg}
            </div>
        )
    } 

}

export default Notification
