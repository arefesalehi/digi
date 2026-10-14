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
import {  removeSubCategory } from '../../../service/categories.service'
import useSubCategories from '../../../hooks/useSubCategories'
import useCategories from '../../../hooks/useCategories'

const DashboardSubCategoryTable = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const {
   subCategories, isLoading, refetch, error
  } = useSubCategories()
 const {allCategories}= useCategories()
  const [deletingSubCategory, setDeletingSubCategory] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev)
  }

  const handleRemove = async () => {
    setIsDeleting(true)

    try {
      await removeSubCategory(deletingSubCategory._id)
      toast.success('زیر دسته بندی با موفقیت حذف شد')
      setDeletingSubCategory(null)
      refetch()
    } catch (err) {
      toast.error(err?.response?.data?.message || 'خطا در حذف زیر دسته بندی')
    } finally {
      setIsDeleting(false)
    }
  }


  const getParentTitle = (parentId) =>
    allCategories.find((category) => category._id === parentId)?.title || " - ";

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
            <TableCell> دسته بندی اصلی</TableCell>
            <TableCell>تعداد فیلتر</TableCell>
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
                {error || 'خطا در دریافت زیردسته بندی'}
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !error && subCategories.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-zinc-400 text-center">
                هنوز زیر دسته بندی ثبت نشده
              </TableCell>
            </TableRow>
          )}

          {!isLoading &&
            !error &&
            subCategories.map((subCategory) => {
              console.log(subCategory)
            
              return (
                <TableRow  key={subCategory._id}>
                  <TableCell >{subCategory.title}</TableCell>
                  <TableCell>{subCategory.slug}</TableCell>
                  <TableCell>
                 {getParentTitle(subCategory?.parent)}
                  </TableCell>
                   <TableCell>
                 {subCategory?.filters?.length}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-10">
                      {' '}
                      <span>
                        <MdEdit className="text-blue-900" />{' '}
                      </span>
                      <span onClick={() => setDeletingSubCategory(subCategory)}>
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
        isOpen={!!deletingSubCategory}
        title="حذف محصول"
        description={`آیا از حذف محصول ${deletingSubCategory?.title} مطمئن هستید؟ `}
        onConfirm={handleRemove}
        onCancel={() => setDeletingSubCategory(null)}
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

export default DashboardSubCategoryTable
