import { registerEnumType } from "@nestjs/graphql";

export enum EnumTaskStatus {
  New = "New",
  Pending = "Pending",
  Ongoing = "Ongoing",
  Done = "Done",
}

registerEnumType(EnumTaskStatus, {
  name: "EnumTaskStatus",
});
