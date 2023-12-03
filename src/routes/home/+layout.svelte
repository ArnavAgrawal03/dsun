<script>
    import {Header, SkipToContent, HeaderUtilities, Button} from "carbon-components-svelte";
    import Logout from "carbon-icons-svelte/lib/Login.svelte";
    import Code from "carbon-icons-svelte/lib/Code.svelte";
    import "carbon-components-svelte/css/white.css";
</script>

<Header company="The Daily Sun" platformName="DataSun" href="/">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities>
        <Button icon={Code} kind="secondary" href="https://github.com/CornellDataScience/datasun">About</Button>
        <Button icon={Logout} kind="danger" href="/auth/login">Sign Out</Button>
    </HeaderUtilities>
</Header>
<slot>
</slot>