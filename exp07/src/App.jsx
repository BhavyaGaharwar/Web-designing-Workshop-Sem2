import StudentCard from "./components/StudentCard.jsx";

export default function App() {
  const students = [
    { name: "Bhavya Singh", course: "Computer Science", marks: 95 },
    { name: "Aditi Tiwari", course: "AIML", marks: 95 },
    { name: "Aditi Yadav", course: "DS", marks: 96 }
  ];

  return (
    <div className="container">
      <h1>Student Information</h1>

      {students.map((s, i) => (
        <StudentCard
          key={i}
          name={s.name}
          course={s.course}
          marks={s.marks}
        />
      ))}
      <footer>
        <p>| Bhavya Singh|2503201000398| CSE 14| </p>
      </footer>
    </div>
    
  );
}