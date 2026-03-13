import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nav_logo from "./assets/Foody Zone.svg";
import bg from "./assets/bg.svg";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoding(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoding(false);
      } catch (error) {
        setError("Unable To Fetch Data");
      }
    };

    if (error) return <div>{error}</div>;
    if (loding) return <div>Loding....</div>;

    fetchFoodData();
  }, []);
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src={nav_logo} alt="nav_logo" />
          </div>

          <div className="search">
            <input type="text" placeholder="Search Food...." />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
      </Container>

      <FoodCardContainer>
        <FoodCardsWrapper>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </FoodCardsWrapper>
      </FoodCardContainer>
    </>
  );
};

export default App;

/* Main centered container */
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* Navbar section */
const TopContainer = styled.section`
  min-height: 140px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      outline: none;
    }
  }
`;

/* Filter buttons */
const FilterContainer = styled.section`
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  padding: 6px 12px;
  color: white;
  background-color: #ff4343;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff1f1f;
  }
`;

/* Full width background section */
const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
`;

/* Cards wrapper (centered again) */
const FoodCardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

/* Individual food card */
const FoodCard = styled.div`
  height: 160px;
  background: white;
  border-radius: 10px;
`;
