import TaskElement from './TaskElement/TaskElement'

import { JobTask } from 'src/Types/Jobs/JobTask'

import './EditTasks.sass'

export type EditTasksProps = {
  tasks: JobTask[],
}

function EditTasks(props: EditTasksProps) {
  return (
    <div
      id="edit-tasks"
      className="panel"
    >
      <h2>Edit Tasks</h2>
      {
        props.tasks.map((task) => {
          return (
            <TaskElement
              task={task}
            />
          )
        })
      }
    </div>
  )
}

export default EditTasks
