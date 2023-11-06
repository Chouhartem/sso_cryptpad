const config = require("../../load-config");
const SSOUtils = require('./sso-utils');

const sso = config.sso;
sso.list.filter((el) => {
    return el.type === 'saml';
}).forEach((cfg) => {
    SSOUtils.TYPES.saml.getMetadata(cfg, (err, md) => {
        console.log(`Name: ${cfg.name}`);
        console.log('Metadata:');
        console.log();
        console.log(md);
        console.log();
        console.log('====================================');
    });
});
