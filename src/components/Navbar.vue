<template>
  <div class="navbar px-1">
    <RouterLink to="/">
      <img src="/img/logo.PNG?url" alt="logo" />
    </RouterLink>

    <div class="icons">
      <RouterLink class="icon" to="/store"> <i-mdi-cart-outline /> </RouterLink>
      <a class="icon" href="#footer"><i-mdi-user-outline /></a>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
}

.icons {
  display: flex;
  justify-content: space-between;
}

.icon {
  margin-left: 1.25rem;
  transition: 0.2s ease-in-out;
  color: var(--color-primary-dark);
  padding: 0.375rem 0.375rem 0;
}

.icon:hover {
  background: var(--color-light);
  border-radius: 5px;
}

svg {
  width: 30px;
  height: 30px;
}

img {
  width: 58px;
}

/* DARK MODE */
/* .navbar {
  background-color: #111;
}
.icon {
  color: #f4f4f4;
}
.icon:hover {
  color: var(--color-primary-light);
} */

/* Mobile Styling */
@media screen and (max-width: 767px) {
  .navbar {
    height: 55px;
  }

  img {
    width: 45px;
  }

  svg {
    width: 26px;
    height: 26px;
  }
}
</style>
