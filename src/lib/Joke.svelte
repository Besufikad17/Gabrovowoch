<script>
   import Card from "./Card.svelte";
   
   const urlParams = new URLSearchParams(window.location.search);
   const id = urlParams.get("id");
   let joke;

   

</script>

<main>
  <div class="parent">
    <div class="row">
      <div class="child">
        <Card title={joke.title} description={joke.description} likes={joke.likes} /> 
      </div>
    </div>
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
</style>