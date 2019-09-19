import React, { Component } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from './Image'

class Images extends Component {

  state = {
    images: [],
    count: 30,
    start: 1

  }

  componentDidMount () {
    this.fetchImages()
  }

  fetchImages = async () => {
    const { count, start } = this.state
    this.setState({ start: this.state.start + count })
    const { data: images } = await axios.get('/api/photos', {
      params: { count, start }
    })

    this.setState({ images: this.state.images.concat(images) })
  }

  render () {
    return (
      <div className={'images'}>
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4> Loading ... </h4>}

        >
          {this.state.images.map(image => (
            <Image
              key={image.id}
              image={image}
            />
          ))}

        </InfiniteScroll>
      </div>
    )
  }
}

export default Images