import StudentCard from "./components/StudentCard.jsx";

export default function App() {
  const students = [
    { name: "Bhavya SIngh", course: "Computer Science", marks: 90 },
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
    </div>
  );
}