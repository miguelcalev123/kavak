
var r = 'test.e.mail+bob.cathy@kavak.com';

function test(b) {
    var correo = 'kavak.com';

    for (var key in b) {
        var j = (b[key].split('@'));
        var first = j[0];
        var final = j[1];

        var newFirst = first.split('+');
        newFirst = newFirst[0];
        var patron = /\./g
        var newFinal = newFirst.replace(patron, '');
        if (final != correo) {
            console.log('este no se adjunta')
        } else {
            console.log(newFinal + '@' + correo);
        }

        // console.log(final);
        // 
        // var patron2 = /\+/g

        // 
        // 
        // var newFirst = first.replace(patron, '');
        // if (newFirst.includes('+')) {
        //     var delPlus = newFirst.replace(patron2, '');
        //     // console.log(delPlus);
        // }
        // // console.log(delPlus + '@' + newFinal);

        // }

        // var e = [];
        // b = b.split('@');
        // var final = b[1];
        // console.log('final', final);
        // // console.log('b', b);
        // var patron = /\./g
        // var patron2 = /\+/g
        // first = b[0];
        // var newFirst = first.replace(patron, '');
        // if (newFirst.includes('+')) {
        //     var delPlus = newFirst.replace(patron2, '');
        //     // console.log(delPlus);
    }
    // console.log(delPlus + '@' + final);
};
test();

var j = test({
    "f": 'test.email+alex@kavak.com',
    "t": 'test.e.mail+bob.cathy@kavak.com',
    "tr": 'testemail+david@ka.vak.com',
});

// var emailsUnicos = test(b) {
//     b = [
//         'test.email+alex@kavak.com',
//         'test.e.mail+bob.cathy@kavak.com',
//         'testemail+david@ka.vak.com'
//     ]


// };
