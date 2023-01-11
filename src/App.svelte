<script>
  import Header from "./lib/Header.svelte";
  import Card from "./lib/Card.svelte";
  import Footer from "./lib/Footer.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let data = [];
  let datas = [];

  onMount(async () => {
    axios
      .get(`https://gabrovowoch-backend.onrender.com/jokes`)
      .then((result) => {
        data = result.data;
        let newDatas = [];
        console.log(data.length);
        for (let i = 0; i < data.length; i++) {
          if (i % 2 != 0) {
            newDatas.push([data[i - 1], data[i]]);
          }
        }
        console.log(newDatas);
        datas = [...newDatas];
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
      {#each datas as d}
      <div class="row">
        <div class="child">
          <Card title={d[0].title} description={"" + d[0].content} />
        </div>
        <div class="child">
          <Card title={d[1].title} description={"" + d[1].content} />
        </div>
      </div>
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
    min-width: auto;
    background-color: #d5e7dc;
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
