import React from "react";
import './Home.css'; // Add home-specific styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Dog Lovers!</h1>
      <img
        src="https://images.unsplash.com/photo-1560807707-8cc77767d783"
        alt="Dogs"
        className="home-image"
      />
      <p>
        Discover everything you need to know about different dog breeds and dog care tips. Whether you're a new pet owner or a seasoned dog lover, our site has something for everyone.
      </p>
      <p>
        Our mission is to provide accurate and engaging information about dogs, ensuring that you have the best resources at your fingertips. From breed characteristics to essential care tips, we've got you covered.
      </p>
      <p>Start exploring our site to learn more:</p>
      <ul>
        <li><a href="/breeds">Learn about Dog Breeds</a></li>
        <li><a href="/tips">Read Dog Care Tips</a></li>
      </ul>
    </div>
  );
};

export default Home;
