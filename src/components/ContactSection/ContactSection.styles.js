import styled from 'styled-components';
import { StyledButton } from '../Button/Button.styles';

export const ContactContainer = styled.section`
  padding: ${({ theme }) => theme.spacings.extraLarge} 10%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContactTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.huge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.extraLarge};
  text-align: center;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.extraLarge};
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoBlock = styled.div`
  flex: 1;
  text-align: left;
`;

export const InfoItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.large};
  
  h4 {
    font-size: ${({ theme }) => theme.typography.size.medium};
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacings.small};
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    display: inline-block;
    padding-bottom: 2px;
  }

  p {
    font-size: ${({ theme }) => theme.typography.size.small};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const FormWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacings.small};
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.size.small};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  ${Input}; 
  resize: vertical;
`;

export const SubmitButton = styled(StyledButton)`
  margin-top: ${({ theme }) => theme.spacings.small};
  text-align: center;
  width: 100%; 
`;