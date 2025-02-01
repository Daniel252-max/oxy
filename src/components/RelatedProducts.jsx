import React from 'react';

const RelatedProducts = ({ recommendations }) => {
    if (!recommendations || recommendations.length === 0) {
        return <p>No recommendations available.</p>;
    }

    return (
        <div className='recommendations'>
            <h2>Recommended Products</h2>
            <ul>
                {recommendations.map((product, index) => (
                    <li key={index}>
                        <p>{product.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedProducts;
