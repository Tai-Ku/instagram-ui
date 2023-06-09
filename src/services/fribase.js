import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();
  return result.docs.length > 0;
}
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
}
export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(5).get();
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profiles) =>
        profiles.userId !== userId && !following.includes(profiles.userId)
    );
}
