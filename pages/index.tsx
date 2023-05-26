import Button from '@compo/common/Button';
import tw, { styled } from 'twin.macro';

const Styles = {
  Home: styled.div`
    ${tw`h-[100vh]`}
  `,
};

export default function Home() {
  return (
    <Styles.Home tw='bg-blue-50'>
      {[1, 2, 3, 4, 5].map((i, idx) => {
        return <Button key={idx}>test</Button>;
      })}
    </Styles.Home>
  );
}
