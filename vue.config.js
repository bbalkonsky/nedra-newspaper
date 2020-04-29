module.exports = {
    pwa: {
        name: 'newspaper',
        themeColor: '#007bc1',
        msTileColor: '#006198',
        manifestOptions: {
            name: 'Корпоративная газета «Время открытий»',
            short_name: 'Газета',
            background_color: '#007bc1',
            display: 'standalone'
        },
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
            runtimeCaching: [{
                urlPattern: new RegExp('^https://newspaper-dev.gp-ggr.ru/api/'),
                handler: 'networkFirst',
                options: {
                    networkTimeoutSeconds: 10,
                    cacheName: 'api-cache',
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            }]
        }
    }
};
