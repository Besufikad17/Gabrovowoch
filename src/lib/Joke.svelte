<script>
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import axios from "axios";
  import Header from "./Header.svelte";
  
  export var id;
  let data = null;

  onMount(async () => {
    axios
      .get(
        `https://gabrovowoch-backend.onrender.com/joke/${id}?api_key=a6803db0`
      )
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          data = result.data.data;
        }
      })
      .catch((e) => {
        throw e;
      });
  });
</script>

<main>
  <Header /><br />
  <div class="parent">
    <div class="container">
      <div class="row">
        <div class="child">
          {#if data}
            <Card
              title={data.title}
              description={data.description}
              likes={data.likes}
            />
          {/if}
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="footer">
    <p>@2023 ጋቭሮቮዎች</p>
  </div>
</main>

<style>
  .parent {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .child {
    width: auto;
    min-width: auto;
    background-color: #d5e7dc;
    text-align: left;
    margin: 10px;
    border-radius: 8px;
  }

  .footer {
    justify-content: center;
    padding: 10px;
    bottom: 0px;
    text-align: center;
    height: 50px;
    color: white;
    background-color: #626034;
    margin-top: 273px;
  }
</style>
