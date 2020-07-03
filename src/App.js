import React from "react";


const App = () => {

  const greetings = {
    morning: "Good morning",
    noon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
  };

  const [appState, setappState] = React.useState({
    greeting: greetings.morning
  });

  React.useEffect(() => {
    startTime();
    return () => {

    }
  });

  const startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let greeting;

    if (h > 6 && h < 12) {
      greeting = greetings.morning;
    } else if (h >= 12 && h < 17) {
      greeting = greetings.noon;
    } else if (h >= 17 && h < 20) {
      greeting = greetings.evening;
    } else {
      greeting = greetings.night;
    }

    setappState({ greeting });
    // setTimeout(startTime, 1000);
  }


  return (
    <div className="App">
      <h1>{appState.greeting}</h1>
    </div>
  );

};

export default App;