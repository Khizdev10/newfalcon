import art from '../../media/high.jpg'
const Stats = ()=>{
    return(
        <><div
        className="min-h-[30vh] text-white flex flex-wrap justify-around items-center text-center gap-6"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${art.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-700 text-3xl font-bold">20+</h1>
          <p className="text-lg">Years of Experience</p>
        </div>
      
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-700 text-3xl font-bold">10,000+</h1>
          <p className="text-lg">Successful Deliveries</p>
        </div>
      
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-700 text-3xl font-bold">50+</h1>
          <p className="text-lg">Fleet Vehicles</p>
        </div>
      
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-700 text-3xl font-bold">All Pakistan</h1>
          <p className="text-lg">Nationwide Coverage</p>
        </div>
      </div>
</>      
    )
}

export default Stats;