<template>
  <div class="languages">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :aria-label="
        $i18n.locale === locale.code
          ? $t('menu.locale.current', {
              lang: $t(`menu.locale.langs.${locale.name}`),
            })
          : $t('menu.locale.change', {
              lang: $t(`menu.locale.langs.${locale.name}`),
            })
      "
      :tag="$i18n.locale === locale.code ? 'span' : 'a'"
      :role="$i18n.locale === locale.code ? false : 'button'"
      class="button"
      v-text="locale.name"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.languages {
  * + * {
    margin-left: $s-s;
  }
}
</style>
