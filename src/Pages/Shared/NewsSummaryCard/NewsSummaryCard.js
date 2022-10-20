import React from 'react';

const NewsSummaryCard = ({ news }) => {
  const { title } = news;
  return <div>{title}</div>;
};

export default NewsSummaryCard;
