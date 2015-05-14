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
    '/docs': [
        'src/view/docs.html',
        'DocsCtrl'
    ],
    '/contact': [
        'src/view/contact.html',
        'ContactCtrl'
    ],
    '/error': [
        'src/view/error.html',
        'ErrorCtrl'
    ],
    '/team': [
        'src/view/team.html',
        'TeamCtrl'
    ]

}