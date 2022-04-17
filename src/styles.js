import tw, { css, styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    ${tw`text-purple-300 m-0 p-0 box-sizing[border-box] border[0 solid] font-sans`};
  }
`;
export const Layout = tw.div`width[100vw] height[100vh] flex justify-center items-center background-color[#292929]`;
export const LeftSide = tw.div`px-6 flex-1 flex flex-col items-end`;
export const MiddleSide = tw.div`flex flex-col items-center`;
export const RightSide = tw.div`px-6 flex-1`;
export const Parag = tw.p``;
export const Title = tw.div`text-gray-200 font-size[2rem] font-bold mb-7`
export const Footer = styled.div(({ smaller }) => [tw`text-gray-400 font-size[.9rem] font-light mb-2`, smaller && tw`font-size[.8rem]`]);
export const Link = tw.a`text-decoration[none]`;
export const SpanBold = tw.span`font-bold`
export const Container = tw.div`relative flex flex-col items-center border-width[10px] border-gray-700 rounded-lg box-shadow[0 10px 10px rgba(0,0,0,.2)] mb-5`;
export const TopBarContainer = tw.div`absolute flex flex-col items-center w-full`;
export const StatusContainer = tw.div`w-full flex px-5 py-4 justify-between items-center mb-5`;
export const Canvas = tw.canvas`block`;

export const PlayerOneBar = tw.div`bg-red-600 w-full h-12 rounded-l-full relative overflow-hidden border-width[3px] border-right-width[0] border-white`;
export const PlayerOneInner = styled.div(({ health }) => [
  tw`bg-green-400 absolute h-full right-0 transition[all 0.3s]`,
  css`
    width: ${health}%
  `,
]);

export const PlayerTwoBar = tw.div`bg-red-600 w-full h-12 rounded-r-full relative overflow-hidden border-width[3px] border-left-width[0] border-white`;
export const PlayerTwoInner = styled.div(({ health }) => [
  tw`bg-green-400 absolute h-full transition[all 0.1s]`,
  css`
    width: ${health}%
  `,
]);

export const Timer = tw.div`flex justify-center items-center rounded-lg w-20 h-20 flex-shrink-0 bg-white`;
export const Counter = tw.div`flex justify-center items-center bg-yellow-500 w-16 h-16 rounded-full font-size[2.2rem] font-bold text-gray-800`;

export const Result = tw.div`font-size[4rem] font-bold text-white`;
export const Overlay = styled.div(({ isStarted }) => [
  tw`absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 background-color[rgba(0,0,0,.6)] transition[all 0.3s ease-out]`,
  isStarted && tw`opacity-0`,
]);
export const StartOver = styled.div`  
  ${tw`bg-white border-width[3px] width[400px] flex justify-center items-center p-4 font-bold font-size[2rem] text-gray-600 rounded-2xl cursor-pointer box-shadow[0 10px 10px rgba(0,0,0,.2)] transition[all 0.1s ease-in]`}
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
  }
`;
