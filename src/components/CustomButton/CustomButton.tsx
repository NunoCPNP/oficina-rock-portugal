import { CustomButtonContainer } from "./CustomButton.styles";

type Props = {
  type: "button" | "reset" | "submit" | undefined
  isGoogleSignIn: boolean;
  inverted: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const CustomButton: React.FC<Props> = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
