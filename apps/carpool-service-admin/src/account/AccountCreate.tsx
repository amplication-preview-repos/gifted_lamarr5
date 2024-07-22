import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CarpoolGroupTitle } from "../carpoolGroup/CarpoolGroupTitle";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="childName" source="childName" />
        <TextInput label="address" source="address" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="carpoolGroups"
          reference="CarpoolGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CarpoolGroupTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
