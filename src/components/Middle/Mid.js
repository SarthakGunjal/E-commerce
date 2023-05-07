import React from "react";
import Miditem from "./miditem";


const items = [
  {
    id: 1,
    title: "Mobile",
    img:"https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg",
    description: "This is a mobile",
  },
  {
    id: 2,
    title: "Laptop",
    img:"https://www.lenovo.com/medias/lenovo-laptops-thinkpad-t16-gen-1-16-intel-hero.png?context=bWFzdGVyfHJvb3R8NTY4MTMyfGltYWdlL3BuZ3xoYzcvaDkyLzEzNzE4NzU5MzQyMTEwLnBuZ3wxNzQxODUyZThkMjRjZWVhZmIxYTkxNDliNTg0MDllOTFmYjVhMGVjNGRiMzFmYjNiNWE1MDJkYTI0Y2Q1Mzc0",
    description: "This is a laptop",
  },
  {
    id: 4,
    title: "Trimmer",
    img:"https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/0/2/02_1_3.jpg",
    description: "This is a Trimmer",
  },
  {
    id: 5,
    title: "Children",
    img:"https://media.istockphoto.com/id/155099131/photo/shopping.jpg?s=612x612&w=0&k=20&c=3ZL_FI-1cUKnBh3Lo6mVnX9qy-Ond4QTmRdKu11EtHg=",
    description: "This is a children's item",
  },
  {
    id: 6,
    img:"https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg",
    title: "Women",
    description: "This is a women's item",
  },
  {
    id: 7,
    title: "Men",
    img:"https://www.shutterstock.com/image-photo/full-length-body-size-view-260nw-1535007923.jpg",
    description: "This is a men's item",
  },
];


const Mid = () => {
  return (
    <>
      {items.map((item) => (
        <Miditem key={item.id} img={item.img} title={item.title} description={item.description} />
      ))}
    </>
  );
};

export default Mid;

