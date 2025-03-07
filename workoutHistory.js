import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Get references to Firestore and Authentication
const db = getFirestore();
const auth = getAuth();

// Function to fetch workout history
const fetchWorkoutHistory = async () => {
    const user = auth.currentUser;
    if (user) {
        try {
            const q = query(collection(db, "workouts"), where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                // You can display this data in your UI here
            });
        } catch (e) {
            console.error("Error getting documents: ", e);
        }
    } else {
        console.log("No user is signed in!");
    }
};

// Fetch workout history when page loads or as needed
fetchWorkoutHistory();
