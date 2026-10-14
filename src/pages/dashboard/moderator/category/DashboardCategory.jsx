import DashboardCategoryTable from '../../../../components/templates/dashboard/DashboardCategoryTable'
import DashboardLabel from '../../../../components/templates/dashboard/DashboardLabel'
import DashboardSubCategoryTable from '../../../../components/templates/dashboard/DashboardSubCategoryTable'
const DashboardCategory = () => {
  return (
    <>
      <DashboardLabel title="مدیریت دسته بندی فروشگاه" />

      <DashboardCategoryTable />
      <DashboardSubCategoryTable/>

    </>
  )
}

export default DashboardCategory
