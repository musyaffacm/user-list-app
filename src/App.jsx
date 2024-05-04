import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";
import Form from "./components/Form";
import { capitalize, formatDate } from "./lib/helper";
import UserDetail from "./components/UserDetail";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const handleSubmit = (formData) => {};
  const handleOpenEdit = (data) => {
    setEditData(data);
    setOpenForm(true);
  };
  const handleOpenDetail = (data) => {
    setDetailData(data);
    setOpenDetail(true);
  };
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <Button
          variant="primary"
          className="rounded-md"
          size="xs"
          onClick={() => setOpenForm(true)}
        >
          Tambah Data
        </Button>
        <Table
          headers={HEADER}
          contents={mappingData(SAMPLE_DATA, handleOpenEdit, handleOpenDetail)}
          border
        />
      </div>
      <Form
        open={openForm}
        onOpen={() => setOpenForm(true)}
        onClose={() => setOpenForm(false)}
        onSubmit={(formData) => handleSubmit(formData)}
        initData={editData}
      />

      <UserDetail
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        userData={detailData}
      />
    </>
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
    gender: "pria",
    birthdate: "2020-04-15",
    inputdate: "05 Mei 2022 12:05",
  },
  {
    name: "Hinata Hyuga",
    address: "Jogja",
    gender: "wanita",
    birthdate: "2001-05-15",
    inputdate: "06 Mei 2022 22:00",
  },
];

const mappingData = (data, handleOpenEdit, handleOpenDetail) => {
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
        text: capitalize(item.gender),
        // className: "w-1/12",
      },
      {
        text: formatDate(item.birthdate),
        // className: "w-2/12",
      },
      {
        text: item.inputdate,
        // className: "w-2/12",
      },
      {
        custom: (
          <div className="flex gap-x-5 ">
            <Button
              variant="primary"
              className="rounded-md"
              size="xs"
              onClick={() => handleOpenDetail(item)}
            >
              Detail
            </Button>
            <Button variant="danger" className="rounded-md" size="xs">
              Delete
            </Button>
            <Button
              variant="warning"
              className="rounded-md"
              size="xs"
              onClick={() => handleOpenEdit(item)}
            >
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
