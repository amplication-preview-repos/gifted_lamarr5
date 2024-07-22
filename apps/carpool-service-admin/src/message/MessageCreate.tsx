import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="from" source="fromField" />
        <TextInput label="to" source="to" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
