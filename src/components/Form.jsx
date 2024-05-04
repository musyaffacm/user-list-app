import { useState } from "react";
import Modal from "./Modal";

const Form = (props) => {
  const { open = false, handleOpen = () => {} } = props;
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gender: "",
    birthdate: null,
  });

  return (
    <Modal open={open} onClose={() => handleOpen(false)}>
      <div className="bg-blue-600 rounded-lg p-16 space-y-3 text-white grid grid-cols-5 gap-x-5">
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
          <input
            type="radio"
            name="gender"
            id="pria"
            value="pria"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, gender: e.target.value }))
            }
          />
          <label htmlFor="pria" className="col-span-4">
            Pria
          </label>
          <input
            type="radio"
            name="gender"
            id="wanita"
            value="wanita"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, gender: e.target.value }))
            }
          />
          <label htmlFor="wanita" className="col-span-4">
            Wanita
          </label>
        </div>

        <label htmlFor="birthdate"> Tanggal Lahir </label>
        <input
          type="date"
          name=""
          id=""
          className="text-black col-span-4 h-7 px-2"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, birthdate: e.target.value }))
          }
        />
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
