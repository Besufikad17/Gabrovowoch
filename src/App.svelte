<script>
  import Header from "./lib/Header.svelte";

  const data = [1,2,3,4];
  let newData = [];
  for(let i = 0;i < data.length; i++){
    if(i % 2 !== 0){
      newData.push([data[i - 1], data[i]])
    }
  }

</script>

<main>
  <Header /><br/>

  <div class="parent">
    {#each newData as d}
        <div class="row">
          <div class="child">{d[0]}</div>
          <div class="child">{d[1]}</div>
        </div>
    {/each}
  </div>
</main>

<style>
  .parent {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .child {
    width: 100%;
    height: 100px;
    background-color: #a8a4a4;
    color: white;
    text-align: center;
    margin: 10px;
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
