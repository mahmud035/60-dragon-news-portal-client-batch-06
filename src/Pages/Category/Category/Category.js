import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);

  return (
    <div>
      <h3>This is Category: {categoryNews.length}</h3>
    </div>
  );
};

export default Category;
