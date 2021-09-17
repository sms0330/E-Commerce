import React from 'react';
import { Link } from 'react-router-dom';


const ProductShow = ({shoes}) => {

  return (
    <div className="container">
      <div className="row">
        {shoes.map((shoe, index) => (
          <div className="col-md-4" key={index}>
            <Link to={`/detail/${shoe.id}`}><img src={`https://codingapple1.github.io/shop/shoes${index+1}.jpg`} width="100%" alt="shoe" /></Link>
            <h4><Link to={`/detail/${shoe.id}`}>{shoe.title}</Link></h4>
            <p>{shoe.content}</p>
            <p>${shoe.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShow;
