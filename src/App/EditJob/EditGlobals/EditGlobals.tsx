import { GlobalArchiveOption } from 'src/Types/Jobs/GlobalArchiveOption'
import { CompressionMethodOptions } from 'src/Types/Jobs/CompressionMethod'
import { CompressionLevelOptions } from 'src/Types/Jobs/CompressionLevel'
import { EncryptionMethodOptions } from 'src/Types/Jobs/EncryptionMethod'
import DropdownSelect from 'src/Shared/Input/DropdownSelect/DropdownSelect'
import TextEntry from 'src/Shared/Input/TextEntry/TextEntry'

import './EditGlobals.sass'

type EditGlobalsProps = {
  globals: GlobalArchiveOption,
}

function EditGlobals(props: EditGlobalsProps) {
  const {
    globals,
  } = props

  return (
    <div
      id="edit-globals"
      className="panel"
    >
      <h2>Edit Globals</h2>
      <TextEntry
        label={'Default Destination'}
        value={globals.defaultDestination}
        onChange={(val: string) => console.log(val)}
      />
      <DropdownSelect
        options={CompressionLevelOptions}
        label={'Default Compression Level'}
        value={globals.defaultCompression.level}
        onChange={(val: string) => console.log(val)}
      />
      <DropdownSelect
        options={CompressionMethodOptions}
        label={'Default Compression Method'}
        value={globals.defaultCompression.level === 0 ? 'copy' : globals.defaultCompression.method}
        onChange={(val: string) => console.log(val)}
        disabled={globals.defaultCompression.level === 0 ? true : false}
      />
      <TextEntry
        label={'Default Password'}
        value={globals.defaultEncryption.password}
        onChange={(val: string) => console.log(val)}
      />
      <DropdownSelect
        options={EncryptionMethodOptions}
        label={'Default Encryption Method'}
        value={globals.defaultEncryption.password === '' ? 'none' : globals.defaultEncryption.method}
        onChange={(val: string) => console.log(val)}
        disabled={globals.defaultEncryption.password === '' ? true : false}
      />
    </div>
  )
}

export default EditGlobals
