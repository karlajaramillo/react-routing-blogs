import React from  'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';


const BlogDetails = ({blogs}) => {
  let history = useHistory();

  function handleClick() {
    history.push("/"); // go home
  }

  const { id } = useParams();
  console.log(typeof id) // number - comes from
  console.log(blogs)
  //const post = blogs.filter( item => item.id === +id) //to number
  const post = blogs.filter( item => `${item.id}` === id) // to string
  console.log(post)
  
  return (
    <div className="card-details">
      <h1>{post[0].title}</h1>
      <h2>{post[0].author}</h2>
      <img src={post[0].img} alt="post"/>
      <p>{post[0].body}</p>
      <button type="button" onClick={handleClick}>⌃Home</button>
    </div>
  )
}

export default BlogDetails;