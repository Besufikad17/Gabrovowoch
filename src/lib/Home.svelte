<script>
  import Header from "./Header.svelte";
  import Card from "./Card.svelte";
  import Footer from "./Footer.svelte";
  import Joke from "./Joke.svelte";

  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { onMount } from "svelte";


  let isLoading = true;
  let isGrid = true;
  let data = [];
  let datas = [];
  let skip = 0;
  let take = 10;

  const fetch = async () => {
    axios
      .get(
        `https://gabrovowoch-backend.onrender.com/all?skip=${skip}&take=${take}&api_key=a6803db0`
      )
      .then((result) => {
        if (result.data.success) {
          data = result.data.data;
          let newDatas = [];
          for (let i = 0; i < data.length; i++) {
            if (i % 2 != 0) {
              newDatas.push([data[i - 1], data[i]]);
            }
          }
          datas = [...newDatas];
        }
      })
      .catch((e) => {
        throw e;
      });
  };

  const next = async () => {
    skip = skip + 10;
    fetch();
  };

  const previous = async () => {
    skip = skip - 10;
    fetch();
  };

  onMount(async () => {
    fetch();
    isLoading = false;
  });
</script>

<main>
  <Header /><br />

  <div class="parent">
    <div class="container">
      <br />
      <button class="navigator" on:click={()=> (isGrid = !isGrid)}>
        {#if isGrid}
            <Icon icon="ic:baseline-check-box-outline-blank" />
        {:else}
            <Icon icon="material-symbols:grid-view-outline" />
        {/if}
        </button
      ><br />

      {#if isGrid}
        {#each datas as d}
          <div class="row">
            <div class="child">
              <Card
                title={d[0].title}
                description={"" + d[0].description}
                likes={0}
              />
            </div>
            <div class="child">
              <Card
                title={d[1].title}
                description={"" + d[1].description}
                likes={0}
              />
            </div>
          </div>
        {:else}
          <p>loading...</p>
        {/each}

        {#if !isLoading}
          <div class="action-row">
            {#if skip > 10}
              <button on:click={previous} class="navigator">
                <Icon icon="ic:round-keyboard-arrow-left" />
              </button>
            {/if}
            <button on:click={next} class="navigator">
              <Icon icon="ic:round-keyboard-arrow-right" />
            </button>
          </div>
        {/if}
      {:else}
        <!-- <Joke /> -->
      {/if}
    </div>
  </div>
  <br />

  {#if !isLoading}
    <Footer />
  {/if}
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

  .action-row {
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

  .navigator {
    border-radius: 5px;
    display: flex;
    background-color: white;
    color: #897070;
    border-style: solid 1px;
    border-color: #897070;
    align-items: center;
    text-align: center;
    margin-right: 10px;
    font-size: 24px;
  }

  .navigator:hover {
    background-color: #897070;
    color: white;
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
