import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftButtonClicked = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightButtonClicked = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  onImageContainer = resultDetails => {
    const {imgUrl, username, companyName, description} = resultDetails
    return (
      <div className="image-Carousel-Container">
        <h1>Reviews</h1>
        <div>
          <img src={imgUrl} alt={username} />
        </div>
        <p className="para-color">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const result = reviewsList[index]

    return (
      <div className="bg-image">
        <button onClick={this.onLeftButtonClicked} testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.onImageContainer(result)}
        <button onClick={this.onRightButtonClicked} testid="rightArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
