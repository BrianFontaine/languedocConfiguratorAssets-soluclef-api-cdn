let gateRequest = new XMLHttpRequest();
gateRequest.overrideMimeType("application/json");
gateRequest.open('GET', 'assets/js/individualGate.json', true);
gateRequest.onreadystatechange = function () {
  if (gateRequest.readyState == 4 && gateRequest.status == "200") {
    var json = JSON.parse(gateRequest.responseText);
    var desingGate = json.individualgates;
    let individualGates = '';
    // Ral stucture
    desingGate.forEach(gateType => {
      individualGates += `
      <li>
          <input type="radio" id="myradioColor${gateType.design}" name="gate" value="${gateType.design}"/>
          <label for="myradioColor${gateType.design}" onclick="checkGateTypes(this.control.value);"><img class="SOL_gateDesign SOL_gateLabel"src="assets/image/individualGates/${gateType.picture}" alt="${gateType.design}" />
            <span class="SOL_labelGateText" >${gateType.design}</span>
          </label>
      </li>`;
      document.getElementById('selectDecorPortal').innerHTML = individualGates;
    });
  }
};
gateRequest.send(null);

function checkGateTypes(gateType) {
    // let blockType = document.getElementsByClassName('blockType');
    // console.log(gateType);
    // let block = blockType[1].value.substr(5,3);
    // document.getElementById("image").src = "assets/image/"+blockType[1].value.substr(0,6)+"_"+gateType+"/"+block+"_"+gateType+".png";
  
    //check Block
    var questionColor = document.getElementById("questionDecor");
    if (gateType) {
      questionColor.className = "checkDesign";
    }
    var designGateValue = document.getElementsByClassName('portillionDecor');
    designGateValue[0].style.textTransform = "capitalize";
    designGateValue[0].innerHTML = gateType;
    designGateValue[1].value = gateType;
  }