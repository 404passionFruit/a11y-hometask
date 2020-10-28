<template>
  <section class="carousel"></section>
</template>

<script></script>

<style lang="scss">
.carousel {
  max-width: $w-content-max - ($s-xl * 4);
  padding: 0;
  margin: auto;

  &::before {
    content: 'На карусель не хватило времени';
    display: block;
    padding-top: 100%;
    background: #f1f1f1;
  }
}
</style>
