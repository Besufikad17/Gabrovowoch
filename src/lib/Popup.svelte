<script>
    import { user } from "./store";

    let currentUser = user;
    console.log($currentUser);

    const logout = () => {
        currentUser.update(state => (state = {id: "", username: "", email: "", api_key: ""}));
        window.location.assign("/");
    }
</script>
<main>
  <h1>Profile</h1>
  <p>id: {$currentUser.id}</p>
  <p>username: {$currentUser.username}</p>
  <p>email: {$currentUser.email}</p>
  <p>api key: {$currentUser.api_key}</p>
  <button on:click={logout}>Logout</button>
</main>
<style>
 
</style>