import { useEffect } from 'react'
import BreadCrumb from '../../components/common/breadCrumb/BreadCrumb'
import ShoppingCart from '../../components/common/shoppingcart/ShoppingCart'
import ProductComment from '../../components/templates/productComment/ProductComment'
import ProductFeatures from '../../components/templates/productFeatures/ProductFeatures'
import { useLocation } from 'react-router'

const Product = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const element = document.querySelector(hash)
      element?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [location])

  return (
    <>
      <BreadCrumb />


      {/*بخش  ویژگی های محصول و سبد خرید */}
      <div className="flex mt-20! mycontainer">
        <div className="p-8 w-3/4">
          <ProductFeatures />
        </div>
        <div className="py-8 w-1/4">
          <ShoppingCart />
        </div>
      </div>



      {/*بخش نظرات کاربران */}
      <div className="flex mycontainer">
        <div className="p-8 w-3/4">
          <ProductComment />
        </div>
      </div>

    </>
  )
}

export default Product
