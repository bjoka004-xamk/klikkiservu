let juoksevaArpanumero = 0;

module.exports = {

    "osallistu" : (callback) => {

        juoksevaArpanumero++;

        let palautus;

        if(juoksevaArpanumero % 500 == 0) {
            palautus = {
                voitto : 250
            };
        } else if(juoksevaArpanumero % 100 == 0) {
            palautus = {
                voitto : 40
            };
        } else if(juoksevaArpanumero % 10 == 0) {
            palautus = {
                voitto : 5
            };
        } else {
            palautus = {
                voitto : 0
            };
        }

        callback(palautus);

    }

}