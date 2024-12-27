import WineBarIcon from '@assets/icons/ico-wine-bar.svg';
import HeartIcon from '@assets/icons/ico-heart.svg';
import MessageIcon from '@assets/icons/ico-message.svg';

interface CrewCardProps {
  Crew: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  mobileRole: string;
  alchol: string;
  favor: string;
  comment: string;
}

function CrewCard({
  Crew,
  name,
  role,
  mobileRole,
  alchol,
  favor,
  comment,
}: CrewCardProps) {
  return (
    <div className="flex w-[580px] mobile:w-[160px] mobile:h-[240px] mobile:flex-col mobile:items-center h-[226px] justify-center items-center">
      <div className="relative flex-shrink-0 w-[226px] h-[226px] mobile:w-[160px] mobile:h-[160px] rounded-2xl bg-suldak-mint-400 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Crew
            className="w-full h-full"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 226 226"
          />
        </div>
      </div>
      <div className="flex flex-col w-[335px] mobile:w-full mobile:items-center ml-[20px] mobile:ml-0 mobile:mt-[8px]">
        <div className="text-[24px] mobile:text-[22px] font-semibold">
          {name}
        </div>
        <div className="text-[16px] mobile:hidden">{role}</div>
        <div className="hidden mobile:block mobile:text-center text-[16px] h-[26px]">
          {mobileRole}
        </div>
        <div className="flex items-center text-[14px] mt-[26px] gap-x-[4px] text-suldak-gray-700 mobile:hidden">
          <div className="flex-shrink-0">
            <WineBarIcon />
          </div>
          <div className="break-words">{alchol}</div>
        </div>
        <div className="flex text-[14px] gap-x-[4px] text-suldak-gray-700 mobile:hidden">
          <div className="flex-shrink-0 mt-0">
            <HeartIcon />
          </div>
          <div className="break-words overflow-hidden">{favor}</div>
        </div>
        <div className="flex items-start text-[14px] gap-x-[4px] text-suldak-gray-700 mobile:hidden">
          <div className="flex-shrink-0">
            <MessageIcon />
          </div>
          <div className="break-words overflow-hidden">{comment}</div>
        </div>
      </div>
    </div>
  );
}
export default CrewCard;
