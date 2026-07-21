import Box from '../../common/box/Box'
import CommentForm from './fragments/CommentForm'
import CommentBox from './fragments/CommentBox'

const ProductComment = () => {
  return (
    <div id="productComment" className="scroll-mt-6 p-5 border border-gray-300 rounded-xl h-auto">
      <h1 className="mb-10 font-bold">نظرات کاربران</h1>

      <Box
        title="خلاصه دیدگاه خریدارها"
        desc="تولید شده با هوش مصنوعی"
        img="/images/ai-bg.svg"
      />

      <div className="bg-blue-200 mt-8 p-5 rounded text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده
      </div>

      <div className="flex">
        <span className="w-2/5">
          <CommentForm />
        </span>
        <span className="mt-10 w-3/5">
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </span>
        
      </div>
      <button className="flex justify-center items-center bg-black mt-5 mr-auto p-3 rounded w-fit text-white text-xs">
        بارگزاری بیشتر
      </button>
    </div>
  )
}

export default ProductComment
