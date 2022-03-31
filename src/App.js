// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
// import ImageCarousel from './ImageCarousel'
import { useState, useEffect } from 'react'
import Slider from './components/Slider.js'

export default function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      'https://api.unsplash.com/photos?page=1&client_id=K1FQ6EtkyGj_fTAySZMfA-G_Tr77850YhOIjXcMsd8s'
    )
      .then((response) => response.json())
      .then((data) => setImages(data))
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  console.log('images', images)

  // indide the .App start
  // <ImageCarousel images={images} />
  // //end
  return (
    <div className='App'>
      <Slider slides={images} />
    </div>
  )
}
