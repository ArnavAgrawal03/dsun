<script>
	import Card from "./Card.svelte";
	import Carousel from "./Carousel.svelte";
	import Article from "./Article.svelte";
	export let articles;
	let article1 = null;
	let article2 = null;
	let showHome = true;
	let showArticle = false;
	let art = null;

	$: {
		if (articles && articles.length > 0) {
			article1 = articles[0] || null;
			article2 = articles[1] || null;

		}
	}
	function selectArticle(article) {
		showArticle = true;
		showHome = false;
		art = article; // Set the clicked article to display in the article view
}
// function handleClick(article) {
//     if (showHome) {
//         // If in the home view, handle the click to display the article
//         selectArticle(article);
//     } else {
//         // If in the article view, return to the home view
//         showArticle = false;
//         showHome = true;
//     }
// }

  // Keyboard event handler
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      handleClick();
    }
  }
</script>

<main>
	<!-- <a href="homepage.svelte"
		><img
			src="https://cornellsun.com/wp-content/uploads/2015/11/sunbannerwebsite-10.png"
			alt="CornellDailySunLogo"
			class="sun-banner"
		/></a
	> -->
	{#if showHome}
		<div>
		<div class="first_two">
			{#if article1 !== null}
				<Card
					article={article1}
					customClass="custom-large-article-card"
					customClassImg="custom-img"
					handleClick={() => selectArticle(article1)}
				/>
			{/if}

			{#if article2 !== null}
				<Card
					article={article2}
					customClass="custom-large-article-card"
					customClassImg="custom-img"
					handleClick={() => selectArticle(article2)}
				/>
			{/if}
		</div>
		</div>
		<div class="topic1">
			<Carousel {articles} handleClick={selectArticle}/>
		</div>
		<div class="topic2">
			<Carousel {articles} handleClick={selectArticle}/>
		</div>
	{/if}
	{#if showArticle}
		<Article article={art} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 100%;
		margin: 0 auto;
	}

	.sun-banner {
		width: 100%;
		max-width: 800px; /* Set a maximum width for the banner */
		margin: 0 auto;
	}

	.first_two {
		margin-left: 80px;
		margin-right: 80px;
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 658px) {
		.first_two {
			margin-left: 80px;
			margin-right: 80px;
			margin-top: 40px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		}
	}

	@media (max-width: 1200px) {
		.first_two {
			margin-left: 60px;
			margin-right: 60px;
			margin-top: 40px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	@media (min-width: 1200px) {
		.first_two {
			margin-left: 60px;
			margin-right: 60px;
			margin-top: 40px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>