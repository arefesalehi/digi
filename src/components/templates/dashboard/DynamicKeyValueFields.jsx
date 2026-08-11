import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";

const DynamicKeyValueFields = ({
  title,
  items,
  onAdd,
  onRemove,
  onChange,
  keyPlaceholder = "کلید (مثلا رم)",
  valuePlaceholder = "مقدار (مثلا 8 گیگابایت)",
}) => {
  return (
    <div className="mx-8 mt-8">
      <div className="flex justify-between items-center mb-2">
        <label className="font-bold text-zinc-700 text-xs">{title}</label>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-1 text-blue-500 text-xs"
        >
          <BiPlus /> افزودن
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              className="px-2 border border-gray-300 rounded w-1/2 h-9 text-xs"
              value={item.key}
              onChange={(event) => onChange(index, "key", event.target.value)}
              placeholder={keyPlaceholder}
            />

            <input
              className="px-2 border border-gray-300 rounded w-1/2 h-9 text-xs"
              value={item.value}
              onChange={(event) => onChange(index, "value", event.target.value)}
              placeholder={valuePlaceholder}
            />

            {items.length > 1 && (
              <button
                className="text-red-500 shrink-0"
                type="button"
                onClick={() => onRemove(index)}
              >
                {" "}
                <HiX />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicKeyValueFields;
