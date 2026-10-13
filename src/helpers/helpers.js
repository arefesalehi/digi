export const getDisplayPrice=(seller)=>{
    if(!seller && seller.length === 0){
        return null
    }

    const price = seller.map((seller)=>seller.price)
    const minprice= Math.min(...price)

    return {
        price:minprice,
        hasMultiplePrice:seller.length >1
    }

    
}


export const formatPrice=(price)=>price.toLocaleString('fa-ir')