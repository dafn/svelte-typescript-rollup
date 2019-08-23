<script lang="ts">
  const a: string = "Svelte",
    b: string = "Typescript",
    c: string = "Rollup";
</script>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font: normal 24pt Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    color: dimgray;
    cursor: default;
  }
</style>

<h1>{a} + {b} + {c}</h1>
