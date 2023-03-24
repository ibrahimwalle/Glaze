import { Link } from 'react-router-dom';
import maze from '../assets/images/maze2.gif'
import FeaturedWork from '../components/FeaturedWork'

function ServicesComponent({workCards}){
    // const workCards = [
    //     {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Enhancement`},
    //     {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Innovation`},
    //     {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Enhancement`},
    //     {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Marketing campaign`}];
    const testomonials = [{'name': `Mr.Steve`,'testimonial': `" To see that this web design company was able to create my vision on the web was incredible as they did not leave out any details and collaborated with me through the process to assure that I was completely satisfied.”`},
        {'name': `Mr. Johnny`, 'testimonial': `"Glaze is a great company to work with, I use them for a lot more than just building a website. It’s almost as if they are an employee. Thrive is a company you can really trust. They handle my PHP development work, web design, web hosting and search engine optimization"`},
        {'name': `Mrs. White`, 'testimonial': `"Glaze is an exceptional company regarding the design and management of e-commerce websites. Websites designed by them are flexible, multifunctional and interactive. Their teams are professional, courteous and very prompt. Very satisfied with their work!`}
    ];
    return (
        <div className="servicesComponent">
            <section className='aboutHead'>
                <div>
                    <h2>Our approach to growth.</h2>
                    <div className="btnContainer fLeft"><button>Get in touch</button></div>
                    <div className='jumpTo'>
                        <h3>Jump to: </h3>
                        <span>
                            <a href='#strategy'>Strategy</a>
                            <a href='#design'>Design</a>
                            <a href='#Technology'>Technology</a>
                        </span>
                    </div>
                </div>
                <div>
                    <img className='aboutSvg' src={maze} />
                </div>
            </section>
            <section>
                <div id='strategy' className="stratGrid">
                    <div className="stratSteps">
                        <div className="step stepTitle">            
                            <h1>Strategy.</h1>
                            <p>1</p>   
                        </div>
                        <div className="step">
                            <h3>Discovery</h3>
                            <p>We work collaboratively with you – through workshops, focus groups, content audits and research – to understand your business, audience, problem and best approach to solving it.</p>
                        </div>
                        <div className="step">
                            <h3>Analysis</h3>
                            <p>Once we completely understand your business and problems to solve, we review our findings, available data and reports to define the critical areas for improvement.</p>
                        </div>
                        <div className="step">
                            <h3>Strategy</h3>
                            <p>We develop a practical execution, implementation and launch roadmap with a clear user journey to achieve the perfect solution to solve your brand’s challenges.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id='design' className="stratGrid">
                        <div className="stratSteps">
                            <div className="step stepTitle">            
                                <h1>Design.</h1>
                                <p>2</p>   
                            </div>
                            <div className="step">
                                <h3>Discovery</h3>
                                <p>We work collaboratively with you – through workshops, focus groups, content audits and research – to understand your business, audience, problem and best approach to solving it.</p>
                            </div>
                            <div className="step">
                                <h3>Analysis</h3>
                                <p>Once we completely understand your business and problems to solve, we review our findings, available data and reports to define the critical areas for improvement.</p>
                            </div>
                            <div className="step">
                                <h3>Strategy</h3>
                                <p>We develop a practical execution, implementation and launch roadmap with a clear user journey to achieve the perfect solution to solve your brand’s challenges.</p>
                            </div>
                        </div>
                    </div>
            </section>
            <section>
                <div id='Technology' className="stratGrid">
                        <div className="stratSteps">
                            <div className="step stepTitle">            
                                <h1>Technology.</h1>
                                <p>3</p>   
                            </div>
                            <div className="step">
                                <h3>Discovery</h3>
                                <p>We work collaboratively with you – through workshops, focus groups, content audits and research – to understand your business, audience, problem and best approach to solving it.</p>
                            </div>
                            <div className="step">
                                <h3>Analysis</h3>
                                <p>Once we completely understand your business and problems to solve, we review our findings, available data and reports to define the critical areas for improvement.</p>
                            </div>
                            <div className="step">
                                <h3>Strategy</h3>
                                <p>We develop a practical execution, implementation and launch roadmap with a clear user journey to achieve the perfect solution to solve your brand’s challenges.</p>
                            </div>
                        </div>
                    </div>
            </section>
            <section>
                <h1>what our clients say about us</h1>
                <div className="cardContainer">
                    {testomonials.map((testimonial,i)=>
                        <div key={i} className='card'>
                            <h3 className='fontPurple'>{testimonial.name}</h3>
                            <p>{testimonial.testimonial}</p>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <h1>Work by clients</h1>
                <FeaturedWork workCards={workCards}/>
            </section>
        </div>
)}

export default ServicesComponent