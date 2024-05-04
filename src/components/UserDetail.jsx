import { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { capitalize, formatDate } from "../lib/helper";

const UserDetail = (props) => {
  const { open = false, onClose = () => {}, userData = null } = props;

  const GENDER_DATA = [
    {
      label: "Pria",
      value: "pria",
    },
    {
      label: "Wanita",
      value: "wanita",
    },
  ];

  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className="bg-blue-600 rounded-lg px-16 py-10 space-y-3 text-white grid grid-cols-5 gap-x-5">
        <div className="col-span-5 text-xl font-semibold text-center pb-10">
          Form User Data
        </div>
        <span className="text-white font-medium">Nama</span>
        <span className="text-white col-span-4"> {userData?.name || "-"} </span>

        <span className="text-white font-medium">Alamat</span>
        <span className="text-white col-span-4">
          {userData?.address || "-"}
        </span>

        <span className="text-white font-medium">P/W</span>
        <span className="text-white col-span-4">
          {capitalize(userData?.gender)}
        </span>

        <span className="text-white font-medium">Tanggal Lahir</span>
        <span className="text-white col-span-4">
          {formatDate(userData?.birthdate)}
        </span>

        <span className="text-white font-medium">Tanggal Input</span>
        <span className="text-white col-span-4">
          {userData?.inputdate || "-"}
        </span>

        <div className="col-span-5 pt-20">
          <Button className="rounded-md" size="xs" onClick={() => onClose()}>
            Batal
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetail;
