// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <button>Next</button>,
    prevArrow: <button>Previous</button>,
  }
  return (
    <Slider {...settings}>
      {movies.map(movie => (
        <MovieItem mov={movie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
