a = [
    'test.email+alex@kavak.com',
    'test.e.mail+bob.cathy@kavak.com',
    'testemail+david@ka.vak.com'
]

var b = 'test.e.mail+bob.cathy@kavak.com';

function test() {
    var e = [];
    b = b.split('@');
    var final = b[1];
    // console.log(final);
    var first = b[0];

    for (var d in first) {
        var n = first[d].replace(/\./g, '');
        // console.log(n);
        if (n.includes('+')) {
            n.replace("+", "");
        } else {
            n.replace(" ", "");
            console.log(n);
        }
    }
    console.log(n + '@' + final);

};
test();
console.log(emailsUnicos);

var emailsUnicos = function (emails) {

};