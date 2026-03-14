import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nav_logo from "./assets/Foody Zone.svg";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedButton, setSelectedButton] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filterButtons = [
    { name: "All", type: "all" },
    { name: "Breakfast", type: "breakfast" },
    { name: "Lunch", type: "lunch" },
    { name: "Dinner", type: "dinner" },
  ];

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json);
      } catch (err) {
        setError("Unable To Fetch Data");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const value = e.target.value.toLowerCase();

    if (!value) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((food) =>
      food.name.toLowerCase().includes(value),
    );

    setFilteredData(filtered);
  };

  const filteredFood = (type) => {
    setSelectedButton(type);

    if (type === "all") {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((food) =>
      food.type.toLowerCase().includes(type),
    );

    setFilteredData(filtered);
  };

  if (loading) return <Message>Loading...</Message>;
  if (error) return <Message>{error}</Message>;

  return (
    <Container>
      <TopContainer>
        <Logo>
          <img src={nav_logo} alt="Foody Zone" />
        </Logo>

        <Search>
          <input
            type="text"
            placeholder="Search Food..."
            onChange={searchFood}
          />
        </Search>
      </TopContainer>

      <FilterContainer>
        {filterButtons.map((btn) => (
          <Button
            key={btn.type}
            isSelected={selectedButton === btn.type}
            onClick={() => filteredFood(btn.type)}
          >
            {btn.name}
          </Button>
        ))}
      </FilterContainer>

      <SearchResult data={filteredData} />
    </Container>
  );
};

export default App;

/* Container */

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 16px;
`;

/* Top Section */

const TopContainer = styled.section`
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 20px;
`;

/* Logo */

const Logo = styled.div`
  img {
    width: 150px;
  }
`;

/* Search */

const Search = styled.div`
  input {
    background: transparent;
    border: 1px solid #ff4343;
    color: white;

    border-radius: 6px;
    height: 40px;
    width: 220px;

    padding: 0 10px;
    outline: none;

    transition: 0.2s;
  }

  input:focus {
    border-color: #ff1f1f;
  }
`;

/* Filter Buttons */

const FilterContainer = styled.section`
  margin-top: 20px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

/* Button */

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;

  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  color: white;

  background-color: ${(props) => (props.isSelected ? "#ff1f1f" : "#432626")};

  transition: 0.25s;

  &:hover {
    background-color: #7f2525;
    transform: translateY(-2px);
  }
`;

/* Message UI */

const Message = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  color: white;
`;
