const path = require('path');

const resolve = dir => path.join(__dirname, dir);

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                resolve('node_modules/@souche-ui/lemon/less/global.less'),
                resolve('src/styles/global.less')
            ]
        });
}

module.exports = {
    chainWebpack (config) {
        config.resolve.alias
            .set('main', resolve('src'))
            .set('lemon', '@souche-ui/lemon')
            .set('tower', '@souche-f2e/tower')
            // .set('utils', '@souche-f2e/souche-util')
            .set('som-ui', '@souche-ui/som-ui')
            .set('helper', resolve('src/assets/js/helper'));

        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
    }
};

if (process.env.LIB === 'components') {
    module.exports.css = {
        extract: false
    };
}
