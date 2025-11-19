import { CardData } from "./CardData";
import Card from "./Card";
import { useState } from "react";

function Home (){
  const [status, setStatus] = useState("pending");
  const [increment, setIncrement] = useState(0);
  // React hooks
  const handleStatusClick = () => {
    if(status === "pending")
      setStatus("error");
    else 
      setStatus("pending")
  }

  const handleIcrement = () => {
    let prev = increment;

    setIncrement(prev)
  }


  return <section className="home">
    <div className="container">
        <div className="home-header">
            <span>Join Us</span>
            <div onClick={handleIcrement} style={{
              width: "fit-content",
              margin: "auto",
              marginTop: "8px",
              borderRadius: "60px",
              padding: "8px 16px",
              backgroundColor: status === "pending" ? "orange" : "red",
              color: "black",
              textTransform: "capitalize",
              fontWeight: 600,
              cursor: 'pointer'
            }}>{status === "pending" ? "pending" : "error"} {increment}</div>
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
        <div className="card-container">
          {CardData.map((card) => {
          const { title, id, bgColor, color, description, img} = card;
          return < Card
                key={id}
                title={title}
                bgColor={bgColor}
                color={color}
                description={description}
                img={img}
              />;

          
        })}
        </div>
    </div>
  </section>
  

}
export default Home;