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
            filterFileName: this.name,
            filterName: _.camelCase(this.name)
        };
    },
    prompting: function () {
        this.log(yosay('Welcome to ' + chalk.yellow('generator-ngen!') + ' sub-generator!'));
    },
    writing: {
        script: function () {
            this.fs.copyTpl(
                this.templatePath('_filter.js'),
                this.destinationPath('src/common/filters/' + this.name + '.js'), generatorParams
            );
        }
    },
    end: function () {
        this.log(chalk.yellow.bold('Filter created successfully!'));
    }
});