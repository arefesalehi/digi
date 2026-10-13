const Confirm = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
  isLoading,
}) => {
  return isOpen ? (
    <div className="z-60 fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white p-5 rounded-lg w-full max-w-sm">
        <h3 className="font-bold text-zinc-800">{title}</h3>
        <p className="mt-2 text-zinc-500 text-sm">{description}</p>

        <div className="flex justify-end items-center gap-2 mt-5">
          <button
            onClick={onCancel}
            className="bg-zinc-100 px-4 py-2 rounded-md text-zinc-600 text-sm"
          >
            انصراف
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-red-500 disabled:opacity-50 px-4 py-2 rounded-md text-white text-sm"
          >
            {isLoading ? "در حال حذف" : "حذف کن"}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Confirm;
