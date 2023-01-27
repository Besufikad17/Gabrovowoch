<script>
// @ts-nocheck

  import Home from "./lib/Home.svelte";
  import Joke from "./lib/Joke.svelte";
  // import Login from "./lib/Login.svelte";
  // import Signup from "./lib/Signup.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<Router>
  <main>
    <Route path="/">
      <Home/>
    </Route>
    <Route path="/joke/:id" let:params>
      <Joke id={params.id} />
    </Route>
    <!-- <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route> -->
  </main>
</Router>
