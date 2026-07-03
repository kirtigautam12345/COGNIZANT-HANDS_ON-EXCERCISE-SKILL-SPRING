CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    FOR r IN (SELECT AccountID, Balance FROM SavingsAccount)
    LOOP
        UPDATE SavingsAccount
        SET Balance = Balance + (Balance * 0.01)
        WHERE AccountID = r.AccountID;
    END LOOP;

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM SavingsAccount;