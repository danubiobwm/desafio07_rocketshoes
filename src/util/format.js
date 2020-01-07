import NumeralJs from 'numeral';

NumeralJs.register('locale', 'br', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'b',
    trillion: 't',
  },
  ordinal() {
    return 'º';
  },
  currency: {
    symbol: 'R$',
  },
});
NumeralJs.locale('br');

const formatPrice = price => NumeralJs(price).format('$ 0.00');

export default formatPrice;
