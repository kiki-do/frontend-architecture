export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0, 'never'], // Отключаем проверку пустого subject
    'type-empty': [0, 'never'], // Отключаем проверку пустого типа
  },
};
