<script>
    import logo from "../assets/imgs/logo.jpg";
    import android from "../assets/imgs/icons8-android-96.png";
    import github from "../assets/imgs/icons8-github-48.png";
</script>

<main>
    <div class="parent">
        <div class="logo">
          <!-- FIXME get decent logo -->
          <img src={logo} alt="logo" />
        </div>
        <div class="links">
          <a href="/"><img src={android} alt="android app" /></a>
          <a href="/"><img src={github} alt="github" /></a>
        </div>
    </div>
</main>
  
<style>
  .parent {
    width: auto;
    height: 50%;
    overflow: hidden;
    padding: 20px 10px;
    background-color: rgb(255, 255, 255);
  }
  .logo {
    float: left;
    margin-left: 10px;
  }
  .links {
    float: right;
  }
  .links a {
    text-decoration: none;
    color: white;
    text-align: center;
    padding: 5px;
  }

  .logo img {
    width: 46px;
    height: 46px;
  }

  .links a img {
    width: 46px;
    height: 46px;
  }
</style>
