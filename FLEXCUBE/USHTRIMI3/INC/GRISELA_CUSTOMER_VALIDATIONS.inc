INSERT INTO GRISELA_CUSTOMER_VALIDATIONS
(customer_type, customer_category, field_description, mandatory_validations)
VALUES
('INDIVIDUALS', 'CORPORATE', 'BANK NUMBER', 'OPTIONAL')

INSERT INTO GRISELA_CUSTOMER_VALIDATIONS
(customer_type, customer_category, field_description, mandatory_validations)
VALUES
('TRUSTEES', 'FREQUENT', 'Branch Number', 'MONDATORY')

INSERT INTO GRISELA_CUSTOMER_VALIDATIONS
(customer_type, customer_category, field_description, mandatory_validations)
VALUES
('PATNERSHIP FIRMS', 'INDIVIDUAL', 'Account Number', 'OPTIONAL')

INSERT INTO GRISELA_CUSTOMER_VALIDATIONS
(customer_type, customer_category, field_description, mandatory_validations)
VALUES
('JOINT STOCK COMPANIES', 'FREQUENT', 'Check Digit', 'MONDATORY')
commit;
