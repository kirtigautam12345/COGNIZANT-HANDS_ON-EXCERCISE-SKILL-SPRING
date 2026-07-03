CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account NUMBER,
    p_to_account NUMBER,
    p_amount NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance
    FROM SavingsAccount
    WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE SavingsAccount
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE SavingsAccount
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;

    COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 2000);
END;
/

SELECT * FROM SavingsAccount;