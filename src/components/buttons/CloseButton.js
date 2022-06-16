import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../modules/gameData';

const CloseButton = () => {
  const dispatch = useDispatch();

  return (
    <CloseButtonWrapper>
      <Button onClick={dispatch(closeModal)} value='Xasdad'>X</Button>
    </CloseButtonWrapper>
  );
};

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  width: 25px;
  height: 25px;
  margin: 15px 10px 0 0;
  font-weight: bold;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
&:hover{
  background-color: #EFEFEF;
}
`;
export default CloseButton;
