import React, {Component} from 'react'
import NewPost from '../../components/NewPost/NewPost'
import Modal from '../../components/UI/Modal/Modal'
import PostContent from '../../components/PostContent/PostContent'
import firebase from '../../firebase'
import Posts from '../../components/posts/Posts'

class RandomPosts extends Component{
    state = {
        posting: false,
        post: {
            body: null,
            title: null,
            color: null,
            time: null,
            id: null
        },
    }

    

    postingHander = () =>{
        let current = new Date();
        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        this.setState({post:{
            ...this.state.post,
            time: cDate,
            id: current.getTime()-1617724564110
        }})
        this.setState({posting: !this.state.posting})
    }
    titleChangeHandler =(value)=> {
        this.setState({post:{
            ...this.state.post,
            title: value
        }})
    }
    bodyChangeHandler =(value)=> {
        this.setState({post:{
            ...this.state.post,
            body: value
        }})
    }
    postHandler=()=>{
        if(!this.state.post.title&&!this.state.post.body){
            console.log('please type')
        }

        else{
            firebase.firestore()
                .collection('posts')
                .add({
                    title: this.state.post.title,
                    body: this.state.post.body,
                    color: this.state.post.color,
                    time: this.state.post.time,
                    id: this.state.post.id
                })
                .then(()=>{
                    this.setState({post: {
                        title: "",
                        body: "",
                        color: null,
                        time: null
                    }})
                    this.postingHander();
                })
        }
    }
    colorChangedHandler=(color)=>{
        this.setState({post:{
            ...this.state.post,
            color: color
        }})
    }



    render(){
        return(
            <>
                <NewPost createPost={this.postingHander}/>
                <Modal show={this.state.posting} closePosting={this.postingHander}>
                    <PostContent
                        title={this.state.post.title}
                        titleChange={e=>this.titleChangeHandler(e.target.value)}
                        color={e=>this.colorChangedHandler(e.target.value)}
                        
                        body={this.state.post.body}
                        bodyChange={e=>this.bodyChangeHandler(e.target.value)}
                        
                        post={this.postHandler}/>
                </Modal>
                <Posts />
            </>
        )
    }
}

export default RandomPosts