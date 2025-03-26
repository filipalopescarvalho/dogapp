import React from "react";
import "./Breeds.css";

const Breeds = () => {
  const breedInfo = [
    {
      name: "Golden Retriever",
      description: "Golden Retrievers are friendly, intelligent, and devoted. They are known for their patient demeanor and striking golden coat.",
      imageUrl: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg"
    },
    {
      name: "Labrador Retriever",
      description: "Labrador Retrievers are outgoing, even-tempered, and gentle. They are one of the most popular dog breeds for families.",
      imageUrl: "https://www.wideopenspaces.com/wp-content/uploads/sites/3/2019/11/Labrador-Colors.png?w=1200"
    },
    {
      name: "German Shepherd",
      description: "German Shepherds are courageous, confident, and smart. They are known for their versatility and excellence in various roles, including police work.",
      imageUrl: "https://petzpark.com.au/cdn/shop/articles/German-Shepherd-Puppies_900x.jpg?v=1673894491"
    },
    {
      name: "Beagle",
      description: "Beagles are friendly, curious, and merry. They are known for their excellent sense of smell and tracking instinct.",
      imageUrl: "https://www.zooplus.de/magazin/wp-content/uploads/2017/03/AdobeStock_227689783-Groesse-M-1536x1023.jpeg"
    },
    {
      name: "Cocker Spaniel",
      description: "Cocker Spaniels are gentle, smart, and happy. They are known for their long, flowing ears and beautiful, silky coat.",
      imageUrl: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/cocker-spaniel-700x700.jpg"
    },
    {
      name: "Dachshund",
      description: "Dachshunds are clever, lively, and brave. They are known for their long, low bodies and friendly personalities.",
      imageUrl: "https://basepaws.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqj2yxv39d6ig%2F6B3Ou63rVBu0N4Tr9MsM1b%2F25b8847b0febc4fb466948b13fb79940%2FDachshund_1000.jpg&w=1080&q=75"
    }
  ];

  return (
    <div>
      <h1>Dog Breeds</h1>
      <div className="breed-list">
        {breedInfo.map((breed, index) => (
          <div key={index} className="breed-card">
            <h2>{breed.name}</h2>
            <p>{breed.description}</p>
            <img src={breed.imageUrl} alt={breed.name} className="breed-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breeds;