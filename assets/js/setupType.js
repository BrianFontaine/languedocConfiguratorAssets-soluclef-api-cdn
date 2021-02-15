let setupTypeRequest = new XMLHttpRequest();
setupTypeRequest.overrideMimeType("application/json");
setupTypeRequest.open('GET', 'https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/js/setupType.json', true);
setupTypeRequest.onreadystatechange = function () {
  if (setupTypeRequest.readyState == 4 && setupTypeRequest.status == "200") {
    var json = JSON.parse(setupTypeRequest.responseText);
    var setupTypes = json.setupType;
    let locationLevel = '';
    // Ral stucture
    setupTypes.forEach(setupType => {
      locationLevel += `
      <li>
          <input type="radio" id="myradio${setupType.label}" name="setupType" value="${setupType.label}"/>
          <label for="myradio${setupType.label}" onclick="checkSetupType(this.control.value);"><img class="SOL_gatelabel SOL_gateLabel"src="https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/pose/${setupType.picture}" alt="${setupType.label}" />
            <span class="SOL_labelGateText" style="background: #ffffffdb;">${setupType.label}</span>
          </label>
      </li>`;
      document.getElementById('selectsetup').innerHTML = locationLevel;
    });
  }
};
setupTypeRequest.send(null);
// on retire l'interieur de l'element html qui a pour id option
document.getElementById('option').innerHTML="";

function checkSetupType(setupTypeName) {
  // document.getElementById("image").src = "assets/image/"+setupTypeName.substr(0,6)+"/"+setupTypeName+".png";
  
  //check Block
  var questionColor = document.getElementById("questionSetupType");
  if (setupTypeName) {
    questionColor.className = "checkSetup";
  }
  var structureColor = document.getElementsByClassName('setup');
  structureColor[0].style.textTransform = "capitalize";
  structureColor[0].innerHTML = setupTypeName;
  structureColor[1].value = setupTypeName;

// on verifie que les piquet on ete selectioner comme type de pose
  if (setupTypeName == 'Piquet') {
    let stakeRequest = new XMLHttpRequest();
    stakeRequest.overrideMimeType("application/json");
    stakeRequest.open('GET', 'https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/js/stake.json', true);
    stakeRequest.onreadystatechange = function () {
      if (stakeRequest.readyState == 4 && stakeRequest.status == "200") {
        var json = JSON.parse(stakeRequest.responseText);
        var stakes = json.stakes;
        let stakeType = ` <details> <summary><span>Type de piquet <strong>*</strong></span></summary><fieldset><legend>Type de piquet <strong>*</strong></legend> <ul>`;
        // Ral stucture
        stakes.forEach(stake => {
          stakeType += `
            <li>
              <input type="radio" id="myradio${stake.label}" name="stake" value="${stake.label}"/>
                <label for="myradio${stake.label}" onclick="checkstake(this.control.value);"><img class="SOL_gatelabel SOL_gateLabel"src="https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/piquet/${stake.picture}" alt="${stake.label}" />
                  <span class="SOL_labelGateText" style="background: #ffffffdb;">${stake.label}</span>
                </label>
            </li>`;
          document.getElementById('selectstake').innerHTML = stakeType + ` </ul>  </fieldset>
          </details>`;
          document.getElementById('option').innerHTML=`<p class="section"><span id="questionstakeType" class="questionstakeType"></span> Type de piquets</p>
          <p class="stakeType">à choisir</p>`;
        });
      }
    };
    stakeRequest.send(null);
  } else if (this.value != 'Piquet') {
    document.getElementById('selectstake').innerHTML = "";
    document.getElementById('option').innerHTML="";
  }
}

function checkstake(stakeName) {
  // document.getElementById("image").src = "assets/image/"+stakeName.substr(0,6)+"/"+stakeName+".png";

  //check Block
  var questionColor = document.getElementById("questionstakeType");
  if (stakeName) {
    questionColor.className = "checkSyake";
  }
  var stakeType = document.getElementsByClassName('stakeType');
  stakeType[0].style.textTransform = "capitalize";
  stakeType[0].innerHTML = stakeName;
  stakeType[1].value = stakeName;
}
