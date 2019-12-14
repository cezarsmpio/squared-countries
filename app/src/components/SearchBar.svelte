<style>
  .search-bar {
  }

  .search-bar__search {
    width: 100%;
    padding: 10px 25px;

    text-align: right;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    font-family: Poppins, Arial, Helvetica, sans-serif;

    border: 0;
    border-bottom: 5px solid #fafafa;
  }

  .search-bar__search::placeholder {
    color: #a7a7a7;
  }
</style>

<form method="get" class="search-bar">
  <input
    class="search-bar__search"
    type="search"
    name="country"
    placeholder="Search your country" />
</form>
