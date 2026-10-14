import {  useState } from "react";
import Modal from '../../templates/dashboard/Modal'

const CreateCategoryModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [iconFile, setIconFile] = useState(null);
//   const [filters, dispatch] = useReducer()

  return (
    <Modal title="دسته‌بندی جدید" isOpen={isOpen} onClose={onClose} >
      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-zinc-700 text-sm">عنوان</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 border border-gray-300 rounded-md outline-none w-full h-10 text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 text-zinc-700 text-sm">Slug</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="px-3 border border-gray-300 rounded-md outline-none w-full h-10 text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 text-zinc-700 text-sm">توضیحات</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 pt-2 border border-gray-300 rounded-md outline-none w-full min-h-24 text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 text-zinc-700 text-sm">
            آیکون (اختیاری)
          </label>
          <input
       className="p-5"
            type="file"
            accept="image/*"
            onChange={(e) => setIconFile(e.target.files[0] || null)}
          />
        </div>

        <p className="text-red-500 text-xs">error</p>

        <div className="flex justify-end items-center gap-2 pt-2">
          <button className="bg-zinc-100 px-4 py-2 rounded-md text-zinc-600 text-sm">
            انصراف
          </button>
          <button className="bg-blue-500 disabled:opacity-50 px-4 py-2 rounded-md text-white text-sm">
            ثبت
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCategoryModal;
