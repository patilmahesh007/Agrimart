import Apple from "./../images/fruitcard/apple.png";
import ashgourd from "../../src/images/card/ash-gourd.png"
import babycorn from "../../src/images/card/baby-corn.png"
import beetroot from "../../src/images/card/beetroot.png"
import cabbage from "../../src/images/card/cabbage.png"
import cauliflower from "../../src/images/card/cauliflower.png"
import capsicum from "../../src/images/card/capsicum.png"
import bhindi from "../../src/images/card/bhendi.png"
import drumstick from "../../src/images/card/drumstick.png"
import carrot from "../../src/images/card/carrot.png"




const VegCardData = [

    {
        id: "119",
        title: "Fresh Orange Carrots",
        description: "Crunchy and sweet orange carrots, ideal for salads, snacks, and cooking. Packed with flavor and nutrients.",
        image: carrot,
        price: "₹60/kg",
        oldPrice: "₹75/kg",
        quantity: "1 kg",
        shelfLife: "2-3 weeks",
        farmer: "Kavita Sharma",
        manufacturer: "Harvest Roots, Uttar Pradesh 201001. Lic. No. - 10024031001134.",
        sellerFSSAI: "24345678000124",
        marketedBy: "Veggie Delight, Delhi 110001.",
        healthBenefits: "High in beta-carotene, which the body converts into vitamin A. Supports eye health, boosts immune function, and promotes healthy skin.",
        storageTemperature: "0-4°C",
        storageType: "Refrigerated storage",
        imageSlider: [
           carrot,
            "https://w7.pngwing.com/pngs/143/955/png-transparent-three-carrot-vegetables-carrot-peruvian-cuisine-root-vegetables-fruit-vegetable-carrot-natural-foods-food-recipe-thumbnail.png",
            "https://w7.pngwing.com/pngs/720/73/png-transparent-carrot-vegetable-fruit-legume-carrot-food-tomato-onion-thumbnail.png",
            "https://w7.pngwing.com/pngs/438/269/png-transparent-carrot-computer-file-carrot-natural-foods-leaf-vegetable-image-file-formats-thumbnail.png"
        ]
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
    },
    {
        id: "117",
        title: "Fresh Cauliflower",
        description: "Crisp and versatile cauliflower, perfect for a variety of dishes including soups, stews, and stir-fries.",
        image: cauliflower,
        price: "₹70/kg",
        oldPrice: "₹85/kg",
        quantity: "1 kg",
        shelfLife: "1-2 weeks",
        farmer: "Rajesh Patel",
        manufacturer: "Pure Veg Farms, Punjab 140001. Lic. No. - 10024031001132.",
        sellerFSSAI: "24345678000122",
        marketedBy: "Fresh Harvest, Bangalore 560001.",
        healthBenefits: "High in vitamins C and K, and a good source of fiber. May support immune function, improve digestion, and provide antioxidant protection.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            cauliflower,
            "https://w7.pngwing.com/pngs/18/487/png-transparent-cauliflower-hollandaise-sauce-vegetable-cooking-romanesco-broccoli-cauliflower-leaf-vegetable-food-recipe-thumbnail.png",
            "https://w7.pngwing.com/pngs/160/16/png-transparent-cauliflower-cheese-broccoflower-cauliflower-leaf-vegetable-food-recipe-thumbnail.png",
            "https://w7.pngwing.com/pngs/599/505/png-transparent-cauliflower-broccolini-vegetable-organic-food-cauliflower-leaf-vegetable-food-frozen-vegetables-thumbnail.png"
        ]
    },
    {
        id: "118",
        title: "Fresh Drumstick (Moringa)",
        description: "Nutrient-rich drumsticks, also known as moringa, perfect for soups, stews, and curries. Known for its high nutritional value and unique flavor.",
        image: drumstick,
        price: "₹100/kg",
        oldPrice: "₹130/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Suman Rani",
        manufacturer: "Moringa Farms, Rajasthan 302001. Lic. No. - 10024031001133.",
        sellerFSSAI: "24345678000123",
        marketedBy: "Nutrient Greens, Hyderabad 500001.",
        healthBenefits: "Rich in vitamins A, C, and E, and a good source of calcium and iron. May support immune health, improve digestion, and provide antioxidant protection.",
        storageTemperature: "7-10°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            drumstick,
            "https://w7.pngwing.com/pngs/214/646/png-transparent-green-vegetables-vegetable-organic-food-eggplant-fruit-ingredient-drumstick-cut-leaf-vegetable-food-tomato-thumbnail.png",
            "https://w7.pngwing.com/pngs/279/503/png-transparent-drumstick-tree-vegetable-drum-stick-health-vegetable-food-nutrition-scallion-thumbnail.png",
            "https://w7.pngwing.com/pngs/214/646/png-transparent-green-vegetables-vegetable-organic-food-eggplant-fruit-ingredient-drumstick-cut-leaf-vegetable-food-tomato-thumbnail.png"
        ]
    }
    
    
    
    
    
    
    
    
    
    

];
export default VegCardData;
