/**
 * Created by yeh on 15-2-9.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.config = ani.pj.config || {};

ani.pj.config.route = {
    '/': [
        'src/view/home.html',
        'HomeCtrl'
    ],
    '/projects': [
        'src/view/projects.html',
        'ProjectsCtrl'
    ],
    '/error': [
        'src/view/error.html',
        'ErrorCtrl'
    ]
}