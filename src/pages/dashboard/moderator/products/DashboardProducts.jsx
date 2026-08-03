import DashboardDrawer from "../../../../components/templates/dashboard/DashboardDrawer"
import DashboardLabel from "../../../../components/templates/dashboard/DashboardLabel"
import DashboardTable from "../../../../components/templates/dashboard/DashboardTable"

const DashboardProducts = () => {
  return (
   <>
    <DashboardLabel  title='مدیریت محصولات فروشگاه'/>

    <DashboardTable/>

    <DashboardDrawer/>
   
   </>
  )
}

export default DashboardProducts