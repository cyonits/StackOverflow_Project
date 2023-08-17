import { styled } from 'styled-components';
import { AskButton } from '../../components/Buttons/AskButton';
import moment from 'moment';

const QuestionHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const QuestionHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.div`
  color: var(--black-700);
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 5px;
  padding: 10px;
`;

// Question 작성 날짜, 수정일, 뷰
const QuestionInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

const Info = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
`;

export const Line = styled.line`
  border-top: 1.5px solid #e3e3e3;
`;
const QuestionPageHeader = ({ question }) => {
  return (
    <>
      <QuestionHeaderContainer>
        <QuestionHeader>
          <QuestionTitle>{question.title}</QuestionTitle>
          <QuestionInfo>
            <Info>
              Asked: {moment.utc(question.createdAt).local().fromNow()}
            </Info>
            <Info>
              Modified: {moment.utc(question.lastModifiedAt).local().fromNow()}
            </Info>
            <Info>Viewed: {question.views}</Info>
          </QuestionInfo>
        </QuestionHeader>
        <AskButton />
      </QuestionHeaderContainer>
      <Line />
    </>
  );
};

export default QuestionPageHeader;
