import {  useReducer, useState } from "react";
import Modal from '../../templates/dashboard/Modal'
import FilterReducer from "../../../reducers/category/FilterReducer";
import { toast } from "sonner";
import { useCategoryForm } from "../../../hooks/useCategoryForm";
import FiltersEditor from "./FilterEditor";

const CreateCategoryModal = ({ isOpen, onClose, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [iconFile, setIconFile] = useState(null);
  const [filters, dispatchFilters] = useReducer(FilterReducer, [])

  const resetForm = () => {
      setTitle("");
      setSlug("");
      setDescription("");
      setIconFile(null);
      dispatchFilters({ type: "filters/reset" });
    };


   const { error, isSubmitting, submit } = useCategoryForm(() => {
      toast.success("دسته‌بندی جدید با موفقیت ایجاد شد");
      resetForm()
      onClose();
      onSuccess()
    });
  
    const handleSubmit = async () => {
      if (!title.trim() || !slug.trim() || !description.trim()) {
        toast.error("عنوان، لینک و توضیحات الزامی هستن");
        return;
      }
  
      await submit({
        title: title.trim(),
        slug: slug.trim(),
        description: description.trim(),
        iconFile,
        filters,
      });
    };
  
    const handleClose = () => {
      resetForm();
      onClose();
    };





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

                {error && <p className="text-red-500 text-xs">error</p>}
  <FiltersEditor filters={filters} dispatch={dispatchFilters} />

        <div className="flex justify-end items-center gap-2 pt-2">
          <button  onClick={handleClose} className="bg-zinc-100 px-4 py-2 rounded-md text-zinc-600 text-sm">
            انصراف
          </button>
          <button   onClick={handleSubmit}
            disabled={isSubmitting} className="bg-blue-500 disabled:opacity-50 px-4 py-2 rounded-md text-white text-sm">
         {isSubmitting ? "در حال ثبت ..." : "ثبت"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateCategoryModal;
