<style>
  .break-word {
    word-wrap: break-word !important;
    white-space: pre-wrap;
  }
</style>

<nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
  <div class="container-fluid">

    <a class="break-word navbar-brand" href="/">
      <img src="/logo.png" alt="logo" height="40"
      style="margin-left: 0.5rem;">
      <span class="break-word">Subscription Viewer</span>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/settings">Settings</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="/subscriptions" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subscriptions
          </a>

          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/subscriptions">View subscriptions</a></li>
            <li><a class="dropdown-item" href="/subscriptions/analytics">Analytics</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="/subscriptions/managedata">Manage Data</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>