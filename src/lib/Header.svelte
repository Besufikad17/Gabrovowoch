<script>
  import logo from "../assets/imgs/logo.jpg";
  import Icon from "@iconify/svelte";
  import { user } from "./store";
  import { writable } from "svelte/store";
  import Modal from "svelte-simple-modal";
  import Popup from "./Popup.svelte";
  const modal = writable(null);

  const showModal = () => modal.set(Popup);
  console.log($user);

  let isLogged = $user.id || $user.email || $user.username || $user.api_key;
</script>

<main>
  <div class="parent">
    <div class="logo">
      <img src={logo} alt="logo" />
    </div>
    <div class="links">
      {#if isLogged}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <Modal show={$modal}>
          <span on:click={showModal}>Profile</span>
        </Modal>
      {:else}
        <span><a href="/login">Login</a></span>
      {/if}
      <a href="/"><Icon icon="jam:android" width="36" height="36" /></a>
      <a href="https://github.com/Besufikad17/Gabrovowoch"
        ><Icon icon="ri:github-fill" width="36" height="36" /></a
      >
    </div>
  </div>
</main>

<style>
  .parent {
    width: auto;
    height: 50%;
    overflow: hidden;
    padding: 20px 10px;
    background-color: rgb(255, 255, 255);
  }
  .logo {
    float: left;
    margin-left: 10px;
  }
  .links {
    float: right;
  }
  .links a {
    text-decoration: none;
    color: black;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    padding: 5px;
  }

  span {
    color: black;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    cursor: pointer;
    margin-top: 0px;
    vertical-align: super;
  }

  .logo img {
    width: 36px;
    height: 36px;
  }
</style>
