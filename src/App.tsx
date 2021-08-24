import React, { useState } from "react";

const App: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<String>();

  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div style={styles.container}>
      <select onChange={selectChange} style={styles.select}>
        <option selected disabled>
          Choose one
        </option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="EngenheiroYoutuber">Responsável</option>
      </select>
      {selectedOption && <h2 style={styles.result}>{selectedOption}</h2>}
    </div>
  );
};

export default App;

// Just some styles
const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  select: {
    padding: 5,
    width: 200,
  },
  result: {
    marginTop: 30,
  },
};