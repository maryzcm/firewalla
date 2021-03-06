'use strict'

let fs = require('fs');

let Firewalla = require('../net2/Firewalla.js');

let path = Firewalla.getEncipherConfigFolder() + '/license';

function getLicense() {
    if (!fs.existsSync(path)) {
        return null;
    }
    let license = fs.readFileSync(path,'utf-8');
    if (license == null) {
        return null;
    }
    let licenseobj = JSON.parse(license);
    return licenseobj.DATA;
}

function verifyLicense(license) {
}

module.exports = {
   getLicense: getLicense,
   verifyLicense: verifyLicense
}

