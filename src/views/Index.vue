<template>
  <div>
    <index-navbar />
     <div
        class="relative pt-16 flex content-center items-center justify-center xl:min-h-screen-75 lg:min-h-screen-75 md:min-h-screen-75 sm:h-xl border-2 border-red-500"
      >
        <div class="absolute top-0 w-full h-full sm:h-420 ">
          <!-- <video autoplay muted loop id="myVideo" >
            <source :src="digitalVideo" type="video/mp4">
            Your browser does not support HTML5 video.n
          </video> -->
    
        </div>
      </div>

    <section id="section2" class="w-full mt-48 md:mt-20 pb-40 relative bg-blueGray-100">

      <div class="container mx-auto px-4 pb-32 pt-48">
        <div class="items-center mt-40 flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div class="md:pr-12">
              <h3 class="text-3xl uppercase font-semibold">
               Safe Applications
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                Bringing multisig security to Wallets, 
                you can now put your funds to work directly from the Safe interface. 
                Use your digital assets to invest, earn, borrow, invoice, do payroll 
                and more.
              </p>
            </div>
          </div>

          <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-xl"
              style="
                transform: scale(1) perspective(1040px) rotateY(-11deg)
                  rotateX(2deg) rotate(2deg);
              "
              :src="wallets"
            />
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 pb-32 pt-28">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-xl"
              style="
                transform: scale(1) perspective(1040px) rotateY(-11deg)
                  rotateX(2deg) rotate(2deg);
              "
              :src="apps"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div class="md:pr-12">
              
              <h3 class="text-3xl font-semibold">
                Use any wallet
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
               Use your favorite wallet to sign transactions. 
               No matter if it’s a mobile wallet, 
               browser extension, or hardware wallet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal" class="modal" style="display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);">

        <!-- Modal content -->
        <div class="modal-content" style="background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 20%;">
          <div v-on:click="closeModal"><span class="close" style="{color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;}:focus,:hover { color: #000; text-decoration: none; cursor: pointer;}">&times;</span></div>
          <div class="h-32 w-32 p-4 m-4" style="border: 1px solid black">
            <p>Error Connecting...</p> <button>Connect Manually </button>
          </div>
          <div class="border-2 border-red-500 h-32 w-32 p-4 m-4">
            <p>Liquality</p>
          </div>
        </div>

      </div>

      <div class="container mx-auto overflow-hidden pb-20">
        <!-- <div class="flex flex-wrap items-center">
          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-sitemap text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              CSS Components
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
            >
              Every element that you need in a product comes built in as a
              component. All components fit perfectly with each other and can
              have different colours.
            </p>
            <div class="block pb-6">
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Buttons
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Inputs
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Labels
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Menus
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Navbars
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Pagination
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Progressbars
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Typography
              </span>
            </div>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
              target="_blank"
              class="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              View All
              <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>

          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
            <div
              class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"
            >
              <img
                alt="..."
                :src="componentBtn"
                class="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
              />
              <img
                alt="..."
                :src="componentProfileCard"
                class="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
              />
              <img
                alt="..."
                :src="componentInfoCard"
                class="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
              />
              <img
                alt="..."
                :src="componentInfo2"
                class="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
              />
              <img
                alt="..."
                :src="componentMenu"
                class="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
              />
              <img
                alt="..."
                :src="componentBtnPink"
                class="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
              />
            </div>
          </div>
        </div> -->
        <div class="flex flex-wrap items-center pt-32">
          <div class="w-full md:w-3/12 px-4 mr-auto ml-auto mt-32">
            <div class="justify-center flex flex-wrap relative">
              <div class="my-4 w-full lg:w-3/12 px-4">
                <a
                 v-on:click="clickModal"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Liquality"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Liquality
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Binance"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Binance
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Atomic"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Atomic
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Meta"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Meta
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Ledge"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Ledge
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Mwallet"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Mwallet
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Nash"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Nash
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Ownbit"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Ownbit
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Polkadot"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Polkadot
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Solana"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Solana
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Spark"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Spark
                    </p>
                  </div>
                </a>
               
              </div>
              <div class="my-4 w-full lg:w-3/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Auth"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Auth
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Bitpie"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Bitpie
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Blockchain"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Blockchain
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Aave"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Aave
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Nash"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Nash
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Squarelink"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Squarelink
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Tokenp"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Tokenp
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Tomochain"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Tomochain
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Trezor"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Trezor
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Tron"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Tron
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Trust"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Trust
                    </p>
                  </div>
                </a>
              </div>
              <div class="my-4 w-full lg:w-3/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Defi"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Defi
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Celo"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Celo
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Coinbase"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Coinbase
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Dharma"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Dharma
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Valora"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Valora
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Viawallet"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Viawallet
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Walletconnect"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Walletconnect
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Dok"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Dok
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Rainbow"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Rainbow
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Zelcore"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Zelcore
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Onto"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Onto
                    </p>
                  </div>
                </a>
              </div>
             <div class="my-4 w-full lg:w-3/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Enjin"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Enjin
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Exodus"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Exodus
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Fortmatic"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Fortmatic
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Huobi"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Aave
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Safepay"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Safepay
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Jade"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Jade
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Midas"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Midas
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Torus"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Torus
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Eos"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Eos
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Coinomi"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Coinomi
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      :src="Guard"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Guard
                    </p>
                  </div>
                </a>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      
    </section>

    <section class="py-20 bg-blueGray-600 overflow-hidden">
      <div class="container mx-auto pb-64">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-code-branch text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400"
            >
              Since
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                class="text-blueGray-300"
                target="_blank"
              >
                Tailwind CSS
              </a>
              is an open source project we wanted to continue this movement too.
              You can give this version a try to feel the design and also test
              the quality of the code!
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400"
            >
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <a
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
              target="_blank"
              class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Github Star
            </a>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i
              class="fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80"
            ></i>
          </div>
        </div>
      </div>
    </section>

   <footer-component />
  </div> 
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/pattern_vue.png";
import Liquality from "@/assets/media/liquality.jpg";
import Binance from "@/assets/media/binance.jpeg";
import Meta from "@/assets/media/meta.jpeg";
import Atomic from "@/assets/media/atomic.jpeg";
import Auth from "@/assets/media/auth.jpeg";
import Bitpie from "@/assets/media/bitpie.jpeg";
import Blockchain from "@/assets/media/blockchain.png";
import Aave from "@/assets/media/aave.jpeg";
import Celo from "@/assets/media/celo.jpeg";
import Coinbase from "@/assets/media/coinbase.png";
import Defi from "@/assets/media/defi.jpeg";
import Dharma from "@/assets/media/dharma.jpeg";
import Enjin from "@/assets/media/enjin.png";
import Exodus from "@/assets/media/exodus.jpeg";
import Fortmatic from "@/assets/media/fortmatic.png";
import Huobi from "@/assets/media/huobi.jpeg";
import Ledge from "@/assets/media/ledge.jpeg";
import Mwallet from "@/assets/media/mwallet.jpeg";
import Nash from "@/assets/media/nash.jpeg";
import Ownbit from "@/assets/media/ownbit.jpeg";
import Polkadot from "@/assets/media/polkadot.jpeg";
import Solana from "@/assets/media/solana.jpeg";
import Spark from "@/assets/media/spark.jpeg";
import Squarelink from "@/assets/media/squarelink.png";
import Tokenp from "@/assets/media/tokenp.jpeg";
import Tomochain from "@/assets/media/tomochain.jpeg";
import Trezor from "@/assets/media/trezor.png";
import Tron from "@/assets/media/tron.jpeg";
import Trust from "@/assets/media/trust.jpeg";
import Valora from "@/assets/media/valora.jpeg";
import Viawallet from "@/assets/media/viawallet.jpeg";
import Walletconnect from "@/assets/media/walletconnect.png";
import Dok from "@/assets/media/dok.jpeg";
import Rainbow from "@/assets/media/rainbow.jpeg";
import Zelcore from "@/assets/media/zelcore.jpeg";
import Onto from "@/assets/media/onto.jpeg";
import Safepay from "@/assets/media/safepay.jpeg";
import Jade from "@/assets/media/jade.jpeg";
import Midas from "@/assets/media/midas.jpeg";
import Torus from "@/assets/media/torus.jpeg";
import Eos from "@/assets/media/eos.jpeg";
import Coinomi from "@/assets/media/coinomi.jpeg";
import Guard from "@/assets/media/guard.jpeg";

import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import wallets from "@/assets/media/wallets.webp";
import apps from "@/assets/media/apps.webp";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      Eos,
      Coinomi,
      Guard,
      Safepay,
      Jade,
      Midas,
      Torus,
      Rainbow,
      Zelcore,
      Onto,
      Valora,
      Viawallet,
      Walletconnect,
      Dok,
      Tron,
      Trust,
      Squarelink,
      Tokenp,
      Tomochain,
      Trezor,
      Polkadot,
      Solana,
      Spark,
      Ledge,
      Mwallet,
      Nash,
      Ownbit,
      Enjin,
      Exodus,
      Fortmatic,
      Huobi,
      apps,
      Celo,
      Coinbase,
      Defi,
      Dharma,
      Auth,
      Bitpie,
      Blockchain,
      Aave,
      Liquality,
      Binance,
      Meta,
      Atomic,
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      wallets,
      login,
      profile,
      landing,
    };
  },
  methods: {
    clickModal(){
      // Get the modal
      var modal = document.getElementById("myModal");
       modal.style.display = "block";
    },
    closeModal(){
      var modal = document.getElementById("myModal");
       modal.style.display = "none";
    }
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
