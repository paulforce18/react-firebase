import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) =>{

    return (
        <>
            <Backdrop show={props.show} clicked={props.closePosting}/>
            <div 
                className={classes.Modal}
                style={{
                    top: props.show ? '50%' : '-150%',
                    opacity: props.show ? '1' : '0'
                }}
                >
                {props.children}
            </div>
        </>
    )
}

export default modal