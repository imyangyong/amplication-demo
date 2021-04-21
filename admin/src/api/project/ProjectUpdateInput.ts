import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
};
