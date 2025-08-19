import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const navigate = useNavigate();
  const auth = getAuth();

  async function onGoogleClick() {
    try {
      if (auth.currentUser) {
        await signOut(auth);
      }

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const { user } = await signInWithPopup(auth, provider);

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        await setDoc(ref, {
          name: user.displayName ?? "",
          email: user.email ?? "",
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (e) {
      toast.error("Could not authorize with Google");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
