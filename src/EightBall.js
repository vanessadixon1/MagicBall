import React,{useState} from 'react';
import './EightBall.css';


const EightBall = ({answer}) => {
    const rand = Math.floor(Math.random() * answer.length);
    const read = 'Think of a Question';
    const col = 'black';
 
    const [message, setMessage] = useState(read);
    const [color, setColor] = useState(col);
    const clicker = () => {
        const randPick = answer[rand];
        setMessage(randPick.msg);
        setColor(randPick.color);
    }

    const resetter = () => {
        setMessage(read);
        setColor(col)
    }

    return (
        <>
        <h1>Magic Eight Ball</h1>
        <div className="EightBall" style={{backgroundColor: color, color:'white'}} onClick={clicker} >
            {message} 
            
        </div>
            <button onClick={resetter}>Restter</button> 
        </>
    )
}

EightBall.defaultProps = { answer: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

};



export default EightBall;
