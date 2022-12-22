import { useState } from "react";
import Description from "../../components/Description";
import "./app.css";


const App = () => {
  const [descriptionField, setDescriptionField] = useState("");
  const descriptionOnChange = (event) => {
    setDescriptionField(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Get in touch to order a punk beer </h1>
      </header>
      <Description 
        descriptionField={descriptionField}
        handleDescriptionChange={descriptionOnChange}
      />
    </div>
  );
};

export default App;
