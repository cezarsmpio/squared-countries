<style>
  .logo {
    width: 145px;
    display: grid;
    grid-template-columns: 55px 1fr;
    align-items: center;
  }

  .logo__box {
    width: 45px;
    height: 45px;
    border: 7px solid #000;
    animation: logoAnimation 3s 0.5s;
  }

  .logo__text {
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -1px;
  }

  @keyframes logoAnimation {
    0% {
      background-color: #fff;
    }

    20% {
      background-color: #ff0000;
    }

    40% {
      background-color: #009c3b;
    }

    60% {
      background-color: #00008b;
    }

    80% {
      background-color: #ffe100;
    }

    100% {
      background-color: #fff;
    }
  }
</style>

<div class="logo">
  <div class="logo__box" />
  <h1 class="logo__text">Squared Countries</h1>
</div>
