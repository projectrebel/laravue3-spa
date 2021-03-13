import Dashboard from './components/Dashboard.vue';
import AnotherComponent from './components/AnotherComponent.vue';

export default {
    routes: [
        {
            path: '/app/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                title: 'Dashboard'
            },
        },
        {
            path: '/app/another-component',
            component: AnotherComponent,
            name: 'another-component',
            meta: {
                title: 'Another Component'
            },
        },
    ],
};
