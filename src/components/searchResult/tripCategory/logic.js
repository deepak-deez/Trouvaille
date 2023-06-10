import axios from "axios";

const allTripPackagesApi = `${process.env.REACT_APP_API_HOST}get-module/trip-package`;
const filterPackagesApi =
  process.env.REACT_APP_API_HOST + "get-filtered-feature/trip-package";

export const getAllApiData = async (setAllTripData) => {
  const response = await axios.get(allTripPackagesApi);
  setAllTripData(response.data.data);
};

export const getFilteredData = async (filterRequirements, setAllTripData) => {
  const response = await axios.post(filterPackagesApi, filterRequirements);
  setAllTripData(response.data.data);
};

export default getAllApiData;
