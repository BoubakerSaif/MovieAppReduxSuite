import { v4 as uuidv4 } from "uuid";

const Data = [
  {
    id: uuidv4(),
    title: "John Wick : Chapitre 4",
    description:
      "John Wick faces his deadliest adversaries in the fourth installment of the series. So, enjoy watching this movie and have fun.",
    posterURL:
      "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg",
    rating: 9,
  },
  {
    id: uuidv4(),
    title: "Fast & Furious X",
    description:
      "During numerous missions and against all odds, Dom Toretto and his family have outwitted and overtaken all enemies in their path.",
    posterURL:
      "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/04/fast%20x%20teaser%20poster.jpeg",
    rating: 8,
  },
  {
    id: uuidv4(),
    title: "Guardians of the Galaxy 3",
    description:
      "The Guardians of the Galaxy will have to fight again Ayesha, the priestess of the Sovereigns, to face the creator of Rocket.",
    posterURL:
      "https://images.thedirect.com/media/photos/guardians-galaxy-3s.jpg",
    rating: 9,
  },
];

export default Data;
