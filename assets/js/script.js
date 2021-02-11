let form = document.getElementById('sendData');

form.addEventListener('click',function(e){
    var blockType = document.getElementById("blockType").value;
    var blockColor = document.getElementById("blockColor").value;
    var gateColor = document.getElementById("gateColor").value;
    var gateDecor = document.getElementById("gateDecor").value;
    var securityLevel = document.getElementById("securityLevel").value;
    e.preventDefault();
    if ((blockType != "") && (blockColor != "") && (gateColor != "" ) && (gateDecor != "") && (securityLevel != "")) {
        confirDevis = 
        `<div class="SOL_darkWaiting">
            <div class="SOL_modal">
                <h1>Information personnels</h1>
                <form action="#" class="SOL_formGroup" method="POST" id="infosCustomer">
                    <label class="SOL_labelForm" for="">Votre nom</label>
                    <input class="SOL_inputForm" type="text" name="lastname">
                    <label class="SOL_labelForm" for="">Votre Prenom</label>
                    <input class="SOL_inputForm" type="text" name="firstname">
                    <label class="SOL_labelForm" for="">Votre addresse email</label>
                    <input class="SOL_inputForm" type="email" name="email">
                    <label class="SOL_labelForm" for="">Numéro de téléphone</label>
                    <input class="SOL_inputForm" type="phone" name="phone">
                    <input class="btn btn-primary mx-auto" type="submit" value="Valider mes informations">
                    <input  type="hidden" name="location" value="${document.getElementById("location").value}">
                    <input  type="hidden" name="setupType" value="${document.getElementById("setupType").value}">
                    <input  type="hidden" name="stakeType" value="${document.getElementById("stakeType").value}">
                    <input  type="hidden" name="blockType" value="${document.getElementById("blockType").value}">
                    <input  type="hidden" name="blockColor" value="${document.getElementById("blockColor").value}">
                    <input  type="hidden" name="gateColor"  value="${document.getElementById("gateColor").value}">
                    <input  type="hidden" name="gateDecor"  value="${document.getElementById("gateDecor").value}">
                    <input  type="hidden" name="securityLevel" value="${document.getElementById("securityLevel").value}">
                    <div id="messagesCustomers" ></div>
                </form>
            </div>
        </div>`;
        document.getElementById('confirDevis').innerHTML = confirDevis;
        let infosCustomer = document.getElementById('infosCustomer');
        infosCustomer.addEventListener('submit', function (e) {
            e.preventDefault();
            var validateCustomerInfo = new XMLHttpRequest();
            var customerInfos = new FormData(this);
            var confirDevis ="";
            validateCustomerInfo.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var resultRequest = this.response;
                    if (resultRequest.success == 1) {
                        document.getElementById('confirDevis').innerHTML = confirDevis;
                        document.getElementById('successMessages').innerHTML = `<p  class="text-center alert alert-success">${resultRequest.message}</p>`;
                        if (document.getElementById('messagesCustomers')) {
                            document.getElementById('messagesCustomers').innerHTML ="";
                        }
                    }else if(resultRequest.success == 0){
                        document.getElementById('messagesCustomers').innerHTML = `<p  class="text-center alert alert-danger">${resultRequest.message}</p>`;
                    }
                } else if (this.readyState == 4 && this.status == 404) {
                    alert("Une erreur est survenue...  ");
                }
            }
            validateCustomerInfo.open('POST', "controller/sendForm.php", true);
            validateCustomerInfo.responseType = "json";
            validateCustomerInfo.send(customerInfos);
        });
    }else{
        document.getElementById('messages').innerHTML = "Un ou plusieur champ sont incorrect !";
    }
});

// var str = "http://waytolearnx.com/t.html?name=alex-babtise&age=25&address=paris";
// var urlcourante = document.location.href; 
// var url = new URL(urlcourante);
// var name = url.searchParams.get("name");
// var color = url.searchParams.get("color");
// var age = url.searchParams.get("age");
// console.log(name+" "+color+" "+age);