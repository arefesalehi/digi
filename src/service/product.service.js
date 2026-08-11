import api from "./api";

const createProduct = async (formData) => {
  console.log([...formData.entries()]);
  
  const { data } = await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export default createProduct;



export const getAllProducts = async (params) => {

  
  const { data } = await api.get("/products" , {params});

  return data;
};


