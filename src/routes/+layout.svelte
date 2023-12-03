<script>
    import {Header, SkipToContent, HeaderUtilities, Button} from "carbon-components-svelte";
    // import Login from "carbon-icons-svelte/lib/Login.svelte";
    // import Code from "carbon-icons-svelte/lib/Code.svelte";
    // import User from "carbon-icons-svelte/lib/User.svelte";
    import { Logout, Login, Code, User } from "carbon-icons-svelte";
    import "carbon-components-svelte/css/white.css";
    import {onMount} from "svelte";
    import {auth} from "../lib/firebase/firebase.client";
    import {authStore, authHandlers} from "../stores/authStore";
    // import { Loading } from 'carbon-components-svelte';
    
    onMount(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            authStore.update((curr) => {
                return {...curr, isLoading:false, currentUser: user}
            }
            )
        }
        )
    }
    );

</script>

<Header company="The Daily Sun" platformName="DataSun" href="/">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    {#if $authStore.currentUser}
    <HeaderUtilities>
        <Button icon={Code} kind="secondary" href="https://github.com/CornellDataScience/datasun">About</Button>
        <Button icon={User} kind="secondary" href="/account">{$authStore.currentUser.displayName}'s Account</Button>
        <Button icon={Logout} on:click = {authHandlers.logout} kind="danger"  href="/auth/login">Log Out</Button>
    </HeaderUtilities>
    {:else}
        <HeaderUtilities>
            <Button icon={Code} kind="secondary" href="https://github.com/CornellDataScience/datasun">About</Button>
            <Button icon={User} kind="secondary" href="/auth/register">Sign Up</Button>
            <Button icon={Login} kind="primary" href="/auth/login">Log In</Button>
        </HeaderUtilities>
    {/if}
</Header>
<slot>
</slot>
