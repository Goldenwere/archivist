import { useState } from 'react'

import EditJob from './App/EditJob/EditJob'

import { GlobalArchiveOption } from 'src/Types/Jobs/GlobalArchiveOption'
import { JobTask } from 'src/Types/Jobs/JobTask'
import { CompressionLevel } from './Types/Jobs/CompressionLevel'
import { CompressionMethod } from './Types/Jobs/CompressionMethod'
import { EncryptionMethod } from './Types/Jobs/EncryptionMethod'
import { validateGlobals } from 'src/Utilities/Jobs/Validation'

import './App.sass'

function App() {
  let [globals, setGlobals] = useState({
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
  })

  const tasks: JobTask[] = [
    {
      name: 'Test 1 Has A Long Name To Test With',
      guid: '12345',
      options: {
        format: (globals as GlobalArchiveOption).defaultFormat,
        encryption: (globals as GlobalArchiveOption).defaultEncryption,
        source: '',
        destination: (globals as GlobalArchiveOption).defaultDestination,
        compression: (globals as GlobalArchiveOption).defaultCompression,
        fileName: '',
        exclusions: [],
      }
    }
  ]

  const onModifyGlobalDestination = (val: string) => {
    const temp = { ...globals }
    temp.defaultDestination = val
    globals = validateGlobals(temp as GlobalArchiveOption)
  }

  const onModifyGlobalCompressionLevel = (val: string) => {
    const temp = { ...globals }
    temp.defaultCompression.level = val as unknown as CompressionLevel
    setGlobals(validateGlobals(temp as GlobalArchiveOption))
  }

  const onModifyGlobalCompressionMethod = (val: string) => {
    const temp = { ...globals }
    temp.defaultCompression.method = val as unknown as CompressionMethod
    setGlobals(validateGlobals(temp as GlobalArchiveOption))
  }

  const onModifyGlobalPassword = (val: string) => {
    const temp = { ...globals }
    temp.defaultEncryption.password = val
    setGlobals(validateGlobals(temp as GlobalArchiveOption))
  }

  const onModifyGlobalEncryptionMethod = (val: string) => {
    const temp = { ...globals }
    temp.defaultEncryption.method = val as unknown as EncryptionMethod
    setGlobals(validateGlobals(temp as GlobalArchiveOption))
  }

  return (
    <div
      id="app"
    >
      <EditJob
        tasks={tasks}
        globals={globals as GlobalArchiveOption}
        onModifyDestination={(val: string) => onModifyGlobalDestination(val)}
        onModifyCompressionLevel={(val: string) => onModifyGlobalCompressionLevel(val)}
        onModifyCompressionMethod={(val: string) => onModifyGlobalCompressionMethod(val)}
        onModifyPassword={(val: string) => onModifyGlobalPassword(val)}
        onModifyEncryptionMethod={(val: string) => onModifyGlobalEncryptionMethod(val)}
      />
    </div>
  )
}

export default App
