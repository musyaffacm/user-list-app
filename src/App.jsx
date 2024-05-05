import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";
import { Form as FormEdit } from "./components/Form";
import { Form as FormAdd } from "./components/Form";
import {
  capitalize,
  formatDate,
  formatDateTime,
  getCurrentDateTime,
} from "./lib/helper";
import UserDetail from "./components/UserDetail";
import UserDelete from "./components/UserDelete";
import useFetch from "./hooks/useFetch";
import LoadingSpinner from "./components/LoadingSpinner";
import { GENDER_DATA } from "./constant/global";
import { addUser, updateUser } from "./lib/api";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    data: fetchData,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch(`https://dummyjson.com/users`);

  const handleSubmit = async (formData) => {
    setLoading(true);
    const result = await addUser(formData);
    if (result.status === 200) {
      setLoading(false);
      setUserData((prev) => [
        { ...formData, inputDate: getCurrentDateTime(), id: result.data.id },
        ...prev,
      ]);
      setOpenForm(false);
    }
  };

  const handleSubmitEdit = async (formData) => {
    setLoading(true);
    const result = await updateUser(formData);
    if (result.status === 200) {
      const tempData = userData.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }
        return item;
      });
      setLoading(false);
      setUserData(tempData);
      setOpenEdit(false);
    }
  };

  const handleOpenEdit = (data) => {
    setEditData(data);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setEditData(null);
  };

  const handleOpenDetail = (data) => {
    setDetailData(data);
    setOpenDetail(true);
  };

  const handleOpenDelete = (data) => {
    setDeleteData(data);
    setOpenDelete(true);
  };

  const handleDelete = () => {
    setDeleteData(null);
    setOpenDelete(false);
  };

  useEffect(() => {
    if (fetchData) {
      const tempData = fetchData?.users?.map((item) => ({
        ...item,
        name: item.firstName + " " + item.lastName,
        address: item.address.city,
        gender: GENDER_DATA[item.gender],
        inputDate: "2024-05-16T17:53",
      }));
      setUserData(tempData);
    }
  }, [fetchLoading]);

  if (fetchLoading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <LoadingSpinner className="absolute top-0" />
      </div>
    );
  }

  if (userData) {
    return (
      <>
        {loading && (
          <div className="flex w-full h-full justify-center items-center absolute top-0 z-50 left-0">
            <LoadingSpinner className="" />
          </div>
        )}
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
            contents={mappingData(
              userData,
              handleOpenEdit,
              handleOpenDetail,
              handleOpenDelete
            )}
            border
          />
        </div>
        <FormAdd
          open={openForm}
          onOpen={() => setOpenForm(true)}
          onClose={() => setOpenForm(false)}
          onSubmit={(formData) => handleSubmit(formData)}
        />
        
        <FormEdit
          open={openEdit}
          onOpen={() => setOpenEdit(true)}
          onClose={() => handleCloseEdit()}
          onSubmit={(formData) => handleSubmitEdit(formData)}
          initData={editData}
        />

        <UserDetail
          open={openDetail}
          onClose={() => setOpenDetail(false)}
          userData={detailData}
        />

        <UserDelete
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onSubmit={() => handleDelete()}
          userData={deleteData}
        />
      </>
    );
  }
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

const mappingData = (
  data,
  handleOpenEdit,
  handleOpenDetail,
  handleOpenDelete
) => {
  const mappedData = [];
  data.forEach((item, index) => {
    mappedData.push([
      {
        text: index + 1,
        // className: "w-1/12",
      },
      {
        // text: item.firstName + " " + item.lastName,
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
        text: formatDate(item.birthDate),
        // className: "w-2/12",
      },
      {
        text: formatDateTime(item.inputDate),
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
            <Button
              variant="danger"
              className="rounded-md"
              size="xs"
              onClick={() => handleOpenDelete(item)}
            >
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
