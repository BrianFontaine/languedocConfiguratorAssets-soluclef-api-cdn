<?php 
    require_once dirname(__FILE__) . '\..\model\M52b_languedoc_quote.php';
    
    if (isset($_GET["status"])) {
        $status = $_GET["status"];
        $quote = new M52b_languedoc_quote();
        $quote->_status = $status;
        $listQuote = $quote->findAllQuote();
        echo json_encode($listQuote);
        die();
    }else{
        $quote = new M52b_languedoc_quote();
        $listQuote = $quote->readAllQuote();
        echo json_encode($listQuote);
    }
  
