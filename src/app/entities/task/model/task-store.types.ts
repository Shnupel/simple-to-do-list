export type TaskType = {
  id: number;
  title: string;
  description?: string;
  status: "notCompleted" | "inProcess" | "completed"
}
