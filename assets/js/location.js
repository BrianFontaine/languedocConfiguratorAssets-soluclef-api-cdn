let locationRequest = new XMLHttpRequest();
locationRequest.overrideMimeType("application/json");
locationRequest.open('GET', 'https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/js/location.json', true);
locationRequest.onreadystatechange = function () {
  if (locationRequest.readyState == 4 && locationRequest.status == "200") {
    var json = JSON.parse(locationRequest.responseText);
    var gateSecurity = json.locations;
    let locationLevel = '';
    // Ral stucture
    gateSecurity.forEach(location => {
      locationLevel += `
      <li class="SOL_selectConf">
          <input type="radio" id="myradio${location.location}" name="locationLevel" value="${location.location}"/>
          <label for="myradio${location.location}" onclick="checkLocation(this.control.value);"><img id="${location.location}" class="SOL_gatelabel SOL_gateLabel"src="https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/Emplacement/${location.picture}" alt="${location.location}" />
            <span class="SOL_labelGateText" style="background: #ffffffdb;">${location.location}</span>
          </label>
      </li>`;
      document.getElementById('selectlocation').innerHTML = locationLevel;
    });
  }
};
locationRequest.send(null);

function checkLocation(locationName) {
    // document.getElementById("image").src = "assets/image/"+locationName.substr(0,6)+"/"+locationName+".png";
  
    //check Block
    var questionColor = document.getElementById("questionLocation");
    if (locationName) {
      questionColor.className = "checkLocation";
    }
    var structureColor = document.getElementsByClassName('location');
    structureColor[0].style.textTransform = "capitalize";
    structureColor[0].innerHTML = locationName;
    structureColor[1].value = locationName;
  }
