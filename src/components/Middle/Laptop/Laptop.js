import React from "react";
// import { useParams } from "react-router-dom";
import Show from "./Show";
import Nav from "E:/vs projects/E-commerse/e-commerce/src/components/Navbar/Nav"
const items = [
  {
    id: 1,
    title: "Realme Narzo 10",
    price:25000,
    img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    description: "This is a mobile",
  },
  {
    id: 2,
    title: "Redmi 12 pro",
    price:25000,
    img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    description: "This is a laptop",
  },
  {
    id: 4,
    title: "Poco p13",
    price:25000,
    img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    description: "This is a Trimmer",
  },
  {
    id: 5,
    title: "Samsung Galaxy G12",
    price:25000,
    img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    description: "This is a children's item",
  },
  {
    id: 6,
    img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    title: "iphone 13 Pro",
    price:25000,
    description: "This is a women's item",
  },
  {
    id: 7,
    title: "Realme 13 Pro",
    price:25000,
    img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    description: "This is a men's item",
  },
];

const Mobile = () => {
  return (
    <>
    <Nav/>

      {items.map((item) => (
        <Show key={item.id} img={item.img} title={item.title} description={item.description} price={item.price} />
      ))}
      
    </>
  );
};

export default Mobile;

