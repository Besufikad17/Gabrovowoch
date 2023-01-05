<script>
  import Header from "./lib/Header.svelte";
  import Card from "./lib/Card.svelte";

  const data = [1, 2, 3, 4];
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (i % 2 !== 0) {
      newData.push([data[i - 1], data[i]]);
    }
  }
</script>

<main>
  <Header /><br />

  <div class="parent">
    <div class="container">
      {#each newData as d}
        <div class="row">
          <div class="child">
            <Card title="test" description={"" + d[0]} />
          </div>
          <div class="child">
            <Card title="test" description={"" + d[1]} />
          </div>
        </div>
      {/each}
    </div>
  </div>
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

  .child {
    width: auto;
    min-width: 400px;
    height: 300px;
    background-color: #a8a4a4;
    color: white;
    text-align: left;
    margin: 10px;
    border-radius: 8px;
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
