const DashboardLabel = ({ title }) => {
  return (
    <div className="flex items-center py-6 w-full h-20">
      <div className="flex-1 border-2 border-gray-300 border-t"></div>

      <span className="px-8 font-bold text-gray-700 text-sm">{title}</span>

      <div className="flex-1 border-2 border-gray-300 border-t"></div>
    </div>
  )
}

export default DashboardLabel
