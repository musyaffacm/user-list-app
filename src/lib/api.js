import axios from "axios";

export const addUser = async (formData) => {
  let result = {};
  await axios
    .post(`https://dummyjson.com/users/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      setTimeout(() => {}, 500); // menambahakan waktu loading
      result = res;
    })
    .catch((err) => {});

  return result;
};

export const updateUser = async (formData) => {
  let result = {};
  await axios
    .put(`https://dummyjson.com/users/${formData.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      setTimeout(() => {}, 500); // menambahakan waktu loading
      result = res;
    })
    .catch((err) => {});

  return result;
};

export const deleteUser = async (formData) => {
  let result = {};
  await axios
    .delete(`https://dummyjson.com/users/${formData.id}`)
    .then((res) => {
      setTimeout(() => {}, 500); // menambahakan waktu loading
      result = res;
    })
    .catch((err) => {});

  return result;
};
