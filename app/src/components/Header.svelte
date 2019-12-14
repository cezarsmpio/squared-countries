<script>
  import Logo from './Logo.svelte';
  import SearchBar from './SearchBar.svelte';
</script>

<style>
  .header {
    display: grid;
    grid-template-columns: 1fr 495px;
    align-items: center;
    margin-bottom: 80px;
  }
</style>

<header class="header">
  <Logo />
  <SearchBar />
</header>
