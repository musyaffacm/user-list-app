import { capitalize, formatDate, formatDateTime } from "../lib/helper";
import Button from "./Button";
import Modal from "./Modal";
const UserDelete = (props) => {
  const {
    open = false,
    onClose = () => {},
    onSubmit = () => {},
    userData = null,
  } = props;
  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className="bg-red-600 rounded-lg px-16 py-10 space-y-3 text-white grid grid-cols-5 gap-x-5">
        <div className="col-span-5 text-xl font-semibold text-center pb-10">
          Apakah anda yakin ingin menghapus data berikut ?
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
          {formatDate(userData?.birthDate)}
        </span>

        <span className="text-white font-medium">Tanggal Input</span>
        <span className="text-white col-span-4">
          {formatDateTime(userData?.inputDate) || "-"}
        </span>

        <div className="col-span-5 pt-20 flex justify-between">
          <Button className="rounded-md" size="xs" onClick={() => onClose()}>
            Batal
          </Button>
          <Button
            className="rounded-md"
            size="xs"
            onClick={() => onSubmit(userData)}
          >
            Hapus
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserDelete;
