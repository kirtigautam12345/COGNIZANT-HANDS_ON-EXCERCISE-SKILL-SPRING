CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department VARCHAR2,
    p_bonus NUMBER
)
AS
BEGIN
    FOR r IN (SELECT EmpID FROM Employees WHERE Department = p_department)
    LOOP
        UPDATE Employees
        SET Salary = Salary + (Salary * p_bonus / 100)
        WHERE EmpID = r.EmpID;
    END LOOP;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

SELECT * FROM Employees;