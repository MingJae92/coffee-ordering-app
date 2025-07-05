import request from 'axios';

const options = "https://api.sampleapis.com/coffee/hot";

const fetchData = async () => {
  try {
    const response = await request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
