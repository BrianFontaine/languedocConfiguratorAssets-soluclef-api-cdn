readAllQuotes();
function readAllQuotes(){
    let readAllQuoteRequest = new XMLHttpRequest();
    readAllQuoteRequest.onreadystatechange = function () {
        if (readAllQuoteRequest.readyState == 4 && readAllQuoteRequest.status == "200") {
            var allQuotes = this.response;
            let quotesLevel = '';
            allQuotes.forEach(quotes => {
                if (quotes.status == "pending") {
                    var nameClass = "badge badge-warning";
                    var text = "En attente";
                }else if (quotes.status == "canceled") {
                    var nameClass = "badge badge-danger";
                    var text = "annulé";
                }else if (quotes.status == "success") {
                    var nameClass = "badge badge-success";
                    var text = "Terminé";
                }
                quotesLevel += `
                <div class="col-md-12 bg-secondary mx-auto mt-5 p-2 rounded text-white">
                <div class="row">
                    <img class="col-md-4" src="../assets/image/${quotes.block_type.substr(0, 6)}/${quotes.block_type}.png" alt="">
                    <div class="col-md-8">
                        <div class="col-md-5"></div>
                        <h2 class="">Devis N°${quotes.id}</h2>
                        <span>Type de bloc : ${quotes.block_type}</span><br/>
                        <span>Couleur du bloc : ${quotes.block_color}</span><br/>
                        <span>Couleur des Portillons : ${quotes.gate_color}</span><br/>
                        <span>Type des Portillons : ${quotes.gate_design}</span><br/>
                        <span>Niveau de sécurité : ${quotes.security_level}</span><br/>
                        <span>Type de pose : ${quotes.setup_type}</span><br/>
                        <span>-----------------------------------------------</span><br/>
                        <!-- <span>Date de modification : ${quotes.update_at}</span> -->
                        <span>Nom : ${quotes.customers_lastname}</span><br/>
                        <span>Prénom : ${quotes.customers_firstname}</span><br/>
                        <span>Email : ${quotes.customers_email}</span><br/>
                        <span>Téléphone : ${quotes.customers_phone}</span><br/>
                        <span class="${nameClass} col-md-2">${text}</span>
                        <span class="${nameClass} col-md-2 ">${text}</span>
                        <div class="row mt-2 justify-content-end align-items-center">
                            <span class=" mr-2" >Date de création : ${quotes.create_at}</span>
                            <a href="${quotes.sku}.html?
                            block=${quotes.block_type}
                            &blockcolor=${quotes.block_color}
                            &gateColor=${quotes.gate_color}
                            &gateDesign=${quotes.gate_design}
                            &securityLevel=${quotes.security_level}" 
                            class="col-md-2 btn btn-primary mr-3">Details</a>
                        </div>
                    </div>
                </div> 
            </div>
            `;
                document.getElementById('selectQuotes').innerHTML = quotesLevel;
                console.log(quotes.block_type.substr(0, 6));
            });
        }
    };
    var status = "pending";
    readAllQuoteRequest.open('GET', '../controller/readALLquote_ctrl.php?status='+status, true);
    readAllQuoteRequest.responseType = "json";
    readAllQuoteRequest.send();
}
setInterval(() => {
    readAllQuotes();
},1800);


/* <div class="card col-md-5 mt-3 mx-auto" style="width=18rem;">
<img class="card-img-top" src="../assets/image/blockA/${quotes.block_type}.png" alt="Card image cap">
<div class="card-body">
    <h5 class="card-title">Devis N°${quotes.id}</h5>
    <p class="card-text">Type de bloc : ${quotes.block_type}</p>
    <p class="card-text">Couleur du bloc : ${quotes.block_color}</p>
    <!--<p class="card-text">Couleur des Portillons : ${quotes.gate_color}</p>
    <p class="card-text">Type des Portillons : ${quotes.gate_design}</p>
    <p class="card-text">Niveau de sécurité : ${quotes.security_level}</p>
    <p class="card-text">Type de pose : ${quotes.setup_type}</p>
    <p class="card-text">Date de création : ${quotes.create_at}</p>
    <p class="card-text">Date de modification : ${quotes.update_at}</p>
    <p class="card-text">Nom : ${quotes.customer_lastname}</p>
    <p class="card-text">Prénom : ${quotes.customer_firstname}</p>
    <p class="card-text">Email : ${quotes.customer_email}</p>
    <p class="card-text">Téléphone : ${quotes.customer_phone}</p> -->
    <a href="?${quotes.id}" class="btn btn-primary">Detail</a>
    <span class="${nameClass}">${text}</span>
</div>
</div> */