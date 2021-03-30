import AnotherComponent from './components/AnotherComponent.vue';
import Dashboard from './components/Dashboard.vue';
import UserProfile from './user/components/UserProfile.vue';

export default {
    routes: [
        {
            path: '/app/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                title: 'Dashboard',
                primary: true
            },
        },
        {
            path: '/app/another-component',
            component: AnotherComponent,
            name: 'another-component',
            meta: {
                title: 'Another Component',
                primary: true
            },
        },
        {
            path: '/app/user-profile',
            component: UserProfile,
            name: 'user-profile',
            meta: {
                title: 'User Profile',
                primary: false
            },
        },
    ],
};
