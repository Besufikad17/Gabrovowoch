<script>
  import like from "../assets/imgs/icons8-facebook-like-90.png";
  
  // FIXME props
  export const title = "";
  export const description = "";
  let likes = 0;
</script>

<main>
  <div class="parent">
     <h2>{title}</h2>
     <p>{description}</p>
     <div class="action-center">
        <button on:click={() => likes++}><img src={like} alt="like"/>{" " + likes}</button>
     </div>
  </div>
</main>

<style>
    .action-center {
        float: right;
    }

    .action-center button {
        border-radius: 15px;
        background-color: #897070;
        border-style: none;
        align-items: center;
        text-align: center;
        margin-right: 10px;
    }

    .action-center button img {
        width: 25px;
        height: 25px;
    }
</style>