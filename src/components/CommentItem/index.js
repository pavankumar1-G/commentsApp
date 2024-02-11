// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked, intialClassName, date} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''

  const commentTime = formatDistanceToNow(date)

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeText = isLiked ? 'active' : 'normal'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-item">
      <div className="comment-item-container">
        <div className="initial-comment-container">
          <div className={intialClassName}>
            <p className="initial">{initial}</p>
          </div>
          <div className="name-comment-time-container">
            <div className="name-time-container">
              <p className="user-name">{name}</p>
              <p className="comment-time">{commentTime} ago</p>
            </div>
            <p className="comment">{comment}</p>
          </div>
        </div>
        <div className="like-delete-container">
          <div className="like-container">
            <button className="like-btn" type="button" onClick={onClickLike}>
              <img src={likeImgUrl} alt="like" className="like-icon" />
            </button>
            <p className={likeText}>Like</p>
          </div>
          <button
            className="delete-btn"
            type="button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
