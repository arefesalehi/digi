import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";

const FILTER_TYPES = [
  { value: "selectbox", label: "Select (انتخابی)" },
  { value: "radio", label: "رادیویی" },
];

const FiltersEditor = ({ filters, dispatch }) => {
  const updateOptions = (index, optionValue) => {
    const options = optionValue
      .split(",")
      .map((option) => option.trim())
      .filter(Boolean);

    dispatch({
      type: "filters/optionsChange",
      payload: {
        index,
        options,
      },
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="font-medium text-zinc-700 text-sm">
          فیلترهای دسته‌بندی
        </label>
        <button
          onClick={() =>
            dispatch({
              type: "filters/add",
            })
          }
          type="button"
          className="flex items-center gap-1 text-blue-500 text-xs"
        >
          <BiPlus /> افزودن فیلتر
        </button>
      </div>

      <div className="space-y-3">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="space-y-2 p-3 border border-zinc-200 rounded-md"
          >
            <div className="flex items-center gap-2">
              <input
                value={filter.name}
                onChange={(e) =>
                  dispatch({
                    type: "filters/fieldChange",
                    payload: {
                      index,
                      field: "name",
                      value: e.target.value,
                    },
                  })
                }
                placeholder="نام فیلتر (مثلا رم)"
                className="flex-1 px-2 primary-border rounded-md outline-none h-9 text-sm"
              />
              <button
                onClick={() =>
                  dispatch({
                    type: "filters/remove",
                    payload: { index },
                  })
                }
                type="button"
                className="text-red-500 shrink-0"
              >
                <HiX />
              </button>
            </div>

            <input
              value={filter.slug}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "slug",
                    value: e.target.value,
                  },
                })
              }
              placeholder="slug (مثلا ram)"
              className="px-2 primary-border rounded-md outline-none w-full h-9 text-sm"
            />

            <input
              value={filter.description}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "description",
                    value: e.target.value,
                  },
                })
              }
              placeholder="توضیح فیلتر"
              className="px-2 primary-border rounded-md outline-none w-full h-9 text-sm"
            />

            <select
              value={filter.type}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "type",
                    value: e.target.value,
                  },
                })
              }
              className="bg-white px-2 primary-border rounded-md outline-none w-full h-9 text-sm"
            >
              <option value="">انتخاب نوع فیلتر</option>

              {FILTER_TYPES.map((filterType, index) => (
                <option key={index} value={filterType.value}>
                  {filterType.label}
                </option>
              ))}
            </select>

            <input
              onBlur={(e) => updateOptions(index, e.target.value)}
              placeholder="گزینه‌ها با کاما جدا کن (مثلا: نو, کهنه, تعمیری)"
              className="px-2 primary-border rounded-md outline-none w-full h-9 text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersEditor;
