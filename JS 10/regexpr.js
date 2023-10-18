// let template = /\D/

// new RegExp(template, '')

// let template2
//     = new RegExp('\D', 'g')
//
// if (template2.test('Sa1lam')){
//     alert("test passed")
// }
// else{
//     alert("test failed")
// }

/*
\d - istenilen reqem
\D - reqem deyil
\s - space simvol (' ', \n, \t)
\S - space simvol deyil
\w - sozde icaze verilen simvollar (word-symbol, a-z, A-Z, 0-9, _)
\W - istenilen \w olmayan simvol
. - istenilen simvol (setir kechidinden bashqa)
\x - Hex simvol (0-9 A-F)
 */


/*
[1-4] - 1-den 4-e qeder reqmler
[a-z] - butun kichik herfler
[A-Z] - butun boyuk herfler
[0-9A-F] - 0123456789ABCDEF
[^]
 */

/*
? - 0 ve ya bir defe
+ - 1 ve ya daha artiq
* - 0 ve ya daha artiq
{n} - tam n defe tekrarlanir
{n, } - n ve daha chox
{n, m} n-den m-e qeder defe tekrarlana biler

^ - setrin bashlanqici
$ - setrin sonu
*/

// str = "torpaqlarin 20%-i qayitsa qulaqlarimin 50%-ni kesecem"
// template = /\d+/
// template.exec() - bize templatee uyqun ilk taptiqi setri qaytarir - 20

// str = "torpaqlarin 20%-i qayitsa qulaqlarimin 50%-ni kesecem"
// template = /\d+/g - g - global flag-i
// template.exec() - her defe tetbiq etdikde bize
// template-e uyqun null deyerine chatana qeder 1-1 deyerleri qaytarir
// 20 50 null


// str = "torpaqlarin 20%-i qayitsa qulaqlarimin 50%-ni kesecem"
// template = /\d+/g - g - global flag-i
// str.match(template) - her defe tetbiq etdikde bize
// template-e uyqun deyerleri massiv olaraq qaytarir [20, 50]

// .replace() metodu bir simvolu diger simvol ile evez edir
// regex template ile de ishleye bilir
// g flag-i ile birden chox simvolu deyishe biler
// str = '50-55-60'
// '50-55-60'
// str.replace('-', '')
// '5055-60'
// str = '50-55-60'
// '50-55-60'
// str.replace(/-/g, '')
// '505560'
// str = '50 - 55 - 60'
// '50 - 55 - 60'
// str.replace(/[- ]/g, '')
// '505560