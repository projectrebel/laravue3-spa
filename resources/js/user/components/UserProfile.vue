<template>
    <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
            <div>
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="lg:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-600">
                                Information that is displayed on the website.<br />
                                <span class="text-xs italic text-gray-500">(Don't worry, only you can see this.)</span>
                            </p>
                        </div>
                    </div>
                    <div class="mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6">
                        <div>
                            <label class="block text-sm leading-5 font-medium text-gray-700">
                                Avatar
                            </label>
                            <div class="mt-2 flex items-center">
                                <avatar-uploader :url="updateAvatarUrl" @success="reload"></avatar-uploader>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="w-full">
                                <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
                                <div class="flex flex-col items-center">
                                    <input
                                        type="text"
                                        class="mt-1 w-full rebel-input"
                                        v-model="localUser.name"
                                    />
                                    <div class="mt-5 flex justify-end items-center w-full">
                                        <transition name="fade">
                                            <div v-if="state.nameStatus" class="mr-4" v-html="state.nameStatus"></div>
                                        </transition>
                                        <span class="w-full md:w-1/3 inline-flex rounded-md shadow-sm">
                                            <button
                                                @click="updateName"
                                                type="button"
                                                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
                                            >
                                                Update
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden sm:block">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>

            <div class="mt-10 sm:mt-0">
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="lg:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Account</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-600">
                                Information related to the access of your account.
                            </p>
                        </div>
                    </div>

                    <div class="mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6">
                        <div class="w-full">
                            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                            <div class="flex flex-col items-center">
                                <input
                                    type="email"
                                    class="mt-1 w-full rebel-input"
                                    v-model="localUser.email"
                                />
                                <div class="mt-5 flex justify-end items-center w-full">
                                    <transition name="fade">
                                        <div v-if="state.emailStatus" class="mr-4" v-html="state.emailStatus"></div>
                                    </transition>
                                    <span class="w-full md:w-1/3 inline-flex rounded-md shadow-sm">
                                        <button
                                            @click="updateEmail"
                                            type="button"
                                            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
                                        >
                                            Update
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 pt-6 border-t border-gray-200">
                            <div class="w-full">
                                <label for="name" class="block text-sm flex items-center font-medium leading-5 text-gray-700">
                                    <span class="mr-2">Update password</span>
                                    <rebel-tooltip>
                                        <streamline-icon class="h-4 w-4 text-gray-500" icon="informationCircle"></streamline-icon>
                                        <template v-slot:tip>
                                            Passwords must be at least 8 characters, contain a digit, lowercase and uppercase letters
                                        </template>
                                    </rebel-tooltip>
                                </label>
                                <div class="flex flex-col items-center">
                                    <input
                                        class="mt-1 w-full rebel-input"
                                        placeholder="Current Password"
                                        type="password"
                                        v-model="currentPassword"
                                    />
                                    <input
                                        class="mt-1 w-full rebel-input"
                                        placeholder="New Password"
                                        type="password"
                                        v-model="newPassword"
                                    />
                                    <div class="mt-5 flex justify-end items-center w-full">
                                        <transition name="fade">
                                            <div v-if="state.passwordStatus" class="mr-4" v-html="state.passwordStatus"></div>
                                        </transition>
                                        <span class="w-full md:w-1/3 inline-flex rounded-md shadow-sm">
                                            <button
                                                @click="updatePassword"
                                                type="button"
                                                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
                                            >
                                                Update
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden sm:block">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>

            <div class="mt-10 sm:mt-0">
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="lg:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Subscription</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-600">
                                Manage your subscription and view invoices.
                                <img
                                    class="mt-1 h-6"
                                    :src="assetUrl + '/images/icons/powered_by_stripe.png'"
                                    alt="Powered by Stripe"
                                />
                            </p>
                        </div>
                    </div>

                    <div class="mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6">
                        <div v-if="isGrandfathered">
                            <div class="mt-5">
                                <div class="w-full">
                                    <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Plan</label>
                                    <p class="mt-1 text-sm leading-5 text-gray-600">
                                        If you would like be able to manage your subscription and payment methods or make changes to your
                                        subscription, email us at
                                        <a
                                            class="font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:underline quick-transition"
                                            href="mailto:support@vidhoarder.com"
                                            >support@vidhoarder.com</a
                                        >.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div v-if="onTrial" class="bg-yellow-50 border rounded-md border-yellow-400 p-4">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm leading-5 text-yellow-700">
                                            You are on a trial plan which will upgrade to a standard plan on {{ trialEnd }}.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div class="w-full">
                                    <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Plan</label>
                                    <div
                                        v-for="subscription in subscriptions"
                                        :key="subscription.stripe_id"
                                        class="mt-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between"
                                    >
                                        <div class="sm:flex sm:items-start">
                                            <img class="h-8 w-auto" :src="assetUrl + '/images/vh-symbol-64.png'" alt="Vid Hoarder" />
                                            <div class="mt-3 sm:mt-0 sm:ml-4">
                                                <div class="text-sm leading-5 font-medium text-gray-900">
                                                    {{ subscription.name }}
                                                    <span
                                                        class="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4"
                                                        :class="[
                                                            subscription.stripe_status == 'active'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-yellow-100 text-yellow-800',
                                                        ]"
                                                    >
                                                        {{ subscription.stripe_status.toUpperCase() }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div class="w-full">
                                    <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Payment method</label>

                                    <div class="mt-1 rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                                        <div class="sm:flex sm:items-start">
                                            <img class="h-8 w-auto" :src="creditCardIconUrl" alt="credit card" />
                                            <div class="mt-3 sm:mt-0 sm:ml-4">
                                                <div class="text-sm leading-5 font-medium text-gray-900">
                                                    Ending with {{ user.card_last_four }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 pt-6 border-t border-gray-200">
                                <div class="w-full">
                                    <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Update billing</label>
                                    <div class="flex items-center grid grid-cols-3 gap-4">
                                        <p
                                            class="mt-1 col-span-3 md:col-span2 py-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        >
                                            Access your Stripe billing portal to update subscriptions and payment methods and view invoices.
                                        </p>
                                        <span class="mt-1 col-span-3 md:col-span-1 md:col-start-3 inline-flex rounded-md shadow-sm">
                                            <a
                                                href="/billing"
                                                target="_blank"
                                                type="button"
                                                class="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
                                            >
                                                Access billing portal
                                                <img
                                                    class="ml-2 h-4 w-4"
                                                    :src="assetUrl + '/images/icons/external-link.png'"
                                                    alt="external link"
                                                />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hidden sm:block">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>

            <div class="mt-10 sm:mt-0">
                <div class="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div class="lg:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Session</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-600">
                                Manage the state of your session.
                            </p>
                        </div>
                    </div>
                    <div class="mt-5 lg:mt-0 lg:col-span-2 shadow rounded-md sm:overflow-hidden px-4 py-5 bg-white sm:p-6">
                        <div class="w-full">
                            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Log out</label>
                            <div class="flex items-center grid grid-cols-3 gap-4">
                                <p class="mt-1 col-span-3 md:col-span2 py-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    Log out of the application.
                                </p>
                                <span class="mt-1 col-span-3 md:col-span-1 md:col-start-3 inline-flex rounded-md shadow-sm">
                                    <button
                                        @click="logout"
                                        type="button"
                                        class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-gray-800 hover:bg-orange-500 text-gray-300 hover:text-white sm:text-sm sm:leading-5 font-medium focus:outline-none focus:border-orange-300 focus:ring-orange-500 transition duration-150 ease-in-out"
                                    >
                                        Log out
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-16 bg-gray-200 border-t border-gray-300">
            <div class="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 md:px-8 md:flex md:items-center md:justify-between">
                <div class="flex justify-center md:order-2">
                    <a href="/terms-of-service" target="_blank" class="text-gray-500 hover:text-gray-600 text-sm">
                        Terms of Service
                    </a>
                    <a href="/terms-of-use" target="_blank" class="ml-6 text-gray-500 hover:text-gray-600 text-sm">
                        Terms of Use
                    </a>
                    <a href="/privacy-policy" target="_blank" class="ml-6 text-gray-500 hover:text-gray-600 text-sm">
                        Privacy Policy
                    </a>
                </div>
                <div class="mt-4 md:mt-0 md:order-1">
                    <p class="text-center text-sm leading-6 text-gray-500">
                        &copy; 2021 Software 701, LLC. All rights reserved.
                        <router-link class="text-sm leading-6 text-gray-500 underline" :to="{ name: 'changelog' }" active-class="">
                            v1.5.0
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // Data
            localUser: {},
            newUserData: {},
            currentPassword: '',
            newPassword: '',

            state: {
                nameStatus: null,
                emailStatus: null,
                passwordStatus: null,
            },
        };
    },

    computed: {
        environment() {
            return this.$store.state.environment;
        },

        assetUrl() {
            return this.environment.ASSET_URL ?? '';
        },

        creditCardIconUrl() {
            return this.assetUrl + '/images/credit-cards/' + this.user.card_brand + '.png';
        },

        isGrandfathered() {
            return this.$store.state.isGrandfathered;
        },

        onTrial() {
            if (this.subscriptions.length == 0) {
                return false;
            }

            return this.subscriptions[0].stripe_status == 'trialing';
        },

        subscriptions() {
            return this.$store.state.subscriptions;
        },

        trialEnd() {
            if (this.subscriptions.length == 0) {
                return false;
            }

            return new Intl.DateTimeFormat('en-US').format(new Date(this.subscriptions[0].trial_ends_at));
        },

        updateAvatarUrl() {
            return '/api/v1/user/' + this.localUser.id + '/avatar';
        },

        user() {
            return this.$store.state.user;
        },
    },

    watch: {
        // Populates the user info when the page is refreshed or when something else commits to the state
        user() {
            this.localUser = { ...this.user };
        },
    },

    methods: {
        reload() {
            location.reload();
        },

        reset() {
            this.localUser = { ...this.user };
            this.currentPassword = '';
            this.newPassword = '';
        },

        updateEmail() {
            if (this.localUser.email != this.user.email) {
                this.updateUser({ email: this.localUser.email });
            }
        },

        updateName() {
            if (this.localUser.name != this.user.name) {
                this.updateUser({ name: this.localUser.name });
            }
        },

        updatePassword() {
            if (this.currentPassword) {
                this.updateUser({ currentPassword: this.currentPassword, newPassword: this.newPassword });
            }
        },

        updateUser(data) {
            axios
                .patch('/api/v1/user/' + this.localUser.id, data)
                .then(response => {
                    this.$store.commit('setUser', response.data);
                    this.flash('success', data);
                    this.reset();
                })
                .catch(error => {
                    mixpanel.track('Error', {
                        component: this.$options.name,
                        actor: `axios.patch('/api/v1/user/${this.localUser.id}')`,
                        data: this.newUserData,
                        error: error,
                    });

                    let message;
                    if (error.response.status == 422) {
                        message = this.getFirstValidationError(error);
                    } else {
                        message = 'Error ' + error.response.status;
                    }

                    this.flash('failure', data, message, 5000);
                });
        },

        logout() {
            let instance = axios.create();
            let token = document.head.querySelector('meta[name="csrf-token"]');

            instance.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            instance.defaults.baseURL = '/';

            axios
                .post('/logout', {
                    _token: token,
                })
                .then(response => {
                    window.location.href = '/';
                });
        },

        flash(status, data, message = 'Updated!', duration = 3000) {
            let element = null;
            if (status == 'success') {
                element = `<span class="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">${message}</span>`;
            } else {
                element = `<span class="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">${message}</span>`;
            }

            if (data.name) {
                this.state.nameStatus = element;
            } else if (data.email) {
                this.state.emailStatus = element;
            } else {
                this.state.passwordStatus = element;
            }

            setTimeout(() => {
                this.state.nameStatus = null;
                this.state.emailStatus = null;
                this.state.passwordStatus = null;
            }, duration);
        },

        getFirstValidationError(error) {
            return error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
        },
    },

    mounted() {
        // Populates the user info when user profile is loaded and there is already something in the store
        this.localUser = { ...this.user };
    },
};
</script>
