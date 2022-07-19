import { GlobalArchiveOption } from 'src/Types/Jobs/GlobalArchiveOption'
import { CompressionMethodOptions } from 'src/Types/Jobs/CompressionMethod'
import { CompressionLevelOptions } from 'src/Types/Jobs/CompressionLevel'
import { EncryptionMethodOptions } from 'src/Types/Jobs/EncryptionMethod'
import DropdownSelect from 'src/Shared/Input/DropdownSelect/DropdownSelect'
import TextEntry from 'src/Shared/Input/TextEntry/TextEntry'

import './EditGlobals.sass'

export type EditGlobalsProps = {
  globals: GlobalArchiveOption,
  onModifyDestination: (val: string) => void,
  onModifyCompressionLevel: (val: string) => void,
  onModifyCompressionMethod: (val: string) => void,
  onModifyPassword: (val: string) => void,
  onModifyEncryptionMethod: (val: string) => void,
}

function EditGlobals(props: EditGlobalsProps) {
  return (
    <div
      id="edit-globals"
      className="panel"
    >
      <h2>Edit Globals</h2>
      <TextEntry
        label={'Default Destination'}
        value={props.globals.defaultDestination}
        onChange={(val: string) => props.onModifyDestination(val)}
      />
      <DropdownSelect
        options={CompressionLevelOptions}
        label={'Default Compression Level'}
        value={props.globals.defaultCompression.level}
        onChange={(val: string) => props.onModifyCompressionLevel(val)}
      />
      <DropdownSelect
        options={CompressionMethodOptions}
        label={'Default Compression Method'}
        value={props.globals.defaultCompression.level === 0 ? 'copy' : props.globals.defaultCompression.method}
        onChange={(val: string) => props.onModifyCompressionMethod(val)}
        disabled={props.globals.defaultCompression.level === 0 ? true : false}
      />
      <TextEntry
        label={'Default Password'}
        value={props.globals.defaultEncryption.password}
        onChange={(val: string) => props.onModifyPassword(val)}
      />
      <DropdownSelect
        options={EncryptionMethodOptions}
        label={'Default Encryption Method'}
        value={props.globals.defaultEncryption.password === '' ? 'none' : props.globals.defaultEncryption.method}
        onChange={(val: string) => props.onModifyEncryptionMethod(val)}
        disabled={props.globals.defaultEncryption.password === '' ? true : false}
      />
    </div>
  )
}

export default EditGlobals
