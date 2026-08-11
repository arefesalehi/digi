import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import AsyncSelect from "react-select/async";
import { searchSellers } from "../../../hooks/seller.service";


const SellerFields = ({ sellers, onAdd, onChange, onRemove }) => {
  const loadSellersOptions = async (inputValue) => {
    const sellers = await searchSellers(inputValue);

    return sellers.map((seller) => ({
      value: seller._id,
      label: seller.name,
    }));
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mx-8 mt-8 mb-2">
        <label className="font-bold text-zinc-700 text-xs">فروشندگان</label>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-1 text-blue-500 text-xs"
        >
          <BiPlus /> افزودن فروشنده
        </button>
      </div>

      {sellers.map((seller, index) => (
        <div key={index} className="flex items-center gap-2 mx-8 text-xs">
          <div>
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={loadSellersOptions}
              value={seller.info}
              onChange={(option) => {
                onChange(index, "info", option);
                onChange(index, "id", option.value);
              }}
              loadingMessage={() => "در حال جستجو ..."}
              noOptionsMessage={() => "فروشنده‌ای یافت نشد"}
              placeholder="جستجوی فروشنده"
            />
          </div>

          <input
            value={seller.price}
            onChange={(e) => onChange(index, "price", e.target.value)}
            placeholder="قیمت"
            type="number"
            className="px-2 primary-border rounded-md outline-none w-1/4 h-9 text-xs"
          />

          <input
            value={seller.stock}
            onChange={(e) => onChange(index, "stock", e.target.value)}
            placeholder="موجودی"
            type="number"
            className="px-2 primary-border rounded-md outline-none w-1/4 h-9 text-xs"
          />

          {sellers.length > 1 && (
            <button
              onClick={() => onRemove(index)}
              type="button"
              className="text-red-500 shrink-0"
            >
              <HiX />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SellerFields;
