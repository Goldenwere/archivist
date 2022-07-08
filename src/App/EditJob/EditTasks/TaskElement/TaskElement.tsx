import Button from 'src/Shared/Input/Button/Button'

import { JobTask } from 'src/Types/Jobs/JobTask'

import './TaskElement.sass'

type TaskElementProps = {
  task: JobTask,
}

function TaskElement(props: TaskElementProps) {
  const {
    task,
  } = props

  return (
    <div
      className="task-element"
    >
      <p
        title={ task.name }
      >
        { task.name }
      </p>
      <Button
        label="Edit"
      />
      <Button
        label="Remove"
      />
    </div>
  )
}

export default TaskElement
