let request = new XMLHttpRequest();
request.overrideMimeType("application/json");
request.open('GET', 'https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/js/color.json', true);
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == "200") {
    var json = JSON.parse(request.responseText);
    var colorsBlock = json.colors;
    let colorStucture = '';
    // Ral stucture
    colorsBlock.forEach(colorBlock => {
      colorStucture += `
      <li>
          <input type="radio" id="myradioColor${colorBlock.category}" name="color" value="${colorBlock.category}"/>
          <label for="myradioColor${colorBlock.category}" onclick="checkColor(this.control.value);"><img class="SOL_RalImg" src="https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/ral/${colorBlock.picture}" alt="${colorBlock.color}"/>
            <span class="SOL_labelRal" >${colorBlock.category}</span>
          </label>
      </li>`;
      document.getElementById('selectColor').innerHTML = colorStucture;
    });

    colorPortal ='';
    colorsBlock.forEach(colorBlockPortal => {
      colorPortal += `
      <li>
          <input type="radio" id="myradioColorPortal${colorBlockPortal.category}" name="colorPortal" value="${colorBlockPortal.category}"/>
          <label for="myradioColorPortal${colorBlockPortal.category}" onclick="checkColorPortal(this.control.value);"><img class="SOL_RalImg" src="https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/ral/${colorBlockPortal.picture}"  alt="${colorBlockPortal.color}"/>
            <span class="SOL_labelRal" >${colorBlockPortal.category}</span>
          </label>
      </li>`;
      document.getElementById('selectColorPortal').innerHTML = colorPortal;
    });
  }
};
request.send(null);
// check Color
function checkColor(colorName) {
  // document.getElementById("image").src = "assets/image/"+colorName.substr(0,6)+"/"+colorName+".png";

  //check Block
  var questionColor = document.getElementById("questionBlockColor");
  if (colorName) {
    questionColor.className = "checkColor";
  }
  var structureColor = document.getElementsByClassName('blockColor');
  structureColor[0].style.textTransform = "capitalize";
  structureColor[0].innerHTML = colorName;
  structureColor[1].value = colorName;
}

// check Color Portal
function checkColorPortal(colorNamePortal) {
  // document.getElementById("image").src = "assets/image/"+colorNamePortal.substr(0,6)+"/"+colorNamePortal+".png";

  //check Block
  var questionColorPortal = document.getElementById("questionPortillionColor");
  if (colorNamePortal) {
    questionColorPortal.className = "checkPortillionColor";
  }
  var gateColor = document.getElementsByClassName('portillionColor');
  gateColor[0].style.textTransform = "capitalize";
  gateColor[0].innerHTML = colorNamePortal;
  gateColor[1].value = colorNamePortal;
}
