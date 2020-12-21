import Link from 'next/link';
import tw, { css, theme } from 'twin.macro';

export default function Navbar() {
  const hoverStyles = css`
    &:hover {
      ${tw`text-blue-400`};
      color: violet;
    }
  `;

  const linkStyles = [tw`py-6 px-3`, hoverStyles];

  return (
    <div tw="flex py-5 px-4 w-full justify-center lg:items-end text-2xl bg-gray-700 border-b-4 border-blue-400">
      <div
        css={[
          tw`text-blue-300`,
          css({
            color: theme`colors.awesome`,
          }),
        ]}
      >
        <Link href="/" passHref={true}>
          <a tw="py-6 px-3" css={linkStyles}>
            Home
          </a>
        </Link>
        <Link href="/all-data" passHref={true}>
          <a tw="py-6 px-3" css={linkStyles}>
            Data
          </a>
        </Link>
      </div>
    </div>
  );
}
