import ServiceCard from './components/ServiceCard';

const serviceData = [
  { title: "Web Development", description: "Its is a good Choice for a student to create some websites using Web Development" },
  { title: "Frontend Development", description: "Its is a good Choice for a student to create some websites using Frontend" },
  { title: "Backend Development", description: "Its is a good Choice for a student to create some websites using Backend" }
];

function App() {
  return (
    <>
      {serviceData.map((e, index) => (
        <ServiceCard key={index} title={e.title} description={e.description} />
      ))}
    </>
  );
}

export default App;
