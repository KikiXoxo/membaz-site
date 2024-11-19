<template>
  <div class="not-found background content-min-height">
    <div class="container pall-1">
      <i-mdi-robot-dead />
      <h3>Page Not Found</h3>
      <p>Oops, it looks like this page doesn't exist!</p>
      <router-link to="/" class="btn btn-primary"> Back to Home </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  align-items: center;
}

h3 {
  font-size: 1.9rem;
  font-weight: 600;
  margin: 2rem 0 0.5rem;
}

p {
  margin-bottom: 1rem;
  font-weight: 500;
}

svg {
  width: 150px;
  height: 150px;
}

.btn {
  width: 6 50%;
  text-transform: uppercase;
}
</style>
