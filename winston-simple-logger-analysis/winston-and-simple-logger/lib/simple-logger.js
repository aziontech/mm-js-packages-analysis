import createSimpleLogger from '@unly/simple-logger';

export const simpleLogger = (fileLabel = 'my lib') => {
  return createSimpleLogger({
    prefix: fileLabel,
    shouldPrint: () => true, // Only print in non-production env (default behavior)
  });
};
