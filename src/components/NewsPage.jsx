import React from 'react';
import NewsCard from './NewsCard';

const NewsPage =async () => {

    const res = await fetch('http://localhost:3000/data.json')
    const news = await res.json()
    const topNews = news.slice(0,9)
    return (
        <div>
            {
                topNews.map(n=><NewsCard key={n.id} n={n}></NewsCard>)
            }
        </div>
    );
};

export default NewsPage;