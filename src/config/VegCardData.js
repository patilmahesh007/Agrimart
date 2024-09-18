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
import bitter from "../../src/images/card/bitter.png"
import big_brinjal from "../../src/images/card/big_brinjal.png"
import french_beans from "../../src/images/card/french_beans.png"
import mushroom from "../../src/images/card/mushroom.png"
import papaya from "../../src/images/card/papaya.png"
import pumpkin from "../../src/images/card/pumpkin.png"



const VegCardData = [

    {
        id: "501",
        title: " Orange Carrots",
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
        , category: "vegetables"
    },
    {
        id: "511",
        title: " Ash Gourd ",
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
        , category: "vegetables"
    },
    {
        id: "512",
        title: " Baby Corn",
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
        , category: "vegetables"
    },
    {
        id: "513",
        title: "Beetroot",
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
        , category: "vegetables"
    },
    {
        id: "514",
        title: " Green Cabbage",
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
        , category: "vegetables"
    },
    {
        id: "515",
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
        , category: "vegetables"
    },
    {
        id: "516",
        title: " Bhindi",
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
        , category: "vegetables"
    },
    {
        id: "517",
        title: " Cauliflower",
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
        , category: "vegetables"
    },
    {
        id: "518",
        title: " Drumstick",
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
        , category: "vegetables"
    },
    {
        id: "519",
        title: " Bitter Gourd",
        description: "Fresh bitter gourd, also known as bitter melon, known for its distinct bitter taste and numerous health benefits. Ideal for curries, stir-fries, and juices.",
        image: bitter,
        price: "₹90/kg",
        oldPrice: "₹110/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Nisha Patel",
        manufacturer: "Bitter Greens Farm, Karnataka 560001. Lic. No. - 10024031001136.",
        sellerFSSAI: "24345678000126",
        marketedBy: "Herbal Fresh, Bangalore 560002.",
        healthBenefits: "Rich in vitamins C and A. Known for its potential to regulate blood sugar levels and support digestion. Contains antioxidants and may have anti-inflammatory properties.",
        storageTemperature: "8-12°C",
        storageType: "Cool, dry place",
        imageSlider: [
            bitter,
            "https://w7.pngwing.com/pngs/6/759/png-transparent-green-vegetable-bitter-melon-vegetable-beetroot-gourd-seed-bitter-gourd-leaf-vegetable-food-leaf-thumbnail.png",
            "https://w7.pngwing.com/pngs/110/772/png-transparent-bitter-melon-vegetable-food-chayote-health-vegetable-natural-foods-food-gourd-thumbnail.png",
            "https://w7.pngwing.com/pngs/198/229/png-transparent-vegetarian-cuisine-bitter-melon-broccoli-vegetable-bitter-gourd-natural-foods-leaf-vegetable-food-thumbnail.png"
        ]
        , category: "vegetables"
    },
    {
        id: "520",
        title: "Big Brinjal",
        description: "Fresh and large brinjals, also known as eggplants, perfect for grilling, stuffing, or adding to curries. Known for their rich flavor and versatility in cooking.",
        image: big_brinjal,
        price: "₹70/kg",
        oldPrice: "₹90/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Rajiv Mehta",
        manufacturer: "Veggie Harvest, Tamil Nadu 600001. Lic. No. - 10024031001137.",
        sellerFSSAI: "24345678000127",
        marketedBy: "Harvest Delights, Chennai 600002.",
        healthBenefits: "Rich in dietary fiber and antioxidants. May support heart health, aid in weight management, and improve digestion.",
        storageTemperature: "12-15°C",
        storageType: "Cool, dry place",
        imageSlider: [
            big_brinjal,
            "https://w7.pngwing.com/pngs/843/179/png-transparent-purple-eggplant-eggplant-vegetable-food-ingredient-broccoli-fresh-eggplant-purple-food-tomato-thumbnail.png",
            "https://w7.pngwing.com/pngs/169/423/png-transparent-three-black-eggplants-eggplant-dolma-vegetable-eggplant-leaf-vegetable-food-cabbage-thumbnail.png",
            "https://w7.pngwing.com/pngs/832/980/png-transparent-three-eggplants-illustration-eggplant-jalebi-tomato-urdu-dish-fresh-brinjal-natural-foods-food-fruit-thumbnail.png"
        ]
        , category: "vegetables"
    },
    {
        id: "521",
        title: " French Beans",
        description: "Crisp and tender French beans, ideal for stir-fries, salads, and as a side dish. Known for their delicate flavor and high nutritional content.",
        image: french_beans,
        price: "₹90/kg",
        oldPrice: "₹110/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Meera Gupta",
        manufacturer: "Green Harvest, Himachal Pradesh 171001. Lic. No. - 10024031001138.",
        sellerFSSAI: "24345678000128",
        marketedBy: "Fresh Veggie Co., Shimla 171002.",
        healthBenefits: "Rich in vitamins A, C, and K, and a good source of dietary fiber. May support digestive health, aid in weight management, and boost overall energy levels.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            french_beans,
            "https://w7.pngwing.com/pngs/929/1007/png-transparent-green-string-beans-green-bean-vegetable-garlic-green-beans-leaf-vegetable-food-recipe-thumbnail.png",
            "https://w7.pngwing.com/pngs/467/387/png-transparent-bunch-of-string-beans-green-bean-chili-con-carne-vegetable-tomato-green-beans-leaf-vegetable-food-cooking-thumbnail.png",
            "https://w7.pngwing.com/pngs/994/808/png-transparent-green-bean-mahlmann-beteiligungs-gmbh-common-bean-lima-bean-chinese-lettuce-scallion-bean-vegetarian-food-thumbnail.png"
        ]
        , category: "vegetables"
    },
    {
        id: "521",
        title: " Mushrooms",
        description: "Fresh and flavorful mushrooms, perfect for adding depth to soups, stews, stir-fries, and more. Known for their umami taste and versatility in cooking.",
        image: mushroom,
        price: "₹120/kg",
        oldPrice: "₹150/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Vikram Singh",
        manufacturer: "Mushroom Farm, Maharashtra 411001. Lic. No. - 10024031001139.",
        sellerFSSAI: "24345678000129",
        marketedBy: "Gourmet Greens, Pune 411002.",
        healthBenefits: "Rich in B vitamins, selenium, and antioxidants. May support immune function, heart health, and provide essential nutrients for overall well-being.",
        storageTemperature: "4-7°C",
        storageType: "Refrigerated storage",
        imageSlider: [
            mushroom,
            "https://w7.pngwing.com/pngs/387/908/png-transparent-two-brown-mushroom-illustration-common-mushroom-edible-mushroom-food-fungus-mushroom-eating-shiitake-mushroom-cloud-thumbnail.png",
            "https://w7.pngwing.com/pngs/858/297/png-transparent-common-mushroom-edible-mushroom-fungus-vegetable-mushroom-cream-soup-olive-thumbnail.png",
            "https://w7.pngwing.com/pngs/284/181/png-transparent-beige-mushroojms-common-mushroom-fungus-food-mushroom-poisoning-white-mushrooms-image-file-formats-shiitake-agaricaceae-thumbnail.png"
        ]
        , category: "vegetables"
    },
    {
        id: "522",
        title: "Papaya",
        description: "Ripe and juicy papayas, perfect for eating fresh, making smoothies, or adding to fruit salads. Known for their sweet flavor and health benefits.",
        image: papaya,
        price: "₹80/kg",
        oldPrice: "₹100/kg",
        quantity: "500 g",
        shelfLife: "1 week",
        farmer: "Geeta Sharma",
        manufacturer: "Tropical Fruits Ltd., Karnataka 560001. Lic. No. - 10024031001140.",
        sellerFSSAI: "24345678000130",
        marketedBy: "Sweet Harvest, Bangalore 560002.",
        healthBenefits: "High in vitamins A, C, and E. Contains enzymes like papain that aid digestion and reduce inflammation. May support skin health, boost the immune system, and aid in digestion.",
        storageTemperature: "10-15°C",
        storageType: "Cool, dry place",
        imageSlider: [
            papaya,
            "https://w7.pngwing.com/pngs/527/613/png-transparent-sliced-papaya-fruit-papaya-fruit-asian-pear-food-ripening-papaya-tropical-fruit-eating-green-papaya-thumbnail.png",
            "https://w7.pngwing.com/pngs/939/54/png-transparent-papaya-pawpaw-tropical-fruit-eating-papaya-s-leaf-vegetable-food-tropical-fruit-thumbnail.png",
            "https://w7.pngwing.com/pngs/20/861/png-transparent-papaya-food-fruit-papaya-green-papaya-superfood-papaya-peel-thumbnail.png"
        ]
        , category: "vegetables"
    },
    {
        id: "523",
        title: " Pumpkin",
        description: "Sweet and hearty pumpkins, perfect for soups, pies, and roasting. Known for their rich flavor and high nutritional value.",
        image: pumpkin,
        price: "₹60/kg",
        oldPrice: "₹80/kg",
        quantity: "1 kg",
        shelfLife: "2 weeks",
        farmer: "Rajeev Kumar",
        manufacturer: "Harvest Fields, Uttar Pradesh 201001. Lic. No. - 10024031001141.",
        sellerFSSAI: "24345678000131",
        marketedBy: "Pure Harvest, Lucknow 226001.",
        healthBenefits: "Rich in vitamins A and C, and a good source of fiber. May support immune health, vision, and digestive function. Contains antioxidants and promotes healthy skin.",
        storageTemperature: "10-15°C",
        storageType: "Cool, dry place",
        imageSlider: [
            pumpkin,
            "https://w7.pngwing.com/pngs/181/1002/png-transparent-mashed-pumpkin-vegetable-bhaji-fritter-pumpkin-food-orange-cooking-thumbnail.png",
            "https://w7.pngwing.com/pngs/491/741/png-transparent-pumpkin-food-gourd-hemp-oil-guava-pumpkin-natural-foods-food-orange-thumbnail.png",
            "https://w7.pngwing.com/pngs/658/547/png-transparent-pumpkin-pie-bisque-food-pumpkin-natural-foods-orange-gourd-thumbnail.png"
        ]
        , category: "vegetables"
    },



















];
export default VegCardData;
