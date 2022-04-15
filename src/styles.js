import tw, { css, styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    ${tw`text-purple-300 m-0 p-0 box-sizing[border-box] border[0 solid] font-sans`};
  }
`;
export const Container = tw.div`relative inline-block`;
export const TopBarContainer = tw.div`absolute w-full flex px-5 py-4 justify-between items-center`;
export const Canvas = tw.canvas`block`;

export const PlayerOneBar = tw.div`bg-red-600 w-full h-12 rounded-l-full relative overflow-hidden`;
export const PlayerOneInner = styled.div(({ health }) => [
  tw`bg-green-400 absolute h-full right-0 transition[all 0.1s]`,
  css`
    width: ${health}%
  `,
]);

export const PlayerTwoBar = tw.div`bg-red-600 w-full h-12 rounded-r-full relative overflow-hidden`;
export const PlayerTwoInner = styled.div(({ health }) => [
  tw`bg-green-400 absolute h-full transition[all 0.1s]`,
  css`
    width: ${health}%
  `,
]);

export const Timer = tw.div`flex justify-center items-center rounded-lg w-20 h-20 flex-shrink-0 bg-white`;
export const Counter = tw.div`flex justify-center items-center bg-yellow-500 w-16 h-16 rounded-full font-size[2.2rem] font-bold text-gray-800`;