<template>
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <ul class="text-links">
          <li>
            <nuxt-link
              class="text-link"
              :to="localePath('/')"
              v-text="'Посетителям с ограниченными возможностями'"
            />
          </li>
          <li>
            <nuxt-link
              class="text-link"
              :to="localePath('/')"
              v-text="'Билеты и льготы'"
            />
          </li>
          <li>
            <nuxt-link
              class="text-link"
              :to="localePath('/')"
              v-text="'Противодействие коррупции'"
            />
          </li>
        </ul>

        <h4 id="contacts-heading">Контакты</h4>
        <ul aria-labelledby="contacts-heading" class="icon-links">
          <li>
            <a href="mailto:hello@test.t" class="button">
              <span class="visually-hidden">Почта</span>

              <svg
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="/" class="button">
              <span class="visually-hidden">Телеграм</span>

              <svg
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M490.107 1.69L8.275 243.606a14.997 14.997 0 00-1.13 26.178l112.856 69.45V497a14.998 14.998 0 0026.993 9.007l77.13-102.697 173.004 106.464a15 15 0 0022.595-9.963l91.983-481.91c.031-.16.06-.32.086-.481 1.967-12.147-10.776-21.35-21.685-15.73zM134.214 312.758L45.785 258.34 398.697 81.152 134.214 312.758zm15.784 139.294V338.81l248.446-217.561-248.446 330.803zM394.33 472.83l-152.116-93.61L470.118 75.769 394.33 472.83z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="/" class="button">
              <span class="visually-hidden">Facebook</span>
              <svg
                role="presentation"
                viewBox="-110 1 511 511.99996"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <form
          action=""
          @submit.prevent
          class="email-form"
          aria-labelledby="email-form-heading"
        >
          <h4 id="email-form-heading">Подписка на новости</h4>
          <label for="email-input" class="email-label">
            <span>Email</span>
            <input
              id="email-input"
              type="email"
              aria-required="true"
              required
            />
          </label>
          <label for="checkbox-input" class="checkbox-label">
            <input
              id="checkbox-input"
              type="checkbox"
              aria-required="true"
              required
            />
            <span>Согласен на обработку персональных данных</span>
          </label>
          <button class="button" type="submit">Подписаться</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
// import SkipLink from '@/components/Header/SkipLink'
// import LangSwitch from '@/components/Header/LangSwitch'
// import MainNav from '@/components/Header/MainNav'
// import LogoLink from '@/components/Header/LogoLink'
// import SearchBar from '@/components/Header/SearchBar'
// import Modal from '@/components/Modal'

// export default {
//   components: { SkipLink, LangSwitch, MainNav, Modal, LogoLink, SearchBar },
// }
</script>

<style lang="scss">
.footer {
  background: #f1f1f1;
}

.footer-inner {
  max-width: $w-content-max - ($s-xl * 2);
  padding: $s-xl 0;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1 1 auto;
    padding: 0 $s-xl;

    @media screen and (min-width: 60rem) {
      width: 50%;
    }
  }
}

.text-links,
.icon-links {
  list-style-type: none;
  padding: 0;
}

.text-links {
  margin: $s-m 0 $s-xxl;

  li {
    margin: $s-m 0;
  }
}

.icon-links {
  display: flex;
  margin: $s-s 0 $s-xxl;

  li + li {
    margin-left: $s-xl;
  }

  svg {
    width: 2rem;
    fill: currentColor;
  }

  a {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
}

.email-form {
  margin: $s-m 0 $s-xxl;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  h4 {
    margin-bottom: $s-xl;
    width: 100%;
  }

  .email-label {
    span {
      display: block;
    }

    input {
      border: 2px solid gray;
      border-radius: 4px;
      padding: $s-xs;
      height: (1.6rem * 1.5) + ($s-xs * 2) + 0.4rem;

      &:focus {
        outline: none;
        border-color: $c-out;
      }
    }
  }

  .checkbox-label {
    width: 100%;
    margin: $s-m 0;
    position: relative;

    span {
      display: inline-block;
      vertical-align: middle;

      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        border: 2px solid gray;
        border-radius: 2px;
        width: 1.2em;
        height: 1.2em;
        margin-right: 0.5em;
        background: white;
      }
    }

    //stylelint-disable-next-line
    input {
      position: absolute;
      width: 1.6em;
      height: 1.6em;
      top: 1px;
      left: -1px;
      opacity: 0;
      cursor: pointer;

      &:checked {
        + span {
          &::before {
            background: blue;
          }
        }
      }
    }
  }

  .button {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 48rem) {
    .checkbox-label {
      order: 2;
    }

    .button {
      order: 1;
      margin-left: $s-m;
    }
  }
}
</style>
