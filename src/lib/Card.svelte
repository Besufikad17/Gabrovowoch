<script>
  import like from "../assets/imgs/icons8-facebook-like-90.png";

  export let title;
  export let description;
  export let likes;
  $: liked = !!likes;

  const likee = () => {
    likes++;
  }

</script>

<main>
  <div class="parent">
     <h2>{title}</h2>
     <p>{description}</p>
     <div class="action-center">
        <button on:click|once={likee} class:liked><img src={like} alt="like"/>{" " + likes}</button>
     </div>
  </div>
</main>

<style>

    .parent {
      padding: 10px;
      max-width: 500px;
    }
    .action-center {
        float: right;
    }

    .action-center button {
        border-radius: 15px;
        display: flex;
        background-color: #897070;
        border-style: none;
        align-items: center;
        text-align: center;
        margin-right: 10px;
        font-size: 15px;
    }
    .action-center button.liked {
      background-color: #708986;
    }

    .action-center button img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
</style>