import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { writable } from "svelte/store";
import {auth} from "../lib/firebase/firebase.client";
import { goto } from '$app/navigation'

export const authStore = writable({
    isLoading: true,
    currentUser: null
});

export const authHandlers = {
    signup: async (email, password, userName) => {
        user = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, {displayName: userName});
        await goto('/');
    },
    logout: async () => {
        await signOut(auth);
        await goto('/');
    },
    login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
        await goto('/');
    }
}
