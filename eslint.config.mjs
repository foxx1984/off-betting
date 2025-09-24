import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*']
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
            // Contrainte de scope (dimension 1)
            { sourceTag: 'scope:app-betting', onlyDependOnLibsWithTags: ['scope:app-betting', 'scope:shared'] },

            // Contraintes de type (dimension 2)
            { sourceTag: 'type:app', onlyDependOnLibsWithTags: ['type:feature', 'type:ui', 'type:domain-logic', 'type:util', 'type:data-access'] },
            { sourceTag: 'type:feature', onlyDependOnLibsWithTags: ['type:ui', 'type:domain-logic', 'type:util', 'type:data-access'] },
            { sourceTag: 'type:ui', onlyDependOnLibsWithTags: ['type:domain-logic', 'type:util'] },
            { sourceTag: 'type:data-access', onlyDependOnLibsWithTags: ['type:domain-logic', 'type:util'] },
            { sourceTag: 'type:domain-logic', onlyDependOnLibsWithTags: ['type:util'] },

            // Contrainte de scope shared
            { sourceTag: 'scope:shared', onlyDependOnLibsWithTags: ['scope:shared'] },
          ],
        }
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/typedef':
        ['error',
          {
            variableDeclaration: true,
            parameter: false,
            propertyDeclaration: true,
            memberVariableDeclaration: true
          }]
    }
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
      '**/*.mjs'
    ],
    // Override or add rules here
    rules: {}
  }
];
