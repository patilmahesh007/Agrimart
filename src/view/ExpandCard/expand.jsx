import { useState } from "react"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './expand.css'
import { FRUTESDATA } from "../../config/Frutesdata"
import minus  from './../../images/expand/minus-icon.png'
import plus from './../../images/expand/plus icon.png'
import { useParams } from "react-router-dom"
import Frutecard from "../../components/Frutecard/Frutecard"
import SecondBlog from "../../components/BlogCards/SecondBlog/SecondBlog"

function expandcards (){
  const {expandcard} = useParams();
  const [carddetails,setCarddetails] =useState({
    name:"",
    photo:"",
    quantity:"",
    price:""
  })
}

function expand(title) {
   const [selectprice , setSelectprice] =useState()
  const [quality , setquality]=useState(1)
  return (
    <>
    <Navbar/>
          <div className="expand-container">
             <div className="expand-main-image-container">
              <img className="expand-main-img" src={title}/>
             </div>
             
             <div className="expand-details">
               <h2 className="expand-product-name">Cabbage</h2>
               
               <p onChange={(e)=>setSelectprice(selectprice)}>{selectprice}</p>
               <span className="expand-product-price-name"> price : ₹30</span>
                <p className="expand-units">Unit</p>
                <select  value={selectprice} className="expand-select" onChange={(e)=>setSelectprice(selectprice)}>
                    <option> 500 Gms</option>
                    <option> 1 kg</option>
                    <option> 2 kg</option>
                </select>
                <p className="expand-units">Quantity</p>
                <div className="expand-quantity-counter">
                  <div className="img-icon" onClick={()=>setquality(quality > 1 ?  quality-1 : quality)}>
                        <img src={minus}/>
                  </div>
                  <div className="expand-quantity"> {quality}</div>
                  <div className="img-icon" onClick={()=>setquality(quality+1)}>
                        <img src={plus}/>
                  </div>
                </div>
                {/* {Blogs.map((blog) => {
            if(blog.type === "smallblogs"){
              return (
                <SecondBlog
                  id={blog.id}
                  imgUrl={blog.imgUrl}
                  title={blog.title}
                  description={blog.description}
                  details={blog.details}
                />
              );
            }
            })} */}
                 
                <div className="expand-buttons-container">
                   <button type="button" className="expand-btn add-to-cart">Add To Cart</button>
                   <button type="button" className="expand-btn Buy-it-now">Buy It Now</button>
                </div>
             </div> 
          </div>
    <Footer/>
  </>
  )
}

export default expand