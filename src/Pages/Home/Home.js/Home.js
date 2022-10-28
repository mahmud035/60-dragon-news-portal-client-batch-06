import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../../hooks/useSetTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
  const allNews = useLoaderData();
  useSetTitle('Home');

  return (
    <div>
      <h3>This is home Component: {allNews.length}</h3>
      {allNews.map((news, index) => (
        <NewsSummaryCard key={index} news={news} />
      ))}
    </div>
  );
};

export default Home;
