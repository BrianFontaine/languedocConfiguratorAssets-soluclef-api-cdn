<?php 
    require_once dirname(__FILE__) . '/../utils/Databases.php';

    class M52b_languedoc_quote{

        private $_id;
        private $_location;
        private $_setupType;
        private $_stake_type;
        private $_blockType;
        private $_blockColor;
        private $_gateColor;
        private $_gateDesign;
        private $_securityLevel;
        private $_createAt;
        private $_updateAt;
        private $_status;
        private $_customerLastname;
        private $_customerFirstname;
        private $_customerEmail;
        private $_customerPhone;
        private $_total_Price;
        private $_sku;
        private $db;

        public function __construct($id=0, $location ="", $block_type="", $block_color="", $gate_color="", $gate_desing="", $security_level="", $setup_type="", $create_at="", $update_at="", $customer_lastname="", $customer_firstname="", $customer_email="", $customer_phone="",$status="",$totalPrice=" ",$stakeType="",$sku="")
        {
            $this->_id = $id;
            $this->_location = $location;
            $this->_setupType = $setup_type;
            $this->_stake_type = $stakeType;
            $this->_blockType = $block_type;
            $this->_blockColor = $block_color;
            $this->_gateColor = $gate_color;
            $this->_gateDesign = $gate_desing;
            $this->_securityLevel = $security_level;
            $this->_createAt = $create_at;
            $this->_updateAt = $update_at;
            $this->_status = $status;
            $this->_customerLastname = $customer_lastname;
            $this->_customerFirstname = $customer_firstname;
            $this->_customerEmail = $customer_email;
            $this->_customerPhone = $customer_phone;
            $this->_total_Price = $totalPrice;
            $this->_sku = $sku;
            $this->db = Database::getInstance();
        }
        
        public function __get($attr)
        {
            return $this->$attr;
        }
        public function __set($attr, $value)
        {
            $this->$attr = $value;
        }

        public function create()
        {
            $sql ='INSERT INTO `m52b_languedoc_quote`
            (`location`,`setup_type`,`stake_type`,`block_type`,`block_color`,`gate_color`,`gate_design`,`security_level`,`create_at`,`update_at`,`status`, `customers_lastname`, `customers_firstname`, `customers_email`, `customers_phone`,`total_price`,`sku`) VALUES 
            (:location,:setupType,:stake_type,:blockType,:blockColor,:gateColor,:gateDesing,:securityLevel,:createAt,:updateAte,:status,:customerLastname,:customerFirstname,:customerEmail,:customerPhone,:price,:sku)';
            $configuration_statment = $this->db->prepare($sql);
            $configuration_statment->bindValue(':location', $this->_location, PDO::PARAM_STR);
            $configuration_statment->bindValue(':setupType', $this->_setupType, PDO::PARAM_STR);
            $configuration_statment->bindValue(':stake_type', $this->_stake_type, PDO::PARAM_STR);
            $configuration_statment->bindValue(':blockType', $this->_blockType, PDO::PARAM_STR);
            $configuration_statment->bindValue(':blockColor', $this->_blockColor, PDO::PARAM_STR);
            $configuration_statment->bindValue(':gateColor', $this->_gateColor, PDO::PARAM_STR);
            $configuration_statment->bindValue(':gateDesing', $this->_gateDesign, PDO::PARAM_STR);
            $configuration_statment->bindValue(':securityLevel', $this->_securityLevel, PDO::PARAM_STR);
            $configuration_statment->bindValue(':createAt', $this->_createAt, PDO::PARAM_STR);
            $configuration_statment->bindValue(':updateAte', $this->_updateAt, PDO::PARAM_STR);
            $configuration_statment->bindValue(':status', $this->_status, PDO::PARAM_STR);
            $configuration_statment->bindValue(':customerLastname', $this->_customerLastname, PDO::PARAM_STR);
            $configuration_statment->bindValue(':customerFirstname', $this->_customerFirstname, PDO::PARAM_STR);
            $configuration_statment->bindValue(':customerEmail', $this->_customerEmail, PDO::PARAM_STR);
            $configuration_statment->bindValue(':customerPhone', $this->_customerPhone, PDO::PARAM_STR);
            $configuration_statment->bindValue(':price', $this->_total_Price, PDO::PARAM_STR);
            $configuration_statment->bindValue(':sku', $this->_sku, PDO::PARAM_STR);
            $languedocDevis = null;
            if($configuration_statment->execute())
            {
                $languedocDevis = $this->db->lastInsertId();
            }
            return $languedocDevis;
        }

        public function findAllQuote(){
            $requestFindQuotes = "SELECT `id`, `location`, `setup_type`, `stake_type`, `block_type`, `block_color`, `gate_color`, `gate_design`, `security_level`, `create_at`, `update_at`, `status`, `customers_lastname`, `customers_firstname`, `customers_email`, `customers_phone`, `total_price`, `sku` FROM `m52b_languedoc_quote` WHERE `status` = :status_quote;";
            $quoteStatement = $this->db->prepare($requestFindQuotes);
            $quoteStatement->bindValue(':status_quote', $this->_status, PDO::PARAM_STR);
            $listQuotes = [];
            if ($quoteStatement->execute()) {
                $listQuotes = $quoteStatement->fetchAll(PDO::FETCH_OBJ);
            }
            return $listQuotes;
        }

        public function readAllQuote(){
            $requestAllQuotes = "SELECT `id`, `location`, `setup_type`, `stake_type`, `block_type`, `block_color`, `gate_color`, `gate_design`, `security_level`, `create_at`, `update_at`, `status`, `customers_lastname`, `customers_firstname`, `customers_email`, `customers_phone`, `total_price`, `sku` FROM `m52b_languedoc_quote`;";
            $quoteStatement = $this->db->query($requestAllQuotes);
            $listQuotes = [];
            if ($quoteStatement instanceof PDOstatement) {
                $listQuotes = $quoteStatement->fetchAll(PDO::FETCH_OBJ);
            }
            return $listQuotes;
        }
    }