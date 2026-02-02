import Profile from '../../assets/home.jpg';
import { Link } from 'react-router';
import { RiArrowRightLine } from 'react-icons/ri';
import './home.css';

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Kajal Patel</span><br/> Web Developer
        </h1>

        <p className="home-description">
          I am a Front End Web Developer focused on developing user friendly websites , I am passionate about 
          building excellent software that improves the lives of people using the website and can do their work 
          easily. 
        </p>

        <Link to='/about' className='button'>
          More About Me
            <span className="button-icon">
              <RiArrowRightLine/>
            </span>
        </Link>

      </div>

      <div className="color-block">

      </div>

    </section>
  )
}

export default Home