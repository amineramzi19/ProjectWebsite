import { cardData } from "./Data";

function Home (){
  return <section className="home">
    <div className="container">
        <div className="home-header">
            <span>Join Us</span>
            <h1>Best Learining  opportunities </h1>
            <p>We Know how largo objects will act,but things
                on a small scale just do not act that way.
            </p>
           <a href="#" className="btn btn-red ">
            Get Quote Now
           </a>
           <a href="#" className="btn btn-transparent">
            Learn More
           </a>
        </div>
        <div className="card-container">{cardData.map(card =>{
          console.log(card)
          return <div key={card.id}></div>
        })}</div>
    </div>
  </section>
  

}
export default Home;