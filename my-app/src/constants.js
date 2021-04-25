const years = [];
const term = [];

for (let i = 1; i <= 30; i++) {
  if (i <= 10) {
    term.push(i);
  }
  years.push(i);
}

const constants = { AmortizationYears: years, TermYears: term };

export default constants;
