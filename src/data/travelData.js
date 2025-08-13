import SA1 from '../images/travelImages/South Africa/elephant.jpg'
import SA2 from '../images/travelImages/South Africa/beach.jpg'
import SA3 from '../images/travelImages/South Africa/mountain.jpg'
import SA4 from '../images/travelImages/South Africa/mountainGroup.jpg'
import SA5 from '../images/travelImages/South Africa/zebra.jpg'
import SA6 from '../images/travelImages/South Africa/ATV.jpg'
import SA7 from '../images/travelImages/South Africa/safari.jpg'
import SA8 from '../images/travelImages/South Africa/street.jpg'

//india pictures
import Ind1 from "../images/travelImages/India/cow2.jpg"
import ind2 from "../images/travelImages/India/harmandirSahib.jpg"
import ind3 from "../images/travelImages/India/block.jpg"
import ind4 from "../images/travelImages/India/juice.jpg"
import ind5 from "../images/travelImages/India/redFort.jpg"
import ind6 from "../images/travelImages/India/market.jpg"
import ind7 from "../images/travelImages/India/fire.jpg"
import ind8 from "../images/travelImages/India/plant.jpg"


//Puerto Rico
import PR1 from "../images/travelImages/PR/town.jpg"
import PR2 from "../images/travelImages/PR/digiBeach.jpg"
import PR3 from "../images/travelImages/PR/parrot.jpg"
import PR4 from "../images/travelImages/PR/nightView.jpg"
import PR5 from "../images/travelImages/PR/forest.jpg"
import PR6 from "../images/travelImages/PR/coconut.jpg"
import PR7 from "../images/travelImages/PR/culebra.JPG"


//Portugal 
import port1 from "../images/travelImages/Portugal/portMe.jpg"
import port2 from "../images/travelImages/Portugal/cows.jpg"
import port3 from "../images/travelImages/Portugal/town.JPG"
import port4 from "../images/travelImages/Portugal/water.jpg"
import port5 from "../images/travelImages/Portugal/view2.jpg"
import port6 from "../images/travelImages/Portugal/duck.JPG"
import port7 from "../images/travelImages/Portugal/rain.JPG"


import cali1 from "../images/travelImages/Cali/fullView.JPG"
import cali2 from "../images/travelImages/Cali/library.jpg"
import cali3 from "../images/travelImages/Cali/peacock.jpg"
import cali4 from "../images/travelImages/Cali/hollywoodSign.PNG"
import cali5 from "../images/travelImages/Cali/sunset.jpg"
import cali6 from "../images/travelImages/Cali/santaMonica.jpg"
import cali7 from "../images/travelImages/Cali/seagull.JPG"

const travels = [
    {
        id:1,
        name: "Cape Town, South Africa",
        description: "During my six-week study abroad in South Africa, I lived independently and fully immersed myself in the local culture. Visiting underprivileged communities gave me a profound new perspective and deepened my gratitude. Some of the highlights included experiencing an unforgettable safari, forging meaningful friendships, conquering a challenging mountain climb, and completing a rewarding internship with a small business. The entire experience was both eye-opening and empowering, leaving a lasting impact on me.",
        images: [SA1, SA2, SA3, SA4, SA5, SA6, SA7, SA8]
    },
    {
        id:2,
        name: "Punjab, India",
        description: "I visited India twice—once in winter and again in summer—and got to really dive into my culture and religion. It was a great way to reconnect with my roots and appreciate the simple, meaningful things in life. I toured the Golden Temple and other major gurudwaras around Punjab, experienced farm life, and enjoyed amazing food. (My fav was my baby cow, Coco) ",
        images: [Ind1, ind2, ind3, ind4, ind5,ind6, ind7, ind8]
    },{
        id:3,
        name: "Sao Miguel, Portugal",
        description: "I visited São Miguel in Portugal, this beautiful green island full of amazing nature—hot springs, volcanic lakes, tea plantations, and chill hiking spots. The fresh local food is amazing, and the peaceful vibe makes it a perfect place to slow down and enjoy simple beauty. Can you tell I’m obsessed with cows? They’re everywhere, just grazing in the fields and adding to the charm. It was truly an unforgettable experience.",
        images: [port1, port2, port3, port4, port5, port6, port7]
    },{
        id:4,
        name: "los Angeles, California",
        description: "I visited LA and explored a mix of iconic spots and hidden corners. I checked out Universal Studios, wandered through a beautiful garden filled with peacocks, and spent time at the zoo. I also visited Skid Row, one of the city’s poorer neighborhoods, which really showed me the stark contrast between wealth and hardship. Despite that, LA feels like a place full of opportunity, blending urban life, nature, and tons of activities in a unique way. The beaches, hiking trails, diverse food scene, and vibrant culture made it a dynamic and unforgettable trip.",
        images: [cali1,cali2,cali3,cali4, cali5, cali6, cali7]
    },{
        id:5,
        name: "Puerto Rico",
        description: "Puerto Rico was amazing! I love Hispanic culture, so it was great to fully immerse myself and practice my Spanish. The island’s rich history, colorful streets, lively music, and delicious food made every moment special. From the beaches to the old towns, the warmth of the people and the culture really stuck with me.",
        images: [PR1,PR2,PR3,PR4,PR5,PR6,PR7]
    }
]

export default travels