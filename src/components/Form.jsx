import { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

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

export const Form = (props) => {
  const {
    open = false,
    onOpen = () => {},
    onClose = () => {},
    onSubmit = () => {},
    initData = null,
  } = props;
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gender: "",
    birthDate: null,
  });

  useEffect(() => {
    setFormData(
      initData || {
        name: "",
        address: "",
        gender: "",
        birthDate: null,
      }
    );
  }, [initData]);

  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className="bg-blue-600 rounded-lg px-16 py-10 space-y-3 text-white grid grid-cols-5 gap-x-5">
        <div className="col-span-5 text-xl font-semibold text-center pb-10">
          Form User Data
        </div>
        <label htmlFor="name" className="text-white">
          Nama
        </label>
        <InputText
          name="name"
          className="col-span-4"
          value={formData.name}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, name: value }))
          }
        />

        <label htmlFor="address" className="text-white">
          Alamat
        </label>
        <InputText
          name="address"
          className="col-span-4"
          value={formData.address}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, address: value }))
          }
        />

        <span> P/W </span>
        <div className="grid grid-cols-5 gap-y-2 col-span-4">
          {GENDER_DATA.map((item) => (
            <>
              <input
                type="radio"
                name="gender"
                id={item.value}
                value={item.value}
                checked={formData?.gender && item.value === formData.gender}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, gender: e.target.value }))
                }
              />
              <label htmlFor={item.value} className="col-span-4">
                {item.label}
              </label>
            </>
          ))}
        </div>

        <label htmlFor="birthDate"> Tanggal Lahir </label>
        <input
          type="date"
          name=""
          id=""
          className="text-black col-span-4 h-7 px-2"
          value={formData.birthDate}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, birthDate: e.target.value }))
          }
        />

        <div className="flex justify-between col-span-5 pt-20">
          <Button className="rounded-md" size="xs" onClick={() => onClose()}>
            Batal
          </Button>
          <Button
            className="rounded-md"
            size="xs"
            onClick={() => onSubmit(formData)}
          >
            Simpan
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const InputText = (props) => {
  const { name, className, onChange = () => {}, value } = props;
  return (
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      className={`outline-none bg-blue-200 focus:border-b-2 focus:bg-white border-black h-7 px-2 text-black ${className}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default Form;
