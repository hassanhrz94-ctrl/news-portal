import NewsCard from '@/components/NewsCard';
import React from 'react';

const NewsPaperPage = async() => {
    const res = await fetch("http://localhost:3000/data.json")
    const news = await res.json()
    return (
        <div>
            {
                news.map(n=><NewsCard key={n.id} n={n}></NewsCard>)
            }
        </div>
    );
};

export default NewsPaperPage;