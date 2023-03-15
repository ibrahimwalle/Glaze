import { ReactSVG } from 'react-svg';
import invaders from '../assets/images/invaders.svg';
import FeaturedWork from '../components/FeaturedWork';
import ImageSlider from '../components/ImageSlider';

function AboutComponent({slideShow, offices}){

    const team = [
        {'title': `Jonny Edward`, 'description': `Managing Director / Founder`, 'imgUrl': `https://picsum.photos/1080/1280`},
        {'title': `Sam Doe`, 'description': `Technical Director / Founder`, 'imgUrl': `https://picsum.photos/1080/1280`},
        {'title': `Jessie Blue`, 'description': `General Manager / Partner`, 'imgUrl': `https://picsum.photos/1080/1280`}];

    return (
        <div className='aboutComponent'>
            <section className='aboutHead'>
                <div>
                    <h2>We bring businesses to life.</h2>
                    <div className="btnContainer"><button>Get in touch</button></div>
                </div>
                <div>
                    <img className='aboutSvg' src={invaders}/>
                </div>
            </section>
            <section>
                <h2>Our Team</h2>
                <FeaturedWork className='team' workCards={team}/>
            </section>
            <section>
                <h2>Great work environment</h2>
                <ImageSlider slideShow={slideShow}/>
            </section>
            <section>
                <h2>Our Locations</h2>
                <div className="officeShowCase">
                    {offices.map((office,i)=><div key={i} className='grid-2-col'>
                    <div className='officeDetails'>
                        <h1 className='city'>{office.city}</h1>
                        <p className='address'>{office.address}</p>
                        <div className="btnContainer">
                            <button>Get in touch</button>
                            <button className='oddBtn'>View on map</button>
                        </div>
                    </div>
                    <div className='officeImgCont'>
                        <img className='officeImg' src="https://picsum.photos/720/980" alt="office picture" />
                        <img className='officeImg' src="https://picsum.photos/720/980" alt="office picture" />
                    </div>
                    </div>)}
                </div>
            </section>
        </div> 
)}

export default AboutComponent