import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
  const categoryNews = useLoaderData();
  // console.log(categoryNews);

  useSetTitle('Category');

  return (
    <div>
      <h3>This Category has: {categoryNews.length} news</h3>

      {categoryNews.map((news, index) => (
        <NewsSummaryCard key={index} news={news} />
      ))}
    </div>
  );
};

export default Category;
