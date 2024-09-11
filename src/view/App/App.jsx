import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import Card3 from "../../components/homepageCard3/card3"
import './App.css'
import card3card from "./../../config/card3"
import cow from '../../images/nav/cow.png'
import earth from '../../images/nav/earth.png'
import vegetable from '../../images/nav/vegetable.png'
import wheat from '../../images/nav/wheat.png'
import farmer from '../../images/nav/farmer.png'
import { Link } from "react-router-dom"
import FruitsCard from "../../components/card4components/card4"


function App() {


  
    

  return (
    <>
    
      <Navbar />
      <div className="App">
      </div>

      {/* card number  1 */}

      <div className="App-section-1">
        <div className="App-section-1-div1"><span className="App-section-1-div1-span" >Agrimart Farm Fresh Products</span></div>
        <div className="App-section-1-div2">
          <div className="App-section-1-div2-box"><b >
            Fresh agri products bring the goodness of nature straight to your table, ensuring quality, nutrition, and flavor in every bite</b><br />
            <p>Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door. We ensure quality, sustainability,
              and fair pricing..</p>
          </div>
          <div className="App-section-1-images-container">
            <span>
              <img className="App-section-1-images" src={earth} />
              <p>Organic  <br />Farming</p>
            </span>
            <span>
              <img className="App-section-1-images"  src={cow}  />
              <p>Diffrent<br /> Livestock</p>
            </span>
            <span>
              <img className="App-section-1-images" src={vegetable}  />
              <p>Fresh <br />Vegetables</p>
            </span>
            <span>
              <img className="App-section-1-images"  src={farmer} />
              <p>Farm <br />Fresh</p>
            </span>
            <span>
              <img className="App-section-1-images"  src={wheat}  />
              <p>Agriculture <br />Products</p>
            </span>

          </div>

        </div>

        

      </div>

      <div className="why-choose-us-content">
        <img src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon left" />

        <div className="why-choose-us-text">
          <h1 className='why-choose-us-heading'>Why Choose Us ?</h1>
          <p>By building a culture of sustainability and wholesome living, we strive for a healthier you and a healthier planet.</p>
        </div>

        <img src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon right" />

      </div>

      
      <Link to="/about"><button className="knowmore-button"  > know more</button></Link>


      <FruitsCard/>
      <br/>
    <div className="App-section-3-container">
      {/* card number 3 */}
      {card3card.map((item, index) => (
  <Card3
    key={index}
    image={item.image}
    description={item.description}

/>
))}

    </div>

     
      <Footer />
    </>

  )
}
export default App