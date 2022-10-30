// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  //  here we passing blogsList as property to the BlogList
  const {blogsList} = props

  return (
    <ul className="unorder-list-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
