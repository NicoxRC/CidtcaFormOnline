import axios from "axios";

export const postForm = async (values: any) => {
  try {
    const response = await axios.post("http://localhost:3001/forms", values);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
