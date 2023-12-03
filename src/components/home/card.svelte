<script>
    import { ClickableTile, ImageLoader } from "carbon-components-svelte";

    export let title = "Default Title";
    export let imageUrl = "https://via.placeholder.com/150";
    export let articleUrl = "https://via.placeholder.com";
    export let caption = "This is a longer caption that requires more space to display properly.";

    function handleClick() {
        window.location.href = articleUrl;
    }
</script>

<ClickableTile on:click = {handleClick}>
    <ImageLoader fadeIn src = {imageUrl} />
    <h4>{title}</h4>
    <p>{caption}</p>
</ClickableTile>

