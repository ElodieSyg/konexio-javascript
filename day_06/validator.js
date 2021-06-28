var prompt = require("prompt");
var colors = require ('colors');

prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

const checkRes = () => {
    prompt.get([
        {
            name: 'email',
            pattern: /(@.)/gi,
            message: 'Veuillez saisir un email correct',
        },
        {
            name: 'username',
            pattern: /[a-z0-9-]/gi,
            required: true,
            message: 'Le nom ne doit contenir que des lettres, des espaces ou des tirets',
        },
        {
            name: 'password',
            pattern: /[a-z\{1}0-6\{1}-]{6,}/gi,
            message: 'Le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets'
        }
    ], function (err, res) {

        if (err) {
            return checkRes();
        } else {
            console.log("ALL GOOD !".red);
        }

    }
    )};

checkRes();