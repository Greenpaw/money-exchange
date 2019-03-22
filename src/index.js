// PLEASE DON'T change function name
module.exports =  function makeExchange(currency) {
    var name = ["H", "Q", "D", "N", "P"];
   
    var nominal = [50, 25, 10, 5, 1];
    var count = [];
    var result = currency;

    if (currency > 10000) {
        let errResult = Object.assign({"error": "You are rich, my friend! We don't have so much coins for exchange"});
        return errResult;
    }
    for (i = 0; i<5; i++) {
        count[i] = parseInt(result/nominal[i]);
        result = result % nominal[i];     
    }

    const obj = name.reduce((o, key, index) => count[index] < 1 ? o : Object.assign(o, {[key]: count[index]}), {})
    return obj;
};
