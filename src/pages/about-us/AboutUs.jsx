import Accardeon from "../../components/common/accardeon/Accardeon"

const AboutUs = () => {
  return (
    <>
      <div className="mycontainer">
        <div>
          {' '}
          <h1 className="inline-block gap-2 mt-10 pr-4 border-r-8 border-r-red-600 border-solid rounded font-bold text-2xl">
            ما کی هستیم ؟
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            laudantium atque necessitatibus. Accusantium, sequi ducimus.
          </p>
        </div>

        <div className="flex">
          <span className="flex justify-center items-center mt-10 w-1/2">
            

            <Accardeon/>
          
          </span>
          <span className="-1/2">

          <img src="/images/about-us.png" alt="about-us"/>
          
          </span>
        </div>
      </div>
    </>
  )
}

export default AboutUs
