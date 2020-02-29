let juoksevaArpanumero = 0;

module.exports = {

    "osallistu" : (callback) => {

        juoksevaArpanumero++;

        let palautus;

        if(juoksevaArpanumero % 500 == 0) {
            palautus = {
                voitto : 250,
                seuraava : 10
            };
        } else if(juoksevaArpanumero % 100 == 0) {
            palautus = {
                voitto : 40,
                seuraava : 10
            };
        } else if(juoksevaArpanumero % 10 == 0) {
            palautus = {
                voitto : 5,
                seuraava : 10
            };
        } else {
            palautus = {
                voitto : 0,
                seuraava : 10 - juoksevaArpanumero%10
            };
        }

        callback(palautus);

    }

}