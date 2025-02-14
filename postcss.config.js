module.exports = {
    plugins: [
        require('postcss-preset-env')({
            stage: 1, // Puedes ajustar a 0 o 2 según las características que necesites
            features: {
                'media-query-ranges': true,
                'custom-properties': true, // Asegúrate de habilitar propiedades personalizadas si las usas
            },
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
