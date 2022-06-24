import { EncryptionMethod } from "./EncryptionMethod"

export type EncryptionSetting = {
  password: string
  method: EncryptionMethod | 'none'
}
