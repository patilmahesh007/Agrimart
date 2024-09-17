import Milk from "./../images/dairycard/milk.png";
import paneer from "../../src/images/card/paneer.png"
import butter from "../../src/images/card/butter.png"
import shikhnda from "../../src/images/card/shrikhad.png"
import cream from "../../src/images/card/cream.png"
import ghee from "../../src/images/card/ghee.png"


const cardData = [

    {
        id: "400",
        title: "Dairy",
        description: "A delicious, sweet fruit available in various colors.",
        image: Milk,
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
        imageSlider: [Milk, "https://i.pinimg.com/236x/4c/7e/22/4c7e22ad99ab10035ffa370bff1978a1.jpg",
            "https://w7.pngwing.com/pngs/600/735/png-transparent-coffee-milk-milk-bottle-milk-thumbnail.png",
            "https://w7.pngwing.com/pngs/497/643/png-transparent-on-a-milk-carton-on-a-milk-carton-food-milk-food-breakfast-logo-thumbnail.png"]
    },
    {
        id: "401",
        title: "Fresh Paneer",
        description: "Soft and creamy paneer, ideal for a variety of dishes including curries, snacks, and grilling. Made from high-quality milk.",
        image: paneer,
        price: "₹300/kg",
        oldPrice: "₹350/kg",
        quantity: "250 g",
        shelfLife: "1 week",
        farmer: "Amit Singh",
        manufacturer: "Dairy Delight, Punjab 140001. Lic. No. - 10024031001142.",
        sellerFSSAI: "24345678000132",
        marketedBy: "Cheese & More, Delhi 110001.",
        healthBenefits: "Rich in protein and calcium, and a good source of vitamins B12 and D. May support muscle health, bone strength, and overall growth.",
        storageTemperature: "0-4°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            paneer,
            "https://w7.pngwing.com/pngs/457/567/png-transparent-soy-milk-stuffing-tofu-soybean-milk-cream-food-recipe-thumbnail.png",
            "https://w7.pngwing.com/pngs/439/168/png-transparent-bryndza-goat-cheese-queso-blanco-feta-beyaz-peynir-food-recipe-cheese-thumbnail.png",
            "https://w7.pngwing.com/pngs/632/486/png-transparent-milk-malai-cream-paneer-ghee-milk-food-cheese-cream-cheese-thumbnail.png"
        ]
    },
    {
        id: "403",
        title: "Fresh Butter",
        description: "Rich and creamy fresh butter, perfect for cooking, baking, and spreading. Made from high-quality dairy cream for a smooth texture and rich flavor.",
        image: butter,
        price: "₹400/kg",
        oldPrice: "₹450/kg",
        quantity: "250 g",
        shelfLife: "3 months",
        farmer: "Sandeep Kumar",
        manufacturer: "Dairy Gold, Maharashtra 400001. Lic. No. - 10024031001143.",
        sellerFSSAI: "24345678000133",
        marketedBy: "Butter Delight, Bangalore 560001.",
        healthBenefits: "Provides essential fatty acids and vitamins A and D. May support healthy skin, improve nutrient absorption, and provide energy.",
        storageTemperature: "0-4°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            butter,
            "https://w7.pngwing.com/pngs/76/625/png-transparent-emmental-cheese-swiss-cuisine-swiss-cheese-graphy-cheese-in-kind-cheese-creative-market-american-cheese-thumbnail.png",
            "https://w7.pngwing.com/pngs/288/479/png-transparent-gruyere-cheese-processed-cheese-parmigiano-reggiano-cheese-food-cheese-beyaz-peynir-thumbnail.png",
            "https://w7.pngwing.com/pngs/216/1015/png-transparent-piled-of-sliced-cheese-milk-blue-cheese-gouda-cheese-cheddar-cheese-cheese-laminations-food-cheese-orange-thumbnail.png"
        ]
    },
    {
        id: "405",
        title: "shikhnda",
        description: "A rich and creamy Indian dessert made from reduced milk, flavored with cardamom, and garnished with nuts. A traditional sweet treat often enjoyed during festivals and special occasions.",
        image: shikhnda,
        price: "₹150/500g",
        oldPrice: "₹180/500g",
        quantity: "500 g",
        shelfLife: "5 days",
        manufacturer: "Sweet Delights, Mumbai 400001. Lic. No. - 10024031001142.",
        sellerFSSAI: "24345678000132",
        marketedBy: "Delightful Desserts, Mumbai 400002.",
        ingredients: "Milk, sugar, cardamom, saffron, almonds, pistachios.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            shikhnda,
            "https://w7.pngwing.com/pngs/557/35/png-transparent-bowl-of-white-cream-ice-cream-frozen-yogurt-milk-yoghurt-breakfast-yogurt-cream-food-fruit-thumbnail.png",
            "https://w7.pngwing.com/pngs/708/957/png-transparent-cream-on-brown-ceramic-bowl-with-vegetable-leaf-illustration-sour-cream-fajita-gratin-omelette-cream-cream-food-recipe-thumbnail.png",
            "https://w7.pngwing.com/pngs/685/250/png-transparent-creme-fraiche-sour-cream-yoghurt-whipped-cream-joghurt-cream-food-flavor-thumbnail.png"
        ]
    },
    {
        id: "406",
        title: "Fresh Cream",
        description: "Rich and creamy fresh cream, ideal for cooking, baking, and desserts. Adds a smooth and luscious texture to a variety of dishes.",
        image: cream,
        price: "₹120/250g",
        oldPrice: "₹150/250g",
        quantity: "250 g",
        shelfLife: "7 days",
        manufacturer: "Dairy Delight, Pune 411001. Lic. No. - 10024031001143.",
        sellerFSSAI: "24345678000133",
        marketedBy: "Creamy Treats, Pune 411002.",
        ingredients: "Fresh cream",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            cream,
            "https://w7.pngwing.com/pngs/130/948/png-transparent-gelato-chocolate-ice-cream-sundae-neapolitan-ice-cream-ice-cream-cream-food-frozen-dessert-thumbnail.png",
            "https://w7.pngwing.com/pngs/108/560/png-transparent-three-assorted-flavor-sundaes-in-cups-ice-cream-sundae-smoothie-ice-pop-chocolate-ice-cream-sundae-cream-food-frozen-dessert-thumbnail.png",
            "https://w7.pngwing.com/pngs/477/889/png-transparent-ice-cream-cones-chocolate-ice-cream-sundae-ice-cream-cream-food-frozen-dessert-thumbnail.png"
        ]
    },
    {
        id: "407",
        title: "Clarified Butter",
        description: "Pure clarified butter, also known as ghee, made by slowly simmering butter to remove the milk solids and water. Perfect for cooking, baking, and adding a rich flavor to dishes.",
        image: ghee,
        price: "₹250/500g",
        oldPrice: "₹300/500g",
        quantity: "500 g",
        shelfLife: "6 months",
        manufacturer: "Pure Ghee Co., Delhi 110001. Lic. No. - 10024031001144.",
        sellerFSSAI: "24345678000134",
        marketedBy: "Ghee Delights, Delhi 110002.",
        ingredients: "Butter",
        storageTemperature: "Room temperature",
        storageType: "Cool, dry place",
        imageSlider: [
            ghee,
            "https://w7.pngwing.com/pngs/869/612/png-transparent-delhi-flavor-jagan-industries-ghee-food-recipe-photography-thumbnail.png",
            "https://w7.pngwing.com/pngs/17/19/png-transparent-clarified-butter-cream-ghee-custard-butter-cream-food-cooking-thumbnail.png",
            "https://w7.pngwing.com/pngs/543/510/png-transparent-ayurveda-condiment-flavor-organic-food-ghee-organic-food-ingredient-govinda-thumbnail.png"
        ]
    }
    




];

export default cardData;
