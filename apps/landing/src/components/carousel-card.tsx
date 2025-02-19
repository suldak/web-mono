'use client';

import Image, { StaticImageData } from 'next/image';
import GroupMember from '@assets/images/image-group-member.png';
import LocationIcon from '@assets/images/image-location.png';
import HashTag from '@components/hash-tag';

interface Tag {
  content: string;
  color: 'green' | 'orange' | 'gray';
}

interface ProfilePic {
  src: StaticImageData;
  alt: string;
}

interface Props {
  tags: Tag[];
  title: string;
  location: string;
  date: string;
  time: string;
  currentMembers: number;
  maxMembers: number;
  ProfilePics: ProfilePic[];
}

function CarouselCard({
  tags,
  title,
  location,
  date,
  time,
  currentMembers,
  maxMembers,
  ProfilePics,
}: Props) {
  return (
    <div className="flex h-full items-center justify-center tablet:w-[480px] tablet:px-[15px] pc:w-[480px] pc:px-[15px] mobile:h-[167px] mobile:w-[200px]">
      <div className="group-card h-[347px] w-[450px] overflow-hidden rounded-[20px] shadow-suldak-card  mobile:h-[167px] mobile:rounded-[15px] mobile:w-[200px] mobile:px-[16px] mobile:py-[20px] tablet:p-[40px] pc:p-[40px]">
        <div className="tags flex gap-x-[12px] mobile:gap-x-[6px]">
          {tags.map((tag, index) => (
            <HashTag key={index} content={tag.content} color={tag.color} />
          ))}
        </div>
        <div className="mt-[24px] flex items-center text-[32px] font-semibold mobile:mt-[16px] mobile:h-[12px] mobile:text-[16px] mobile:font-medium">
          {title}
        </div>
        <div className="location mt-[15px] flex items-center text-[24px] text-suldak-gray-600 mobile:mt-[12px] mobile:text-[12px] tablet:h-[29px] pc:h-[29px]">
          <div className="relative h-[24px] w-[24px] mobile:h-[14px] mobile:w-[14px]">
            <Image src={LocationIcon} alt="location" fill />
          </div>
          {location} | {date} {time}
        </div>
        <div className="mt-[26px] flex items-center mobile:mt-[18px]">
          {ProfilePics.map((pic, index) => (
            <div
              key={index}
              className="relative h-[72px] w-[72px] mobile:h-[32px] mobile:w-[32px]"
            >
              <Image src={pic.src} alt={pic.alt} fill quality={100} />
            </div>
          ))}
          <div className="relative ml-[20px] h-[36px] w-[36px] mobile:ml-[10px] mobile:h-[14px] mobile:w-[14px]">
            <Image src={GroupMember} alt="location" fill />
          </div>
          <div className="text-[30px] font-normal text-suldak-gray-600 mobile:text-[14px]">
            <span className="ml-[10px] font-semibold text-suldak-mint-500 mobile:ml-[4px]">
              {currentMembers}
            </span>
            /{maxMembers}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
