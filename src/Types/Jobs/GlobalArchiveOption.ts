import { ArchiveFormat } from "./ArchiveFormat"
import { CompressionSetting } from "./CompressionSetting"
import { EncryptionSetting } from "./EncryptionSetting"

export type GlobalArchiveOption = {
  defaultFormat: ArchiveFormat
  defaultEncryption: EncryptionSetting
  defaultCompression: CompressionSetting
  defaultDestination: string
}
