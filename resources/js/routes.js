import Page1 from './components/Page1.vue';
import Page2 from './components/Page2.vue';

export default {
    routes: [
        {
            path: '/dashboard/page-1',
            component: Page1,
            name: 'page-1',
            meta: {
                title: 'Page 1'
            },
        },
        {
            path: '/dashboard/page-2',
            component: Page2,
            name: 'page-2',
            meta: {
                title: 'Page 2'
            },
        },
    ],
};
