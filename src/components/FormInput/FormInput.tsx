import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./FormInput.styles";

type Props = {
  handleChange: () => void;
  label: string;
  name: string
  required: boolean
  type: string
  value: string
};

const FormInput: React.FC<Props> = ({ handleChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
