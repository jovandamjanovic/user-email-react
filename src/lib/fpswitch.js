const executeIfFunction = a => typeof a === 'function' ? a() : a;

const fpswitch = cases => singleCase => defaultCase => executeIfFunction(cases[singleCase] ? cases[singleCase] : defaultCase);

export default fpswitch;