<script>
  import like from "../assets/imgs/icons8-facebook-like-90.png";
  import axios from "axios";

  export let id;
  export let title;
  export let description;
  export let likes;
  
  let API_URL = import.meta.env.VITE_API_URL;
  let API_KEY = import.meta.env.VITE_API_KEY;

  $: liked = !!likes;

  const likee = () => {
    likes++;
    axios.put(`${API_URL}/api/like/${id}?api_key=${API_KEY}`).then((result) => {
      console.log(result.data);
    }).catch(error => {
      console.log(error);
    })
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