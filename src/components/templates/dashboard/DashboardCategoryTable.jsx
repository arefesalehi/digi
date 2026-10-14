import { useState } from 'react'
import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableToolbar from './TableToolbar'
import { FiPlus } from 'react-icons/fi'
import DashboardDrawer from './DashboardDrawer'

import { FaTrashCan } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'
import Confirm from '../../common/dashboard/Confirm'

import { toast } from 'sonner'
import useCategories from '../../../hooks/useCategories'
import { deleteCategory } from '../../../service/categories.service'

const DashboardCategoryTable = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const {
    allCategories,
    isLoading,
    error,
    refetch,
  } = useCategories()

  const [deletingCategory, setDeletingCategory] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev)
  }

  const handleRemove = async () => {
    setIsDeleting(true)

    try {
      await deleteCategory(deletingCategory._id)
      toast.success('محصول با موفقیت حذف شد')
      setDeletingCategory(null)
      refetch()
    } catch (err) {
      toast.error(err?.response?.data?.message || 'خطا در حذف دسته بندی')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <Table>
        <TableToolbar>
          <h1 className="font-bold text-lg">تمامی دسته بندی ها</h1>

          <div
            onClick={toggleDrawer}
            className="flex items-center gap-1 bg-blue-600 px-3 py-2 rounded text-white text-sm cursor-pointer"
          >
            <FiPlus />
            ایجاد دسته بندی
          </div>
        </TableToolbar>

        <TableHeader>
          <TableRow>
           
            <TableCell>عنوان</TableCell>
            <TableCell>لینک</TableCell>
            <TableCell>تعداد فیلترها</TableCell>
            <TableCell>تعداد زیر دسته بندی</TableCell>
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
                {error || 'خطا در دریافت دسته بندی'}
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !error && allCategories.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-zinc-400 text-center">
                هنوز دسته بندی ثبت نشده
              </TableCell>
            </TableRow>
          )}

          {!isLoading &&
            !error &&
            allCategories.map((category) => {
              console.log(category)
            
              return (
                <TableRow key={category._id}>
                  <TableCell>{category.title}</TableCell>
                  <TableCell>{category.slug}</TableCell>
                  <TableCell>
                 {category?.filters?.length}
                  </TableCell>
                   <TableCell>
                 {category?.subCategories?.length}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-10">
                      {' '}
                      <span>
                        <MdEdit className="text-blue-900" />{' '}
                      </span>
                      <span onClick={() => setDeletingCategory(category)}>
                        <FaTrashCan className="text-red-700" />
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>

    

      <Confirm
        isOpen={!!deletingCategory}
        title="حذف محصول"
        description={`آیا از حذف محصول ${deletingCategory?.title} مطمئن هستید؟ `}
        onConfirm={handleRemove}
        onCancel={() => setDeletingCategory(null)}
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

export default DashboardCategoryTable
