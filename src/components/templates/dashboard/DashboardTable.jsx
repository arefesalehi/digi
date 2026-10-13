import { useState } from 'react'
import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableToolbar from './TableToolbar'
import { FiPlus } from 'react-icons/fi'
import DashboardDrawer from './DashboardDrawer'
import { useProducts } from '../../../hooks/useProducts'
import { formatPrice, getDisplayPrice } from '../../../helpers/helpers'
import { FaTrashCan } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'
import Confirm from '../../common/dashboard/Confirm'
import { removeProducts } from '../../../service/product.service'
import { toast } from 'sonner'

const DashboardTable = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const {
    products,
    pagination,
    page,
    setPage,
    isLoading,
    error,
    refetch,
  } = useProducts()

  const [deletingProduct, setDeletingProduct] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev)
  }

  const handleRemove = async () => {
    setIsDeleting(true)

    try {
      await removeProducts(deletingProduct._id)
      toast.success('محصول با موفقیت حذف شد')
      setDeletingProduct(null)
      refetch()
    } catch (err) {
      toast.error(err?.response?.data?.message || 'خطا در حذف محصول')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <Table>
        <TableToolbar>
          <h1 className="font-bold text-lg">تمامی محصولات</h1>

          <div
            onClick={toggleDrawer}
            className="flex items-center gap-1 bg-blue-600 px-3 py-2 rounded text-white text-sm cursor-pointer"
          >
            <FiPlus />
            ایجاد محصول
          </div>
        </TableToolbar>

        <TableHeader>
          <TableRow>
            <TableCell>شناسه</TableCell>
            <TableCell>عنوان</TableCell>
            <TableCell>مبلغ</TableCell>
            <TableCell>عملیات</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={3} className="text-zinc-400 text-center">
                در حال بارگزاری
              </TableCell>
            </TableRow>
          )}

          {!isLoading && error && (
            <TableRow>
              <TableCell colSpan={3} className="text-red-500 text-center">
                {error || 'خطا در دریافت محصولات'}
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !error && products.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-zinc-400 text-center">
                هنوز محصولی ثبت نشده
              </TableCell>
            </TableRow>
          )}

          {!isLoading &&
            !error &&
            products.map((product) => {
              console.log(products)
              const { price, hasMultiplePrice } = getDisplayPrice(
                product.sellers,
              )
              return (
                <TableRow key={product._id}>
                  <TableCell>{product.shortIdentifier}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    {formatPrice(price)} تومان{' '}
                    {hasMultiplePrice && '(بیش از یک فروشنده)'}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-10">
                      {' '}
                      <span>
                        <MdEdit className="text-blue-900" />{' '}
                      </span>
                      <span onClick={() => setDeletingProduct(product)}>
                        <FaTrashCan className="text-red-700" />
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>

      <div className="flex justify-center items-center gap-5 mb-10">
        <button
          className="bg-blue-600 p-2 rounded text-white text-sm"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          قبلی
        </button>
        <span>
          صفحه {pagination?.page} از {pagination?.totalPages}
        </span>
        <button
          className="bg-blue-600 p-2 rounded text-white text-sm"
          disabled={page >= pagination?.totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          بعدی
        </button>
      </div>

      <Confirm
        isOpen={!!deletingProduct}
        title="حذف محصول"
        description={`آیا از حذف محصول ${deletingProduct?.name} مطمئن هستید؟ این عمل غیر قابل بازگشت است`}
        onConfirm={handleRemove}
        onCancel={() => setDeletingProduct(null)}
        isLoading={isDeleting}
      />

      <DashboardDrawer
        toggleDrawer={toggleDrawer}
        isOpen={drawerIsOpen}
        onClose={toggleDrawer}
      />
    </>
  )
}

export default DashboardTable
