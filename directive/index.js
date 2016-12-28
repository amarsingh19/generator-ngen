'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');
var yosay = require('yosay');
var chalk = require('chalk');
var generatorParams;

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('name', {type: String, required: true});

        generatorParams = {
            appName: _.startCase(this.config.get('ngappname')),
            moduleName: _.camelCase(this.config.get('ngappname')),
            directiveFileName: this.name,
            directiveName: _.camelCase(this.name),
            directiveMarkup: _.kebabCase(this.name)
        };
    },
    prompting: function () {
        var that = this;
        this.log(yosay('Welcome to ' + chalk.yellow('generator-ngen!') + ' sub-generator!'));
    },
    _copyDirectiveFile: function(fileExtension){
        this.fs.copyTpl(
            this.templatePath('_directive.' + fileExtension),
            this.destinationPath('src/common/components/' + this.name + '/' + this.name + '.' + fileExtension), generatorParams
        );
    },
    writing: {
        lessFiles: function () {
            this._copyDirectiveFile('less');
        }
        ,
        html: function () {
            this._copyDirectiveFile('html');
        },
        script: function () {
            this._copyDirectiveFile('js');
            this._copyDirectiveFile('spec.js');
        }
    },
    conflicts: function () {
    },
    install: function () {

    },
    end: function () {
        this.log(chalk.yellow.bold('Directive created successfully!'));
    }
});