import { CompressionLevel } from "src/Types/Jobs/CompressionLevel"
import { CompressionMethod } from "src/Types/Jobs/CompressionMethod"
import { EncryptionMethod } from "src/Types/Jobs/EncryptionMethod"
import { GlobalArchiveOption } from "src/Types/Jobs/GlobalArchiveOption"
import { TaskArchiveOption } from "src/Types/Jobs/TaskArchiveOption"

export type ValidOptions = {
  defaultCompressionLevel: CompressionLevel
  defaultCompressionMethod: CompressionMethod | 'copy'
  defaultEncryptionMethod: EncryptionMethod | 'none'
  compressionMethod: CompressionMethod[]
  compressionLevel: number[]
  encryptionMethod: EncryptionMethod[]
  requiresTarMultifile: boolean
}

export const Valid7zSettings: ValidOptions = {
  defaultCompressionLevel: 5,
  defaultCompressionMethod: 'lzma',
  defaultEncryptionMethod: 'aes-256',
  compressionLevel: [
    0,
    1,
    3,
    5,
    7,
    9,
  ],
  compressionMethod: [
    'lzma',
    'lzma2',
    'ppmd',
    'bzip2',
  ],
  encryptionMethod: [
    'aes-256',
  ],
  requiresTarMultifile: false,
}

export const ValidBzip2Settings: ValidOptions = {
  defaultCompressionLevel: 5,
  defaultCompressionMethod: 'bzip2',
  defaultEncryptionMethod: 'none',
  compressionLevel: [
    0,
    1,
    3,
    5,
    7,
    9,
  ],
  compressionMethod: [
    'bzip2',
  ],
  encryptionMethod: [
  ],
  requiresTarMultifile: true,
}

export const ValidGzipSettings: ValidOptions = {
  defaultCompressionLevel: 5,
  defaultCompressionMethod: 'deflate',
  defaultEncryptionMethod: 'none',
  compressionLevel: [
    0,
    1,
    5,
    7,
    9,
  ],
  compressionMethod: [
    'deflate',
  ],
  encryptionMethod: [
  ],
  requiresTarMultifile: true,
}

export const ValidTarSettings: ValidOptions = {
  defaultCompressionLevel: 0,
  defaultCompressionMethod: 'copy',
  defaultEncryptionMethod: 'none',
  compressionLevel: [
    0,
  ],
  compressionMethod: [
  ],
  encryptionMethod: [
  ],
  requiresTarMultifile: false,
}

export const ValidWimSettings: ValidOptions = {
  defaultCompressionLevel: 0,
  defaultCompressionMethod: 'copy',
  defaultEncryptionMethod: 'none',
  compressionLevel: [
    0,
  ],
  compressionMethod: [
  ],
  encryptionMethod: [
  ],
  requiresTarMultifile: false,
}

export const ValidXzSettings: ValidOptions = {
  defaultCompressionLevel: 5,
  defaultCompressionMethod: 'lzma2',
  defaultEncryptionMethod: 'none',
  compressionLevel: [
    0,
    1,
    3,
    5,
    7,
    9,
  ],
  compressionMethod: [
    'lzma2',
  ],
  encryptionMethod: [
  ],
  requiresTarMultifile: true,
}

export const ValidZipSettings: ValidOptions = {
  defaultCompressionLevel: 5,
  defaultCompressionMethod: 'deflate',
  defaultEncryptionMethod: 'zipcrypto',
  compressionLevel: [
    0,
    1,
    3,
    5,
    7,
    9,
  ],
  compressionMethod: [
    'deflate',
    'deflate64',
    'bzip2',
    'lzma',
    'ppmd',
  ],
  encryptionMethod: [
    'aes-256',
    'zipcrypto',
  ],
  requiresTarMultifile: false,
}

export const ValidSettings = {
  '7z': Valid7zSettings,
  'bzip2': ValidBzip2Settings,
  'gzip': ValidGzipSettings,
  'tar': ValidTarSettings,
  'wim': ValidWimSettings,
  'xz': ValidXzSettings,
  'zip': ValidZipSettings,
}

/**
 * Validates provided options to ensure settings are not incompatible.
 * If incompatibilities are found, they are set to defaults in the returned copy.
 * @param options The options to validate
 * @returns A validated copy of the options provided
 */
export const validateOptions = (options: TaskArchiveOption): TaskArchiveOption => {
  let validated: TaskArchiveOption = {
    ... options
  }

  if (validated.compression.method !== 'copy') {
    if (!ValidSettings[options.format].compressionLevel
      .includes(validated.compression.level)) {
      validated.compression.level = ValidSettings[options.format].defaultCompressionLevel
    }

    if (!ValidSettings[options.format].compressionMethod
      .includes(validated.compression.method)) {
      validated.compression.method = ValidSettings[options.format].defaultCompressionMethod
    }
  } else {
    validated.compression.level = 0
  }

  if (validated.encryption.method !== 'none') {
    if (!ValidSettings[options.format].encryptionMethod
      .includes(validated.encryption.method)) {
      validated.encryption.method = ValidSettings[options.format].defaultEncryptionMethod
    }
  } else {
    validated.encryption.password = ''
  }

  return validated
}

/**
 * Validates provided options to ensure settings are not incompatible.
 * If incompatibilities are found, they are set to defaults in the returned copy.
 * @param options The options to validate
 * @returns A validated copy of the options provided
 */
 export const validateGlobals = (options: GlobalArchiveOption): GlobalArchiveOption => {
  let validated: GlobalArchiveOption = {
    ... options
  }

  if (validated.defaultCompression.method !== 'copy') {
    if (!ValidSettings[options.defaultFormat].compressionLevel
      .includes(validated.defaultCompression.level)) {
      validated.defaultCompression.level = ValidSettings[options.defaultFormat].defaultCompressionLevel
    }

    if (!ValidSettings[options.defaultFormat].compressionMethod
      .includes(validated.defaultCompression.method)) {
      validated.defaultCompression.method = ValidSettings[options.defaultFormat].defaultCompressionMethod
    }
  } else {
    validated.defaultCompression.level = 0
  }

  if (validated.defaultEncryption.method !== 'none') {
    if (!ValidSettings[options.defaultFormat].encryptionMethod
      .includes(validated.defaultEncryption.method)) {
      validated.defaultEncryption.method = ValidSettings[options.defaultFormat].defaultEncryptionMethod
    }
  } else {
    validated.defaultEncryption.password = ''
  }

  return validated
}
