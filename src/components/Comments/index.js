import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    inputName: '',
    inputComment: '',
    commentList: [],
  }

  onChangeInputName = event => {
    this.setState({inputName: event.target.value})
  }

  onchangeInputComment = event => {
    this.setState({inputComment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state

    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: inputName,
      comment: inputComment,
      intialClassName: initialContainerBackgroundClassName,
      isLiked: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      inputName: '',
      inputComment: '',
    }))
  }

  taggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentList, inputName, inputComment} = this.state

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Comments</h1>
          <div className="form-image-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comments-img"
              />
            </div>
            <div className="comments-container">
              <form className="form" onSubmit={this.onAddComment}>
                <p className="comment-heading">
                  Say something about 4.0 Techonologies
                </p>
                <input
                  className="input-name"
                  value={inputName}
                  onChange={this.onChangeInputName}
                  placeholder="Your Name"
                  type ="text"
                />
                <textarea
                  rows="6"
                  className="input-comment"
                  placeholder="Your Comment"
                  value={inputComment}
                  onChange={this.onchangeInputComment}
                />
                <br />
                <button
                  className="add-comment-btn"
                  type="submit"
                  
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr className="line" />
          <div className="count-container">
            <p className="count">{commentList.length}</p>
            <p className="counter">Comments</p>
          </div>
          <ul className="comment-list">
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLiked={this.taggleIsLiked}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
