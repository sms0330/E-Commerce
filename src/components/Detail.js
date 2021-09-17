import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Detail = ({shoes}) => {

  const { id } = useParams();
  const history = useHistory()
  const findShoes = shoes.find(result => result.id == id)
  console.log(findShoes)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${findShoes.id+1}.jpg`} width="100%" alt="shoe" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <button className="btn btn-danger">Order</button>
          <button className="btn btn-primary" onClick={()=>{history.goBack();}}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
