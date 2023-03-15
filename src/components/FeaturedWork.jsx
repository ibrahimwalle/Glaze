function FeaturedWork({workCards}){
    return(
        <div data-testid="featuredWorks" className='cardContainer'>
        {workCards.map((work,i) => <div key={i} className='card'>
            <img className='cardImg' src={work.imgUrl}/>
            <h3 className='cardTitle'>{work.title}</h3>
            <p className='cardText'>{work.description}</p>
        </div>)}
        </div>
)}


export default FeaturedWork
