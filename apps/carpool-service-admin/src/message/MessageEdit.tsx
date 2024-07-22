import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="from" source="fromField" />
        <TextInput label="to" source="to" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
