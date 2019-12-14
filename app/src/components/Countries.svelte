<script>
  import { onMount } from 'svelte';
  import CountryPreview from './CountryPreview.svelte';

  export let type = 'largestCountries';
  export let limit = 10;

  let countries = [];

  onMount(async () => {
    const res = await fetch(
      `/api/graphql?query={${type}(limit: ${limit}){name area}}`
    );
    const { data } = await res.json();

    countries = [...data[type]];
  });
</script>

<style>
  .countries {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 0 -25px;
  }
</style>

<div class="countries">
  {#each countries as country}
    <CountryPreview {...country} />
  {:else}
    <p>Loading...</p>
  {/each}
</div>
