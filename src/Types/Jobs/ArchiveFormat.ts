export const ArchiveFormatOptions = [
  '7z',
  'tar',
  'wim',
  'zip',
  'bzip2',
  'gzip',
  'xz',
] as const

export type ArchiveFormat = typeof ArchiveFormatOptions[number]
