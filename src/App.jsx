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

const HEADER = [
  {
    text: "No",
    className: "w-1/12",
  },
  {
    text: "Nama",
    className: "w-2/12",
  },
  {
    text: "Alamat",
    className: "w-1/12",
  },
  {
    text: "P/W",
    className: "w-1/12",
  },
  {
    text: "Tanggal Lahir",
    className: "w-2/12",
  },
  {
    text: "Tanggal Input",
    className: "w-2/12",
  },
  {
    text: "Aksi",
    className: "w-3/12",
  },
];

const SAMPLE_DATA = [
  {
    name: "Musyaffa Choirun Man",
    address: "Baki",
    gender: "Pria",
    birthdate: "04 April 2000",
    inputdate: "05 Mei 2022 12:05",
  },
  {
    name: "Hinata Hyuga",
    address: "Jogja",
    gender: "Wanita",
    birthdate: "04 Mei 2001",
    inputdate: "06 Mei 2022 22:00",
  },
];

const mappingData = (data) => {
  const mappedData = [];
  data.forEach((item, index) => {
    mappedData.push([
      {
        text: index + 1,
        // className: "w-1/12",
      },
      {
        text: item.name,
        // className: "w-1/12",
      },
      {
        text: item.address,
        // className: "w-2/12",
      },
      {
        text: item.gender,
        // className: "w-1/12",
      },
      {
        text: item.birthdate,
        // className: "w-2/12",
      },
      {
        text: item.inputdate,
        // className: "w-2/12",
      },
      {
        custom: (
          <div className="flex gap-x-5 ">
            <Button variant="primary" className="rounded-md" size="xs">
              Detail
            </Button>
            <Button variant="danger" className="rounded-md" size="xs">
              Delete
            </Button>
            <Button variant="warning" className="rounded-md" size="xs">
              Edit
            </Button>
          </div>
        ),
        // className: "w-3/12",
      },
    ]);
  });
  return mappedData;
};

export default App;
