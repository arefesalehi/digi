

import { useState } from 'react'
import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableToolbar from './TableToolbar'
import { FiPlus } from 'react-icons/fi'
import DashboardDrawer from './DashboardDrawer'

const DashboardTable = () => {
  
  const [drawerIsOpen, setDrawerIsOpen]=useState(false)

  const toggleDrawer=()=>{
    setDrawerIsOpen((prev)=>!prev)
  }

  return (
    <>
      <Table >
        <TableToolbar>
          <h1 className="font-bold text-lg">تمامی محصولات</h1>

          <div onClick={toggleDrawer}  className="flex items-center gap-1 bg-blue-600 px-3 py-2 rounded text-white text-sm cursor-pointer">
            <FiPlus />
            ایجاد محصول
          </div>
        </TableToolbar>


        <TableHeader>
          <TableRow>
            <TableCell>شناسه</TableCell>
            <TableCell>عنوان</TableCell>
            <TableCell>مبلغ</TableCell>
            <TableCell>وضعیت</TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>dry</TableCell>
            <TableCell>dryhr</TableCell>
            <TableCell>dryr</TableCell>
            <TableCell>ryry</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>dry</TableCell>
            <TableCell>dryhr</TableCell>
            <TableCell>dryr</TableCell>
            <TableCell>ryry</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <DashboardDrawer  toggleDrawer={toggleDrawer} isOpen={drawerIsOpen} onClose={toggleDrawer} />

    </>
  )
}

export default DashboardTable
