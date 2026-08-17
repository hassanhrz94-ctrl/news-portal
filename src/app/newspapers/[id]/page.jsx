import React from 'react';

const NewsDetailsPage =async ({params}) => {
    const {id} =await params;
    const res =await fetch('http://localhost:3000/data.json')
    const details =await res.json()
      
    const detail = details.find(d=> d.id == id)
    return (
        <div className='mt-10 mx-w-7xl mx-auto ml-5'>

             <h1 className='text-2xl text-red-900 font-bold mb-2'>Description</h1>
            {
                detail.description
            }
            
                <h2 className='my-3 text-gray-900 font-extralight'>{detail.category}</h2>
            
        </div>
    );
};

export default NewsDetailsPage;