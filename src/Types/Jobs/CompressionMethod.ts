export const CompressionMethodOptions = [
  'lzma',
  'lzma2',
  'ppmd',
  'bzip2',
  'deflate',
  'deflate64',
] as const

export type CompressionMethod = typeof CompressionMethodOptions[number]
