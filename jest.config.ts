import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: {
    name: 'STEALTH',
    color: 'cyan',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@stealth/(.*)$': '<rootDir>/$1',
    '^uuid$': require.resolve('uuid')
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup/jest.setup.ts'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/', '/test/', '/config/', '<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/', '/public/', '/types/','/test/', '/config/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  maxWorkers: '25%',
};
