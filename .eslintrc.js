module.exports = {
  extends: ['soybeanjs/vue'],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off' // use tsc to check the ts code of the vue
      }
    }
  ],
  settings: {
    'import/core-modules': ['uno.css', '~icons/*', 'virtual:svg-icons-register']
  },
  rules: {
    'vue/block-order': ['warn', { order: ['script', 'template', 'style'] }],
    'vue/component-api-style': ['warn', ['script-setup', 'composition']],
    'vue/define-macros-order': [
      'warn',
      {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots']
      }
    ],
    'vue/valid-define-options': 'warn',
    'no-return-await': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@tarojs/taro',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'pinia',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@nutui/nutui-taro',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/constants',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/config',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/settings',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/enum',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/plugins',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/pages',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/views',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/components',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/package',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/service',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/store',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/context',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/composables',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/hooks',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/utils',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/assets',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['vue', 'vue-router', 'pinia', '@nutui/nutui-taro']
      }
    ]
  }
};
