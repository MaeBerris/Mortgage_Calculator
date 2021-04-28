# Submission Notes

## Setup

To run this app on your local machine:

1. Clone the repo and pull it to your machine.
2. cd into my-app run `yarn install`.
3. Run `yarn start` and navigate to `localhost:3000` on your browser.

## Features

1. A 'smart' mortgage input. This input parses what the user inputs into the field: It does not register letters and symbols. It separates the amount inputed at the thousands with commas automatically. This is done thanks to these three thoroughly tested functions found [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/helpers/IsPositiveNumber.js#L1), [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/helpers/seperateNumberByCommas.js#L1), and [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/helpers/removeCommasInNumber.js#L1). Their implementation in the onChange event has been tested in the component [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/components/MortgageAmountInput/MortgageAmountInput.test.js#L7)

2. A similar 'smart' input has been implemented for the interestRate component input. This time, it only allows values between 0 and 100 and shows a warning message when the user tries to input values that are out of bound. You can find these tests on these features [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/components/InterestRateInput/InterestRateInput.test.js#L7) and [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/helpers/isWithinInterestRange.test.js#L3)

3. This app also features a live calculation summary thanks to the usage of a react useEffect hook. This hooks in to the state of the mortgage, interest, amortization period and payment frequency. Using those values, it implements them in this algorithm M = P \* r(1+r)^n / (1 + r)^n -1 where M is the monthly mortgage payment, P is the principal payment, r is interest over frequency and n is the total payment. Using other various helpers, we can then calculate the interest payment and the total cost. You can find the above algorithm and their helpers [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/helpers/MortgageCalculatorHelpers.js#L3) and their implementation in the useEffect hook [here](https://github.com/MaeBerris/Mortgage_Calculator/blob/06dc5ea34ba2844186214fc7427b8377ab3b7921/my-app/src/components/MortgageCalculator/LiveCalculationSummary.js#L26)
