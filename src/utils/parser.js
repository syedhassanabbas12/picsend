import RNFS from "react-native-fs";
import { Buffer } from "buffer";

export const encodeToHex = (base64String) => {
  const raw = Buffer.from(base64String, "base64").toString("hex");
  let result = "";
  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += hex.length === 2 ? hex : "0" + hex;
  }
  console.log("WOW -> HEX String: ", raw.length);
  return result.toUpperCase();
};

export const imageToBase64 = async (imagePath) => {
  try {
    const base64String = await RNFS.readFile(imagePath, "base64");
    console.log("wow->Base64 String: ", base64String.split("").length);
    return base64String;
  } catch (error) {
    console.log("Error converting image to base64: ", error);
  }
};
