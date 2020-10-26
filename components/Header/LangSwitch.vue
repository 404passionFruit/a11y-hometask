<template>
  <div class="languages">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :aria-label="
        $t('menu.locale.change', {
          lang: $t(`menu.locale.langs.${locale.name}`),
        })
      "
      :aria-hidden="$i18n.locale === locale.code"
      :tag="$i18n.locale === locale.code ? 'span' : 'a'"
      v-text="locale.name"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.languages {
  * {
    display: inline-block;
    background: #c7d2e9;
    border-radius: 4px;
    color: #000;
    font-size: 2.2rem;
    padding: $s-xs $s-m;
  }

  * + * {
    margin-left: $s-s;
  }
}
</style>
