import axios from "axios";
export const sendContactusMessage = (form) => {
  const response = axios.post(
    "https://shopino.iran.liara.run/v1/contact-us",
    form,
  );
};
