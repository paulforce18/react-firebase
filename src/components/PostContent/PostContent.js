import classes from './PostContent.module.css'

const postContent =(props)=> {

    return(
        <>
            <h3>Create post</h3>
            <hr/>
            <input
                value={props.title}
                onChange={props.titleChange}
                className={classes.TextBox}
                type="text" 
                placeholder="Title"
                />
            <textarea
                value={props.body}
                onChange={props.bodyChange}
                cols="30" 
                rows="10"
                placeholder="post anything!"
                className={classes.TextBox}
                style={{
                    fontSize: '18px',
                    padding: '10px 5'
                }}/>
            <div>
            <button 
                className={classes.Button}
                onClick={props.post}>POST</button>

            <input className={classes.Radio} name="value" value = "#77D6FF" type="radio" onChange={props.color}/>
            <input className={classes.Radio} name="value" value = "#4FFF95" type="radio" onChange={props.color}/>
            <input className={classes.Radio} name="value" value = "#F91616" type="radio" onChange={props.color}/>
            <input className={classes.Radio} name="value" value = "#DC77FF" type="radio" onChange={props.color}/>
            </div>
                  
        </>
    )
}

export default postContent