import { firebase, FieldValue } from "../lib/firebase";

// tạo hàm lấy  thông  tin  khi user  ấn  submitmitt
export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();

  return result.docs.length > 0;
}
