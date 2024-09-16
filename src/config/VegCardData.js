import Apple from "./../images/fruitcard/apple.png";
import ashgourd from "../../src/images/card/ash-gourd.png"
import babycorn from "../../src/images/card/baby-corn.png"
import beetroot from "../../src/images/card/beetroot.png"
import cabbage from "../../src/images/card/cabbage.png"

import capsicum from "../../src/images/card/capsicum.png"
import bhindi from "../../src/images/card/bhendi.png"




const VegCardData = [

    {
        id:" 200",
        title: "veg",
        description: "A delicious, sweet fruit available in various colors.",
        image: Apple,
        price: "₹80/kg",
        oldPrice: "₹100/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Aarti Devi",
        manufacturer: "Sangli Farmers Union, Sangli 416 416. Lic. No. - 10024031001111.",
        sellerFSSAI: "24345678000101",
        marketedBy: "Hilltop Orchard, Mussoorie 248179.",
        healthBenefits: "High in fiber, vitamin C, and antioxidants. Promotes heart health, supports weight management, and reduces the risk of diabetes.",
        storageTemperature: "0-4°C",
        storageType: "Refrigeration",
        imageSlider: [Apple, "https://i.pinimg.com/236x/4f/6c/c4/4f6cc46e50e7a0ff21c5e0a77423b0b5.jpg", "https://i.pinimg.com/236x/fe/0d/1d/fe0d1d36996a0e72931d080983773c1e.jpg","https://i.pinimg.com/236x/62/a8/bd/62a8bd58fbc9bb5d7e5517ac0d2d1ce6.jpg"]
    },
    {
        id: "111",
        title: "Fresh Ash Gourd (White Pumpkin)",
        description: "A mild-flavored, refreshing vegetable with a light green skin and white flesh, perfect for soups, stews, and curries.",
        image: ashgourd,
        price: "₹70/kg",
        oldPrice: "₹90/kg",
        quantity: "1 kg",
        shelfLife: "1-2 weeks",
        farmer: "Geeta Patel",
        manufacturer: "Green Fields Produce, Gujarat 382001. Lic. No. - 10024031001126.",
        sellerFSSAI: "24345678000116",
        marketedBy: "Pure Harvest, Bangalore 560001.",
        healthBenefits: "Low in calories and rich in vitamins C and B. May help with hydration, support weight loss, and improve digestion.",
        storageTemperature: "10-15°C",
        storageType: "Cool storage",
        imageSlider: [
            ashgourd,
            "https://w7.pngwing.com/pngs/851/673/png-transparent-honeydew-cantaloupe-frutti-di-bosco-melon-wax-gourd-winter-melon-melon-fruit-vegetables-thumbnail.png",
            "https://img.freepik.com/free-photo/front-view-autumn-squash-with-walnuts-copy-space_23-2148684069.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            ashgourd
        ]
    },
    {
        id: "112",
        title: "Fresh Baby Corn",
        description: "Tender and sweet baby corn, ideal for stir-fries, salads, and as a crunchy snack.",
        image: babycorn,
        price: "₹150/kg",
        oldPrice: "₹180/kg",
        quantity: "250 g",
        shelfLife: "1 week",
        farmer: "Asha Rani",
        manufacturer: "Tiny Harvest, Haryana 122018. Lic. No. - 10024031001127.",
        sellerFSSAI: "24345678000117",
        marketedBy: "Fresh Delights, Mumbai 400001.",
        healthBenefits: "Rich in fiber and vitamins A and C. May support digestion, boost immunity, and provide antioxidants.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            babycorn,
            "https://w7.pngwing.com/pngs/126/590/png-transparent-yellow-kernels-corn-on-the-cob-corn-soup-corn-kernel-sweet-corn-maize-sweet-corn-food-cooking-frozen-vegetables-thumbnail.png",
            "https://w7.pngwing.com/pngs/155/626/png-transparent-graphy-popcorn-maize-grain-popcorn-white-food-photography-thumbnail.png",
            "https://w7.pngwing.com/pngs/526/826/png-transparent-pile-of-corns-corn-on-the-cob-popcorn-maize-corn-kernel-sweet-corn-a-golden-corn-kernels-golden-frame-food-nutrition-thumbnail.png"
        ]
    },
    {
        id: "113",
        title: "Fresh Beetroot",
        description: "Vibrant and earthy beetroots that add a burst of color and a sweet, rich flavor to salads, juices, and side dishes.",
        image: beetroot,
        price: "₹80/kg",
        oldPrice: "₹100/kg",
        quantity: "1 kg",
        shelfLife: "1-2 weeks",
        farmer: "Ravi Yadav",
        manufacturer: "Rooted Gardens, Madhya Pradesh 462001. Lic. No. - 10024031001128.",
        sellerFSSAI: "24345678000118",
        marketedBy: "Veggie Bliss, Chennai 600001.",
        healthBenefits: "High in fiber, vitamins C and B6, and folate. May support blood pressure regulation, enhance stamina, and improve digestion.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            beetroot,
            "https://w7.pngwing.com/pngs/392/464/png-transparent-beetroot-common-beet-vegetable-betalain-vegetable-food-root-fruit-thumbnail.png",
            "https://w7.pngwing.com/pngs/157/876/png-transparent-juice-beetroot-sugar-beet-mangelwurzel-vegetable-beet-natural-foods-leaf-vegetable-food-thumbnail.png",
            "https://w7.pngwing.com/pngs/247/848/png-transparent-sugar-beet-organic-food-beetroot-vegetable-beet-food-blueberry-fruit-thumbnail.png"
        ]
    },
    {
        id: "114",
        title: "Fresh Green Cabbage",
        description: "Crisp and refreshing green cabbage, perfect for salads, stir-fries, and as a side dish.",
        image: cabbage,
        price: "₹50/kg",
        oldPrice: "₹65/kg",
        quantity: "1 kg",
        shelfLife: "2-3 weeks",
        farmer: "Suresh Kumar",
        manufacturer: "Green Meadows Farms, Himachal Pradesh 171001. Lic. No. - 10024031001129.",
        sellerFSSAI: "24345678000119",
        marketedBy: "Crisp Greens, Delhi 110001.",
        healthBenefits: "High in vitamins C and K, and rich in fiber. May support immune function, promote healthy digestion, and reduce inflammation.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            cabbage,
            "https://w7.pngwing.com/pngs/943/1017/png-transparent-cabbage-cauliflower-brussels-sprout-vegetable-seed-cabbage-leaf-vegetable-food-chili-pepper-thumbnail.png",
            "https://w7.pngwing.com/pngs/515/420/png-transparent-cabbage-cauliflower-vegetable-cabbage-leaf-vegetable-food-leaf-thumbnail.png",
            "https://w7.pngwing.com/pngs/398/914/png-transparent-sliced-cabbage-art-cabbage-vegetarian-cuisine-vegetable-half-cabbage-leaf-vegetable-food-recipe-thumbnail.png"
        ]
    },
    {
        id: "115",
        title: "Fresh Capsicum",
        description: "Crisp and colorful capsicum (bell peppers) that add a vibrant crunch and a sweet, slightly tangy flavor to your dishes.",
        image: capsicum,
        price: "₹120/kg",
        oldPrice: "₹150/kg",
        quantity: "1 kg",
        shelfLife: "1-2 weeks",
        farmer: "Nina Patel",
        manufacturer: "Fresh Veggie Farms, Karnataka 560001. Lic. No. - 10024031001130.",
        sellerFSSAI: "24345678000120",
        marketedBy: "Colorful Produce, Hyderabad 500001.",
        healthBenefits: "Rich in vitamins A and C, and antioxidants. May support immune health, improve skin health, and provide anti-inflammatory benefits.",
        storageTemperature: "7-10°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            capsicum,
            "https://w7.pngwing.com/pngs/548/382/png-transparent-bell-pepper-chili-pepper-vegetable-black-pepper-natural-foods-food-tomato-thumbnail.png",
            "https://w7.pngwing.com/pngs/784/722/png-transparent-two-green-bell-peppers-bell-pepper-facing-heaven-pepper-hunan-capsicum-frutescens-vegetable-green-bell-pepper-natural-foods-food-chili-pepper-thumbnail.png",
            "https://w7.pngwing.com/pngs/949/731/png-transparent-chili-pepper-cayenne-pepper-red-bell-pepper-paprika-quasiphysical-pepper-natural-foods-food-nightshade-family-thumbnail.png"
        ]
    },
    {
        id: "116",
        title: "Fresh Bhindi (Okra)",
        description: "Tender and crisp bhindi, also known as okra, perfect for stir-fries, curries, and as a nutritious addition to various dishes.",
        image: bhindi,
        price: "₹90/kg",
        oldPrice: "₹110/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Meena Devi",
        manufacturer: "Green Harvest, Tamil Nadu 600001. Lic. No. - 10024031001131.",
        sellerFSSAI: "24345678000121",
        marketedBy: "Healthy Greens, Mumbai 400001.",
        healthBenefits: "Rich in vitamins A and C, and high in fiber. May support digestive health, improve skin health, and aid in weight management.",
        storageTemperature: "7-10°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            bhindi,
            "https://w7.pngwing.com/pngs/674/387/png-transparent-ladyfinger-okra-vegetable-samosa-fruit-vegetable-natural-foods-leaf-vegetable-food-thumbnail.png",
            "https://w7.pngwing.com/pngs/950/39/png-transparent-okra-ladyfinger-goan-cuisine-bhendi-fry-vegetable-okra-food-chili-pepper-fruit-thumbnail.png",
            "https://w7.pngwing.com/pngs/217/236/png-transparent-lady-finger-vegetable-gumbo-ladyfinger-okra-vegetable-fruit-okra-natural-foods-leaf-vegetable-food-thumbnail.png"
        ]
    }
    
    
    
    
    
    

];
export default VegCardData;
