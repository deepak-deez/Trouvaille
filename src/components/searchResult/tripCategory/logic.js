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

export const sortData = (
  allPackagesData,
  setAllPackagesData,
  sortProp,
  sortOrder
) => {
  allPackagesData?.map((data) => {
    data.title = data.title.charAt(0).toUpperCase() + data.title.slice(1);
  });

  if (sortProp === "price" && sortOrder === "ascending") {
    setAllPackagesData([...allPackagesData].sort((a, b) => a.price - b.price));
  } else if (sortProp === "price" && sortOrder === "descending") {
    setAllPackagesData([...allPackagesData].sort((a, b) => b.price - a.price));
  } else if (sortProp === "name" && sortOrder === "ascending") {
    setAllPackagesData(
      [...allPackagesData].sort((a, b) => (a.title > b.title ? 1 : -1))
    );
  } else if (sortProp === "name" && sortOrder === "descending") {
    setAllPackagesData(
      [...allPackagesData].sort((a, b) => (a.title > b.title ? -1 : 1))
    );
  }
};

export default getAllApiData;
