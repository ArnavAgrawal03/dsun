<script>
	import Home from "../components/home/Home.svelte";
	let articles = null;
	async function loadArticles() {
		try {
			const articleList = await fetch("https://datasun-backend.vercel.app/get_articles/");
			const data = await articleList.json();
			articles = data; // Update the articles variable with the fetched data
			// console.log("articles:", articles);
		} catch (error) {
			console.error("Error:", error);
		}
	}

	// Load articles when the component is initialized
	loadArticles();
</script>

<main>
	<Home {articles} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>