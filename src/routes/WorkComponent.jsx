import FeaturedWork from '../components/FeaturedWork';

function WorkComponent({workCards}) {
    const archived = [
      {'year':`2019`, 'title': `Abernathy Group	Automated - Innovative E-Tailers`},
      {'year':`2018`, 'title': `Stokes-Rath - Distributed Discrete Solution`},
      {'year':`2014`, 'title': `Trantow-Osinski - Extend Enterprise E-Services`}];
    return(
      <div className='workComponent'>
        <section>
            <h2>Featured work</h2>
            <FeaturedWork workCards={workCards}/>
        </section>
        <section>
          <h2>Archived</h2>
          <div className="archivedWorks">
            {archived.map((work,i)=><div key={i} className='archived'>
              <p className='year'>{work.year}</p>
              <p className='archivedTitle'>{work.title}</p>
            </div>)}
          </div>
        </section>
      </div>
)}

export default WorkComponent