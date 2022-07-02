export const EncryptionMethodOptions = [
  'aes-256',
  'zipcrypto',
] as const

export type EncryptionMethod = typeof EncryptionMethodOptions[number]
