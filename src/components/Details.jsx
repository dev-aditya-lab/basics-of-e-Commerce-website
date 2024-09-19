import React from 'react';
import { items } from '../Data';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));
  const navigate = useNavigate();
  const relatedProducts = items.filter((product) => 
    product.category === item[0].category && product.id !== parseInt(id)
  );

  return (
    <>
      <div className="flex items-center justify-center">
        <img src={item[0].imgSrc} className="w-96" alt="" />
        <div>
          <h2 className="text-2xl font-bold">{item[0].title}</h2>
          <p className="text-lg">{item[0].description}</p>
          <p className="text-slate-400">Category: {item[0].category}</p>
          <p>Price: ${item[0].price}</p>
          <button className="bg-blue-300 px-3 py-2 rounded-md">Add to cart</button>
        </div>
      </div>

      <div className="related-products">
        <h3>Related Products</h3>
        <div className="flex flex-wrap justify-center">
          {relatedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img onClick={()=>{navigate(`/product/${product.id}`)}} className="w-96" src={product.imgSrc} alt="" />
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <button className="bg-blue-300 px-3 py-2 rounded-md">Add to cart</button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;