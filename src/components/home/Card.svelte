<script>
    export let customClass;
    export let article;
    import Article from "./Article.svelte";
  
    let isPopupOpen = false;
  
    function openPopup() {
      isPopupOpen = true;
    }
  
    function closePopup() {
      isPopupOpen = false;
    }
  
  
    // Click event handler
    
  </script>
  
  
  
  {#if isPopupOpen}
    <Article article={article} handleClose={closePopup} on:keydown={closePopup} />
  {:else}
    <div class="card-container" tabindex="-1">
        <div class="article-card {customClass}" on:click={openPopup} on:keydown={openPopup}>
          <img src={article.thumbnail} alt={article.title} class="card-image" />
      
          <div class="article-details">
            <h2>{article.title}</h2>
            {#if customClass}
              <div class="caption">{article.caption}</div>
            {/if}
          </div>
      </div>
    </div>
  {/if}
  <style>
    .card-container {
      display: flex;
      justify-content: center;
      margin: 10px;
    }
  
    .article-card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 300px;
      cursor: pointer;
      border-radius: 8px;
      transition:
        transform 0.2s,
        box-shadow 0.2s;
      overflow: hidden;
    }
  
    .article-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  
    .card-image {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  
    .article-details {
      padding: 10px;
    }
  
    h2 {
      font-size: 18px;
      text-align: left;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 2px;
    }
  
    .custom-large-article-card {
      width: 600px;
      height: 400px;
    }
  
    .custom-large-article-card img {
      width: 100%;
      height: 75%;
    }
  
    .caption {
      font-size: 14px;
      text-align: left;
      white-space: normal; /* Allow multiple lines for longer captions */
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Limit to two lines */
      -webkit-box-orient: vertical;
    }
    @media (max-width: 658px) {
      .custom-large-article-card {
        margin-top: 2vh;
        width: 70vw !important;
        height: 40vh !important;
      }
  
      h2 {
        font-size: 15px;
        text-align: left;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0.5px;
      }
  
      .caption {
        font-size: 11px;
        text-align: left;
        white-space: normal; /* Allow multiple lines for longer captions */
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Limit to two lines */
        -webkit-box-orient: vertical;
      }
      .custom-large-article-card img {
        width: 100%;
        height: 75%;
      }
    }
  
    @media (max-width: 1200px) {
      .custom-large-article-card {
        width: 50vw !important;
        height: 40vh !important;
      }
      .custom-large-article-card img {
        width: 100%;
        height: 75%;
      }
    }
  </style>