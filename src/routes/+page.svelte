<script>
	import { onMount } from "svelte";
	import Home from "../components/home/Home.svelte";
	import {authStore} from "../stores/authStore";

	let cover1 = null;
	let cover2 = null;
	let carousel1 = null;
	let topic1 = "First Topic Here (Unsure how to do this for anonymous users)";
	let carousel2 = null;
	let topic2 = "Second Topic Here (Unsure how to do this for anonymous users)";

	async function loadDefault() {
		try {
			const articleList = await fetch("https://datasun-backend.vercel.app/get_articles/");
			const data = await articleList.json();
			cover1 = data[0];
			cover2 = data[1];
			carousel1 = data.slice(2, 13);
			carousel2 = data.slice(13, 24);
			// console.log("articles:", articles);
		} catch (error) {
			console.error("Error loading random articles:", error);
		}
	}

	async function loadPersonal(){
		try{
			const articleList = await fetch("https://datasun-backend.vercel.app/get_recs/" + $authStore.currentUser.uid);
			const data = await articleList.json();
			console.log("Personalized Articles:", data)
			if (data!==null) {
				loadDefault();
				topic1 = null;
				topic2 = null;
			} else {
				cover1 = data.cover1;
				cover2 = data.cover2;
				carousel1 = data.carousel1;
				topic1 = data.topic1;
				carousel2 = data.carousel2;
				topic2 = data.topic2;	
			}
		} catch (error) {
			console.error("Error loading personalized articles", error);
			loadDefault();
		}
	}
	onMount(() => {
		if ($authStore.currentUser) {
			loadPersonal();
		} else {
			loadDefault();
		}
	});

</script>

<main>
	<Home {cover1} {cover2} {carousel1} {carousel2} {topic1} {topic2} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>