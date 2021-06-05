import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    const detail = data.results[0];
    setDetails({ ...detail });
    console.log(details);
    // console.log(detail);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <h1>API</h1>
    </div>
  );
};

export default App;
