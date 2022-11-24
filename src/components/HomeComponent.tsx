
import Header from './Header'
import { Carousel, Image } from 'antd'
import '../styles/home.styles.scss'
const images  = new Array(10)
const videos = new Array(5).fill('https://www.youtube.com/embed/Z75xBzRzqro')
images.fill(<Image className='image'
  width={200}
  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
/>
)

const HomeComponent = () => {
  return (
    <div className='home_container'>
      <Header />
      {/* Create divs para videos, fotos, archivos */}
      <div className="container_type_file videos">
        <Carousel  className='carousel_home'>
        <div className='container_images'>
            {
              images.map(image=>(
                image
              ))
            }
          </div>
        </Carousel>
        
      </div>
      <div className="container_type_file fotos">
        {
          videos.map(url_video=>(
            <iframe width="560" height="315" src={url_video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          ))
        }
      </div>
      <div className="container_type_file archivos">

      </div>
    </div>
  )
}

export default HomeComponent