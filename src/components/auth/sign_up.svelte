<script>
    import { Form, TextInput, PasswordInput, Button } from 'carbon-components-svelte';
    import { createEventDispatcher } from "svelte"
    let dispatch = createEventDispatcher()
    let username, email, password;

    function signup() {
        dispatch("signup", {
            username,
            email,
            password
        })
    }
</script>

<div class = "form-container">
    <Form>
        <h4>Sign Up for DataSun</h4>
        <div class="space" />
        <TextInput bind:value={username} labelText="Username" name="username"/>
        <div class="space" />
        <TextInput bind:value={email} labelText="Email address" type="email" name="email" />
        <div class="space" />
        <PasswordInput
            bind:value={password}
            tooltipAlignment="start"
            tooltipPosition="left"
            labelText="Password"
            name="password"
        />
        <div class="space" />
        <Button on:click={signup}>Sign Up</Button>
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