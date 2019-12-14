<script context="module">
  const biggest = 17124442;
  const max = 600;

  function formatArea(area) {
    return new Intl.NumberFormat('en', {
      maximumFractionDigits: 1,
      style: 'decimal',
      notation: 'compact',
    }).format(area);
  }
</script>

<script>
  export let name;
  export let area;
  // export let colors;

  const pixelArea = (area * max) / biggest;
</script>

<style>
  .country-preview {
    margin: 0 25px 30px;
  }

  .country-preview__box {
    max-width: 600px;
    min-width: 5px;

    border: 7px solid #000;
  }

  /* .country-preview__box span {
    display: inline-block;
    height: 5px;
  } */

  .country-preview__details p {
    font-weight: 400;
    line-height: 1;
  }
</style>

<div class="country-preview">
  <div
    class="country-preview__box"
    style="width: {pixelArea}px; height: {pixelArea}px;">
    <!-- {#each colors as color}
      <span style="background-color: {color}; width: {100 / colors.length}%" />
    {/each} -->
  </div>

  <section class="country-preview__details">
    <h3>{name}</h3>
    <p>{formatArea(area)} km2</p>
  </section>
</div>
