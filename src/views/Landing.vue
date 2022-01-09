<template>
  <div class="h-screen">
    <main class="h-screen relative bg-red-800" style="background: #0f172a">
     
      <section class="relative block h-full py-24 lg:pt-10">
        <div class="container mx-auto px-4">
         <div class="flex flex-wrap">
           <div class="flex-col">
             <div class="lg:mt-40 flex flex-wrap">
                <div class="h-200 w-full md:w-4/12  lg:px-4 lg:pt-24 md:pt-0">
                <img
                  alt="..."
                  class="hidden lg:block lg:h-100 sm:h-40 content-end rounded-lg shadow-xl mix-blend-color-dodge"
                  style="
                  mix-blend-mode: luminosity;
                  height: 200px;
                    transform: scale(1) perspective(1040px) rotateY(-11deg)
                      rotateX(2deg) rotate(2deg);
                  "
                  :src="chain"
                />

              </div>
              <div class="w-full lg:w-6/12 md:px-4">
                <div class="md:pr-12">
                  <img
                  alt="..."
                  class="block lg:hidden sm:block xs:block lg:h-100 sm:h-40 content-end rounded-lg shadow-xl mix-blend-color-dodge"
                  style="
                  mix-blend-mode: color-dodge;
                  height: 80px;
                    transform: scale(1) perspective(1040px) rotateY(-11deg)
                      rotateX(2deg) rotate(2deg);
                  "
                  :src="chain"
                />
                  <h1 class="text-8xl text-white uppercase font-bold" style="color:#cbd5e1;font-size: 30px">
                  WALLET CHAIN
                  </h1>
                  <p class="mt-4 text-lg leading-relaxed text-white font-bold px-4 py-2">
                    Wallet Chain is a decentralized protocol and platform that combines
                    Blockchain and DeFi, implementing elements from Blockchain with non-
                    custodial management, Micropools, instant liquidity and decentralized
                    governance. Each process are been required to be filled out respectively.
                    Validation of wallet will be completed below as follows.
                  </p>
                </div>
                <div class="flex flex-wrap mr-4 mt-5">
                  <div class="">
                    <button
                      style="background-color:#00aae7"
                      class="text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="submit"
                    >
                    <a href="/connect">RECTIFICATION</a> 
                    </button>
                  </div>
                  <div>
                    <button
                    style="background-color:#00aae7"
                      class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="submit"
                    >
                    <a href="/connect">REWARD</a> 
                    </button>
                  </div>
                  <div>
                    <button
                    style="background-color:#00aae7"
                      class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="submit"
                    >
                    <a href="/connect">VALIDATION</a> 
                    </button>
                  </div>
                  <div>
                    <button
                    style="background-color:#00aae7"
                      class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="submit"
                    >
                    <a href="/connect">RECOVERY</a> 
                    </button>
                  </div>

                </div>
              </div>

             
            </div>
           </div>
         </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import crypto from "@/assets/media/crypto.jpeg";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
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
import apps from "@/assets/media/apps.webp";
import chain from "@/assets/media/chain.jpg";

export default {
  data() {
    return {
      chain,
      platform: "",
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
      crypto,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
  },
  methods: {
    clickModal(platform){
      this.platform = platform;
      // Get the modal
      var modal = document.getElementById("myModal");
       modal.style.display = "block";
    },
    closeModal(){
      var modal = document.getElementById("myModal");
       modal.style.display = "none";
    }
  },
};
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
