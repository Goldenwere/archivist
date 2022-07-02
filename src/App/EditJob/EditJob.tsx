import { GlobalArchiveOption } from 'src/Types/Jobs/GlobalArchiveOption'

import EditItems from './EditItems/EditItems'
import EditGlobals from './EditGlobals/EditGlobals'

import './EditJob.sass'

function EditJob() {
  return (
    <div
      id="edit-job"
    >
      <EditGlobals
      />
      <EditItems
      />
    </div>
  )
}

export default EditJob
