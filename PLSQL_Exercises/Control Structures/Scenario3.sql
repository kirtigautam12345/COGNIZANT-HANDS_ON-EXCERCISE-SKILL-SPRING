BEGIN
    FOR r IN(
        SELECT c.CustomerName,l.DueDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID=l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE+30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
        'Reminder: Loan payment is due for '
        ||r.CustomerName||
        ' on '||
        TO_CHAR(r.DueDate,'DD-MON-YYYY'));
    END LOOP;
END;
/