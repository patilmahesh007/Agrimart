import Apple from "./../images/fruitcard/apple.png";
import Banana from "./../images/fruitcard/banana.png";
import Grapes from "./../images/fruitcard/grapes.png";
import Kiwi from "./../images/fruitcard/kiwi.png";
import Mango from "./../images/fruitcard/mango.png";
import Orange from "./../images/fruitcard/orange.png";
import Pineapple from "./../images/fruitcard/pinea.png";
import Strawberry from "./../images/fruitcard/strawberry.png";
import Tomato from "./../images/fruitcard/tomato.png";
import Watermelon from "./../images/fruitcard/watermellon.png";
import Lime from "./../images/fruitcard/lime.png";
import Lemon from "./../images/fruitcard/lemmon.png";
import Pear from "./../images/fruitcard/pear.png";
import Peach from "./../images/fruitcard/peach.png";
import Pomegranate from "./../images/fruitcard/pomoganate.png";
import Avocado from "./../images/fruitcard/avacardo.png";
import Plum from "./../images/fruitcard/plum.png";
import Blueberry from "./../images/fruitcard/Blueberry.png";
import Raspberry from "./../images/fruitcard/raspberry.png";
import Coconut from "./../images/fruitcard/coconut.png";



const cardData = [

    {
        id: "2",
        title: "Apple",
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
        imageSlider: [Apple, "https://i.pinimg.com/236x/4f/6c/c4/4f6cc46e50e7a0ff21c5e0a77423b0b5.jpg", "https://i.pinimg.com/236x/fe/0d/1d/fe0d1d36996a0e72931d080983773c1e.jpg", "https://i.pinimg.com/236x/62/a8/bd/62a8bd58fbc9bb5d7e5517ac0d2d1ce6.jpg"]
        , category: "Fruits"
    },
    {
        id: "3",
        title: "Mango",
        description: "A tropical fruit known for its sweet and tangy flavor.",
        image: Mango,
        price: "₹120/kg",
        oldPrice: "₹140/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Balram Singh",
        manufacturer: "Pune Agricultural Produce Union, Pune 411 028. Lic. No. - 10034041001212.",
        sellerFSSAI: "15348799000102",
        marketedBy: "Sunshine Farms, Sector 20, Noida 201301.",
        healthBenefits: "Rich in vitamin C and vitamin A, promotes immune health, improves digestion, and supports healthy skin and eyes.",
        storageTemperature: "10-13°C",
        storageType: "Room Temperature",
        imageSlider: [Mango, "https://i.pinimg.com/564x/db/2b/23/db2b236a2ad959b2720acebdf07263f4.jpg", "https://i.pinimg.com/236x/22/a4/20/22a4207169e8aa7d5714429a00a638ba.jpg", "https://i.pinimg.com/236x/9f/de/2f/9fde2f0c5805a3fc926709e4115f234c.jpg"]
        , category: "Fruits"
    },
    {
        id: "4",
        title: "Watermelon",
        description: "A large, juicy fruit with a sweet and refreshing taste.",
        image: Watermelon,
        price: "₹60/piece",
        oldPrice: "₹70/piece",
        quantity: "1 piece",
        shelfLife: "2 weeks",
        farmer: "Chandan Yadav",
        manufacturer: "Nashik Farmers Association, Nashik 422 001. Lic. No. - 10044051001313.",
        sellerFSSAI: "16357891000103",
        marketedBy: "Farmers Choice, Gandhi Nagar, Ahmedabad 382010.",
        healthBenefits: "Rich in vitamins A, B6, and C, contains antioxidants, promotes hydration, and may help reduce muscle soreness.",
        storageTemperature: "10-15°C",
        storageType: "Room Temperature",
        imageSlider: [Watermelon, "https://i.pinimg.com/236x/1e/a7/a9/1ea7a9f76ef5487ed6f0e04286a48126.jpg", "https://i.pinimg.com/236x/3c/8e/1a/3c8e1a7fbde38b0a2f2c92190a83be99.jpg", "https://i.pinimg.com/236x/f5/52/25/f5522551c5a750869e2453979df67264.jpg"]
        , category: "Fruits"
    },
    {
        id: "5",
        title: "Banana",
        description: "A yellow, curved fruit known for its potassium content.",
        image: Banana,
        price: "₹40/dozen",
        oldPrice: "₹50/dozen",
        quantity: "1 dozen",
        shelfLife: "1 week",
        farmer: "Dheeraj Patel",
        manufacturer: "Kolhapur Fruit Farmers Union, Kolhapur 416 003. Lic. No. - 10054061001414.",
        sellerFSSAI: "27348992000104",
        marketedBy: "Bharat Agro Farms, MG Road, Bengaluru 560001.",
        healthBenefits: "High in potassium, supports heart health, aids digestion, and provides quick energy.",
        storageTemperature: "12-15°C",
        storageType: "Room Temperature",
        imageSlider: [Banana, "https://i.pinimg.com/236x/aa/3d/38/aa3d3807d373d42911fe462ea9233be5.jpg", "https://i.pinimg.com/236x/8a/fc/02/8afc025af5d60332fcdea4190a067c84.jpg", "https://i.pinimg.com/236x/8e/32/02/8e320293fb03c3aed13b27a744a93a36.jpg"]
        , category: "Fruits"
    },
    {
        id: "6",
        title: "Pineapple",
        description: "A tropical fruit with a sweet and tangy flavor and a spiky exterior.",
        image: Pineapple,
        price: "₹100/piece",
        oldPrice: "₹120/piece",
        quantity: "1 piece",
        shelfLife: "2 weeks",
        farmer: "Ganesh Sharma",
        manufacturer: "Ratnagiri Farmers Co-operative, Ratnagiri 415 612. Lic. No. - 10064071001515.",
        sellerFSSAI: "28356093000105",
        marketedBy: "Citrus Delight, Fort Kochi, Ernakulam 682001.",
        healthBenefits: "Rich in vitamin C, manganese, and digestive enzymes like bromelain, which can aid digestion and reduce inflammation.",
        storageTemperature: "7-10°C",
        storageType: "Refrigeration",
        imageSlider: [Pineapple, "https://i.pinimg.com/236x/88/d0/c9/88d0c95072c01cebab90d54ee6b79a20.jpg", "https://i.pinimg.com/236x/e8/c8/5f/e8c85f4af93336cf6dcc20e1aef8e075.jpg", "https://i.pinimg.com/236x/f0/eb/8b/f0eb8bffe6f5231017f40e4b0f504a04.jpg"]
    },
    {
        id: "7",
        title: "Grapes",
        description: "Small, round fruits that come in various colors and flavors.",
        image: Grapes,
        price: "₹80/kg",
        oldPrice: "₹90/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Hari Prasad",
        manufacturer: "Solapur Grapes Association, Solapur 413 001. Lic. No. - 10074081001616.",
        sellerFSSAI: "29367194000106",
        marketedBy: "Vineyards Direct, MG Road, Hyderabad 500001.",
        healthBenefits: "High in antioxidants like resveratrol, supports heart health, and may help reduce the risk of certain cancers.",
        storageTemperature: "0-4°C",
        storageType: "Refrigeration",
        imageSlider: [Grapes, "https://i.pinimg.com/236x/cc/15/56/cc1556c25c11da7bd7341e4a0dbac27d.jpg", "https://i.pinimg.com/236x/a4/49/b5/a449b5d74eb1394c6d8ef737732ed883.jpg", "https://i.pinimg.com/236x/c0/09/30/c009304c95cedc705b30f18ee83ffbe8.jpg"]
        , category: "Fruits"
    },
    {
        id: "8",
        title: "Pomegranate",
        description: "A sweet and tart fruit with numerous seeds surrounded by a juicy membrane.",
        image: Pomegranate,
        price: "₹150/kg",
        oldPrice: "₹170/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Jagdish Gupta",
        manufacturer: "Kaira District Co-operative Milk Producers' Union Limited, Anand 388 001. Lic. No. - 10014021001010.",
        sellerFSSAI: "13323999000106",
        marketedBy: "Orchard Fresh,  Sector 15, Chandigarh 160015.",
        healthBenefits: "Rich in antioxidants, vitamin C, and anti-inflammatory compounds, supports heart health, and may lower blood pressure.",
        storageTemperature: "5-7°C",
        storageType: "Refrigeration",
        imageSlider: [Pomegranate, "https://i.pinimg.com/236x/c2/b1/09/c2b10932d82f89d8f044556b5e0f1f53.jpg", "https://i.pinimg.com/236x/af/6f/c8/af6fc8e19ae0dd8d23afc3173340569b.jpg", "https://i.pinimg.com/236x/41/63/36/4163366ab0efb473609bee6ae8e5e626.jpg"]
        , category: "Fruits"
    },
    {
        id: "9",
        title: "Avocado",
        description: "A creamy fruit often used in salads and guacamole.",
        image: Avocado,
        price: "₹100/piece",
        oldPrice: "₹120/piece",
        quantity: "1 piece",
        shelfLife: "1 week",
        farmer: "Kamaljeet Singh",
        manufacturer: "Chennai Farmers Co-operative, Chennai 600 001. Lic. No. - 10084091001717.",
        sellerFSSAI: "30378295000107",
        marketedBy: "Green Heaven, Juhu, Mumbai 400049.",
        healthBenefits: "Rich in healthy fats, fiber, and vitamins C, E, K, and B6. Supports heart health and helps improve digestion.",
        storageTemperature: "4-6°C",
        storageType: "Refrigeration",
        imageSlider: [Avocado, "https://i.pinimg.com/236x/2b/27/41/2b2741950380c041ca072911e14671f6.jpg", "https://i.pinimg.com/474x/cf/18/ea/cf18ea0da564afac0fbed7c1266436b4.jpg", "https://i.pinimg.com/474x/7f/96/35/7f96358283c6d96d3844940ca7292519.jpg"]
        , category: "Fruits"
    },
    {
        id: "10",
        title: "Kiwi",
        description: "A fuzzy fruit with a sweet and tangy flavor and green flesh.",
        image: Kiwi,
        price: "₹120/kg",
        oldPrice: "₹140/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Mahesh Verma",
        manufacturer: "Bangalore Fruit Co-operative, Bangalore 560 001. Lic. No. - 10094101001818.",
        sellerFSSAI: "31389396000108",
        marketedBy: "Fruitland, Whitefield, Bengaluru 560066.",
        healthBenefits: "High in vitamin C, fiber, and antioxidants, promotes digestion, supports immune health, and may improve skin texture.",
        storageTemperature: "0-4°C",
        storageType: "Refrigeration",
        imageSlider: [Kiwi, "https://i.pinimg.com/236x/93/10/99/931099fd4d10b25cd48c2e2f92ccc711.jpg", "https://i.pinimg.com/236x/aa/22/b3/aa22b3810e79c0943e5ea09978285dd9.jpg", "https://i.pinimg.com/236x/cc/9b/71/cc9b71654c5c9aef219f348c42eefc3d.jpg"]
        , category: "Fruits"
    },
    {
        id: "11",
        title: "Orange",
        description: "A citrus fruit with a sweet and tangy flavor and a vibrant orange color.",
        image: Orange,
        price: "₹70/kg",
        oldPrice: "₹80/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Naveen Raj",
        manufacturer: "Nagpur Citrus Farmers Union, Nagpur 440 001. Lic. No. - 10104111001919.",
        sellerFSSAI: "32490497000109",
        marketedBy: "Fresh Market, Sector 12, Jaipur 302001.",
        healthBenefits: "Rich in vitamin C, fiber, and antioxidants. Supports immune health, improves skin health, and aids in iron absorption.",
        storageTemperature: "4-8°C",
        storageType: "Refrigeration",
        imageSlider: [Orange, "https://i.pinimg.com/736x/3c/bf/ec/3cbfec1259635898efae5b57ea3ddea3.jpg", "https://i.pinimg.com/236x/87/42/c5/8742c5ecf0e2312af48a75e79208b8ac.jpg", "https://i.pinimg.com/236x/01/81/6d/01816da33407be732db0c4a03baa4cad.jpg"]
        , category: "Fruits"
    },
    {
        id: "12",
        title: "Peach",
        description: "A juicy, fuzzy fruit with a sweet and slightly tart flavor.",
        image: Peach,
        price: "₹90/kg",
        oldPrice: "₹110/kg",
        shelfLife: "1 week",
        farmer: "Aarti Devi",
        manufacturer: "Ahmedabad Peach Farmers Association, Ahmedabad 380 001. Lic. No. - 10114121002020.",
        sellerFSSAI: "33491598000110",
        healthBenefits: "Rich in vitamin C, fiber, and antioxidants. Supports immune health, improves skin health, and aids in iron absorption.",
        storageTemperature: "4-8°C",
        storageType: "Refrigeration",
        imageSlider: [Peach, "https://i.pinimg.com/236x/b0/7c/55/b07c556c96fc5de32fe2bd3e85467c49.jpg", "https://i.pinimg.com/236x/00/2f/de/002fde89083bd17e076eb8ad96258bf2.jpg", "https://i.pinimg.com/236x/68/32/37/683237ea429c8a69c7633293aec355ba.jpg"]
        , category: "Fruits"
    },
    {
        id: "13",
        title: "Pear",
        description: "A sweet and juicy fruit with a smooth texture and subtle flavor.",
        image: Pear,
        price: "₹90/kg",
        oldPrice: "₹110/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Pooja Yadav",
        manufacturer: "Lucknow Fruit Farmers Union, Lucknow 226 001. Lic. No. - 10124131002121.",
        sellerFSSAI: "34492699000111",
        marketedBy: "Royal Orchards, Sector 5, Gurugram 122001.",
        healthBenefits: "Rich in fiber and vitamin C, supports digestion, promotes heart health, and may help in weight management.",
        storageTemperature: "2-5°C",
        storageType: "Refrigeration",
        imageSlider: [Pear, "https://i.pinimg.com/236x/6f/96/ff/6f96ff54e62e980f844282086efaf0c8.jpg", "https://i.pinimg.com/236x/8b/d6/c3/8bd6c3c2dd62603241c615ebf1c790de.jpg", "https://i.pinimg.com/236x/df/4c/d0/df4cd0ca8514cf745151f94cc4d8c945.jpg"]
    },
    {
        id: "14",
        title: "Plum",
        description: "A small, round fruit with a juicy interior and a sweet-tart taste.",
        image: Plum,
        price: "₹70/kg",
        oldPrice: "₹90/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Chetan Desai",
        manufacturer: "Patna Fruit Co-operative, Patna 800 001. Lic. No. - 10134141002222.",
        sellerFSSAI: "35493700000112",
        marketedBy: "Plum Valley, Thane 400601.",
        healthBenefits: "High in fiber, antioxidants, and vitamin C. Supports digestion and may help reduce the risk of heart disease.",
        storageTemperature: "0-4°C",
        storageType: "Refrigeration",
        imageSlider: [Plum, "https://i.pinimg.com/474x/65/7d/21/657d210da9b4ca89c2675c0241fd72f0.jpg", "https://i.pinimg.com/236x/26/9f/87/269f87f8ae82debc2d1bdd308b743124.jpg", "https://i.pinimg.com/474x/cc/20/7a/cc207ab2d9d7c290cdb856fc056d0092.jpg"]
        , category: "Fruits"
    },
    {
        id: "15",
        title: "Strawberry",
        description: "A bright red fruit with a sweet flavor and juicy texture.",
        image: Strawberry,
        price: "₹150/kg",
        oldPrice: "₹170/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Diksha Sharma",
        manufacturer: "Ooty Strawberry Co-operative, Ooty 643 001. Lic. No. - 10144151002323.",
        sellerFSSAI: "36494801000113",
        marketedBy: "Mountain Fresh, Alwar 301001.",
        healthBenefits: "High in vitamin C, manganese, and antioxidants. Supports heart health and may help regulate blood sugar levels.",
        storageTemperature: "2-5°C",
        storageType: "Refrigeration",
        imageSlider: [Strawberry, "https://i.pinimg.com/236x/fe/2d/91/fe2d91cb38550492a602cf64eaa25f8f.jpg", "https://i.pinimg.com/236x/69/80/46/69804692233011ad9df7d3e68b740338.jpg", "https://i.pinimg.com/736x/0a/11/22/0a1122befc79876e02b80b70e2f008e7.jpg"]
        , category: "Fruits"
    },
    {
        id: "16",
        title: "Blueberry",
        description: "A small, round, and sweet fruit with a deep blue color.",
        image: Blueberry,
        price: "₹150/kg",
        oldPrice: "₹170/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Ekta Yadav",
        manufacturer: "Shimla Fruit Co-operative, Shimla 171 001. Lic. No. - 10154161002424.",
        sellerFSSAI: "37495902000114",
        marketedBy: "North Harvest, Faridabad 121002.",
        healthBenefits: "Rich in antioxidants, vitamins C and K. Supports brain health and may help reduce oxidative stress.",
        storageTemperature: "0-2°C",
        storageType: "Refrigeration",
        imageSlider: [Blueberry, "https://i.pinimg.com/236x/3b/8a/e3/3b8ae356d3b4b5213674bcb4813d012c.jpg", "https://i.pinimg.com/474x/b7/f7/68/b7f768d849e0cfd07ce9aab1ff6ba942.jpg", "https://i.pinimg.com/236x/c7/50/80/c75080d4faa3719f012ae229b0636623.jpg"]
        , category: "Fruits"
    },
    {
        id: "17",
        title: "Raspberry",
        description: "A small, red, and juicy fruit with a tart flavor.",
        image: Raspberry,
        price: "₹180/kg",
        oldPrice: "₹200/kg",
        quantity: "1 kg",
        shelfLife: "1 week",
        farmer: "Farhan Qureshi",
        manufacturer: "Dehradun Farmers Co-operative, Dehradun 248 001. Lic. No. - 10164171002525.",
        sellerFSSAI: "38496003000115",
        marketedBy: "Fruit Haven, Shimla 171001.",
        healthBenefits: "High in fiber, antioxidants, and vitamin C. Supports weight loss and helps reduce inflammation.",
        storageTemperature: "0-2°C",
        storageType: "Refrigeration",
        imageSlider: [Raspberry, "https://i.pinimg.com/236x/ca/65/d1/ca65d16961f96b211fa712a3829c233b.jpg", "https://i.pinimg.com/236x/53/04/a2/5304a23c9d9e04eb3dc477918080ac82.jpg", "https://i.pinimg.com/474x/13/a2/d9/13a2d9fb26e3fc587b94c6ca0d50476c.jpg"]
    },
    {
        id: "18",
        title: "Coconut",
        description: "A tropical fruit with a hard shell and sweet, white flesh.",
        image: Coconut,
        price: "₹50/piece",
        oldPrice: "₹60/piece",
        quantity: "1 piece",
        shelfLife: "1 month",
        farmer: "Govind Naidu",
        manufacturer: "Kerala Coconut Farmers Co-operative, Kerala 695 001. Lic. No. - 10174181002626.",
        sellerFSSAI: "39497104000116",
        marketedBy: "Tropical Farms, Kanyakumari 629702.",
        healthBenefits: "High in healthy fats, promotes heart health, and supports brain function.",
        storageTemperature: "10-15°C",
        storageType: "Room Temperature",
        imageSlider: [Coconut, "https://i.pinimg.com/236x/3e/8a/ca/3e8acaef62cbdf186d5bed0ab97eaae6.jpg", "https://i.pinimg.com/236x/b9/27/85/b92785eb493a6ff6aaffa413d8cef9c5.jpg", "https://i.pinimg.com/236x/55/9b/c9/559bc95d19ed05f1caaec03f1a606e7b.jpg"]
        , category: "Fruits"
    },
    {
        id: "19",
        title: "Lemon",
        description: "A small, yellow citrus fruit with a sour taste.",
        image: Lemon,
        price: "₹40/kg",
        oldPrice: "₹50/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Harish Patil",
        manufacturer: "Mumbai Citrus Farmers Union, Mumbai 400 001. Lic. No. - 10184191002727.",
        sellerFSSAI: "40498205000117",
        marketedBy: "Sunny Orchards, Viman Nagar, Pune 411014.",
        healthBenefits: "Rich in vitamin C, supports immune health, aids digestion, and promotes hydration.",
        storageTemperature: "8-12°C",
        storageType: "Room Temperature",
        imageSlider: [Lemon, "https://i.pinimg.com/474x/2f/c2/27/2fc227f61e59bdb879b44e0c3a3fff2b.jpg", "https://i.pinimg.com/474x/2f/c2/27/2fc227f61e59bdb879b44e0c3a3fff2b.jpg", "https://i.pinimg.com/236x/00/32/0e/00320edebcc5f7f671d7b9e8be498013.jpg"]
        , category: "Fruits"
    },
    {
        id: "20",
        title: "Lime",
        description: "A small, green citrus fruit with a tart and sour flavor.",
        image: Lime,
        price: "₹30/kg",
        oldPrice: "₹40/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Indira Gupta",
        manufacturer: "Goa Fruit Co-operative, Goa 403 001. Lic. No. - 10194201002828.",
        sellerFSSAI: "41499306000118",
        marketedBy: "Tropical Greens, Panaji 403001.",
        healthBenefits: "Rich in vitamin C and antioxidants, supports immune health and helps improve skin quality.",
        storageTemperature: "8-12°C",
        storageType: "Room Temperature",
        imageSlider: [Lime, "https://i.pinimg.com/236x/0f/54/df/0f54dff32ab63edc6b5211788828fbbb.jpg", "https://i.pinimg.com/236x/62/fe/5f/62fe5f0d859ecb4a51f1a7fd7ab08d35.jpg", "https://i.pinimg.com/474x/1c/de/2d/1cde2dd7fbba100a1ad412b5d9814951.jpg"]
        , category: "Fruits"
    }, {
        id: "1",
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
        imageSlider: [Tomato, "https://i.pinimg.com/236x/b0/b5/76/b0b5769b3273e0b2d49ae7dd454b67b3.jpg", "https://i.pinimg.com/236x/88/5b/5d/885b5d0fc39413affbade0032039a449.jpg", "https://i.pinimg.com/236x/62/1b/27/621b27f1d0c2841688396128d99f1a4e.jpg"]
        , category: "Fruits"
    }
];

export default cardData;
