import { ArchiveFormat } from "./ArchiveFormat"
import { CompressionSetting } from "./CompressionSetting"
import { EncryptionSetting } from "./EncryptionSetting"
import { ItemExclusion } from "./ItemExclusion"

export type TaskArchiveOption = {
  format: ArchiveFormat
  encryption: EncryptionSetting
  compression: CompressionSetting
  exclusions: ItemExclusion[]
  source: string
  destination: string
  fileName: string
}
