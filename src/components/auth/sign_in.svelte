
<script>
    import {Form, TextInput, PasswordInput, Button} from "carbon-components-svelte";
    import {createEventDispatcher} from "svelte";

    let email, password;
    const dispatch = createEventDispatcher();
    function login() {
        dispatch("login", {email, password});
    }
</script>

<div class = "form-container">
    <Form>
        <h4>Log In to DataSun</h4>
        <div class="space"></div>
        <TextInput id="email" type="email" bind:value={email} labelText="Email" />
        <div class="space"></div>
        <PasswordInput id="password" bind:value={password} labelText="Password" />
        <div class="space"></div>
        <Button on:click={login}>Log In</Button>
    </Form>
</div>

<style>
    .form-container {
        width: 30%;
    }
    .form-container .space {
        margin: 20px 0;
    }
</style>