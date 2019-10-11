const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    "**********": " ",
};



function decode(expr) {
  const arr = expr.match(/([0,1]{10})|(\*{10})/g);
	const replacer = symb => {
		switch (symb) {
			case '10':
				return '.';
			case '11':
				return '-';
			case '00':
			default:
				return '';
		}
	}
	let decode = '';
	
	while (arr.length) {
		const letter = arr.pop().replace(/\d{2}/g, replacer);
		decode = (MORSE_TABLE[letter] || ' ') + decode;
	}

	return decode;
};

module.exports = {
    decode
}

