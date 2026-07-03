ALTER TABLE Customers ADD Balance NUMBER;
ALTER TABLE Customers ADD IsVIP VARCHAR2(5);

UPDATE Customers SET Balance = 15000 WHERE CustomerID = 1;
UPDATE Customers SET Balance = 8000 WHERE CustomerID = 2;
UPDATE Customers SET Balance = 20000 WHERE CustomerID = 3;

COMMIT;

BEGIN
    FOR c IN (SELECT CustomerID, Balance FROM Customers)
    LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated successfully.');
END;
/

SELECT * FROM Customers;