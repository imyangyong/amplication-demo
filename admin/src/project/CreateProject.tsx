import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { UserSelect } from "../user/UserSelect";
import { Project as TProject } from "../api/project/Project";
import { ProjectCreateInput } from "../api/project/ProjectCreateInput";

const INITIAL_VALUES = {} as ProjectCreateInput;

export const CreateProject = (): React.ReactElement => {
  useBreadcrumbs("/projects/new", "Create Project");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    TProject,
    AxiosError,
    ProjectCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/projects", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/projects"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: ProjectCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Project"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <TextField label="Description" name="description" textarea />
          </div>
          <div>
            <TextField type="datetime-local" label="Due Date" name="dueDate" />
          </div>
          <div>
            <TextField label="Name" name="name" />
          </div>
          <div>
            <UserSelect label="Project Owner" name="owner.id" />
          </div>
          <div>
            <TextField
              type="datetime-local"
              label="Start Date"
              name="startDate"
            />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
