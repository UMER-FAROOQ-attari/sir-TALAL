import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'

function App() {
let arr = [
  {
    id: 1,
    user_name: "Ali Khan",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600",
    likes: 362,
    caption: "Amazing view! 📸",
    hashtags: "#nature #photography #travel"
  },
  {
    id: 2,
    user_name: "Umar Farooq",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    likes: 489,
    caption: "Peaceful vibes 🌿",
    hashtags: "#peace #nature #green"
  },
  {
    id: 3,
    user_name: "Ahmed Raza",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600",
    likes: 210,
    caption: "City life 🌆",
    hashtags: "#city #urban #life"
  },
  {
    id: 4,
    user_name: "Hamza Ali",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    likes: 578,
    caption: "Travel diaries ✈️",
    hashtags: "#travel #adventure #trip"
  },
  {
    id: 5,
    user_name: "Bilal Ahmad",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
    likes: 690,
    caption: "Mountains calling 🏔️",
    hashtags: "#mountains #nature #hiking"
  },
  {
    id: 6,
    user_name: "Saad Khan",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    likes: 444,
    caption: "Ocean mood 🌊",
    hashtags: "#sea #beach #waves"
  },
  {
    id: 7,
    user_name: "Zain Abbas",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
    likes: 321,
    caption: "Cold weather ❄️",
    hashtags: "#winter #cold #weather"
  },
  {
    id: 8,
    user_name: "Hassan Raza",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600",
    likes: 512,
    caption: "Street photography 📷",
    hashtags: "#street #photography #art"
  },
  {
    id: 9,
    user_name: "Abdullah",
image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    likes: 275,
    caption: "Simple moments ❤️",
    hashtags: "#simple #life #moments"
  },
  {
    id: 10,
    user_name: "Zeeshan Ali",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
    likes: 834,
    caption: "Nature love 🌄",
    hashtags: "#nature #love #views"
  }
];

  return (
    <>
    
{arr.map((elm)=>(
<div className="" key={elm.id}>
<Card user= {elm.user_name}  img={elm.image} like ={elm.likes} cap={elm.caption} tag = {elm.hashtags} />
</div>
))}      
    </>
  )
}

export default App
