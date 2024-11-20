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
  color: var(--color-dark);
  border-radius: 8px;
  flex: 1;
  padding: 1rem;
}

svg {
  height: 60px;
  width: 60px;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.2rem;
  font-weight: 700;
}

/* iPad and Mobile Styling */
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

  h4 {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
