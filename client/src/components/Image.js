import React from 'react'

function Image ({ image }) {
  return <img className={'single-photo'} src={image.urls.thumb} alt=""/>
}

export default Image