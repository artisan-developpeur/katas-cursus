class Roman {
    decode(romanNumber){
        let result = 0;
        for (let i = 0; i < romanNumber.length; i++) {
            result += this.decodeSingleCharacter(romanNumber[i]);
        }
        return result;
    }

    decodeSingleCharacter(romanNumber) {
        switch (romanNumber) {
            case "I": return 1;
            case "V": return 5;
            case "X": return 10;
            default: return 0;
        }
    }
}

module.exports = Roman;