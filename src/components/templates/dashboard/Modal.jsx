import { HiX } from "react-icons/hi";

const Modal = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-auto">
        <div className="top-0 sticky flex justify-between items-center bg-white p-4 border-zinc-200 border-b">
          <p className="font-medium">{title}</p>
          <button onClick={onClose} className="text-zinc-600">
            <HiX className="size-6" />
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
