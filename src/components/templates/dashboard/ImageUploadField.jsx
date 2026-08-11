import { useEffect, useMemo, useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import { HiX } from "react-icons/hi";


const MAX_IMAGE = 10;

const ImageUploadField = ({ files, onChange }) => {
  const isFull = files.length >= MAX_IMAGE;
  const inputRef = useRef(null);
  const previewUrls = useMemo(
    () => files.map((file) => URL.createObjectURL(file)),
    [files]
  );

  const handleFiles = (e) => {
    console.log(e.target.files);
    const selectedImages =Array.from(e.target.files)
    const remaining =MAX_IMAGE -files.length
    const imagesToAdd =selectedImages.slice(0,remaining)
    onChange([...files,...imagesToAdd])
  };

  const removeFile = (index) => {
    onChange(files.filter((_, i)=> i!== index))
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <div>
      <div className="flex justify-between items-center mx-8 mt-8 mb-2">
        <label className="font-bold text-zinc-700 text-xs">
          {" "}
          تصاویر محصول{" "}
        </label>
        <span className="text-zinc-400 text-xs">
          {files.length} از {MAX_IMAGE}
        </span>
      </div>

      <input
        type="file"
        ref={inputRef}
        className="hidden"
        multiple
        onChange={handleFiles}
        accept="image/*"
      />

      <div className="gap-2 grid grid-cols-4 mx-8">
        {previewUrls.map((url, index) => (
          <div
            key={index}
            className="group relative primary-border rounded-md aspect-square overflow-hidden"
          >
            <img
              src={url}
              className="w-full h-full object-cover"
              alt=""
            />

            <button
              type="button"
              onClick={() => removeFile(index)}
              className="top-1 right-1 absolute flex justify-center items-center bg-red-500 hover:bg-red-600 rounded-full size-5 text-white text-xs"
            >
              <HiX />
            </button>
          </div>
        ))}

        {!isFull && (
          <button
            onClick={() => inputRef.current?.click()}
            type="button"
            className="flex flex-col justify-center items-center gap-1 hover:bg-zinc-50 border border-gray-300 border-dashed rounded-xs w-20 aspect-square text-zinc-500 hover:text-blue-500 transition-colors"
          >
            <BiImageAdd className="text-xl" />
            <span className="text-[11px]">افزودن تصویر</span>
          </button>
        )}
      </div>

      {isFull && (
        <p className="mt-2 text-zinc-400 text-xs">
          حداکثر تعداد تصاویر ({MAX_IMAGE} عدد) انتخاب شده است.
        </p>
      )}
    </div>
  );
};

export default ImageUploadField;
