import { useState } from 'react'
import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableToolbar from './TableToolbar'
import { FiPlus } from 'react-icons/fi'
import DashboardDrawer from './DashboardDrawer'
import { FaBan } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'
import Confirm from '../../common/dashboard/Confirm'
import { toast } from 'sonner'
import { useUsers } from '../../../hooks/useUsers'
import { toPersianDate } from '../../../helpers/date'
import { BanUsers } from '../../../service/user.service'


const roleLabels={
  ADMIN:'مدیر',
  USER:'کاربر',
  SELLER:'فروشنده'
}

const DashboardUsersTable = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const {
    users,
    pagination,
    page,
    setPage,
    isLoading,
    error,
    refetch
  } = useUsers()

  const [banningUsers, setBanningUsers] = useState(null)
  const [isBan, setIsBan] = useState(false)

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev)
  }

  const handleRemove = async () => {
    setIsBan(true)

    try {
      await BanUsers(banningUsers._id)
      toast.success('کاربر با موفقیت حذف شد')
      setBanningUsers(null)
      refetch()
    } catch (err) {
      toast.error(err?.response?.data?.message || 'خطا در حذف کاربر')
    } finally {
      setIsBan(false)
    }
  }

  return (
    <>
      <Table>
        <TableToolbar>
          <h1 className="font-bold text-lg">تمامی کاربران</h1>

          <div
            onClick={toggleDrawer}
            className="flex items-center gap-1 bg-blue-600 px-3 py-2 rounded text-white text-sm cursor-pointer"
          >
            <FiPlus />
            ایجاد کاربر جدید
          </div>
        </TableToolbar>

        <TableHeader>
          <TableRow>
            <TableCell>نام</TableCell>
            <TableCell>نقش </TableCell>
            <TableCell>شماره تماس</TableCell>
            <TableCell> آدرس</TableCell>
            <TableCell> کدملی</TableCell>
            <TableCell> تاریخ ثبت نام</TableCell>


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
                {error || 'خطا در دریافت کاربران'}
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !error && users.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="text-zinc-400 text-center">
                هنوز کاربری ثبت نشده
              </TableCell>
            </TableRow>
          )}

          {!isLoading &&
            !error &&
            users.map((user) => {
              console.log(user)
            
              return (
                <TableRow key={user._id}>
                  <TableCell>{user.name || 'ثبت نشده'}</TableCell>
                  <TableCell>{user.roles.map((role)=> roleLabels[role]).join('-')}</TableCell>
                  <TableCell>{user.phone }</TableCell>
                   <TableCell>{user.addresses[0] || 'ثبت نشده'}</TableCell>
                  <TableCell>{user.nationalCode || 'ثبت نشده'}</TableCell>

                 
                  <TableCell>{toPersianDate(user.createdAt)}</TableCell>

                  <TableCell>
                    <div className="flex gap-10">
                      {' '}
                      <span>
                        <MdEdit className="text-blue-900" />{' '}
                      </span>
                      <span onClick={() => setBanningUsers(user)}>
                        <FaBan className="text-red-700" />
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
        isOpen={!!banningUsers}
        title="حذف محصول"
        description={`آیا از حذف محصول ${banningUsers?.name || 'ناشناس'} مطمئن هستید؟ این عمل غیر قابل بازگشت است`}
        onConfirm={handleRemove}
        onCancel={() => setBanningUsers(null)}
        isLoading={isBan}
      />

      <DashboardDrawer
        toggleDrawer={toggleDrawer}
        isOpen={drawerIsOpen}
        onClose={toggleDrawer}
      />
    </>
  )
}

export default DashboardUsersTable
