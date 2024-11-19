<template>
  <div class="brand-features pall-1">
    <div class="brand-feature">
      <i-game-icons-sewing-string />
      <h4>Quality in every Stitch</h4>
      <p>Elevating essentials with exceptional craftsmanship</p>
    </div>
    <div class="brand-feature">
      <i-healthicons-eco-care />
      <h4>Consciously Crafted</h4>
      <p>Thoughtfully made with you in mind</p>
    </div>
    <div class="brand-feature">
      <i-game-icons-pay-money />
      <h4>True Value</h4>
      <p>Experience premium quality that's worth every bit</p>
    </div>
  </div>
</template>

<style scoped>
.brand-features {
  background-color: white;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
}

.brand-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background-color: var(--color-light); */
  /* background: linear-gradient(to bottom right, var(--color-light), white); */
  color: var(--color-dark);
  border-radius: 8px;
  flex: 1;
  padding: 1rem;
  /* box-shadow: 2px 2px 5px #e9e9e9; */
}

svg {
  height: 60px;
  width: 60px;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.2rem;
  font-weight: 600;
}

/* Responsiveness */
@media screen and (max-width: 1023px) {
  .brand-features {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .brand-feature {
    padding: 1rem 2rem;
  }
  svg {
    height: 40px;
    width: 40px;
  }
}
</style>
