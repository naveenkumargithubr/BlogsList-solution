// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-container">
      <div className="name-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
