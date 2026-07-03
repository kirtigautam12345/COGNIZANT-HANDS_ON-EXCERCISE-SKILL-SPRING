CREATE TABLE Customer_Reminder (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50)
);

CREATE TABLE Loan_Reminder (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customer_Reminder(CustomerID)
);

INSERT INTO Customer_Reminder VALUES (1, 'Rahul');
INSERT INTO Customer_Reminder VALUES (2, 'Priya');
INSERT INTO Customer_Reminder VALUES (3, 'Amit');

INSERT INTO Loan_Reminder VALUES (101, 1, SYSDATE + 15);
INSERT INTO Loan_Reminder VALUES (102, 2, SYSDATE + 40);
INSERT INTO Loan_Reminder VALUES (103, 3, SYSDATE + 20);

COMMIT;

BEGIN
    FOR loan_rec IN (
        SELECT c.CustomerName, l.LoanID, l.DueDate
        FROM Customer_Reminder c
        JOIN Loan_Reminder l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: ' || loan_rec.CustomerName ||
            ' - Loan ID: ' || loan_rec.LoanID ||
            ' is due on ' || TO_CHAR(loan_rec.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/