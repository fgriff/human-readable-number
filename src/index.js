module.exports = function toReadable (n) {
    const toTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['hundred', 'thousand', 'million'];

    if (n === 0) return 'zero';

    const digitArr = n.toString().split('').reverse();
    let length = digitArr.length;

    if (length > 7) return 'The number is too big. Enter a number less';

    let phrase = '';

    for (let i = length - 1; i >= 0; i--) {
        switch (i) {
            case 6:
                if (digitArr[i] === '0') {
                    break;
                } else {
                    phrase += `${toTen[digitArr[i]]} ${scales[2]} `;
                }
                break;

            case 5:
                if (digitArr[i] === '0') {
                    break;
                } else if (digitArr[i - 1] === '0' && digitArr[i - 2] === '0') {
                    phrase += `${toTen[digitArr[i]]} ${scales[0]} ${scales[1]} `;
                    i -= 2;
                } else {
                    phrase += `${toTen[digitArr[i]]} ${scales[0]} `;
                }
                break;

            case 4:
                if (digitArr[i] === '0') {
                    break;
                } else if ( (digitArr[i] + digitArr[i - 1]) < 20 ) {
                    phrase += `${toTen[+(digitArr[i] + digitArr[i - 1])]} ${scales[1]} `;
                    i -= 1;
                    break;
                } else if (digitArr[i - 1] === '0') {
                    phrase += `${dozens[i - 1]} ${scales[1]} `;
                } else {
                    phrase += `${dozens[i - 1]} `;
                }
                break;

            case 3:
                if (digitArr[i] === '0') {
                    phrase += `${scales[1]} `;
                    break
                } else {
                    phrase += `${toTen[digitArr[i]]} ${scales[1]} `;
                }
                break;

            case 2:
                if (digitArr[i] === '0') {
                    break;
                } else if (digitArr[i - 1] === '0' && digitArr[i - 2] === '0') {
                    phrase += `${toTen[digitArr[i]]} ${scales[0]} `;
                    i -= 2;
                    break;
                } else {
                    phrase += `${toTen[digitArr[i]]} ${scales[0]} `;
                }
                break;

            case 1:
                if (digitArr[i] === '0') {
                    break;
                } else if ( (digitArr[i] + digitArr[i - 1]) < 20) {
                    phrase += `${toTen[+(digitArr[i] + digitArr[i - 1])]} `;
                    i -= 1;
                    break;
                } else {
                    phrase += `${dozens[digitArr[i]]} `;
                }
                break;

            case 0:
                if (digitArr[i] === '0') {
                    break;
                } else {
                    phrase += `${toTen[digitArr[i]]} `;
                }
                break;

            default:
                break;
        }
    }

    return phrase.trim();
}
