<script>
    import SignIn from "../../../components/auth/sign_in.svelte";
    import { Link } from "carbon-components-svelte";
    import {authHandlers} from "../../../stores/authStore";
    import { goto } from "$app/navigation";
    let error;

    async function signIn(event) {
        try {
            await authHandlers.login(event.detail.email, event.detail.password)
            await goto("/")
        } catch (error) {
            console.log("error signin in: ", error.message)
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