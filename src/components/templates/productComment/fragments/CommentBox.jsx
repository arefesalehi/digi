import Box from '../../../common/box/Box'

const commentBox = () => {
  return (
    <div className="flex flex-col mt-5 p-5 border border-gray-300 rounded text-sm">
      <span className="flex justify-between items-center">
        <Box
          title="کاربر ناشناس"
          desc="arefe@gmail.com"
          img="/images/user-icon.png"
        />
        <p>24/7/2026</p>
      </span>
      <span className='mt-5 pr-3 text-justify'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </span>
    </div>
  )
}

export default commentBox
