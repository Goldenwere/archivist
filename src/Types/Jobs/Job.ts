import { GlobalArchiveOption } from "./GlobalArchiveOption"
import { JobTask } from "./JobTask"

export type Job = {
  name: string
  guid: string
  globals: GlobalArchiveOption
  tasks: JobTask[]
}