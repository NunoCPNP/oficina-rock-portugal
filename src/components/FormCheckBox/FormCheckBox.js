import { FormInputContainer, FormInputLabel, GroupContainer } from './FormCheckBox.styles'

const FormCheckBox = ({ name, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer type="checkbox" name={name} {...props} />
      {label ? <FormInputLabel htmlFor={name}>{label}</FormInputLabel> : null}
    </GroupContainer>
  )
}

export default FormCheckBox
