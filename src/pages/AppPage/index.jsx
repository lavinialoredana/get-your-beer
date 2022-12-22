import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Description from "../../components/Description";
import "./app.css";

const App = () => {
  const [descriptionField, setDescriptionField] = useState("");
  const navigate = useNavigate();

  const descriptionOnChange = (event) => {
    setDescriptionField(event.target.value);
  };

  const navigateToOrders = (event) => {
    event.preventDefault();
    navigate("/orders");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="app-header"> Get in touch to order a punk beer </h1>
      </header>
      <a data-testid="orders-link" onClick={navigateToOrders}>
        GO to Orders
      </a>
      <Description
        descriptionField={descriptionField}
        handleDescriptionChange={descriptionOnChange}
      />
    </div>
  );
};

export default App;
