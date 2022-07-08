import { GlobalArchiveOption } from 'src/Types/Jobs/GlobalArchiveOption'

import EditTasks from './EditTasks/EditTasks'
import EditGlobals from './EditGlobals/EditGlobals'

import './EditJob.sass'
import { JobTask } from 'src/Types/Jobs/JobTask'

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

  const testJobs: JobTask[] = [
    {
      name: 'Test 1 Has A Long Name To Test With',
      guid: '12345',
      options: {
        format: testGlobals.defaultFormat,
        encryption: testGlobals.defaultEncryption,
        source: '',
        destination: testGlobals.defaultDestination,
        compression: testGlobals.defaultCompression,
        fileName: '',
        exclusions: [],
      }
    }
  ]

  return (
    <div
      id="edit-job"
    >
      <EditGlobals
        globals={testGlobals}
      />
      <EditTasks
        tasks={testJobs}
      />
    </div>
  )
}

export default EditJob
