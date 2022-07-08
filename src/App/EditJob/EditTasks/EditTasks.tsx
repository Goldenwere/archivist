import TaskElement from './TaskElement/TaskElement'

import { JobTask } from 'src/Types/Jobs/JobTask'

import './EditTasks.sass'

type EditItemsProps = {
  tasks: JobTask[],
}

function EditItems(props: EditItemsProps) {
  const {
    tasks,
  } = props

  return (
    <div
      id="edit-tasks"
      className="panel"
    >
      <h2>Edit Tasks</h2>
      {
        tasks.map((task) => {
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

export default EditItems
