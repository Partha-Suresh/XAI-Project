import { Typography, Box } from "@mui/material";

/*

id: Unique identifier for each loan record
loan_amnt: The total amount of the loan applied for by the borrower
debt_settlement_flag: Indicates if the loan is part of a debt settlement program (0 = No, 1 = Yes)
int_rate: Interest rate on the loan (as a percentage)
annual_inc: The self-reported annual income of the borrower
installment: The monthly payment amount for the loan
funded_amnt_inv: The total amount of the loan that was funded by investors
zip_code: The borrower's ZIP code
title: The loan title or purpose provided by the borrower
dti: Debt-to-Income ratio - Monthly debt payments divided by monthly income
tot_coll_amt: Total collection amounts ever owed
mths_since_recent_bc: Number of months since the most recent new bank card account
revol_bal: Total credit revolving balance (like credit card balances)
out_prncp: Remaining outstanding principal for the loan
mths_since_rcnt_il: Number of months since the most recent installment loan
collection_recovery_fee: Post charge-off collection fee
il_util: Ratio of total current balance to high credit/credit limit on installment accounts
Label: The target variable (typically 0 = loan paid/good loan, 1 = default/bad loan)


*/

export default function Loan() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                maxWidth: "1300px",
                margin: "0 auto",
            }}
        >
            <Typography variant="h2" sx={{ mt: 5, mb: 5 }}>
                Loan Default Classification
            </Typography>
        </Box>
    );
}
