import React from "react";
import "./DeliveryCollections.css";
import NextArrow from "./../../Common/Carousel/NextArrow";
import PreviousArrow from "../../Common/Carousel/PreviousArrow";
import Slider from "react-slick";
import DeliveryItem from './DeliveryItem/index';

const DeliveryItems = [
  {
    id: 1,
    title: "Biryani",
    image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 2,
    title: "Chicken",
    image:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    id: 3,
    title: "Pizza",
    image:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 4,
    title: "Fired Rice",
    image:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
  },
  {
    id: 5,
    title: "Dosa",
    image:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 6,
    title: "Paratha",
    image:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 7,
    title: "Burger",
    image:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 8,
    title: "South Indian",
    image:
      "https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png",
  },
  {
    id: 9,
    title: "Parotta",
    image:
      "https://b.zmtcdn.com/data/dish_photos/03a/21948feb4ea122ab37acf633ed7ec03a.jpg",
  },
  {
    id: 10,
    title: "Idli",
    image:
      "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
  },
  {
    id: 11,
    title: "Thali",
    image:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 12,
    title: "Rolls",
    image:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
];

// const DeliveryItems=[
//     {
//         id: 1,
//         title: "Biryani",
//     },
//     {
//         id: 2,
//         title: "Chicken",
//     }
// ]
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  NextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy!</div>
        <Slider {...settings}>
          {DeliveryItems.map((item)=>{
           return <DeliveryItem key={item.id} item={item}/>
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
