import { GlobalArchiveOption } from 'src/Types/Jobs/GlobalArchiveOption'

import EditItems from './EditItems/EditItems'
import EditGlobals from './EditGlobals/EditGlobals'

import './EditJob.sass'

function EditJob() {
  const testGlobals: GlobalArchiveOption = {
    defaultFormat: '7z',
    defaultCompression: {
      level: 0,
      method: 'copy',
    },
    defaultDestination: '/',
    defaultEncryption: {
      password: '',
      method: 'none',
    }
  }

  return (
    <div
      id="edit-job"
    >
      <EditGlobals
        globals={testGlobals}
      />
      <EditItems
      />
    </div>
  )
}

export default EditJob
