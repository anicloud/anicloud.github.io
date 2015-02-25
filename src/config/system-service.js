/**
 * Created by yeh on 15-2-9.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.config = ani.pj.config || {};
ani.pj.config.service = ani.pj.config.service || {};

ani.pj.config.service = {
    $translateProvider: function ($translateProvider) {
        for (var oneTranslation in ani.pj.config.language.translations) {
            $translateProvider.translations(
                oneTranslation,
                ani.pj.config.language.translations[oneTranslation]
            );
        }
        $translateProvider
            .determinePreferredLanguage()
            .preferredLanguage('en');
    },
    $routeProvider: function ($routeProvider) {
        for (var oneRoute in ani.pj.config.route) {
            $routeProvider.when(
                oneRoute,
                {
                    templateUrl: ani.pj.config.route[oneRoute][0],
                    controller: ani.pj.config.route[oneRoute][1]
                }
            );
        }
        $routeProvider.otherwise({redirectTo: '/error'});
    }
}