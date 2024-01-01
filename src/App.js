import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import product1 from "./assets/products/earbuds-prod-1.webp";
import product2 from "./assets/products/earbuds-prod-2.webp";
import product3 from "./assets/products/earbuds-prod-3.webp";
import product4 from "./assets/products/earbuds-prod-4.webp";
import product5 from "./assets/products/headphone-prod-1.webp";
import product6 from "./assets/products/headphone-prod-2.webp";
import product7 from "./assets/products/headphone-prod-3.webp";
import product8 from "./assets/products/headphone-prod-4.webp";
import product9 from "./assets/products/speaker-prod-1.webp";
import product10 from "./assets/products/speaker-prod-2.webp";
import product11 from "./assets/products/speaker-prod-3.webp";
import product12 from "./assets/products/speaker-prod-4.webp";
import product13 from "./assets/products/speaker-prod-5.webp";
import product14 from "./assets/products/watch-prod-1.webp";
import product15 from "./assets/products/watch-prod-2.webp";
import product16 from "./assets/products/watch-prod-3.webp";


function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route
            path="/product/1"
            element={
              <SingleProduct
                name={
                  "boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat"
                }
                price={1999}
                desc={
                  "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality. These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down. Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time."
                }
                source={product1}
                category={"Airpods"}
              />
            }
          />
          <Route
            path="/product/2"
            element={
              <SingleProduct
                name={
                  "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music"
                }
                price={1399}
                desc={
                  "Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound. Keep going on for long like the DC heroes with its 12 hours of capacity. Plug-in be prepared to be awe struck"
                }
                source={product2}
                category={"Airpods"}
              />
            }
          />
          <Route
            path="/product/3"
            element={
              <SingleProduct
                name={
                  "boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology"
                }
                price={1499}
                desc={
                  "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. Never miss a beat with boAt Signature Sound on our all-new boAt Airdopes so that every song that you listen to shines through. Plug-in and live the sound."
                }
                source={product3}
                category={"Airpods"}
              />
            }
          />
          <Route
            path="/product/4"
            element={
              <SingleProduct
                name={
                  "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound"
                }
                price={2499}
                desc={
                  "Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way. It has the IWP (Insta Wake N’ Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode. The TWS Airdopes 441 come equipped with 6mm drivers for immersive sound. It offers a seamless user experience via its capacitive touch controls"
                }
                source={product4}
                category={"Airpods"}
              />
            }
          />
          <Route
            path="/product/5"
            element={
              <SingleProduct
                name={
                  "Rockerz 450 Superman DC Edition - Wireless Bluetooth Headphone"
                }
                price={1999}
                desc={
                  "There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins, just like the sun powers the Man of Steel, as you indulge in your playlist with its 40mm dynamic drivers. Be your own hero as you get ready to rule with #DCYOU."
                }
                source={product5}
                category={"Headphones"}
              />
            }
          />
          <Route
            path="/product/6"
            element={
              <SingleProduct
                name={"Rockerz 550 Over Ear Bluetooth Headphone"}
                price={1799}
                desc={
                  "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dual connectivity in the form of Bluetooth and AUX."
                }
                source={product6}
                category={"Headphones"}
              />
            }
          />
          <Route
            path="/product/7"
            element={
              <SingleProduct
                name={"Rockerz 400"}
                price={1299}
                desc={
                  "Let's put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear. We guarantee you have not heard such powerful bass and vocal clarity from a wireless headphone. The boAt Super Bass Rockerz 400 wireless headphones will make your listening experience personal and for real. Plug it in and Plug into Nirvana."
                }
                source={product7}
                category={"Headphones"}
              />
            }
          />
          <Route
            path="/product/8"
            element={
              <SingleProduct
                name={"boAt Rockerz 518 Wireless Headphone"}
                price={1599}
                desc={
                  "Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana."
                }
                source={product8}
                category={"Headphones"}
              />
            }
          />
          <Route
            path="/product/9"
            element={
              <SingleProduct
                name={"Stone 352 - Wireless Portable Bluetooth Speaker"}
                price={1699}
                desc={
                  "Be the life of every party as you carry the ultra-portable Stone 352 with you, wherever you go. Its 10W Stereo boAt Signature Sound will make you vibe with full force as every beat becomes clear. Too bored partying within four walls? No problem! Shield your good times as the dynamic Stone 352 is equipped with IPX7 Splash & Water Shield— rain or poolside we got you covered! Party from dusk till dawn with its 12H nonstop playtime & double the impact as you connect 2 Stone 352s via the TWS feature. So get your gang & set to groove!"
                }
                source={product9}
                category={"Bluetooth speakers"}
              />
            }
          />
          <Route
            path="/product/10"
            element={
              <SingleProduct
                name={"Stone 1000v2"}
                price={2999}
                desc={
                  "Powerful and Precise. Stone 1000v2 is the premier wireless speaker that provides the best audio in the business. With its 14W stereo sound, get a boogie on and party all night. Stone 1000v2 also comes packed with state-of-the-art specs to keep you engrossed and engaged through it all!."
                }
                source={product10}
                category={"Bluetooth speakers"}
              />
            }
          />
          <Route
            path="/product/11"
            element={
              <SingleProduct
                name={
                  "Stone 1500F | 14W boAt Signature Sound with Passive Bass Radiator"
                }
                price={3999}
                desc={
                  "Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker. It’s powered by 14W boAt Signature Sound with Passive Bass Radiator that’s built to add spark to all your plans. The RGB LED lights are perfect to set the perfect vibe for a casual chilling session with your best buds. You can take it along everywhere you go with its 360-degree ergonomic design, shoulder strap and IPX7 Water & Splash Resistance that protects it even when outdoors."
                }
                source={product11}
                category={"Bluetooth speakers"}
              />
            }
          />
          <Route
            path="/product/12"
            element={
              <SingleProduct
                name={"Party Pal 60"}
                price={4999}
                desc={
                  "Wherever the party is tonight, make sure you carry the powerful 20W R.M.S Sound of the PartyPal 60 along. It’s time to create memories with wireless Bluetooth V5.0 guiding you to the shores of Nirvana. So, get loud and vibing with the integral space boom party inspired design of the boAt PartyPal 60. Customize those EQ’s until the bass is almost rude, with up to 4 hours of playtime from the 2200mAh lithium battery. Connect two PartyPal’s and get turned with true wireless feature making each moment magical. The system to your sound is here to turn the world around with its karaoke feature that allows you to work on your singing embarrassment free. Tune into any mode you want with FM Radio/ TF/ USB/ AUX that becomes easy to access with the integrated controls and in-built mic. The conditions are favourable to sail when you’re traveling on the boAt PartyPAl 60 bluetooth party speakers."
                }
                source={product12}
                category={"Bluetooth speakers"}
              />
            }
          />
          <Route
            path="/product/13"
            element={
              <SingleProduct
                name={"boAt Stone 500 - Portable Bluetooth Speaker"}
                price={1999}
                desc={
                  "Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting. Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode. With a Type-C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice. With Stone 500, it is time to #BeTheLimelight."
                }
                source={product13}
                category={"Bluetooth speakers"}
              />
            }
          />
          <Route
            path="/product/14"
            element={
              <SingleProduct
                name={
                  "boAt Vertex | Smartwatch with Fitness Trackers, 1.69 inch HD Display, Sleep Tracking, 100+ Watch Faces"
                }
                price={2299}
                desc={
                  "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals. Its large 1.69 inch full capacitive touch display allows you to control everything. Fitness features, including heart rate & SpO2 tracker, health ecosystem, sleep tracker, and more, ensure you get the support you need on your fitness journey. Enjoy going on hikes? Vertex is the perfect travel partner with its extra long battery of up to 10 days. Hustle your journey to the top with Vertex."
                }
                source={product14}
                category={"Smart Watches"}
              />
            }
          />
          <Route
            path="/product/15"
            element={
              <SingleProduct
                name={
                  "boAt Iris | Round Dial Smart Watch with 1.39 inch AMOLED Display, Multiple Watch Faces"
                }
                price={4499}
                desc={
                  "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don’t worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!"
                }
                source={product15}
                category={"Smart Watches"}
              />
            }
          />
          <Route
            path="/product/16"
            element={
              <SingleProduct
                name={
                  "boAt Wave Neo | 1.69 inch HD Display, Upto 7 Days Battery Life, IP68 Sweat"
                }
                price={1799}
                desc={
                  "Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display – Watch Wave Neo will make your world better & brighter."
                }
                source={product16}
                category={"Smart Watches"}
              />
            }
          />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
