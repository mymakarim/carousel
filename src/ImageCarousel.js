import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef } from 'react'
export default function ImageCarousel({ images }) {
  const carousel = useRef()
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  }
  const gotoNext = () => {
    carousel.current.slickNext()
  }

  const gotoPrev = () => {
    carousel.current.slickPrev()
  }
  // console.log(images)
  return (
    <div>
      <Slider {...settings} ref={carousel}>
        {images.map((item) => (
          <div key={item.id}>
            {' '}
            <img
              width={`120px`}
              src={item.urls.regular}
              alt={item.alt_description ? item.alt_description : 'no alt'}
            />
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => gotoNext()}>Next</button>
        <button onClick={() => gotoPrev()}>Previous</button>
      </div>
    </div>
  )
}
