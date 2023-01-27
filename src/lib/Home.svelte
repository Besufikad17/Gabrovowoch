<script>
  import Card from "./Card.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let isGrid = true;
  let data = [];
  let datas = [];

</script>
   {#if isGrid}
    <div class="parent">
        <div class="container">
        {#each datas as d}
            <div class="row">
            <div class="child">
                <Card title={d[0].title} description={"" + d[0].description} likes={0} />
            </div>
            <div class="child">
                <Card title={d[1].title} description={"" + d[1].description} likes={0}/>
            </div>
            </div>
        {:else}
            <p>loading...</p>
        {/each}
        </div>
    </div>
   {/if}
   
<main>

</main>

<style>

</style>