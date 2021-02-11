<?php
// echo json_encode($_POST);
require_once dirname(__FILE__) . '\..\model\M52b_languedoc_quote.php';
date_default_timezone_set('Europe/Paris');
$success = 0;
$errors = [];
$msg = "une erreur est survenue... (script.php) !";
$isSubmited = false;
$today = date("Y-m-d H:i:s");


$location = trim(filter_input(INPUT_POST, 'location', FILTER_SANITIZE_STRING));
$setupType = utf8_encode(trim(filter_input(INPUT_POST, 'setupType', FILTER_SANITIZE_STRING)));
$stakeType = utf8_encode(trim(filter_input(INPUT_POST, 'stakeType', FILTER_SANITIZE_STRING)));
$blockType = utf8_encode(trim(filter_input(INPUT_POST, 'blockType', FILTER_SANITIZE_STRING)));
$blockColor = utf8_encode(trim(filter_input(INPUT_POST, 'blockColor', FILTER_SANITIZE_STRING)));
$gateColor = utf8_encode(trim(filter_input(INPUT_POST, 'gateColor', FILTER_SANITIZE_STRING)));
$gateDesign = utf8_encode(trim(filter_input(INPUT_POST, 'gateDecor', FILTER_SANITIZE_STRING)));
$securityLevel = utf8_encode(trim(filter_input(INPUT_POST, 'securityLevel', FILTER_SANITIZE_STRING)));
$lastname = utf8_encode(trim(filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING)));
$firstname = utf8_encode(trim(filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING)));
$email = utf8_encode(trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING)));
$phone = utf8_encode(trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING)));

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($location && $setupType && $blockType && $blockColor && $gateColor && $gateDesign && $securityLevel && $lastname && $firstname && $email && $phone)) {
        $isSubmited = true;
// --------------- Recuperation du SKU ----------------
        if ($securityLevel == "serrure 3 point") {
            $security = "Plus";
        }else{
            $security = "Standard";
        }
        $skuFirst = $location." ".$setupType." ".$security;
        switch ($skuFirst) {
            case 'Interieur Applique Plus':
                $sku_left_half = "2983";
                break;
            case 'Interieur Applique Standard':
                $sku_left_half = "2982";
                break;
            case 'Interieur Encastrée Plus':
                $sku_left_half = "3131";
                break;
            case 'Interieur Encastrée Standard':
                $sku_left_half = "3130";
                break;
            case 'Interieur Piquet Plus':
                $sku_left_half = "3139";
                break;
            case 'Interieur Piquet standard':
                $sku_left_half = "3138";
                break;
            case 'Exterieur Applique standard':
                $sku_left_half = "3140";
                break;
            case 'Exterieur Applique Plus':
                $sku_left_half = "3144";
                break;
            case 'Exterieur Encastrée Plus':
                $sku_left_half = "3477";
                break;
            case 'Exterieur Encastrée standard':
                $sku_left_half = "3471";
                break;
            case 'Exterieur Piquet Plus':
                $sku_left_half = "3133";
                break;
            case 'Exterieur Piquet Standard':
                $sku_left_half = "3132";
                break;
            default:
            $sku_left_half = null;
                break;
        }
        $block = str_split($blockType);
        switch ($block[5]) {
            case 'A':
                $sku_right_t = 1;
                break;
            case 'B':
                $sku_right_t = 2;
                break;
            case 'C':
                $sku_right_t = 3;
                break;
            case 'D':
                $sku_right_t = 4;
                 break;
            
            default:
                $sku_right_t = null;
                break;
        }
        $out = preg_replace('~\D~', '', $blockType);
        $sku_right_u = $out / $sku_right_t;
        $sku = $sku_left_half.$sku_right_t.$sku_right_u;
    //  -----------------------------------------------------------------

        $success = 1;
        $msg = "Your quote is submitted successfully !";
        
    } else {
        $success = 0;
        $msg = "One or more fields are missing !";
    }
}
if ($isSubmited == true && count($errors) == 0) {
    $languedocDevis = new M52b_languedoc_quote();
    $languedocDevis->_location = $location;
    $languedocDevis->_setupType = $setupType;
    $languedocDevis->_stake_type = $stakeType;
    $languedocDevis->_blockType = $blockType;
    $languedocDevis->_blockColor = $blockColor;
    $languedocDevis->_gateColor = $gateColor;
    $languedocDevis->_gateDesign = $gateDesign;
    $languedocDevis->_securityLevel = $securityLevel;
    $languedocDevis->_createAt = $today;
    $languedocDevis->_updateAt = $today;
    $languedocDevis->_status = "pending";
    $languedocDevis->_customerLastname = $lastname;
    $languedocDevis->_customerFirstname = $firstname;
    $languedocDevis->_customerEmail = $email;
    $languedocDevis->_customerPhone = $phone;
    $languedocDevis->_sku = $sku;
    $languedocDevisId = (int) $languedocDevis->create();
    if ($languedocDevisId) {
        $response = ["success" => $success, "message" => $msg, "submit" => $isSubmited, "date" => $today, "idDevis" => $languedocDevisId];
    }
} else {
    $response = ["success" => $success, "message" => $msg, "submit" => $isSubmited, "date" => $today];
}
echo json_encode($response);
