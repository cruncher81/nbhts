import Image from 'next/image';

function Logo({ src, width, height }) {
  return <Image src={src} width={width} height={height} alt='logo' />;
}

export default Logo;
