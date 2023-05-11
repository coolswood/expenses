import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    plugins: [
        sass({
            injectGlobalPaths: ['./src/styles/global.scss'],
        }),
    ],
    globalStyle: './src/styles/global.scss',
    namespace: 'expenses',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
};
