import { CompressionLevel } from "./CompressionLevel"
import { CompressionMethod } from "./CompressionMethod"

export type CompressionSetting = {
  level: CompressionLevel
  method: CompressionMethod | 'copy'
}
