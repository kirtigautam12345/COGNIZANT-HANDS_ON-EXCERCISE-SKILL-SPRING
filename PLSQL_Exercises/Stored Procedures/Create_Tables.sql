CREATE TABLE SavingsAccount (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER
);

CREATE TABLE Employees (
    EmpID NUMBER PRIMARY KEY,
    EmpName VARCHAR2(50),
    Department VARCHAR2(50),
    Salary NUMBER
);