import React from "react";
import { BASE_URL } from "../App";
import styled from "styled-components";
import bg from "../assets/bg.svg";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((items) => (
          <FoodCard key={items.name}>
            <div className="food_img">
              <img src={BASE_URL + items.image} alt={items.name} />
            </div>

            <div className="food_info">
              <div className="info">
                <h3>{items.name}</h3>
                <p>{items.text}</p>
              </div>

              <Price>${items.price.toFixed(2)}</Price>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  padding: 60px 0;

  width: 100%;
`;

const FoodCards = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 0 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const FoodCard = styled.div`
  max-width: 400px;
  display: flex;
  gap: 16px;

  padding: 16px;
  border-radius: 16px;

  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.2);

  color: white;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }

  .food_img img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 12px;
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info h3 {
    margin: 0;
    font-size: 18px;
  }

  .info p {
    font-size: 13px;
    opacity: 0.85;
    margin-top: 6px;
  }
`;

const Price = styled.button`
  align-self: flex-end;

  background: #ff4343;
  border: none;

  padding: 6px 14px;
  border-radius: 8px;

  color: white;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #ff1f1f;
  }
`;
