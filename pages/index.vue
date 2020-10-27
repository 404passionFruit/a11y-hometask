<template>
  <main tabindex="-1" aria-labelledby="h1">
    <h1 class="visually-hidden" id="h1">{{ $t('pages.index.h1') }}</h1>
    <Carousel />
    <SecondaryNav />
    <TabList :selected-tab="123" :tabs="tabs">
      <!-- TODO: translation -->
      <template slot="heading">Выставки и события</template>
      <template v-slot:content="slotProps">
        <EventsCardsList :events="getEvents(slotProps.tab.id)" />
      </template>
    </TabList>
    <TabList :selected-tab="555" :tabs="buildingsTabs">
      <!-- TODO: translation -->
      <template slot="heading">Музей</template>
      <template v-slot:content="sp">
        <BuildingsCardsList :buildings="sp.tab.id === 555 ? buildings : []" />
      </template>
    </TabList>
    <VideoSection />
    <TextBlock />
  </main>
</template>

<script>
import TabList from '@/components/TabList'
import EventsCardsList from '@/components/Cards/EventsCardsList'
import BuildingsCardsList from '@/components/Cards/BuildingsCardsList'
import VideoSection from '@/components/VideoSection'
import SecondaryNav from '@/components/SecondaryNav'
import TextBlock from '@/components/TextBlock'
import Carousel from '@/components/Carousel'

const events = [
  {
    id: '131249',
    title: 'Святослав Рихтер в кругу друзей. Москва — Коктебель',
    imageAlt: 'Картина женщины на зеленом фоне выполнена маслом сливочным',
    deadline: '20 ноября',
    desc:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
  {
    id: '131229',
    title: 'Тату',
    imageAlt: 'Маска с этническими татуировками',
    deadline: '27 сентября',
    desc:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
  {
    id: '131259',
    title:
      'От Дюрера до Матисса. Избранные рисунки из собрания ГМИИ им. А.С. Пушкина',
    imageAlt: 'Рисунок женщины тушью',
    deadline: '1 ноября',
    desc:
      'Текст о музее текст Текст о музее текст Текст о музее текст Текст о музее текст',
  },
]

const tabs = [
  { id: 123, title: 'Все' },
  { id: 223, title: 'Сегодня' },
  { id: 213, title: 'Завтра' },
]

const buildings = [
  {
    id: 666,
    title: 'МЕМОРИАЛЬНАЯ КВАРТИРА С.Т. РИХТЕРА',
    imageAlt: 'Схема квартиры',
    address: 'ул. Большая Бронная, 2/6, 16 этаж, кв. 58',
  },
  {
    id: 667,
    title: 'ЦЭВ «МУСЕЙОН»',
    imageAlt: 'Чертеж какой-то штуки',
    address: 'Колымажный пер., 6/2, 3 (вход с Малого Знаменского переулка)',
  },
  {
    id: 668,
    title: 'УСАДЬБА ЛОПУХИНЫХ',
    imageAlt: 'Чертеж усадьбы',
    address: 'Малый Знаменский пер., 3/5с4',
  },
  {
    id: 669,
    title: 'УЧЕБНЫЙ МУЗЕЙ',
    imageAlt: 'Параллелепипед',
    address: 'ул. Чаянова, 15',
  },
  {
    id: 676,
    title: 'ОТДЕЛ ЛИЧНЫХ КОЛЛЕКЦИЙ',
    imageAlt: 'Схема еще какой-то штуки',
    address: 'ул. Волхонка, 10',
  },
  {
    id: 686,
    title: 'ГАЛЕРЕЯ',
    imageAlt: 'Чертеж галереи',
    address: 'ул. Волхонка, 14',
  },
]

const buildingsTabs = [
  { id: 555, title: 'Здания' },
  { id: 333, title: 'История' },
]

export default {
  components: {
    TabList,
    EventsCardsList,
    BuildingsCardsList,
    VideoSection,
    SecondaryNav,
    TextBlock,
    Carousel,
  },
  data() {
    return {
      events,
      tabs,
      buildings,
      buildingsTabs,
    }
  },
  head() {
    return {
      title: this.$t('pages.index.h1'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.index.desc'),
        },
      ],
    }
  },

  methods: {
    getEvents(tabId) {
      if (tabId === 123) {
        return this.events
      }
      if (tabId === 223) {
        return [this.events[0]]
      }
      if (tabId === 213) {
        return [this.events[1]]
      }
    },
  },
}
</script>

<style lang="scss">
//
</style>
