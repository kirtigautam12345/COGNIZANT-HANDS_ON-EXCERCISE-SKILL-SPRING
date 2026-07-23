import "./App.css";
import CohortDetails from "./components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "React Training",
      status: "ongoing",
      startDate: "15 July 2026",
      coach: "Rahul",
      trainer: "Amit",
    },
    {
      name: "Java Full Stack",
      status: "completed",
      startDate: "10 May 2026",
      coach: "Neha",
      trainer: "Priya",
    },
    {
      name: "Spring Boot",
      status: "ongoing",
      startDate: "1 August 2026",
      coach: "Rohit",
      trainer: "Karan",
    },
  ];

  return (
    <div>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
