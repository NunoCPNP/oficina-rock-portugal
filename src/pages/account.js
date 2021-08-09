import styled from "@emotion/styled";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const Account = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

const SignInAndSignUpContainer = styled.div`
  width: 85rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
`;

export default Account;
