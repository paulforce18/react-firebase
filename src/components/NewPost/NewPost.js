import classes from './NewPost.module.css'
const newPost = (props) => (
    <>
    <div 
        className={classes.NewPost}
        onClick={props.createPost}>
        <p>Create a post.</p><h5 style={{marginLeft: '80%'}}>@jpca</h5>
    </div>
    </>
)
export default newPost