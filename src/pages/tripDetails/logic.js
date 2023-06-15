import axios from "axios";
import getColors from "get-image-colors";
const cloudinaryApi = process.env.REACT_APP_CLOUDINARY_API;
const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME;
const getErrTripDetails = `${process.env.REACT_APP_API_HOST}get-trip-details/trip-package/6465bc874e71527`;

const getApiDatas = async (
  setTripDetails,
  setAmmenityImgData,
  setOcassionImgData,
  setUserDatabaseData,
  currentUserId,
  currentTripId
) => {
  const getTripDetailsUrl = `${process.env.REACT_APP_API_HOST}get-trip-details/trip-package/${currentTripId}`;
  const getAmmenityDataUrl = `${process.env.REACT_APP_API_HOST}get-feature/amenity`;
  const getOcassionDataUrl = `${process.env.REACT_APP_API_HOST}get-feature/occasion`;
  const getUserDatabaseUrl = `${process.env.REACT_APP_API_HOST}database/Frontend-user`;

  const getTripDetails = await axios.get(getTripDetailsUrl);
  const getAmmenityData = await axios.get(getAmmenityDataUrl);
  const getOcassionData = await axios.get(getOcassionDataUrl);
  const getUserDatabase = await axios.get(
    `${getUserDatabaseUrl}/${currentUserId}`
  );

  setTripDetails(getTripDetails);
  setAmmenityImgData(getAmmenityData);
  setOcassionImgData(getOcassionData);
  setUserDatabaseData(getUserDatabase);
};

export const handleProfileImagetoUrl = async (image) => {
  let imageUrl = "";

  if (image) {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "trouvaille");
    formData.append("cloud_name", `${cloudinaryName}`);
    await fetch(`${cloudinaryApi}/${cloudinaryName}/image/upload`, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        imageUrl = data.secure_url;
      })
      .catch((err) => {
        return err;
      });
    return imageUrl;
  } else return "";
};

export const extractColorScheme = async (backgroundImg) => {
  const colors = getColors(backgroundImg, "image/png").then((colors) => {
    // `colors` is an array of color objects
    console.log(colors);
    return colors;
  });

  console.log(colors);
};

export default getApiDatas;
