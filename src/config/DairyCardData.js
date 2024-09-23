import Milk from "./../images/dairycard/milk.png";
import paneer from "../../src/images/card/paneer.png"
import butter from "../../src/images/card/butter.png"
import shikhnda from "../../src/images/card/shrikhad.png"
import cream from "../../src/images/card/cream.png"
import ghee from "../../src/images/card/ghee.png"
import cheese from "../../src/images/card/cheese.png"
import ricotta from "../../src/images/card/ricotta.png"
import kefir from "../../src/images/card/kefir.png"
import whey from "../../src/images/card/whey.png"
import mascarpone from "../../src/images/card/mascarpone.png"
import buttermilk from "../../src/images/card/Buttermilk.png"
import milk_powder from "../../src/images/card/milk_powder.png"
import sour_cream from "../../src/images/card/sour_cream.png"

const cardData = [

    {
        id: "400",
        title: "Milk",
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
        , category: "Dairy"
    },
    {
        id: "401",
        title: " Paneer",
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
        title: " Butter",
        description: "Rich and creamy fresh butter, perfect for cooking, baking, and spreading. Made from high-quality Dairy cream for a smooth texture and rich flavor.",
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
        , category: "Dairy"
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
        , category: "Dairy"
    },
    {
        id: "406",
        title: " Cream",
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
        , category: "Dairy"
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
        , category: "Dairy"
    },
    {
        id: "408",
        title: "Artisan Cheese",
        description: "Aged artisan cheese with a rich, complex flavor profile. Perfect for cheese boards, cooking, or enjoying on its own.",
        image: cheese,  
        price: "₹600/250g",
        oldPrice: "₹700/250g",
        quantity: "250 g",
        shelfLife: "3 months",
        manufacturer: "Cheese Makers Co., Delhi 110001. Lic. No. - 10024031001145.",
        sellerFSSAI: "24345678000135",
        marketedBy: "Cheese Delights, Delhi 110002.",
        ingredients: "Milk, salt, cultures, enzymes",
        storageTemperature: "Refrigerated",
        storageType: "Keep in a sealed container",
        imageSlider: [
            cheese,
            "https://img.freepik.com/free-photo/close-up-variety-cheese-board_23-2148325923.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/close-up-delicious-mature-cheese-table_23-2148430166.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/front-view-delicious-fresh-cheese_23-2150166967.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "409",
        title: " Ricotta Cheese",
        description: "Creamy and mild, our fresh ricotta cheese is made from the finest milk. Perfect for lasagna, desserts, or spreading on toast.",
        image: ricotta,
        price: "₹350/250g",
        oldPrice: "₹400/250g",
        quantity: "250 g",
        shelfLife: "2 weeks",
        manufacturer: "Ricotta Delight Co., Delhi 110001. Lic. No. - 10024031001146.",
        sellerFSSAI: "24345678000136",
        marketedBy: "Cheese Delicacies, Delhi 110002.",
        ingredients: "Milk, vinegar, salt",
        storageTemperature: "Refrigerated",
        storageType: "Keep in a sealed container",
        imageSlider: [
            ricotta,  // replace with actual image URL
            "https://img.freepik.com/premium-photo/ricotta-italian-whey-cheese_521733-35032.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/top-view-fresh-sliced-cabbages-salad-with-greens-inside-brown-bowl-bright-blue-green-food-vegetable-salad-freshness-snack_140725-32743.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/premium-photo/ricotta-salata-grated_1114710-276404.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "410",
        title: "Organic Kefir",
        description: "A probiotic-rich fermented drink made from high-quality milk, our organic kefir is tangy and refreshing. Perfect for smoothies or as a nutritious drink on its own.",
        image: kefir,  // replace with actual image URL
        price: "₹300/500ml",
        oldPrice: "₹350/500ml",
        quantity: "500 ml",
        shelfLife: "2 weeks",
        manufacturer: "Kefir Wellness Co., Delhi 110001. Lic. No. - 10024031001147.",
        sellerFSSAI: "24345678000137",
        marketedBy: "Kefir Goodness, Delhi 110002.",
        ingredients: "Milk, kefir grains",
        storageTemperature: "Refrigerated",
        storageType: "Keep upright and sealed",
        imageSlider: [
            kefir,  // replace with actual image URL
            "https://img.freepik.com/premium-photo/glass-jar-milk-strawberries-glass-milk_1140440-25160.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/milk-products-Dairy-Dairy_144627-45965.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/ayran-drink-with-mint-cucumber-glass_123827-21607.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "411",
        title: "Premium Whey Protein",
        description: "Our premium whey protein is made from high-quality milk and is perfect for muscle recovery and boosting protein intake. Ideal for smoothies, baking, or protein shakes.",
        image: whey,  // replace with actual image URL
        price: "₹800/1kg",
        oldPrice: "₹900/1kg",
        quantity: "1 kg",
        shelfLife: "1 year",
        manufacturer: "Whey Power Co., Delhi 110001. Lic. No. - 10024031001148.",
        sellerFSSAI: "24345678000138",
        marketedBy: "Protein Plus, Delhi 110002.",
        ingredients: "Whey protein concentrate, natural flavor, sweetener",
        storageTemperature: "Room temperature",
        storageType: "Cool, dry place",                                         
        imageSlider: [
            whey,  // replace with actual image URL
            "https://img.freepik.com/premium-photo/vitamin-mineral-supplements_967966-26015.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/premium-photo/clean-minimalistic-setup-featuring-whey-protein-powder-bowl-with-gym-equipment_1300227-5033.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/premium-photo/vitamin-mineral-supplements_967966-26052.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "412",
        title: "Mascarpone ",
        description: "Rich and creamy, our authentic mascarpone cheese is perfect for desserts like tiramisu or as a luxurious addition to savory dishes.",
        image: mascarpone,  // replace with actual image URL
        price: "₹450/250g",
        oldPrice: "₹500/250g",
        quantity: "250 g",
        shelfLife: "2 weeks",
        manufacturer: "Mascarpone Co., Delhi 110001. Lic. No. - 10024031001149.",
        sellerFSSAI: "24345678000139",
        marketedBy: "Creamy Delights, Delhi 110002.",
        ingredients: "Cream, citric acid",
        storageTemperature: "Refrigerated",
        storageType: "Keep in a sealed container",
        imageSlider: [
            mascarpone,  // replace with actual image URL
            "https://img.freepik.com/premium-photo/homemade-layered-dessert-with-fresh-apricot-cream-cheese-yogurt-granola-rustic-background_220770-1989.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/swiss-meringue-cake-red-plate_114579-3057.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/premium-photo/pastry-with-green-leaf-top-it_865967-298279.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "413",
        title: "Buttermilk",
        description: "Our fresh buttermilk is tangy and refreshing, made from high-quality milk. Perfect for cooking, baking, or enjoying as a nutritious drink.",
        image: buttermilk,  // replace with actual image URL
        price: "₹150/500ml",
        oldPrice: "₹180/500ml",
        quantity: "500 ml",
        shelfLife: "5 days",
        manufacturer: "Buttermilk Farms, Delhi 110001. Lic. No. - 10024031001150.",
        sellerFSSAI: "24345678000140",
        marketedBy: "Healthy Sip Co., Delhi 110002.",
        ingredients: "Milk, culture",
        storageTemperature: "Refrigerated",
        storageType: "Keep sealed and upright",
        imageSlider: [
            buttermilk,  // replace with actual image URL
            "https://img.freepik.com/premium-photo/pouring-kefir-buttermilk-yogurt-vertical_1165532-92555.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/macadamia-white-milk-ready-serve_1150-42772.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/milk-products-tasty-healthy-Dairy-products-table-sour-cream-bowl-cottage-cheese-bowl-cream-bank-milk-jar-glass-bottle-glass_1150-23558.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "414",
        title: " Milk Powder",
        description: "Our full cream milk powder is made from high-quality milk, perfect for baking, cooking, or adding to beverages. Rich in flavor and nutrients.",
        image: milk_powder,  // replace with actual image URL
        price: "₹500/500g",
        oldPrice: "₹550/500g",
        quantity: "500 g",
        shelfLife: "18 months",
        manufacturer: "Dairy Powder Co., Delhi 110001. Lic. No. - 10024031001151.",
        sellerFSSAI: "24345678000141",
        marketedBy: "Milk Magic, Delhi 110002.",
        ingredients: "Whole milk",
        storageTemperature: "Room temperature",
        storageType: "Cool, dry place",
        imageSlider: [
            milk_powder,  // replace with actual image URL
            "https://img.freepik.com/premium-photo/milk-powder-closeup-shot_846485-12795.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/premium-psd/milk-replacer-transparent-background-isolated-image-generative-ai_862745-5135.jpg?w=740",
            "https://img.freepik.com/free-photo/woman-hand-holding-spoon-top-flour-bowl_114579-31382.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    },
    {
        id: "415",
        title: "Rich Sour Cream",
        description: "Our rich sour cream is smooth and tangy, made from fresh cream and cultures. Ideal for dips, dressings, and as a topping for various dishes.",
        image: sour_cream,  // replace with actual image URL
        price: "₹200/200g",
        oldPrice: "₹220/200g",
        quantity: "200 g",
        shelfLife: "3 weeks",
        manufacturer: "Sour Cream Co., Delhi 110001. Lic. No. - 10024031001152.",
        sellerFSSAI: "24345678000142",
        marketedBy: "Creamy Delights, Delhi 110002.",
        ingredients: "Cream, lactic acid bacteria",
        storageTemperature: "Refrigerated",
        storageType: "Keep sealed and chilled",
        imageSlider: [
            sour_cream,  // replace with actual image URL
            "https://img.freepik.com/free-vector/realistic-set-two-ceramic-bowls-with-white-sour-cream-yogurt-sauce-tartar-soft-cheese_1441-1850.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/delicious-banana-dessert_23-2150764406.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid",
            "https://img.freepik.com/free-photo/food-flavor-based-sour-cream_23-2151011162.jpg?uid=R163383201&ga=GA1.1.1649115650.1725956968&semt=ais_hybrid"
        ]
        , category: "Dairy"
    }












];

export default cardData;
