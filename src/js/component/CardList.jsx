import React from 'react';
import Card from './Card';

const cardData = [
  {
    title: "Card title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/5-5.png"
  },
  {
    title: "Card title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/6-6.png"
  },
  {
    title: "Card title 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/7-7.png"
  },
  {
    title: "Card title 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/5-5.png"
  },
  {
    title: "Card title 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/6-6.png"
  },
  {
    title: "Card title 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/7-7.png"
  },
  {
    title: "Card title 7",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/5-5.png"
  },
  {
    title: "Card title 8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc: "https://www.fourdplan.com/wp-content/uploads/2020/09/6-6.png"
  },
];

const CardList = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <Card title={card.title} text={card.text} imgSrc={card.imgSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
