<template>
    <f7-page name="settings">
        <f7-navbar>
            <f7-nav-title>Настройки</f7-nav-title>
        </f7-navbar>

            <f7-list>
                <f7-list-item>
                    <span>Темная тема</span>
                    <f7-toggle :checked="isDarkTheme" @toggle:change="onThemeToggle($event)"></f7-toggle>
                </f7-list-item>
            </f7-list>
    </f7-page>
</template>

<script>
    export default {
        name: "SettingsPage",
        data() {
            return {
                isDarkTheme: false
            }
        },
        methods: {
            onThemeToggle(theme) {
                localStorage.isDarkTheme = theme;
            }
        }
    }
</script>

<style scoped>
    .block {
        margin: 10px 0;
    }
    .block-strong:before, .block-strong:after {
        height: 3px;
    }
</style>
