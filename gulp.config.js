const gulp = require('gulp');

const appName = "cpms_web"
const appResourcePath = "./app/dynamic/";
//const bowerComponent = './bower_components/';
const bowerComponent = appResourcePath + 'bower_components/';
const buildPath = appResourcePath + 'build/';
var config = {
    appName: appName,

    vendorCss: {
        dist: buildPath + "assets/css/",
        src: [
            bowerComponent + "bower-ui-grid/ui-grid.css",
            bowerComponent + "bootstrap-additions/dist/bootstrap-additions.min.css",
            bowerComponent + "bootstrap-additions/dist/modules/modal.min.css",
            bowerComponent + "angular-busy/dist/angular-busy.min.css",
            bowerComponent + "angular-ui-notification/dist/angular-ui-notification.min.css",
            bowerComponent + "selectize/dist/css/selectize.default.css",
            //appResourcePath + "css/font-awesome.min.css",
            appResourcePath + "css/simple-line-icons.min.css",
            appResourcePath + "css/bootstrap.min.css",
            appResourcePath + "css/bootstrap-switch.min.css",
            appResourcePath + "css/bootstrap.icon-large.css",
            appResourcePath + "css/spinner.css",
            appResourcePath + "css/filter.css",
            appResourcePath + "css/dashboards.css",
            appResourcePath + "css/tree.css",
            appResourcePath + "css/treeview.css",
            appResourcePath + "css/uigrid.css",
            appResourcePath + "css/components.min.css",
            appResourcePath + "css/plugins.min.css",
            appResourcePath + "css/layout.min.css",
            appResourcePath + "css/default.min.css",
            appResourcePath + "css/custom.min.css",
            appResourcePath + "css/main.css",
            appResourcePath + "css/todo-2.css",
            appResourcePath + "css/utilization.css",
            appResourcePath + "css/cg-busy.css",
            appResourcePath + "css/helper-classes.css",
            appResourcePath + "css/style.css",
            buildPath + "assets/css/components.css"
        ]
    },
    styleSheets: {
        dist: buildPath + "assets/css",
        src: [appResourcePath + 'assets/sass/*.scss']
    },
    vendorJs: {
        dist: buildPath + "assets/js",
        src: [
            bowerComponent + "jquery/dist/jquery.js",
            bowerComponent + "angular/angular.js",
            bowerComponent + "angular-aria/angular-aria.min.js",
            bowerComponent + "angular-resource/angular-resource.js",
            bowerComponent + "angular-route/angular-route.js",
            bowerComponent + "angular-cookies/angular-cookies.min.js",
            bowerComponent + "angular-local-storage/dist/angular-local-storage.js",
            bowerComponent + "ng-lodash/build/ng-lodash.min.js",
            bowerComponent + "angular-messages/angular-messages.min.js",
            bowerComponent + "ng-google-signin/dist/ng-google-signin.min.js",
            bowerComponent + "moment/moment.js",
            bowerComponent + "moment-timezone/builds/moment-timezone-with-data.js",
            bowerComponent + "angular-moment/angular-moment.min.js",
            bowerComponent + "angular-lzw/angular-lzw.js",
            bowerComponent + "angular-strap/dist/angular-strap.js",
            bowerComponent + "angular-strap/dist/angular-strap.tpl.js",
            bowerComponent + "bower-ui-grid/ui-grid.min.js",
            bowerComponent + "angular-sanitize/angular-sanitize.min.js",
            bowerComponent + "angular-touch/angular-touch.min.js",
            bowerComponent + "bootstrap/js/modal.js",
            bowerComponent + "plotly.js/dist/plotly.min.js",
            bowerComponent + "angular-plotly/src/angular-plotly.js",
            bowerComponent + "angular-busy/dist/angular-busy.min.js",
            bowerComponent + "angular-base64/angular-base64.min.js",
            bowerComponent + "angular-poller/angular-poller.min.js",
            bowerComponent + "angular-file-saver/dist/angular-file-saver.bundle.js",
            bowerComponent + "angular-ui-notification/dist/angular-ui-notification.min.js",
            bowerComponent + "selectize/dist/js/standalone/selectize.js",
            bowerComponent + "angular-selectize2/dist/angular-selectize.js",
            appResourcePath + "js/third-party/bootstrap/js/bootstrap.min.js",
            appResourcePath + "js/third-party/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js",
            appResourcePath + "js/third-party/jquery-slimscroll/jquery.slimscroll.min.js",
            appResourcePath + "js/third-party/jquery.blockui.min.js",
            appResourcePath + "js/third-party/js.cookie.min.js",
            appResourcePath + "js/third-party/bootstrap-switch/js/bootstrap-switch.min.js",
            appResourcePath + "js/third-party/angularjs/plugins/angular-ui-router.min.js",
            appResourcePath + "js/third-party/angularjs/plugins/ocLazyLoad.min.js",
            appResourcePath + "js/third-party/angularjs/plugins/ui-bootstrap-tpls.min.js"
        ]
    },

    scripts: {
        dist: buildPath + "assets/js",
        src: [
            appResourcePath + "js/*.js",
            appResourcePath + "js/**/*.js",
            '!' + appResourcePath + 'js/third-party',
            '!' + appResourcePath + 'js/third-party/**',
        ]
    },
    build: {
        dist: "",
        src: [],
        includeAssets: []
    },
    tasks: [],
    watchTasks: [],
    cleanFiles: []
};

module.exports = config;
