<script>
  import Header from "./lib/Header.svelte";
  import Card from "./lib/Card.svelte";
  import Footer from "./lib/Footer.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let data = [];

  onMount(async () => {
    axios
      .get(`https://gabrovowoch-backend.onrender.com/jokes`)
      .then((result) => {
        data = [...data, result.data];
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
      {#each data as d}
        {#each d as d2}
          <div class="row">
            <div class="child">
              <Card title={d2.title} description={"" + d2.content} />
            </div>
          </div>
        {/each}
      {:else}
        <!-- this block renders when photos.length === 0 -->
        <p>loading...</p>
      {/each}
    </div>
  </div>
  <br />

  <Footer />
</main>

<style>
  .parent {
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row {
    display: flex;
    flex-direction: row;
  }

  .child {
    width: auto;
    min-width: 400px;
    height: 300px;
    background-color: #a8a4a4;
    color: white;
    text-align: left;
    margin: 10px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .parent {
      flex-direction: column;
    }

    .row {
      flex-direction: column;
    }
  }
</style>
