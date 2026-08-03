import axios from "axios";
export const sendContactusMessage =async (form) => {
  const response = await axios.post(
    "https://shopino.iran.liara.run/v1/contact-us",
    form,
  );

  return response
};
