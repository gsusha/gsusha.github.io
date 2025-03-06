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

/**
 * Генерирует случайный идентификатор, состоящий из букв и цифр.
 * Если указан параметр `name`, он будет добавлен как префикс к ID.
 *
 * @param [name] - Необязательный префикс, который будет добавлен к сгенерированному ID.
 * @returns Случайная строка ID. Если указан `name`, ID будет в формате `name-случайныйID`.
 *
 * @example
 * generateRandomId(); // "j83f9a1bc"
 * generateRandomId("user"); // "input-j83f9a1bc"
 */
export function generateRandomId(name?: string) {
    const id = Math.random().toString(36).slice(2, 11);
    return name ? `${name}-${id}` : id;
}