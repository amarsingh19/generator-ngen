'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');
var yosay = require('yosay');
var chalk = require('chalk');
var fileSystem = require('fs');
var generatorParams;
var shouldContinue = true;

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

        this.argument('name', {type: String, required: true});

        generatorParams = {
            appName: _.startCase(this.config.get('ngappname')),
            moduleName: _.camelCase(this.config.get('ngappname')),
            routeFileName: this.name,
            routeName: _.camelCase(this.name),
            routeMarkup: _.kebabCase(this.name)
        };
    },
    _destinationPathExists: function(path){
        return fileSystem.existsSync(this.destinationPath(path));
    },
    prompting: function () {
        this.log(yosay('Welcome to ' + chalk.yellow('generator-ngen!') + ' sub-generator!'));

        var fullyQualifiedRoute = this.name;
        var allRoutes = _.split(fullyQualifiedRoute, '.');
        generatorParams.routePath = allRoutes[0];
        generatorParams.routeName = allRoutes[0];

        if(allRoutes.length > 1){
            if (!this._destinationPathExists('src/' + allRoutes[0])) {
                shouldContinue = false;
                this.log(chalk.red('Parent route ' + allRoutes[0] + ' does not exist. Aborting!'));
            }
            else {
                generatorParams.routePath = allRoutes[0] + '/' + allRoutes[1];
                generatorParams.routeName = allRoutes[1];
                generatorParams.childRoute = true;
                generatorParams.parentRoute = allRoutes[0];
            }
        }
    },

    _copyDirectiveFile: function(fileExtension){
        if(shouldContinue === true) {
            this.fs.copyTpl(
                this.templatePath('_route.' + fileExtension),
                this.destinationPath('src/' + generatorParams.routePath + '/' + generatorParams.routeName + '.' + fileExtension), generatorParams
            );
        }
    },
    writing: {
        lessFiles: function () {
            this._copyDirectiveFile('less');
        },
        html: function () {
            this._copyDirectiveFile('html');
        },
        script: function () {
            this._copyDirectiveFile('js');
            this._copyDirectiveFile('spec.js');
            if(shouldContinue === true) {
                if (generatorParams.childRoute !== true) {
                    this.fs.copyTpl(
                        this.templatePath('_routeConfig.js'),
                        this.destinationPath('src/' + generatorParams.routePath + '/' + generatorParams.routeName + 'RouteConfig.js'), generatorParams
                    );
                }
            }
        }
    },
    conflicts: function () {
    },
    install: function () {

    },
    end: function () {
        if(shouldContinue === true){
            this.log(chalk.yellow.bold('Route created successfully!'));

            if (generatorParams.childRoute === true) {
                this.log(chalk.yellow.bold('Note: Please update ' + generatorParams.parentRoute + 'RouteConfig.js file to declare this new child state: ' + this.name));
            }
        }
        else {
            this.log('Unable to generate route.');
        }

    }
});