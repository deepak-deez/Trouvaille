import axios from "axios";

const cloudinaryApi = process.env.REACT_APP_CLOUDINARY_API;
const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME;

// export const handleProfileImagetoUrl = async (image) => {
//   let imageUrl = "";
//   const formData = new FormData();
//   formData.append("file", image);
//   formData.append("upload_present", "trouvaille");
//   formData.append("could_name", `${couldinaryName}`);
//   console.log(formData);

//   const response = await axios.post(
//     `${cloudinaryApi}/${couldinaryName}/image/upload`,
//     formData
//   );

//   imageUrl = response.data.secure_url;

//   console.log(imageUrl);
// };

export const handleProfileImagetoUrl = async (image) => {
  console.log("Profile Image : ", image);
  let imageUrl = "";
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
    .catch((err) => console.log(err));
  console.log(imageUrl);
  return imageUrl;
};
