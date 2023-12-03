<script>
    import {Header, SkipToContent, HeaderUtilities, Button} from "carbon-components-svelte";
    import Login from "carbon-icons-svelte/lib/Login.svelte";
    import Code from "carbon-icons-svelte/lib/Code.svelte";
    import User from "carbon-icons-svelte/lib/User.svelte";
    import { Logout } from "carbon-icons-svelte";
    import "carbon-components-svelte/css/white.css";
    import { onAuthStateChanged, signOut } from 'Firebase/auth';
    import { navigating } from '$app/stores';
    import { onMount } from 'svelte';
    import { auth } from '../Firebase';
    import { getStores } from '$app/stores';
    // import { Loading } from 'carbon-components-svelte';
    
    
    let { session } = getStores();
    
    onMount(() => {
        onAuthStateChanged(auth,
        (user) => {
            if (user) {
                session.set({ user });
            } else {
                session.set({ user: null });
            }
        },
        (error) => {
            session.set({ user: null });
            console.log(error);
        });
    });

    async function logOut() {
        await signOut(auth);
        await goto('/');
    }

</script>

<Header company="The Daily Sun" platformName="DataSun" href="/">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    {#if $session.user !== null}
    <HeaderUtilities>
        <Button icon={Code} kind="secondary" href="https://github.com/CornellDataScience/datasun">About</Button>
        <Button icon={User} kind="secondary" href="/home">My Account</Button>
        <Button icon={Logout} on:click = {logOut} kind="danger"  href="/auth/login">Log Out</Button>
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
