type BinaryAlphabetType = {
    [key: string]: string;
};

const BinaryAlphabet: BinaryAlphabetType = {
    '01100001':'a',	
    '11100000':'à',	
    '11100001':'á',	
    '11100010':'â',	
    '11100011':'ã',	
    '01100010':'b',	
    '01100011':'c',	
    '11100111':'ç',	
    '01100100':'d',	
    '01100101':'e',	
    '11111011':'é',	
    '11111100':'ê',	
    '01100110':'f',	
    '01100111':'g',	
    '01101000':'h',	
    '01101001':'i',	
    '11101101':'í',	
    '01101010':'j',	
    '01101011':'k',	
    '01101100':'l',	
    '01101101':'m',	
    '01101110':'n',	
    '01101111':'o',	
    '11110011':'ó',	
    '11110100':'ô',	
    '11110101':'õ',	
    '01110000':'p',	
    '01110001':'q',	
    '01110010':'r',	
    '01110011':'s',	
    '01110100':'t',	
    '01110101':'u',	
    '11111010':'ú',	
    '01110110':'v',	
    '01110111':'w',	
    '01111000':'x',	
    '01111001':'y',	
    '01111010':'z',	
    '01000001':'A',	
    '11000000':'À',	
    '11000001':'Á',	
    '11000010':'Â',	
    '11000011':'á',	
    '01000010':'B',	
    '01000011':'C',	
    '11000111':'Ç',	
    '01000100':'D',	
    '01000101':'E',	
    '11001001':'É',	
    '11001010':'Ê',	
    '01000110':'F',	
    '01000111':'G',	
    '01001000':'H',	
    '01001001':'I',	
    '11001101':'Í',	
    '01001010':'J',	
    '01001011':'K',	
    '01001100':'L',	
    '01001101':'M',	
    '01001110':'N',	
    '01001111':'O',	
    '11010011':'Ó',	
    '11010100':'Ô',	
    '11010101':'Õ',	
    '01010000':'P',	
    '01010001':'Q',	
    '01010010':'R',	
    '01010011':'S',	
    '01010100':'T',	
    '01010101':'U',	
    '11011010':'Ú',	
    '01010110':'V',	
    '01010111':'W',	
    '01011000':'X',	
    '01011001':'Y',	
    '01011010':'Z',
    '00101100':',',
    '00101110':'.',
    '00100000':' ',
    '00100001':'!',
    '00111111':'?',
};

const DecodeBinary = (cipher: string) => {

    let arrCipher = cipher.split(' ');

    let result: string[] = [];

    arrCipher.map((text: string) => {

        if(text != '') {

            for(let i = 0; i < text.length; i += 8) {

                let currentCipher: string = text.substring(i, i + 8);
                result.push(BinaryAlphabet[currentCipher]);
            }

        }
    })

    return result.join('');
}

export default DecodeBinary;