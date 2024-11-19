<template>
  <div id="footer" class="footer pall-2">
    <div class="icons">
      <a href="https://www.instagram.com/membaz.co" target="_blank"
        ><i-ri-instagram-fill
      /></a>
      <a href="https://wa.me/2348104933739" target="_blank"
        ><i-mage-whatsapp-filled
      /></a>
      <a href="https://wa.me/2348104933739" target="_blank"
        ><i-fa6-brands-square-x-twitter
      /></a>
    </div>

    <p>
      All Rights Reserved &copy;2024 | <span class="text-primary">MEMBAZ</span>
    </p>
  </div>
</template>

<style scoped>
.footer {
  background-color: #ebeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icons {
  display: flex;
  justify-content: space-between;
  gap: 0 1.5rem;
}

a {
  color: var(--color-dark);
  transition: 0.2s ease-in-out;
}

a:hover {
  opacity: 0.8;
}

svg {
  width: 30px;
  height: 30px;
}

p {
  color: #444;
  margin-top: 1.2rem;
  font-size: 12px;
}

.text-primary {
  font-size: 14px;
}

@media screen and (max-width: 767px) {
  svg {
    width: 26px;
    height: 26px;
  }
}
</style>
