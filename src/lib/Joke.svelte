<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import axios from "axios";
  import Header from "./Header.svelte";
  import Icon from "@iconify/svelte";

  export var id;

  let API_URL = import.meta.env.VITE_API_URL;
  let API_KEY = import.meta.env.VITE_API_KEY;
  let joke = null;
  let isLoading = true;

  const fetchRandom = () => {
    axios
      .get(`${API_URL}/api/random?api_key=${API_KEY}`)
      .then((result) => {
        if (result.data.success) {
          joke = result.data.data["0"];
          isLoading = false;
        }
      })
      .catch((e) => {
        throw e;
      });
  };

  onMount(async () => {
    if (id) {
      axios
        .get(`${API_URL}/api/joke/${id}?api_key=${API_KEY}`)
        .then((result) => {
          if (result.data.success) {
            joke = result.data.data;
            isLoading = false;
          }
        })
        .catch((e) => {
          throw e;
        });
    } else {
      fetchRandom();
    }
  });
</script>

<main class="main">
  {#if id}
    <Header /><br />
  {/if}

  {#if joke}
    <div class="parent">
      <div class="container">
        <div class="row">
          {#key joke}
            <div class="child" in:fly={{ x: 10 }}>
              {#if joke}
                <Card
                  id={joke.id}
                  title={joke.title}
                  description={joke.description}
                  likes={joke.likes}
                />
              {/if}
            </div>{/key}
        </div>

        {#if !isLoading && !id}
          <div class="action-row">
            <button on:click={fetchRandom} class="navigator">
              <Icon icon="ic:round-keyboard-arrow-left" />
            </button>
            <button on:click={fetchRandom} class="navigator">
              <Icon icon="ic:round-keyboard-arrow-right" />
            </button>
          </div>
        {/if}
      </div>
    </div>
  {:else}
    <div class="loader">
      <div class="loaderBar">___</div>
    </div>
  {/if}
  <br />
  {#if id}
    <div class="footer">
      <p>@2023 ጋቭሮቮዎች</p>
    </div>
  {/if}
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

  .navigator {
    border-radius: 5px;
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

  .loader {
    width: 500px;
    margin: 0 auto;
    border-radius: 10px;
    border: 4px solid transparent;
    position: relative;
    padding: 1px;
  }
  .loader:before {
    content: "";
    border: 1px solid #fff;
    border-radius: 10px;
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
  }
  .loader .loaderBar {
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 0;
    animation: borealisBar 2s linear infinite;
  }

  @keyframes borealisBar {
    0% {
      left: 0%;
      right: 100%;
      width: 0%;
    }
    10% {
      left: 0%;
      right: 75%;
      width: 25%;
    }
    90% {
      right: 0%;
      left: 75%;
      width: 25%;
    }
    100% {
      left: 100%;
      right: 0%;
      width: 0%;
    }
  }
</style>
