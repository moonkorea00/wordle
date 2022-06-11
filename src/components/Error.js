import styled from 'styled-components';
const Error = () => {
  return <ErrorWrapper>Something went wrong...</ErrorWrapper>;
};
const ErrorWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;
export default Error;
