'use client';

import Link from 'next/link';
import ContentWrapper from '@components/contact/content-wrapper';
import SVGComponent from '@utils/types';
interface Props {
  name: string;
  link?: string;
  copy?: string;
  show?: string;
  Icon: SVGComponent;
  onCopy?: () => void;
}

function ContactChannel({ name, link, copy, show, Icon, onCopy }: Props) {
  const handleCopy = async () => {
    if (!copy) return;

    try {
      await navigator.clipboard.writeText(copy);
      onCopy?.();
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <ContentWrapper link={link} onClick={handleCopy}>
      <Icon className="w-[120px] h-[120px] mobile:w-[100px] mobile:h-[100px]" />

      <div className="flex flex-col ml-[40px] mobile:ml-0 mt-[20px] pc:mt-[33px] text-suldak-gray-900">
        <div className="text-[24px] font-semibold w-full">{name}</div>
        {link && (
          <Link
            className="text-[16px]"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {show}
          </Link>
        )}
        {copy && (
          <button className="text-[16px] text-left" onClick={handleCopy}>
            {copy}
          </button>
        )}
      </div>
    </ContentWrapper>
  );
}

export default ContactChannel;
