import cow from './../images/nav/cow.png'
import earth from './../images/nav/earth.png'
import vegetable from './../images/nav/vegetable.png'
import wheat from './../images/nav/wheat.png'
import farmer from './../images/nav/farmer.png'
import tractor from './../images/nav/tract.png'
import flower from './../images/nav/flower.png'

const headerdata = [{
  to: "/",
  name: "Home",
},
{
  to: "/services",
  name: "Services"
}, {
  to: "/about",
  name: "About"
}, {
  to: "/blog",
  name: "Blog"
}


]

const Appcard1data = [
  {
    image: earth,
    text1: "Organic",
    text2: "Farming",
  }, {
    image: cow,
    text1: "Diffrent",
    text2: "Livestock",
  },
  {
    image: vegetable,
    text1: "Fresh",
    text2: "Vegetables",
  },
  {
    image: farmer,
    text1: "Farm",
    text2: "Fresh",
  }, {
    image: flower,
    text1: "Beautiful",
    text2: "Flowers",
  },{
    image: tractor,
    text1: "Modern",
    text2: "Equipment",
  }
  ,{
    para1:"We are an Organic Farming Company. We provide fresh organic farm fresh products. Our products are sourced from local farmers. We ensure quality, sustainability, and fair pricing.",
para2:"Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door. We ensure quality, sustainability and fair pricing.."
  }
]



export { headerdata, Appcard1data }
