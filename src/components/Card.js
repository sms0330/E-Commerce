import React from 'react';


const ProductShow = ({shoes}) => {

  return (
    <div className="container">
      <div className="row">
        {shoes.map((shoe, index) => (
          <div className="col-md-4" key={index}>
            <img src={`https://codingapple1.github.io/shop/shoes${index+1}.jpg`} width="100%" alt="shoe" />
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>${shoe.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShow;
