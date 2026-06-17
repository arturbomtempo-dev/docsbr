import { cpf, cnpj } from './index.js';

// CPF
console.log('=== cpf.format ===');
console.log(cpf.format('52998224725'));     // '529.982.247-25'
console.log(cpf.format('529.982.247-25')); // '529.982.247-25'

console.log('\n=== cpf.unformat ===');
console.log(cpf.unformat('529.982.247-25')); // '52998224725'
console.log(cpf.unformat('52998224725'));     // '52998224725'

console.log('\n=== cpf.isValid ===');
console.log(cpf.isValid('529.982.247-25')); // true
console.log(cpf.isValid('52998224725'));    // true
console.log(cpf.isValid('111.111.111-11')); // false
console.log(cpf.isValid('000.000.000-00')); // false

console.log('\n=== cpf.generate ===');
console.log(cpf.generate());      // ex: '52998224725'
console.log(cpf.generate(true));  // ex: '529.982.247-25'

// CNPJ
console.log('\n=== cnpj.format ===');
console.log(cnpj.format('11444777000161'));      // '11.444.777/0001-61'
console.log(cnpj.format('11.444.777/0001-61')); // '11.444.777/0001-61'

console.log('\n=== cnpj.unformat ===');
console.log(cnpj.unformat('11.444.777/0001-61')); // '11444777000161'
console.log(cnpj.unformat('11444777000161'));      // '11444777000161'

console.log('\n=== cnpj.isValid ===');
console.log(cnpj.isValid('11.444.777/0001-61')); // true
console.log(cnpj.isValid('11444777000161'));      // true
console.log(cnpj.isValid('11.111.111/1111-11')); // false
console.log(cnpj.isValid('00.000.000/0000-00')); // false

console.log('\n=== cnpj.generate ===');
console.log(cnpj.generate());      // ex: '11444777000161'
console.log(cnpj.generate(true));  // ex: '11.444.777/0001-61'
