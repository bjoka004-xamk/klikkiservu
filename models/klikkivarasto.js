let juoksevaArpanumero = 0;

module.exports = {

    "osallistu" : (callback) => {

        juoksevaArpanumero++;

        let palautus;

        if(juoksevaArpanumero % 500 === 0) {
            palautus = muodostaPalautus(250, 10)
        } else if(juoksevaArpanumero % 100 === 0) {
            palautus = muodostaPalautus(40, 10)
        } else if(juoksevaArpanumero % 10 === 0) {
            palautus = muodostaPalautus(5, 10)
        } else {
            palautus = muodostaPalautus(0, 10 - juoksevaArpanumero%10)
        }

        return palautus;

    }

}

muodostaPalautus = (voitto, seuraava) => {
    return { voitto : voitto, seuraava : seuraava};
}