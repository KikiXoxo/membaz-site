<template><div class="spinner"></div></template>

<style scoped>
.spinner {
  /* display: none; */
  border: 3px solid #888;
  border-top: 3px solid var(--color-primary-dark);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
  /* margin-top: 10px; */
  align-self: center;
  justify-self: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
