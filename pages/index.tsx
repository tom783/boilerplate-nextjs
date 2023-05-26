import Button from '@compo/common/Button';
import tw, { styled } from 'twin.macro';

const Styles = {
  Home: styled.div`
    ${tw`h-[100vh]`}
  `,
};

export default function Home() {
  return <Styles.Home tw='bg-blue-50'>HOME</Styles.Home>;
}
