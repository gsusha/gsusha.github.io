export const ITEM_NAME = {
    ts: 'ts',
    js: 'js',
    vue: 'vue',
    nuxt: 'nuxt',
    pinia: 'pinia',
    scss: 'scss',
    react: 'react',
    redux: 'redux',
    custom: 'custom',
} as const;

export type ItemTypes = keyof typeof ITEM_NAME;