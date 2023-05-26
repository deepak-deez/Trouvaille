import axios from "axios";

const getAllApiData = async (bookingId, setUserBookingDetails) => {
  const userBookingApi = `${process.env.REACT_APP_API_HOST}booking-details/${bookingId}`;
  const getAllTripPackagesData = await axios.get(userBookingApi);
  setUserBookingDetails(getAllTripPackagesData.data.data);
};

export default getAllApiData;
