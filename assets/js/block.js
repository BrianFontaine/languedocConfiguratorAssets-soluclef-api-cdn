function selectBlock(blockName){
    document.getElementById("image").src = "https://brianfontaine.github.io/languedocConfiguratorAssets-soluclef-api-cdn/assets/image/"+blockName.substr(0,6)+"/"+blockName+".png";

    //check Block
    var question = document.getElementById("questionBlock");
    if (blockName) {
        question.className="checkBlock";
    }
    var blockType = document.querySelectorAll('.blockType');
        blockType[0].style.textTransform = "capitalize";
        blockType[0].innerHTML = blockName;
        blockType[1].value = blockName;
}

// block A 
listOfProducts ="";
for (let a = 2; a < 6; a++) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioA${a}" name="block" value="blockA${a}"/>
        <label for="myradioA${a}" onclick="selectBlock(this.control.value);"><img class="SOL_blockType" src="https://www.les-boites-aux-lettres.fr/media/swatches/type_a${a}.jpg" alt="blockA${a}"/></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}
// block B 
for (let b = 2; b < 11; b+=2) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioB${b}" name="block" value="blockB${b}"/>
        <label for="myradioB${b}" onclick="selectBlock(this.control.value);"><img class="SOL_blockType" src="https://www.les-boites-aux-lettres.fr/media/swatches/type_b${b}.jpg" alt="blockB${b}" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}
// block C
for (let c = 3; c < 16; c+=3) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioC${c}" name="block" value="blockC${c}"/>
        <label for="myradioC${c}" onclick="selectBlock(this.control.value);"><img class="SOL_blockType" src="https://www.les-boites-aux-lettres.fr/media/swatches/type_c${c}.jpg" alt="blockC${c}" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}
// block D
for (let d = 4; d < 21; d+=4) {
    listOfProducts += `
    <li>
        <input type="radio" id="myradioD${d}" name="block" value="blockD${d}"/>
        <label for="myradioD${d}" onclick="selectBlock(this.control.value);"><img class="SOL_blockType" src="https://www.les-boites-aux-lettres.fr/media/swatches/type_d${d}.jpg" alt="blockD${d}" /></label>
    </li>`;
    document.getElementById('selectBlock').innerHTML = listOfProducts;
}

