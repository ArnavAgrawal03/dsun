<script>
    import Card from "./Card.svelte";
    import { onMount } from "svelte";
    export let handleClick; // Pass down the handleClick function
      function handleCarouselClick(article) {
          handleClick(article);
      }
      function handleClose() {
        selectedArticle = null; // Or whatever logic is needed to close the detailed view
    }
  
    export let articles;
    let currentIndex = 0;
    let displayedArticles = [];
    let maxIndex = 0;
    let cardsPerRow = 1;
    let cardWidth = 320; // Initial card width
  
    // const updateCardsPerRow = () => {
    //   const windowWidth = window.innerWidth;
    //   const availableCardsPerRow = Math.floor(windowWidth / cardWidth) - 1;
  
    //   // If there's not enough space for the fixed number of cards, increase the card width
    //   if (availableCardsPerRow < cardsPerRow) {
    //     cardWidth = Math.floor(windowWidth / cardsPerRow);
    //   }
  
    //   // Adjust the cardsPerRow based on the updated card width
    //   cardsPerRow = Math.max(availableCardsPerRow, 1);
    // };
    let resized = false; // New flag to track resizing
  
  const updateCardsPerRow = () => {
    const windowWidth = window.innerWidth;
    const availableCardsPerRow = Math.floor(windowWidth / cardWidth) - 1;
  
    // Check if there's a change in available space
    const newCardsPerRow = Math.max(availableCardsPerRow, 1);
    
    if (newCardsPerRow !== cardsPerRow) {
      cardsPerRow = newCardsPerRow;
      resized = true; // Set the flag to indicate resizing
    }
  };
  
    const showNext = () => {
      maxIndex = Math.max(articles.length - cardsPerRow, 0);
      currentIndex =
        currentIndex < maxIndex ? currentIndex + cardsPerRow : maxIndex;
      scrollIntoView();
    };
  
    const showPrevious = () => {
      maxIndex = Math.max(articles ? articles.length - cardsPerRow : 0, 0);
      currentIndex = currentIndex > 0 ? currentIndex - cardsPerRow : 0;
      scrollIntoView();
    };
  
    const scrollIntoView = () => {
      const container = document.querySelector(".article-container");
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    };
  
    // onMount(() => {
    //   updateCardsPerRow(); // Initial call on mount
    //   window.addEventListener("resize", updateCardsPerRow); // Call on window resize
  
    //   // Cleanup listener on component destroy
    //   return () => {
    //     window.removeEventListener("resize", updateCardsPerRow);
    //   };
    // });
    onMount(() => {
    updateCardsPerRow(); // Initial call on mount
    window.addEventListener("resize", () => {
      updateCardsPerRow();
      resized = false; // Reset the flag after resizing
    }); // Call on window resize
  
    // Cleanup listener on component destroy
    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  });
  
    $: {
      if (articles && articles.length > 0) {
        displayedArticles = articles.slice(
          currentIndex,
          currentIndex + cardsPerRow,
        );
      } else {
        displayedArticles = [];
      }
    }
  </script>
  
  <div class="carousel">
    <h2>NEWS TOPIC</h2>
    <div class="carousel-container">
      <div class="arrow left" on:click={showPrevious}>&#9664;</div>
      <div class="article-container">
        {#each displayedArticles as article, i (i)}
        <div on:click={() => selectedArticle = article}>
          <Card
            article={article}
            customClass="custom-article-card"
            handleClose={handleClose}
            style={`width: ${resized ? (100 / Math.min(cardsPerRow, Math.floor(window.innerWidth / cardWidth))) + '%' : cardWidth + 'px'};`}
          />
        </div>
        {/each}
        
      </div>
      <div class="arrow right" on:click={showNext}>&#9654;</div>
    </div>
  
  
  </div>
  
  <style>
    .carousel {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .carousel-container {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
  
    .arrow {
      font-size: 24px;
      cursor: pointer;
      margin: 0 10px;
    }
  
    .article-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
  
    h2 {
      color: #b22222;
      font-size: 30px;
      margin-bottom: 10px;
    }
  </style>