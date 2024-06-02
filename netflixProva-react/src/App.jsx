import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/navigation.jsx";
import MovieCard from "./components/MovieCard/movieCard.jsx";
//import { API_KEY } from "./"
const items = [
  {
    id: 0,
    text: "Home",
    href: "/#",
  },
  {
    id: 1,
    text: "TV Shows",
    href: "/#",
  },
  {
    id: 2,
    text: "Movies",
    href: "/#",
  },
  {
    id: 3,
    text: "New & Popular",
    href: "/#",
  },
];

function App() {
  const [isActiveCard, setIsActiveCard] = useState(false);
  return (
    <div>
      <Navigation items={items} />
      <div className="movie-list" />
      <MovieCard
        image="https://picsum.photos/id/1/200/300"
        handleMouseEnter={() => setIsActiveCard(true)}
        handleMouseLeave={() => setIsActiveCard(false)}
        isActive={isActiveCard}
      />
      <MovieCard
        image="https://picsum.photos/id/1/200/300"
        handleMouseEnter={() => setIsActiveCard(true)}
        handleMouseLeave={() => setIsActiveCard(false)}
        isActive={isActiveCard}
      />
    </div>
  );
}

export default App;
