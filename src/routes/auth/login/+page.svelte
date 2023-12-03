<script>
    import SignIn from "../../../components/auth/sign_in.svelte";
    import { Link } from "carbon-components-svelte";
    import { signInWithEmailAndPassword } from "Firebase/auth";
    import { auth, userDoc } from "../../../firebase";
    import { goto } from "$app/navigation";
    import { setDoc } from "Firebase/firestore/lite";
    let error;

    async function signIn(event) {
        try {
            let user = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password)
            await setDoc(userDoc(auth.currentUser.uid), { username: user.user.displayName, email: user.user.email })
            await goto("/home")
        } catch (error) {
            console.log("error signin in", error.message)
          error = error.message
        }
    }
</script>

<div>
    <div>
        <h4>Log In</h4>
    </div>
    <div class="signin-form">
        <SignIn on:login = {signIn}/>
        <div>Don't have an account? <Link href="/auth/register">Sign Up</Link></div>
    </div>
</div>

<style>
    .signin-form {
        min-height: 80vh;
        display: grid;
        place-items: center;
    }
</style>