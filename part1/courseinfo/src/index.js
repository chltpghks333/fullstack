import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({onClick,text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setLeft(left+1)
        setAll(allClicks.concat('L'))
    }
    const handleRightClick = () => {
        setRight(right+1)
        setAll(allClicks.concat('R'))
    }
    return (
        <div>
        <div>
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        <History allClicks={allClicks} />
        </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
