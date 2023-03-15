
import maze from '../assets/images/maze.svg'
import FeaturedWork from '../components/FeaturedWork'

function ServicesComponent(props){
    const workCards = [
        {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Enhancement`},
        {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Innovation`},
        {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Enhancement`},
        {'imgUrl': `https://picsum.photos/1080/1280`,'title':`Move-in`, 'description': `Marketing campaign`}];
    return (
        <div className="servicesComponent">
            <section className='aboutHead'>
                <div>
                    <h2>Our approach to growth.</h2>
                    <div className="btnContainer"><button>Get in touch</button></div>
                </div>
                <div>
                    <img className='aboutSvg' src={maze}/>
                </div>
            </section>
            <section>
                <h1>Strategy</h1>
                <div className="stratGrid">
                    <div className="stratSteps">
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
                    <div className="startImgs">
                        <h3>Work that includes Strategy</h3>
                        <FeaturedWork className='strategyCards' workCards={workCards}/>
                    </div>
                </div>
            </section>
            <section>
                <h1>Recognitions</h1>
                    <div className="stratSteps recog">
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
                        <div className="step">
                            <h3>Strategy</h3>
                            <p>We develop a practical execution, implementation and launch roadmap with a clear user journey to achieve the perfect solution to solve your brand’s challenges.</p>
                        </div>
                    </div>
            </section>
            <section>
                <h1>Our clients</h1>
                <div className="cardContainer">
                    {workCards.map((client,i)=>
                        <div key={i} className='card'>
                            <img className='cardImg' src={client.imgUrl}/>
                        </div>
                    )}
                </div>
            </section>
        </div>
)}

export default ServicesComponent