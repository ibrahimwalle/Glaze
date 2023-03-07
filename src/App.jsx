import { useState } from 'react'
import './App.css'

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
  ]  


  return (
    <div className="App">
      <div className='header'>Glaze</div>
      <section className='home'>
        <h1>{homeTitle}</h1>
        <div> 
          <button>Our Work</button>
          <button>What we do</button>
        </div>
      </section>
      <section>Grid Animation</section>
      <section className='featuredWork'>
        <h2>Featured case studies</h2>
        <div className='cardContainer'>
          {workCards.map(work => <div className='card'>
            <img className='cardImg' src={work.imgUrl}/>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
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
        <button>Our services</button>
      </section>
      <section>Another Grid Animation</section>
      <section className=''>
        <h2>We’re problem lovers & solvers.</h2>
        <div>
          <button>About our culture</button>
          <button>See our insta</button>
        </div>
      </section>
      <section className='imageSlider'>
        imageSlider
      </section>
      <footer>
        <section className='callToAct'>
          <h2>Let's work together.</h2>
          <div>
            <button>Get in touch</button>
          </div>
        </section>
        <div className='offices'>
          {offices.map(office => <div>
            <h3>{office.city}</h3>
            <p>{office.address} <a href="">View on map</a></p>
          </div>)}
          <div>
            <h3>Follow us</h3>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
        <div>
          <p>Have a nice day 😎</p>
          <p>Copyrights reserved©</p>
        </div>
      </footer>
    </div>
  )
}

export default App
