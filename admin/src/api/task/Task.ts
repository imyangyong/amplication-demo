import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type Task = {
  assignedTo?: UserWhereUniqueInput | null;
  createdAt: Date;
  estimationDays: number | null;
  id: string;
  project?: ProjectWhereUniqueInput | null;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string;
  updatedAt: Date;
};
