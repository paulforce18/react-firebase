import {Div} from './Post.style'

const post =(props)=> {
    return (
    <Div 
        color={props.color}>
            <h3>{props.title}</h3>
            <h6>{props.time}</h6>
            <p>{props.body}</p>
    </Div>
    )
}

export default post