<script>
	export let article;
  export let handleClose;
</script>

<main>
    <div class="popup-overlay">
        <div class="popup-content">
            <h1>{article.title}</h1>
            <img src={article.thumbnail} alt={article.caption}>
            <p class="auth">By  {article.authors}</p>
            <p class='text'>{article.text}</p>
          <button class="close-button" on:click={handleClose}>Close</button>
        </div>
      </div>
</main>

<style>
    /* Style the overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style the content within the popup */
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    text-align: center;
    position: relative; /* for close button positioning */
  }

    img {
      height: 400px;
      width: auto;
    }
    .auth{
        font-size: 3vh;
    }
    .text {
        font-size: 2.5vh;
        margin: 3vw;
        text-align: left;
    }
</style>