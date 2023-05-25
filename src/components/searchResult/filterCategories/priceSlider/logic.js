import axios from "axios";

const allTripPackagesApi = `${process.env.REACT_APP_API_HOST}get-module/trip-package`;

const getAllApiData = async () => {
  const getAllTripPackagesData = await axios.post(allTripPackagesApi, {
    category: {},
  });
  return getAllTripPackagesData.data.data;
};

export default getAllApiData;
