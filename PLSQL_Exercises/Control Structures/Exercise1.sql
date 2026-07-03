CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (1, 'Rahul', 65);
INSERT INTO Customers VALUES (2, 'Priya', 45);
INSERT INTO Customers VALUES (3, 'Amit', 70);

INSERT INTO Loans VALUES (101, 1, 10);
INSERT INTO Loans VALUES (102, 2, 9);
INSERT INTO Loans VALUES (103, 3, 11);

COMMIT;

BEGIN
    FOR c IN (SELECT CustomerID, Age FROM Customers)
    LOOP
        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan interest rates updated successfully.');
END;
/

SELECT * FROM Loans;