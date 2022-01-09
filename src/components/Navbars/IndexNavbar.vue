<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            CRYPTO MANAGER
          </a>
        </router-link>
       
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
            >
              <i
                class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Docs
            </a>
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
           <a
            class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
            href="#pablo"
            ref="btnDropdownRef"
          >
           HOME
          </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="#section2"
              ref="btnDropdownRef"
            >
            ABOUT
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="#wallet"
            >
            WALLET2
            </a>
          </li>
     
          <li class="flex items-center">
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
               GET STARTED
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
  },
};
</script>
