import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";

function App() {
  return (
    <div className="flex flex-col gap-y-5">
      <Button variant="primary" className="rounded-md" size="xs">
        Tambah Data
      </Button>
      <Table headers={HEADER} contents={mappingData(SAMPLE_DATA)} border />
    </div>
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
