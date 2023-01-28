<script>
  import Header from "./Header.svelte";
  import Card from "./Card.svelte";
  import Footer from "./Footer.svelte";
  import Joke from "./Joke.svelte";

  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let API_URL = import.meta.env.VITE_API_URL;
  let API_KEY = import.meta.env.VITE_API_KEY;
  let isLoading = true;
  let isGrid = true;
  let data = [];
  let datas = [];
  let skip = 0;
  let take = 4;

  const fetch = async () => {
    axios
      .get(
        `${API_URL}/api/all?skip=${skip}&take=${take}&api_key=${API_KEY}`
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
    skip = skip + 4;
    fetch();
  };

  const previous = async () => {
    skip = skip - 4;
    fetch();
  };

  onMount(async () => {
    fetch();
    isLoading = false;
  });
</script>

<main class="main">
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
          <div class="row">{#key d}
            <div class="child" in:fly={{x: 10}}>
              <Card
                id={d[0].id}
                title={d[0].title}
                description={"" + d[0].description}
                likes={d[0].likes}
              />
            </div>{/key}{#key d}
            <div class="child" in:fly={{x: 10}}>
              <Card
                id={d[1].id}
                title={d[1].title}
                description={"" + d[1].description}
                likes={d[1].likes}
              />
            </div>{/key}
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
        <Joke id={null}/>
      {/if}
    </div>
  </div>
  <br />

  {#if !isLoading}
    {#if !isGrid}
      <div class="footer">
        <p>@2023 ጋቭሮቮዎች</p>
      </div>
    {:else}
        <Footer />
    {/if}
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

  .footer {
    justify-content: center;
    padding: 10px;
    bottom: 0px;
    text-align: center;
    height: 50px;
    color: white;
    background-color: #626034;
    margin-top: 173px;
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
