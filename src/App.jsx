import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

// Routes
import HomeComponent from './routes/HomeComponent';
import WorkComponent from './routes/WorkComponent';
import AboutComponent from './routes/AboutComponent';
import ServicesComponent from './routes/ServicesComponent';
// Components
// SVGs
import Logo from './assets/Logo.svg';
import openMenu from './assets/menu 2.svg';
import closeMenu from './assets/menu 3.svg';
import SuBank from './assets/images/work/Subank.svg';
import SimpleInvest from './assets/images/work/simple invest.svg';
import Movein from './assets/images/work/move.svg';
import AP from './assets/images/work/A&P.svg';


import './App.css';
import './routes/routes.css';
import './components/components.css';

function App() {  
  const offices = [
    {'city': 'California', 'address': `26985 Brighton Lane, Lake Forest, CA 92630`},
    {'city': 'Athens', 'address': `Keas 69 Str. 15234, Chalandri`}];
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
    'imgUrl': AP}];
  const slideShow = ['https://picsum.photos/1080/1220','https://picsum.photos/1080/1280','https://picsum.photos/1080/1080','https://picsum.photos/1080/1000','https://picsum.photos/1080/500','https://picsum.photos/720/980','https://picsum.photos/1080/1300',];
  const [currentMenu, setCurrentMenu] = useState(openMenu);
  const [activeLink, setActiveLink] = useState('home');
  const menuBtnSvg = useRef(null);
  const menuBtn = useRef(null);
  const dot = useRef(null);

  const toggleNav = () => {
    // menu.current.classList.toggle('opened');
    currentMenu == openMenu? setCurrentMenu(closeMenu) : setCurrentMenu(openMenu);
    animateDotDefault();
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
    menuBtn.current.click();
    // animateDotDefault();
    toggleNav();
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Link to={'/home'} onClick={()=>{setActiveLink('home')}}>
          <ReactSVG className='logo' src={Logo} alt="Logo" />
        </Link>
        <div className="nav">
          <input type="checkbox" id="active" />
          <label for="active" class="menu-btn" ref={menuBtn}><ReactSVG className='menuBtnSvg' ref={menuBtnSvg} src={currentMenu} onClick={toggleNav}/></label>
          <div class="navWrapper">
            <ul className="navLinks">
              <div className="dotContainer" ref={dot}>
                <div className='dot'></div>
              </div>
              <Link to={"/home"} data-path={'home'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Home</Link>
              <Link to={"/work"}  data-path={'work'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Work</Link>
              <Link to={"/services"} data-path={'services'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Services</Link>
              <Link to={"/about"} data-path={'about'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>About</Link>
            </ul>
          </div>
        </div>
        {/* <div className="nav">
          <ReactSVG className='menuBtn' ref={menuBtn} src={currentMenu} onClick={toggleNav}/>
          <div className='menu' ref={menu}>
            <div className="linksContainer">
              <div className="dotContainer">
                <div className='dot' ref={dot}></div>
              </div>
              <ul className="navLinks">
                <Link to={"/home"} data-path={'home'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Home</Link>
                <Link to={"/work"}  data-path={'work'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Work</Link>
                <Link to={"/services"} data-path={'services'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>Services</Link>
                <Link to={"/about"} data-path={'about'} onMouseEnter={animateDot} onMouseLeave={animateDotDefault} onClick={navigate}>About</Link>
              </ul>
            </div>
          </div>
        </div> */}
        <Routes>
          <Route path='/home' element={<HomeComponent workCards={workCards} slideShow={slideShow} setActiveLink={setActiveLink}/>}/>
          <Route path='/work' element={<WorkComponent workCards={workCards}/>}/>
          <Route path='/services' element={<ServicesComponent workCards={workCards}/>}/>
          <Route path='/about' element={<AboutComponent slideShow={slideShow} offices={offices}/>}/>
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
        <footer>
            <div className='callToAct'>
              <h2>Let's work together.</h2>
              <div className='btnContainer fLeft'>
                <button>Get in touch</button>
              </div>
            </div>
            <div className='cardContainer'>
              {offices.map((office,i) => <div key={i} className='office'>
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
            <div>
              <p className='closingNote'>Have a nice day 🤠</p>
            </div>
          </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
