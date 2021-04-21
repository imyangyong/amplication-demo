import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  createdAt?: Date;
  estimationDays?: number;
  id?: string;
  project?: ProjectWhereUniqueInput;
  startDate?: Date;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: string;
  updatedAt?: Date;
};
