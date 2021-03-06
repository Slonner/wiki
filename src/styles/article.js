import styled from "styled-components"
import tw from "tailwind.macro"

export const ArticleHeading = styled.div`
  ${tw`text-3xl flex items-center`}
`
export const ArticleContent = styled.div`
  ${tw`mt-8 leading-loose`}
  word-break: break-word;
`
export const ArticleHelpCircle = { 
  width: '2.5rem', 
  marginRight: '1rem', 
  color: '#3d4852' 
}