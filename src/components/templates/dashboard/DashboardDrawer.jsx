import useCategories from '../../../hooks/useCategories'
import Drawer from '../../common/dashboard/Drawer'
import DrawerInput from '../../common/dashboard/DrawerInput'
import CascadeCategories from './CascadeCategories'
import useProductForm from '../../../hooks/useProductForm'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import createProduct from '../../../service/product.service'
import DynamicKeyValueFields from './DynamicKeyValueFields'
import SellerFields from './SellerFields'
import ImageUploadField from './ImageUploadField'
const DashboardDrawer = ({ isOpen, onClose , toggleDrawer}) => {
  const { isLoading: categoriesIsLoading, allCategories } = useCategories()
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    form,
    setField,
    selectedCategory,
    setSelectedCategory,
    addSeller,
    removeSeller,
    updateSeller,
    addPair,
    removePair,
    updatePair,
    setImages,
    buildFormData,
    resetForm,
    handleCategoryChange,
  } = useProductForm()

  useEffect(() => {
    if (!isOpen) {
      resetForm
    }
  }, [isOpen, resetForm])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.slug.trim() || !form.description.trim()) {
      setError(<p className='py-5 pr-10 text-red-600 text-sm'>عنوان و لینک محصول الزامی هستن</p>)
      return
    }

    if (!selectedCategory) {
      setError('انتخاب دسته‌بندی محصول الزامی هست')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      await createProduct(buildFormData())
      resetForm()
      toast.success('محصول با موفقیت ایجاد شد')
      toggleDrawer()
    } catch (err) {
      setError(err.response?.data?.message || 'خطایی رخ داده است')
    }

    setIsSubmitting(false)
  }

  return (
    <Drawer  isOpen={isOpen} onClose={onClose} title="ایجاد محصول">
      <DrawerInput
        className="mt-10"
        label="عنوان محصول"
        placeholder="مثلا ایفون 13"
        type="text"
        value={form.name}
        onChange={(e) => setField('name', e.target.value)}
      />
      <DrawerInput
        className="mt-3"
        label=" لینک"
        placeholder="مثلا ایفون 13"
        type="text"
        value={form.slug}
        onChange={(e) => setField('slug', e.target.value)}
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
            <CascadeCategories
              onChange={handleCategoryChange}
              allCategories={allCategories}
            />
          </>
        )}
      </div>

      <SellerFields
        sellers={form.sellers}
        onAdd={addSeller}
        onChange={updateSeller}
        onRemove={removeSeller}
      />

      <DynamicKeyValueFields
        title="ویژگی های فیلتری"
        items={form.filterValues}
        onAdd={() => addPair('filterValues')}
        onRemove={(index) => removePair('filterValues', index)}
        onChange={(index, key, value) =>
          updatePair('filterValues', index, key, value)
        }
      />

      <DynamicKeyValueFields
        title="ویژگی های سفارشی"
        items={form.customFields}
        onAdd={() => addPair('customFields')}
        onRemove={(index) => removePair('customFields', index)}
        onChange={(index, key, value) =>
          updatePair('customFields', index, key, value)
        }
      />

      <ImageUploadField files={form.images} onChange={setImages} />

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
          value={form.description}
          onChange={(e) => setField('description', e.target.value)}
        ></textarea>
      </div>

      {error &&  <p>{error}</p>}

      <div className="flex justify-end items-center gap-2 mx-8 mt-5 text-xs">
        <button className="bg-red-500/10 hover:bg-red-500/15 px-4 py-2 rounded-md text-red-500">
          انصراف
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-linear-to-t from-blue-600 to-blue-500 px-4 py-2 rounded-md text-white text-sm"
        >
          {isSubmitting ? 'در حال ثبت ...' : 'ایجاد محصول'}
        </button>
      </div>
    </Drawer>
  )
}

export default DashboardDrawer
