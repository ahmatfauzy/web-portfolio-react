import Error404 from "../error/error.jsx";
export const projects = [
  {
    id: 1,
    image: "/projects/CRUD-Tempat-Wisata.png",
    title: "Wisata Simalungun",
    techlogogies: ["PHP", "MySQL", "CSS"],
    description: "A web application for managing information about tourist spots in Simalungun with CRUD features.",
    code: "https://github.com/ahmatfauzy/CRUD-Wisata-Simalungun-SUMUT",
    demo: <Error404 />,
  },
  {
    id: 2,
    image: "/projects/CheckOut-Dessert.png",
    title: "Checkout Dessert List",
    techlogogies: ["React", "Vitejs", "CSS"],
    description: "A React application to display and process a list of desserts with checkout functionality.",
    code: "https://github.com/ahmatfauzy/dessert-list",
    demo: "https://dessert-list.vercel.app/",
  },
  {
    id: 3,
    image: "/projects/One-Piece.png",
    title: "Kru Mugiwara - One Piece",
    techlogogies: ["React", "CSS"],
    description: "A web application displaying profiles and information of the Mugiwara crew from the One Piece series.",
    code: "https://github.com/ahmatfauzy/One-Piece",
    demo: "https://one-piece-ahmatfauzy.vercel.app/",
  },
  {
    id: 4,
    image: "/projects/Weather-App.png",
    title: "Weather App",
    techlogogies: ["React", "OpenWeatherMap-API", "CSS"],
    description: "A weather application showing current weather information using the OpenWeatherMap API.",
    code: "https://github.com/ahmatfauzy/weather-app-react",
    demo: "https://weather-app-uhuy.vercel.app/",
  },
];
