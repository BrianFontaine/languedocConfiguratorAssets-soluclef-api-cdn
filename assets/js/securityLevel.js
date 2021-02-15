let securityRequest = new XMLHttpRequest();
securityRequest.overrideMimeType("application/json");
securityRequest.open('GET', 'https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/js/security.json', true);
securityRequest.onreadystatechange = function () {
  if (securityRequest.readyState == 4 && securityRequest.status == "200") {
    var json = JSON.parse(securityRequest.responseText);
    var gateSecurity = json.security;
    let securityLevel = '';
    // Ral stucture
    gateSecurity.forEach(security => {
      securityLevel += `
      <li>
          <input type="radio" id="myradioColor${security.label}" name="securityLevel" value="${security.label}"/>
          <label for="myradioColor${security.label}" onclick="checksecurity(this.control.value);"><img class="SOL_gatelabel SOL_gateLabel"src="https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/security/${security.picture}" alt="${security.label}" />
            <span class="SOL_labelGateText" >${security.label}</span>
          </label>
      </li>`;
      document.getElementById('selectsecurity').innerHTML = securityLevel;
    });
  }
};
securityRequest.send(null);

function checksecurity(security) {
    //check Block
    var questionColor = document.getElementById("questionSecurityLevel");
    if (security) {
      questionColor.className = "checksecurity";
    }
    var levelSecurity = document.getElementsByClassName('security');
    levelSecurity[0].style.textTransform = "capitalize";
    levelSecurity[0].innerHTML = security;
    levelSecurity[1].value = security;
  }
