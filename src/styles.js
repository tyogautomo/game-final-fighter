import tw, { styled } from 'twin.macro';
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
export const PlayerOneInner = styled.div(() => [
  tw`bg-green-400 absolute h-full width[50%] right-0`,
]);

export const PlayerTwoBar = tw.div`bg-red-600 w-full h-12 rounded-r-full relative overflow-hidden`;
export const PlayerTwoInner = styled.div(() => [
  tw`bg-green-400 absolute h-full width[50%]`,
]);

export const Timer = tw.div`flex justify-center items-center rounded-lg w-20 h-20 flex-shrink-0 bg-white`;
export const Counter = tw.div`flex justify-center items-center bg-yellow-500 w-16 h-16 rounded-full font-size[2.2rem] font-bold text-gray-800`;