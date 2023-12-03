<script>
	import Card from "./Card.svelte";
	import Carousel from "./Carousel.svelte";
	import Article from "./Article.svelte";

	export let cover1;
	export let cover2;
	export let carousel1;
	export let carousel2;
	export let topic1 = "Cornell University News";
	export let topic2 = "Ithaca News";

	let article1 = cover1;
	let article2 = cover2;
	let showHome = true;
	let showArticle = false;
	let art = null;

	function selectArticle(article) {
		showArticle = true;
		showHome = false;
		art = article; // Set the clicked article to display in the article view
	}
</script>

<main>
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
			<Carousel topic = {topic1} articles = {carousel1} handleClick={selectArticle}/>
		</div>
		<div class="topic2">
			<Carousel topic = {topic2} articles = {carousel2} handleClick={selectArticle}/>
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