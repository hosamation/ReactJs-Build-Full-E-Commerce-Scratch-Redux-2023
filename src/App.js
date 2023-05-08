import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";

function App() {
  const [personData, setPersonData] = useState(person);

  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  useEffect(() => {
    setPersonData([]);
  }, []);
  return (
    <div className="">
      <Container className="py-5" />
      <DatesCount person={personData} />
      <DatesList person={personData} />
      <DatesAction deletData={onDelete} onViewData={onViewData} />
    </div>
  );
}

export default App;
