// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMoviesList = moviesList.filter(
      each => each.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      each => each.categoryId === 'COMEDY',
    )
    console.log(actionMoviesList)
    console.log(comedyMoviesList)
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="movies-container">
          <h1>Action Movies</h1>
          <MoviesSlider className="movies-slider" movies={actionMoviesList} />

          <h1>Comedy Movies</h1>
          <MoviesSlider className="movies-slider" movies={comedyMoviesList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
