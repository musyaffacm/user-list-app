import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Table headers={HEADER} contents={mappingData(SAMPLE_DATA)} border />
    </>
  );
}

const HEADER = ["Peringkat", "Nama", "Jenis Kelamin"];

const SAMPLE_DATA = [
  {
    name: "Musyaffa Choirun Man",
    gender: "Male",
  },
  {
    name: "Safira Meida",
    gender: "Female",
  },
];

const mappingData = (data) => {
  const mappedData = [];
  data.forEach((item, index) => {
    mappedData.push([
      {
        text: index + 1,
      },
      {
        text: item.name,
        className: "w-1/3",
      },
      {
        text: item.gender,
      },
    ]);
  });
  return mappedData;
};

export default App;
