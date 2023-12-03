<script>
    import SignUp from "../../../components/auth/sign_up.svelte";
    import { Link } from "carbon-components-svelte";
    import {authHandlers} from "../../../stores/authStore";
    import { goto } from '$app/navigation'
    let errors;

    async function signUp(event){
        try {
            await authHandlers.signup(event.detail.email, event.detail.password, event.detail.username);
        } catch (error) {
            console.log('error from creating user', error.message);
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