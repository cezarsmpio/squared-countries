<script>
  import { onMount } from 'svelte';
  import Wrap from './components/Wrap.svelte';
  import Header from './components/Header.svelte';
  import Countries from './components/Countries.svelte';
  import H2 from './components/H2.svelte';
</script>

<style>
  section {
    margin-bottom: 150px;
  }

  section div {
    margin-top: 30px;
  }
</style>

<Wrap>
  <Header />

  <main>
    <section>
      <H2>Top 10 largest countries</H2>
      <div>
        <Countries type="largestCountries" limit="10" />
      </div>
    </section>

    <section>
      <H2>Top 10 smallest countries</H2>
      <div>
        <Countries type="smallestCountries" limit="10" />
      </div>
    </section>
  </main>
</Wrap>
