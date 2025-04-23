import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <div className="row mt-4">
          <Card 
            title="Card title" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." 
            buttonText="Find Out More!" 
          />
          <Card 
            title="Card title" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente." 
            buttonText="Find Out More!" 
          />
          <Card 
            title="Card title" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." 
            buttonText="Find Out More!" 
          />
        </div>
      </div>
    </div>
  );
}
