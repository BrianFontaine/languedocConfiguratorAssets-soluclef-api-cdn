// setTimeout(() => {
//     var setupType = document.getElementById('myradioPiquet');
//     setupType.addEventListener('click', function () {
//         console.log(this.value);
//         if (this.value == 'Piquet') {
//             let stakeRequest = new XMLHttpRequest();
//             stakeRequest.overrideMimeType("application/json");
//             stakeRequest.open('GET', 'assets/js/stake.json', true);
//             stakeRequest.onreadystatechange = function () {
//                 if (stakeRequest.readyState == 4 && stakeRequest.status == "200") {
//                     var json = JSON.parse(stakeRequest.responseText);
//                     var stakes = json.stakes;
//                     let stakeType = ` <details> <summary><span>Type de piquet <strong>*</strong></span></summary><fieldset><legend>Type de piquet <strong>*</strong></legend> <ul>`;
//                     // Ral stucture
//                     stakes.forEach(stake => {
//                         stakeType += `
//                             <li>
//                                 <input type="radio" id="myradio${stake.label}" name="stake" value="${stake.label}"/>
//                                 <label for="myradio${stake.label}" onclick="checkstake(this.control.value);"><img class="SOL_gatelabel SOL_gateLabel"src="assets/image/piquet/${stake.picture}" alt="${stake.label}" />
//                                     <span class="SOL_labelGateText" style="background: #ffffffdb;">${stake.label}</span>
//                                 </label>
//                             </li>`;
//                         document.getElementById('selectstake').innerHTML = stakeType + ` </ul>  </fieldset>
//                         </details>`;
//                     });
//                 }
//             };
//             stakeRequest.send(null);
//         }else if(this.value != 'Piquet'){
//             document.getElementById('selectstake').innerHTML = "";
//         }
//     })
// }, 1500);

// function checkstake(stakeName) {
//     // document.getElementById("image").src = "assets/image/"+stakeName.substr(0,6)+"/"+stakeName+".png";

//     //check Block
//     var questionColor = document.getElementById("questionstakeType");
//     if (stakeName) {
//         questionColor.className = "checkSyake";
//     }
//     var stakeType = document.getElementsByClassName('stakeType');
//     stakeType[0].style.textTransform = "capitalize";
//     stakeType[0].innerHTML = stakeName;
//     stakeType[1].value = stakeName;
// }