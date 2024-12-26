// Write your code here
import React, {useState} from 'react'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import './index.css'

const MovieItem = props => {
  const {mov} = props
  const {thumbnailUrl, id, videoUrl} = mov

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <div key={id} className="thumbnail-container">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="thumbnail"
        onClick={openPopup}
      />

      {isPopupOpen && (
        <Popup open={isPopupOpen} onClose={closePopup} modal>
          <div className="popup-content">
            {/* Close Button */}
            <button
              data-testid="closeButton"
              className="close-button"
              onClick={closePopup}
            >
              <IoMdClose size={24} />
            </button>

            {/* ReactPlayer for Video Playback */}
            <ReactPlayer
              url={videoUrl}
              controls
              playing
              width="500px"
              height="300px"
              className="react-player"
            />
          </div>
        </Popup>
      )}
    </div>
  )
}

export default MovieItem
