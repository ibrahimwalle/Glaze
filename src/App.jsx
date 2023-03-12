import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Polygon from './assets/Polygon.svg';
import Logo from './assets/Logo.svg';
import Menu from './assets/menu.svg';

import './App.css';

function App() {
  const homeTitle = 'We use design & code to grow & amplify your brand’s digital experience.';
  const workCards = [
    {'title': 'ING', 
    'description': `Supporting ING Australia's digital and marketing communications since 2013.`, 
    'imgUrl': 'https://picsum.photos/1080/1280'},
    {'title': 'Steadfast', 
    'description': `Keeping Australia’s largest general insurance broker network running Steadfast.`, 
    'imgUrl': 'https://picsum.photos/1080/1280'},
    {'title': 'Tyro', 
    'description': `Looking after the digital space for one of the Australia’s top POS payment solutions.`, 
    'imgUrl': 'https://picsum.photos/1080/1280'},
    {'title': 'Nongshim Australia', 
    'description': `Creating annual strategy and marketing plans for one of Korea’s biggest FMCGs.`, 
    'imgUrl': 'https://picsum.photos/1080/1280'}
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
  const offices = [
    {'city': 'Sydney', 'address': `pokeus@lashcreative.com.au
    23 Brisbane St, Surry Hills NSW 2010`},
    {'city': 'Seoul', 'address': `jowa@lashcreative.co.kr
    4F, 215-3 Nonhyundong Gangnamgu`},
  ];
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
    <div className='App'>
      <div>
        <img className='logo' src={Logo} alt="Logo" />
      </div>
      <span className='svgContainer'>
        <img className='svg' src={Polygon} alt="Logo" />
      </span>
      <section className='home'>
        <h1>{homeTitle}</h1>
        <div className='btnContainer'> 
          <button>Our Work</button>
          <button>What we do</button>
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
          <button className='instaBtn'>See our insta</button>
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
  )
}

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

export default App
