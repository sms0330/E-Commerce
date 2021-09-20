import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {stockContext} from '../App'

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${props => props.color};
`;

const Detail = ({ shoes }) => {
  const [alert, setAlert] = useState(true);
  const [alert2, setAlert2] = useState(false);
  const [data, setData] = useState(null);

  const { stock, setStock } = useContext(stockContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert2(true);
    }, 5000);
    timer = setTimeout(() => {
      setAlert2(false);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  const { id } = useParams();
  const history = useHistory();
  const findShoes = shoes.find(result => result.id == id);
  console.log(findShoes);

  return (
    <div className="container">
      <Box>
        <Title className="red">Detail Page</Title>
        <Title color="blue">Detail Page</Title>
      </Box>
      {data}
      <input
        onChange={e => {
          setData(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert-yellow">
          <p>Stock is almost running out.</p>
        </div>
      ) : null}
      {alert2 === true ? (
        <div className="my-alert-red">
          <p>Stock is almost running out.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findShoes.id + 1
            }.jpg`}
            width="100%"
            alt="shoe"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>${findShoes.price}</p>

          <Info stock={stock}></Info>

          <button
            className="btn btn-danger"
            onClick={() => {
              setStock([stock[0]-1]);
            }}
          >
            Order
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );

  function Info() {
    return <p>Stock : {stock[0]} </p>;
  }
};

export default Detail;
