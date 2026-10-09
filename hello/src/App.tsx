function Greeter({age, name}) {
  
  if (age < 30) {
    return (
      <p>Witaj {name}!</p>
    );
  } else {
    return (
      <p>Dzien dobry {name}!</p>
    );
  }
}

function App() {
  return (
    <div>
      <Greeter />

      <Greeter name="Mario" age={1} />

      <Greeter name="Luigi" age={2} />
    </div>
  );
}

export default App
