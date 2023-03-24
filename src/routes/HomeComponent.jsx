import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import FeaturedWork from '../components/FeaturedWork';
import ImageSlider from '../components/ImageSlider';
// SVGs
import Polygon from '../assets/Polygon.svg';
// Animations
import Artboard from '../assets/animations/Artboard.mp4';
import design from '../assets/animations/design.mp4';
import engineering from '../assets/animations/engineering.mp4';

function HomeComponent({workCards, slideShow, setActiveLink}) {

    const homeTitle = 'We use design & code to grow & amplify your brand’s digital experience.';
    const services = [
      {'title': 'Strategy', 
      'description': `We develop strategies to ensure your business grows from a solid foundation.`,
      'ani': Artboard},
      {'title': 'Design', 
      'description': `We craft thoughtful experiences so your digital communications are more engaging.`,
      'ani': design},
      {'title': 'Engineering', 
      'description': `We develop bespoke solutions to ensure the best digital output and performance.`,
      'ani': engineering},
      {'title': 'Enhancement', 
      'description': `We improve and enhance your digital touchpoints to optimise effectiveness over time.`,
      'ani': engineering}];
    
    const [scrollTop, setScrollTop] = useState(0);
  
    useEffect(() => {
      const handleScroll = (event) => {
        setScrollTop(Math.round(window.scrollY/7));
      }; 
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
    return (
      <div className='homeComponent'>
            <span className='polygonContainer'>
              <img className='svg' src={Polygon} alt="Logo" />
            </span>
            <section className='home'>
              <h1>{homeTitle}</h1>
              <div className='btnContainer'> 
                <Link to={'/work'} onClick={()=>setActiveLink('work')}><button>Our Work</button></Link>
                <Link to={'/services'} onClick={()=>setActiveLink('services')}><button className='oddBtn'>What we do</button></Link>
              </div>
            </section>
            {/* <section>
              <ConnectAnimation />
            </section> */}
            <section className='featuredWork'>
              <h2>Featured case studies</h2>
              <FeaturedWork workCards={workCards}/>
            </section>
            <section className='services'>
              <h2>How we help businesses grow.</h2>
              <div className='cardContainer'>
                {services.map((service,i) => <div key={i} className='card'>
                  <div className=''>{/*svgContainer*/}
                    {/* <svg width={"50"} height={"25"}>
                      <rect width={"50"} height={"25"} fill={'#fee003'}/>
                    </svg>
                    <svg width={"50"} height={"25"}>
                      <rect width={"50"} height={"25"} fill={'#fee003'}/>
                    </svg> */}
                    <video className='servicesAnimations' alt="Services animations" loop autoPlay onMouseEnter={(e)=>{e.target.play()}}>
                      <source src={service.ani} type="video/mp4"/>
                    </video>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>)}
              </div>
              <div className="btnContainer fLeft">
              <Link to={'/services'} onClick={()=>setActiveLink('services')}><button>Our services</button></Link>
              </div>
            </section>
            <section style={{'--angle': scrollTop + 'deg'}}>
              <GridBarAnimation />
            </section>
            <section className=''>
              <h2>We’re problem lovers & solvers.</h2>
              <div className='btnContainer fLeft'>
                <Link to={'/about'} onClick={()=>setActiveLink('about')}><button>About our culture</button></Link>
                <button className='oddBtn'>See our insta</button>
              </div>
            </section>
            <ImageSlider slideShow={slideShow}/>
          </div>
  )}
  function GridBarAnimation(props) {
    return (
        <div className="wrapper">
          <div className="animations">
            <div className="bar rotate purple"></div>
            <div className="bar"></div>
            <div className="bar rotate yellow"></div>
            <div className="bar rotate purple"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar rotate yellow"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar rotate purple"></div>
          </div>
          <div className="animations">
            <div className="bar"></div>
            <div className="bar rotate yellow"></div>
            <div className="bar rotate purple"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar rotate yellow"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar rotate purple"></div>
            <div className="bar"></div>
          </div>
          <div className="animations">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar rotate yellow"></div>
            <div className="bar"></div>
            <div className="bar rotate purple"></div>
            <div className="bar rotate yellow"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar rotate purple"></div>
            <div className="bar"></div>
          </div>
      </div>
)}
function ConnectAnimation(props) {
    const grid = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
    const c = [(2,3),(0,3),(0,6),(2,6)];
    const r = [(4,3),(3,3),(3,6)];
    const e1= [(6,4),(7,4),(7,3),(5,3),(5,6),(7,6)];
    const a = [(10,6),(9,6),(8,6),(8,3),(9,3),(9,6)];
    const t = [(11,0),(11,3),(13,3),(11,3),(11,6),(13,6)];
    const e2= [(15,4),(16,4),(16,3),(14,3),(14,6),(16,6)];
    return (
      <div className="container">
        {grid.map((row,i) => {
          return (
            <div key={i} className="row">{row.map((dot,j) => {
              return (<div key={j} className='dot'></div>)
            })}</div>
          )})}
      </div>
)}

export default HomeComponent