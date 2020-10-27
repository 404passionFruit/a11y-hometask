<template>
  <section class="container video-section">
    <h2>Онлайн-трансляция</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="Rick Astley - Never Gonna Give You Up (Video)"
    ></iframe>
  </section>
</template>

<script>
//
</script>

<style lang="scss">
.video-section {
  margin-bottom: $s-xxl;

  h2 {
    margin-bottom: $s-xl;
  }

  iframe {
    max-width: 100%;
  }
}
</style>
