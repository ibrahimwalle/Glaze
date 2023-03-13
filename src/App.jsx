import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Polygon from './assets/Polygon.svg';
import Logo from './assets/Logo.svg';
import openMenu from './assets/menu 2.svg';
import closeMenu from './assets/menu 3.svg';

import SuBank from './assets/images/work/Subank.svg';
import SimpleInvest from './assets/images/work/simple invest.svg';
import Movein from './assets/images/work/move.svg';
import AP from './assets/images/work/A&P.svg';


import './App.css';

function App() {  
  const offices = [
    {'city': 'California', 'address': `26985 Brighton Lane, Lake Forest, CA 92630`},
    {'city': 'Athens', 'address': `Keas 69 Str. 15234, Chalandri`}];
  const [currentMenu, setCurrentMenu] = useState(openMenu);
  const [activeLink, setActiveLink] = useState('home');
  const menu = useRef(null);
  const menuBtn = useRef(null);
  const dot = useRef(null);

  const toggleNav = () => {
    menu.current.classList.toggle('opened');
    currentMenu == openMenu? setCurrentMenu(closeMenu) : setCurrentMenu(openMenu)
  }
  const animateDot = (event) =>{
    const path = event.target.dataset.path;
    switch (path) {
      case 'home':
        dot.current.style.top = '10%';
        break;
      case 'work':
        dot.current.style.top = '35%';
        break;
      case 'services':
        dot.current.style.top = '60%';
        break;
      case 'about':
        dot.current.style.top = '85%';
        break;
      default:
        break;
    }
  }
  const animateDotDefault = () =>{
    switch (activeLink) {
      case 'home':
        dot.current.style.top = '10%';
        break;
      case 'work':
        dot.current.style.top = '35%';
        break;
      case 'services':
        dot.current.style.top = '60%';
        break;
      case 'about':
        dot.current.style.top = '85%';
        break;
      default:
        break;
    }
  }

  const navigate = (event) =>{
    const path = event.target.dataset.path;
    setActiveLink(path);
    toggleNav();
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <ReactSVG className='menuBtn' ref={menuBtn} src={currentMenu} onClick={toggleNav}/>
          <div className='menu' ref={menu}>
            <div className="linksContainer">
              <div className="dotContainer">
                <div className='dot' ref={dot}></div>
              </div>
              <ul className="navLinks">
                <Link to={"home"} data-path={'home'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Home</Link>
                <Link to={"work"}  data-path={'work'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Work</Link>
                <Link to={"services"} data-path={'services'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Services</Link>
                <Link to={"about"} data-path={'about'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>About</Link>
              </ul>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/home' element={<HomeComponent />}/>
          <Route path='/work' element={<WorkComponent />}/>
          <Route path='/services' element={null}/>
          <Route path='/about' element={null}/>
        </Routes>
        <footer>
            <div className='callToAct'>
              <h2>Let's work together.</h2>
              <div className='btnContainer fLeft'>
                <button>Get in touch</button>
              </div>
            </div>
            <div className='cardContainer'>
              {offices.map(office => <div className='office'>
                <h3>{office.city}</h3>
                <p>{office.address}</p>
                <a className='officeLink' href="">View on map</a>
              </div>)}
              <div>
                <h3>Follow us</h3>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
            </div>
            <div className='flexJustBet'>
              <p>Have a nice day 😎</p>
              <p>Copyrights reserved©</p>
            </div>
          </footer>
      </div>
    </BrowserRouter>
  )
}

function HomeComponent(props) {

  const homeTitle = 'We use design & code to grow & amplify your brand’s digital experience.';
  const workCards = [
    {'title': 'Su-Bank', 
    'description': `Supporting Su-Bank China's digital and marketing communications since 2013.`, 
    'imgUrl': SuBank},
    {'title': 'Simple Invest', 
    'description': `Managing the average person's investments in a profitable and low risk manner.`, 
    'imgUrl': SimpleInvest},
    {'title': 'Move-in', 
    'description': `Looking after the digital space for one of the World's top POS payment solutions.`, 
    'imgUrl': Movein},
    {'title': 'A&P', 
    'description': `Creating annual strategy and marketing plans for one of Korea's biggest FMCGs.`, 
    'imgUrl': AP}
  ];
  const services = [
    {'title': 'Strategy', 
    'description': `We develop strategies to ensure your business grows from a solid foundation.`},
    {'title': 'Design', 
    'description': `We craft thoughtful experiences so your digital communications are more engaging.`},
    {'title': 'Engineering', 
    'description': `We develop bespoke solutions to ensure the best digital output and performance.`},
    {'title': 'Enhancement', 
    'description': `We improve and enhance your digital touchpoints to optimise effectiveness over time.`}];
  const slideShow = ['https://picsum.photos/1080/1220','https://picsum.photos/1080/1280','https://picsum.photos/1080/1080','https://picsum.photos/1080/1000','https://picsum.photos/1080/500','https://picsum.photos/720/980','https://picsum.photos/1080/1300',]  
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
          <div>
            <ReactSVG className='logo' src={Logo} alt="Logo" />
          </div>
          <span className='svgContainer'>
            <img className='svg' src={Polygon} alt="Logo" />
          </span>
          <section className='home'>
            <h1>{homeTitle}</h1>
            <div className='btnContainer'> 
              <button>Our Work</button>
              <button className='oddBtn'>What we do</button>
            </div>
          </section>
          <section>
            <ConnectAnimation />
          </section>
          <section className='featuredWork'>
            <h2>Featured case studies</h2>
            <div className='cardContainer'>
              {workCards.map(work => <div className='card'>
                <img className='cardImg' src={work.imgUrl}/>
                <h3 className='cardTitle'>{work.title}</h3>
                <p className='cardText'>{work.description}</p>
              </div>)}
            </div>
          </section>
          <section className='services'>
            <h2>How we help businesses grow.</h2>
            <div className='cardContainer'>
              {services.map(service => <div className='card'>
                <div>SVG Animation</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>)}
            </div>
            <div className="btnContainer fLeft">
              <button>Our services</button>
            </div>
          </section>
          <section style={{'--angle': scrollTop + 'deg'}}>
            <GridBarAnimation />
          </section>
          <section className=''>
            <h2>We’re problem lovers & solvers.</h2>
            <div className='btnContainer fLeft'>
              <button>About our culture</button>
              <button className='oddBtn'>See our insta</button>
            </div>
          </section>
          {/* Image slider, repeated 3 times to keep the viewport full while animation loops, so it simulates an infinite loop */}
          <div className='imageSlider'>
            <div className="imageContainer">
              {slideShow.map(el =><img className='slideShowImg' src={el}/>)}
            </div> 
            <div className="imageContainer">
              {slideShow.map(el =><img className='slideShowImg' src={el}/>)}
            </div>
            <div className="imageContainer">
              {slideShow.map(el =><img className='slideShowImg' src={el}/>)}
            </div>
          </div>
          {/* image slider position is absolute, so it sits the space of this empty section. (each section has a min height of 50vh) */}
          <section></section>
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


function WorkComponent(props) {
  return(
    <div>
      <h1>Hello</h1>
    </div>
)}

export default App
