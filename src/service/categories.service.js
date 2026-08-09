
import api from '../service/api'

export const getAllCategories = async () => {
  const { data } = await api.get(
    "/category",

  );


  return data
};