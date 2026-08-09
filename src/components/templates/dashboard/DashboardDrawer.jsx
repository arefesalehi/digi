import useCategories from '../../../hooks/useCategories';
import Drawer from '../../common/dashboard/Drawer'
import DrawerInput from '../../common/dashboard/DrawerInput'
import CascadeCategories from './CascadeCategories';

const DashboardDrawer = ({ isOpen, onClose }) => {
    const { isLoading: categoriesIsLoading, allCategories } = useCategories();
  return (
 
      <Drawer isOpen={isOpen} onClose={onClose} title="ایجاد محصول">
        <DrawerInput
          className="mt-10"
          label="عنوان محصول"
          placeholder="مثلا ایفون 13"
          type="text"
        />
        <DrawerInput
          className="mt-3"
          label=" لینک"
          placeholder="مثلا ایفون 13"
          type="text"
        />

        <DrawerInput
          className="mt-3"
          label=" تصویر محصول"
          placeholder="مثلا ایفون 13"
          type="file"
        />

              <div>
          <label
            htmlFor=""
            className="block mx-8 mt-8 mb-2 font-medium text-zinc-700 text-sm"
          >
            دسته‌بندی
          </label>

          {categoriesIsLoading ? (
            <p className="text-zinc-400 text-xs">در حال بارگزاری ...</p>
          ) : (
          <>
            <div className='mx-8 mb-8'>لیست دسته بندی‌ها</div>
            
            <CascadeCategories  allCategories={allCategories}/>
          </>
          )}
        </div>






        <div className="flex flex-col">
          <label htmlFor="product-details" className="mt-5 px-8 text-xs">
            {' '}
            توضیحات محصول{' '}
          </label>
          <textarea
            id="product-details"
            name=""
            className="mx-8 mt-5 rounded-md h-10 min-h-30 text-xs"
            placeholder=" آیفون - ارزان - تخفیف دار"
          ></textarea>
        </div>

        <div className="flex justify-end items-center gap-2 mx-8 mt-5 text-xs">
          <button className="bg-red-500/10 hover:bg-red-500/15 px-4 py-2 rounded-md text-red-500">
            انصراف
          </button>
          <button className="bg-linear-to-t from-blue-600 to-blue-500 px-4 py-2 rounded-md text-white text-sm">
            ایجاد محصول
          </button>
        </div>
      </Drawer>
  
  )
}

export default DashboardDrawer
