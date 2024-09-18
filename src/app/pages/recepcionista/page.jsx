import Card from "./components/card";

const roomData = {
  id: "001",
  name: "HABITACION PREMIUM",
  status: "DISPONIBLE",
};

export default function App() {
  return (
    <>
      <Card room={roomData} />
    </>
  );
}
