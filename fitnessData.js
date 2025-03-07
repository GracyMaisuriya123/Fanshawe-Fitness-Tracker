import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const db = getFirestore();

// Save workout data to Firestore
export const saveWorkoutData = async (userId, exercise, duration, calories) => {
  try {
    await addDoc(collection(db, "workouts"), {
      userId: userId,
      exercise: exercise,
      duration: duration,
      calories: calories,
      date: new Date(),
    });
    console.log("Workout saved!");
  } catch (e) {
    console.error("Error saving workout data: ", e);
  }
};

// Retrieve workout history for a specific user
export const getUserWorkouts = async (userId) => {
  const workoutsQuery = query(collection(db, "workouts"), where("userId", "==", userId));
  const querySnapshot = await getDocs(workoutsQuery);

  const workouts = [];
  querySnapshot.forEach((doc) => {
    workouts.push(doc.data());
  });
  return workouts;
};
