import EditTasks, {
  EditTasksProps,
} from './EditTasks/EditTasks'
import EditGlobals, {
  EditGlobalsProps,
} from './EditGlobals/EditGlobals'

import './EditJob.sass'

export type EditJobProps = EditGlobalsProps & EditTasksProps

function EditJob(props: EditJobProps) {
  return (
    <div
      id="edit-job"
    >
      <EditGlobals
        globals={props.globals}
        onModifyCompressionLevel={props.onModifyCompressionLevel}
        onModifyCompressionMethod={props.onModifyCompressionMethod}
        onModifyDestination={props.onModifyDestination}
        onModifyEncryptionMethod={props.onModifyEncryptionMethod}
        onModifyPassword={props.onModifyPassword}
      />
      <EditTasks
        tasks={props.tasks}
      />
    </div>
  )
}

export default EditJob
