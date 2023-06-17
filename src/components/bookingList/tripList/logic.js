import axios from "axios";

const getAllApiData = async (userId, setUserBookingDetails) => {
  console.log("ID :", userId);
  const allUserBookingApi = `${process.env.REACT_APP_API_HOST}user-all-booking/${userId}`;
  const getAllTripPackagesData = await axios.get(allUserBookingApi);
  console.log(getAllTripPackagesData);
  setUserBookingDetails(getAllTripPackagesData);
};

export default getAllApiData;
