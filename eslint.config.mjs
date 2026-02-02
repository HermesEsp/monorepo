import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc', '**/vitest.config.*.timestamp*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      // --- Estilo e Limpeza ---
      'semi': ['error', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',
      'quotes': ['error', 'single'],

      // --- Qualidade de Código ---
      '@typescript-eslint/no-unused-vars': [
        'error',
        { 
          argsIgnorePattern: '^_', 
          varsIgnorePattern: '^_',
          // Esta opção abaixo é crucial para interfaces:
          ignoreRestSiblings: true 
        }
      ],
      'eqeqeq': ['error', 'always'], // Sempre use ===
      'no-debugger': 'error',        // Impede que um debugger vá para produção
      
      // --- TypeScript Específico ---
      '@typescript-eslint/no-explicit-any': 'warn', // obriga a pensar antes de usar 'any'
      '@typescript-eslint/consistent-type-imports': 'error', // Organiza imports de tipos
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
