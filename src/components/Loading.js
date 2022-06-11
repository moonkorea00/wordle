import styled from 'styled-components';
const Loading = () => {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
};
const LoadingWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;
export default Loading;
