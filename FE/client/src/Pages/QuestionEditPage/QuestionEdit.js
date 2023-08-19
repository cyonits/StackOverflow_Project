import { styled } from 'styled-components';
import { getCookieValue } from '../../custom/getCookie';
import { StyledButton } from '../../components/Buttons/AskButton';
import { Link } from 'react-router-dom';
import axios from 'axios';
import QuestionPage from '../QuestionPage/QuestionPage';

// 자기 글 만 수정할 수 있게!

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const LetterPart = styled.h4`
  font-weight: 700;
  margin-left: 20px;
`;

const QuestionInput = styled.input`
  margin: 5px 0px 20px 20px;
  padding: 8px;
  border: 1px solid darkgray;
  border-radius: 4px;
  max-width: 800px;
`;

const QuestionContent = styled.textarea`
  margin: 5px 0px 20px 20px;
  padding: 8px;
  border: 1px solid darkgray;
  border-radius: 4px;
  max-width: 800px;
  min-height: 100px;
  resize: vertical;
  overflow: auto;
`;

const Button = styled(StyledButton)`
  margin-left: 20px;
`;
const CancelBtn = styled.button``;

const QuestionEdit = ({ question, setQuestion }) => {
  const token = getCookieValue('access_token');

  const updatedQuestion = {
    title: question.title,
    body: question.body,
    tags: question.tags,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    setPreviousPageUrl(window.location.href);
  };

  const handleTagsChange = (e) => {
    const newTags = e.target.value.split(',');
    setQuestion((prevData) => ({ ...prevData, tags: newTags }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    try {
      console.log(updatedQuestion);

      const response = axios.patch(
        `${process.env.REACT_APP_API_URL}/questions/${question.questionId}`,
        updatedQuestion,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response);
      window.alert('게시글이 수정되었습니다.');
      window.location.href = `/questions/${question.questionId}`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditForm>
        <LetterPart>Title</LetterPart>
        <QuestionInput
          type="text"
          name="title"
          value={question.title}
          onChange={handleInputChange}
        />
        <LetterPart>Body</LetterPart>
        <QuestionContent
          type="text"
          name="body"
          value={question.body}
          onChange={handleInputChange}
        />
        <LetterPart>Tags</LetterPart>
        <QuestionInput
          type="text"
          name="tags"
          value={question.tags.join(',')}
          onChange={handleTagsChange}
        />
        <Button type="submit" onClick={handleEditSubmit}>
          Save edits
        </Button>
        <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
      </EditForm>
    </>
  );
};

export default QuestionEdit;
