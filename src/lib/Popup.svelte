<script>
  import { user } from "./store";
  import { useNavigate } from "svelte-navigator";

  let currentUser = user;
  const naigate = useNavigate();

  const logout = () => {
    currentUser.update(
      (state) => (state = { id: "", username: "", email: "", api_key: "" })
    );
    window.location.assign("/");
  };
</script>

<main>
  <h1>Profile</h1>
  <p>username: {$currentUser.username}</p>
  <p>email: {$currentUser.email}</p>
  <p>api key: {$currentUser.api_key}</p>
  <p><a href="https://github.com/YohannesTz/gabrvowoch_backend">API usage</a></p>
  <button on:click={logout} class="primary">Logout</button>
</main>

<style>
  .primary {
    background-color: black;
    color: white;
    margin-right: 6px;
  }

  .primary:hover {
    background-color: white;
    color: black;
    border-color: black;
    border-width: 1px;
  }
</style>
