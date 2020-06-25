<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Vue.js Learning
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" exact class="nav-link r-link">
              <span>Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" exact class="nav-link">
              <span>About</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" exact class="nav-link">
              <span>News</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" exact class="nav-link">
              <span>Contact</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registration" exact class="nav-link">
              <span>Registration</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
