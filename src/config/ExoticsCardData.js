import basil from "../../src/images/card/basil.png"
import broccoli from "../../src/images/card/broccoli.png"
import Leeks from "../../src/images/card/Leeks.png"
import Tomato from "./../images/fruitcard/tomato.png";
import iceberglettuce from "../../src/images/card/iceberglettuce.png"
import mint from "../../src/images/card/mint.png"
import zucchini from "../../src/images/card/zucchini.png"
import parsley from "../../src/images/card/parsley.png"
import capsicum from "../../src/images/card/capsicum.png"


const ExoticsCardData = [

    {
        id: "300",
        title: " Basil",
        description: "Aromatic and flavorful fresh basil leaves, perfect for adding a burst of flavor to dishes, pesto, and salads.",
        image: basil,
        price: "₹150/kg",
        oldPrice: "₹180/kg",
        quantity: "100 g",
        shelfLife: "1 week",
        farmer: "Anil Kumar",
        manufacturer: "Herb Gardens, Kerala 682001. Lic. No. - 10024031001135.",
        sellerFSSAI: "24345678000125",
        marketedBy: "Herbal Fresh, Mumbai 400001.",
        healthBenefits: "Rich in vitamins A, C, and K, and contains essential oils with anti-inflammatory and antibacterial properties. May support digestion, boost immunity, and enhance overall health.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            basil,
            "https://w7.pngwing.com/pngs/940/684/png-transparent-basil-italian-cuisine-pesto-pizza-herb-mint-leaf-vegetable-food-leaf-thumbnail.png",
            "https://w7.pngwing.com/pngs/949/754/png-transparent-basil-leaf-italian-cuisine-basil-herb-leaf-vegetable-mozzarella-basil-leaf-tomato-basil-thumbnail.png",
            "https://w7.pngwing.com/pngs/48/1001/png-transparent-green-leaf-leaf-plant-basil-basil-leaf-plant-basil-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "302",
        title: " Broccoli",
        description: "Crisp and nutritious broccoli, ideal for salads, stir-fries, and as a healthy side dish.",
        image: broccoli,
        price: "₹90/kg",
        oldPrice: "₹110/kg",
        quantity: "1 kg",
        shelfLife: "1-2 weeks",
        farmer: "Nandini Rao",
        manufacturer: "Green Harvesters, Punjab 140001. Lic. No. - 10024031001136.",
        sellerFSSAI: "24345678000126",
        marketedBy: "Fresh Greens, Bangalore 560001.",
        healthBenefits: "High in vitamins C and K, and a good source of fiber. May support immune function, improve bone health, and aid in digestion.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            broccoli,
            "https://w7.pngwing.com/pngs/1023/225/png-transparent-broccoli-organic-food-vegetable-broccoli-leaf-vegetable-food-cooking-thumbnail.png",
            "https://w7.pngwing.com/pngs/534/900/png-transparent-broccoli-organic-food-vegetable-cabbage-sulforaphane-broccoli-leaf-vegetable-food-cabbage-thumbnail.png",
            "https://w7.pngwing.com/pngs/572/950/png-transparent-broccoli-brussels-sprout-cauliflower-vegetable-broccoli-s-leaf-vegetable-food-cooking-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "303",
        title: " Leeks",
        description: "Mildly flavored and versatile leeks, perfect for soups, stews, and as a flavorful addition to various dishes.",
        image: Leeks,
        price: "₹120/kg",
        oldPrice: "₹150/kg",
        quantity: "500 g",
        shelfLife: "1-2 weeks",
        farmer: "Pooja Singh",
        manufacturer: "Green Fields Produce, Himachal Pradesh 171001. Lic. No. - 10024031001137.",
        sellerFSSAI: "24345678000127",
        marketedBy: "Fresh Harvest, Delhi 110001.",
        healthBenefits: "Rich in vitamins A, C, and K, and contains beneficial antioxidants and fiber. May support heart health, improve digestion, and enhance immune function.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            Leeks,
            "https://w7.pngwing.com/pngs/239/737/png-transparent-onion-garlic-borscht-vegetable-herbes-natural-foods-leaf-vegetable-food-thumbnail.png",
            "https://w7.pngwing.com/pngs/731/8/png-transparent-chinese-cuisine-garlic-chives-vegetable-garlic-leaf-vegetable-food-grass-thumbnail.png",
            "https://w7.pngwing.com/pngs/5/105/png-transparent-lemongrass-asian-cuisine-herb-flavor-lemon-grass-free-union-plant-leaf-vegetable-food-natural-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "304",
        title: "Tomato",
        description: "A juicy, red vegetable often used in salads and sauces.",
        image: Tomato,
        price: "₹50/kg",
        oldPrice: "₹60/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Jagdish Gupta",
        manufacturer: "Kaira District Co-operative Milk Producers' Union Limited, Anand 388 001. Lic. No. - 10014021001010.",
        sellerFSSAI: "13323999000106",
        marketedBy: "Green Valley Farms, Aundh, Pune 411007.",
        healthBenefits: "Rich in vitamin C, potassium, and antioxidants like lycopene, which may reduce the risk of heart disease and cancer.",
        storageTemperature: "7-10°C",
        storageType: "Refrigeration",
        imageSlider: [Tomato, "https://i.pinimg.com/236x/b0/b5/76/b0b5769b3273e0b2d49ae7dd454b67b3.jpg", "https://i.pinimg.com/236x/88/5b/5d/885b5d0fc39413affbade0032039a449.jpg","https://i.pinimg.com/236x/62/1b/27/621b27f1d0c2841688396128d99f1a4e.jpg"]
        , category: "Exotics"
    },
    {
        id: "305",
        title: "Iceberg Lettuce",
        description: "Crisp and refreshing iceberg lettuce with a crunchy texture, perfect for salads, sandwiches, and wraps.",
        image: iceberglettuce,
        price: "₹80/kg",
        oldPrice: "₹100/kg",
        quantity: "1 head",
        shelfLife: "1-2 weeks",
        farmer: "Rohit Verma",
        manufacturer: "Cool Farms, Maharashtra 400001. Lic. No. - 10024031001138.",
        sellerFSSAI: "24345678000128",
        marketedBy: "Salad Fresh, Bangalore 560001.",
        healthBenefits: "Low in calories and high in water content. Provides vitamins A and K. May support hydration, contribute to healthy skin, and aid in digestion.",
        storageTemperature: "0-4°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            iceberglettuce,
            "https://w7.pngwing.com/pngs/115/794/png-transparent-iceberg-lettuce-leaf-vegetable-salad-romaine-lettuce-endive-lettuce-leaf-vegetable-food-tomato-thumbnail.png",
            "https://w7.pngwing.com/pngs/930/640/png-transparent-selective-focus-of-lettuce-lettuce-sandwich-butterhead-lettuce-vegetable-salad-food-lettuce-leaf-vegetable-superfood-spring-greens-thumbnail.png",
            "https://w7.pngwing.com/pngs/280/884/png-transparent-butterhead-lettuce-vegetable-iceberg-lettuce-salad-vegetable-leaf-vegetable-food-spinach-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "306",
        title: " Mint",
        description: "Aromatic and refreshing mint leaves, perfect for adding a burst of flavor to drinks, dishes, and desserts.",
        image: mint,
        price: "₹200/kg",
        oldPrice: "₹250/kg",
        quantity: "100 g",
        shelfLife: "1 week",
        farmer: "Anjali Sharma",
        manufacturer: "Herb Haven, Karnataka 560001. Lic. No. - 10024031001139.",
        sellerFSSAI: "24345678000129",
        marketedBy: "Mint Fresh, Delhi 110001.",
        healthBenefits: "Rich in vitamins A and C, and contains beneficial antioxidants. May aid digestion, relieve headaches, and improve oral health.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            mint,
            "https://w7.pngwing.com/pngs/293/524/png-transparent-mentha-spicata-patchouli-peppermint-flavor-mint-green-leaves-food-leaf-herbal-thumbnail.png",
            "https://www.pngwing.com/en/free-png-yoijn",
            "https://w7.pngwing.com/pngs/606/480/png-transparent-tea-lemon-balm-herb-mint-herbs-leaf-oregano-nature-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "307",
        title: " Yellow Zucchini",
        description: "Bright and flavorful yellow zucchini, perfect for grilling, sautéing, or adding a splash of color to salads and dishes.",
        image: zucchini,
        price: "₹100/kg",
        oldPrice: "₹130/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Sunil Mehta",
        manufacturer: "Sunny Harvest, Gujarat 382001. Lic. No. - 10024031001140.",
        sellerFSSAI: "24345678000130",
        marketedBy: "Veggie Delight, Mumbai 400001.",
        healthBenefits: "Low in calories and rich in vitamins A and C, and potassium. May support hydration, aid digestion, and improve heart health.",
        storageTemperature: "7-10°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            zucchini,
            "https://w7.pngwing.com/pngs/826/797/png-transparent-vegetable-food-zucchini-melon-ingredient-green-vegetables-food-recipe-eating-thumbnail.png",
            "https://w7.pngwing.com/pngs/65/88/png-transparent-sliced-cucumber-juice-pickled-cucumber-vegetable-food-cut-cucumber-slices-natural-foods-tomato-eating-thumbnail.png",
            "https://w7.pngwing.com/pngs/921/338/png-transparent-cucumber-zucchini-pattypan-squash-muskmelon-vegetable-eggplant-food-melon-vegetables-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "308",
        title: " Parsley",
        description: "Fragrant and versatile fresh parsley, ideal for garnishing, flavoring dishes, and adding a fresh, herbal note to salads and soups.",
        image: parsley,
        price: "₹180/kg",
        oldPrice: "₹220/kg",
        quantity: "100 g",
        shelfLife: "1 week",
        farmer: "Rita Patel",
        manufacturer: "Herb Fields, Uttar Pradesh 201001. Lic. No. - 10024031001141.",
        sellerFSSAI: "24345678000131",
        marketedBy: "Herbal Fresh, Chennai 600001.",
        healthBenefits: "Rich in vitamins A, C, and K, and contains antioxidants and beneficial compounds. May support immune health, aid digestion, and improve skin health.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            parsley,
            "https://w7.pngwing.com/pngs/901/942/png-transparent-green-leaf-illustration-parsley-coriander-vegetable-parsley-leaf-vegetable-food-leaf-thumbnail.png",
            "https://w7.pngwing.com/pngs/901/942/png-transparent-green-leaf-illustration-parsley-coriander-vegetable-parsley-leaf-vegetable-food-leaf-thumbnail.png",
            "https://w7.pngwing.com/pngs/544/610/png-transparent-celery-vegetable-chinese-cabbage-brussels-sprout-grandma-natural-foods-leaf-vegetable-food-thumbnail.png"
        ]
        , category: "Exotics"
    },
    {
        id: "309",
        title: " Capsicum",
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
        , category: "Exotics"
    },
    
    
    
    
    

    
    

];
export default ExoticsCardData