import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const handlePage =(dir)=>{
    if (dir === "next"){
      setPage((prev)=> prev+1)
    }
    else{
      setPage((prev)=> prev-1)
    }
  }

  useEffect(() => {
    let limit = page*10
    let offset = page*10 -10
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}&select=title,price`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setProducts(data["products"]))
      .catch(error => {
        console.error('Fetch error:', error);
        // Handle the error state here
      });
  }, [page]);
  

  return (
    <>
    <div>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.title}</span>
          <span>{product.price}</span>
        </div>
      ))}
    </div>

    <span>
    <button onClick={() => handlePage("prev")}>Prev</button>
    <button onClick={() => handlePage("next")}>Next</button>
  </span>
    </>
    
  );
}

export default ProductList;
