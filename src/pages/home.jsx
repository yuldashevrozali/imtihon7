import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
      .then((response) => response.json())
      .then((result) => setdata(result.data)) // Access 'data' property if needed
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className='flex mt-100 pl-100'>
        {/* ... your existing code ... */}
        <div className="hero-left">
          <div className="hero-text">
            <h1>We are changing the way people shop</h1>
          </div>
          <div className="info">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          </div>
          <div className="button"><button className="btn bg-blue-600 text-base-200 mt-35">Our Products</button></div>
        </div>
        <div className="hero-right">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item h-200">
              <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" className="rounded-box" />
            </div>

          </div>
        </div>
      </div>
      <div className="hero-bottom pl-100">
        <h1 className='fs-100'>Featured Products</h1>
        <hr />
        <div className="products-uch flex">
          {data.map((product, index) => (
            <div key={index} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={product.attributes.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.attributes.title}</h2>
                <p>${product.attributes.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}