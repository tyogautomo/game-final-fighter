import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    ${tw`text-purple-300 m-0 p-0 box-sizing[border-box] border[0 solid] font-sans`};
  }
`;
export const Container = tw.div`relative width[1024px] height[576px]`;
export const TopBarContainer = tw.div`absolute border-width[1px] w-full flex`;
export const Canvas = tw.canvas``;
export const PlayerOneBar = tw.div``;
export const PlayerTwoBar = tw.div``;
export const Timer = tw.div``;