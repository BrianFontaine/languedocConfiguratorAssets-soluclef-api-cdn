#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: m52b_languedoc_quote
#------------------------------------------------------------
DROP TABLE m52b_languedoc_quote;
CREATE TABLE m52b_languedoc_quote(
        id                  Int  Auto_increment  NOT NULL ,
        location            Varchar (20) NOT NULL ,
        setup_type          Varchar (20) NOT NULL ,
        stake_type          Varchar (20) ,
        block_type          Varchar (20) NOT NULL ,
        block_color         Varchar (20) NOT NULL ,
        gate_color          Varchar (20) NOT NULL ,
        gate_design         Varchar (20) NOT NULL ,
        security_level      Varchar (20) NOT NULL ,
        create_at           Datetime NOT NULL ,
        update_at           Datetime NOT NULL ,
        status              Varchar (20) NOT NULL ,
        customers_lastname  Varchar (50) NOT NULL ,
        customers_firstname Varchar (50) NOT NULL ,
        customers_email     Varchar (50) NOT NULL ,
        customers_phone     Varchar (13) NOT NULL ,
        total_price         Varchar (13)
	,CONSTRAINT m52b_languedoc_quote_PK PRIMARY KEY (id)
)ENGINE=InnoDB;

