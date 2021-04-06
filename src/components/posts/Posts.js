import React, {useState,useEffect} from 'react'
import Post from './Post/Post'
import firebase from '../../firebase'

function usePosts(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const unsub = firebase
            .firestore()
            .collection('posts')
            .orderBy('id','desc')
            .onSnapshot((snapshot)=>{
                const newPosts = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setPosts(newPosts)
            })
        return () => unsub();
    }, [])
    return posts
}

const Posts = () => {
    const posts = usePosts()
    const updatedPosts =  posts.map((post) => <Post 
                                                key={posts.id}
                                                title={post.title}
                                                body={post.body}
                                                time={post.time}
                                                color={post.color} />)
    return updatedPosts
} 

export default Posts