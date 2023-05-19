import axios from "axios";

const cloudinaryApi = process.env.REACT_APP_CLOUDINARY_API;
const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME;
const getErrTripDetails = `${process.env.REACT_APP_apiHost}get-trip-details/trip-package/6465bc874e71527`;
const getTripDetailsUrl = `${process.env.REACT_APP_apiHost}get-trip-details/trip-package/6465f547758b5f5c72e8ddd3`;
const ammenityDataUrl = `${process.env.REACT_APP_apiHost}get-feature/amenity`;
const ocassionDataUrl = `${process.env.REACT_APP_apiHost}get-feature/occasion`;

const getApiDatas = async (
  setTripDetails,
  setAmmenityImgData,
  setOcassionImgData
) => {
  const getTripDetails = await axios.get(getTripDetailsUrl);
  const getAmmenityData = await axios.get(ammenityDataUrl);
  const getOcassionData = await axios.get(ocassionDataUrl);

  console.log("Ocassion Data : ", getOcassionData.data);
  console.log("Ammenity Data : ", getAmmenityData.data);

  setTripDetails(getTripDetails);
  setAmmenityImgData(getAmmenityData);
  setOcassionImgData(getOcassionData);
};

export const handleProfileImagetoUrl = async (image) => {
  console.log("Profile Image : ", image);
  let imageUrl = "";

  if (image) {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "trouvaille");
    formData.append("cloud_name", `${cloudinaryName}`);
    console.log(formData);
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
    console.log(imageUrl);
    return imageUrl;
  } else return "";
};

export default getApiDatas;
