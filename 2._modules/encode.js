let encoded = Buffer.from('textťčš', 'utf8').toString('base64');
let decoded = Buffer.from(encoded, 'base64').toString('utf8');
console.log(`encoded ${encoded}\ndecoded ${decoded}`);

encoded = Buffer.from('textťčšø¨å', 'utf8').toString('binary');
decoded = Buffer.from(encoded, 'binary').toString('utf8');
console.log(`encoded ${encoded}\ndecoded ${decoded}`);