import Accardeon from '../../components/common/accardeon/Accardeon'
import Description from '../../components/common/description/Description'

const AboutUs = () => {
  return (
    <>
      <div className="mycontainer">
        <Description
          title="   ما کی هستیم ؟"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            laudantium atque necessitatibus. Accusantium, sequi ducimus."
        />

        <div className="flex">
          <span className="flex justify-center items-center mt-10 w-1/2">
            <Accardeon />
          </span>
          <span className="-1/2">
            <img src="/images/about-us.png" alt="about-us" />
          </span>
        </div>
      </div>
    </>
  )
}

export default AboutUs
