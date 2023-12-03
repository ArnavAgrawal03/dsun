<script>
    import SignUp from "../../../components/auth/sign_up.svelte";
    import { Link } from "carbon-components-svelte";
    import { createUserWithEmailAndPassword, updateProfile } from "Firebase/auth";
    import { auth, userDoc } from "../../../firebase";
    import { goto } from '$app/navigation'
    import { setDoc } from 'Firebase/firestore/lite';
    let errors;

    async function signUp(event){
        try {
            let user = await createUserWithEmailAndPassword(auth, event.detail.email, event.detail.password);
            await updateProfile(user.user, {displayName: event.detail.username});
            await setDoc(userDoc(auth.currentUser.uid), {username: event.detail.username, email: event.detail.email});
            await goto("/home");
        } catch (error) {
            console.log('error from creating user', e);
        }
    }
</script>

<div>
    <div class="header">
        <h4>Sign Up</h4>
    </div>
    <div class="signup-form">
        <SignUp on:signup = {signUp} />
        <div>Already have an account? <Link href="/auth/login">Sign In</Link></div>
    </div>
</div>

<style>
    .signup-form {
        min-height: 80vh;
        display: grid;
        place-items: center;
    }
</style>