import CrewTag from './crew-tag';

interface MascotCardProps {
  Mascot: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  description: string;
  tags: string[];
}

function MascotCard({
  Mascot,
  name,
  role,
  description,
  tags,
}: MascotCardProps) {
  return (
    <div className="flex flex-col w-[580px] h-[504px] justify-center items-center rounded-[40px] border border-gray-400 py-[40px] px-[118px]">
      <div className="flex flex-col justify-center items-center">
        <Mascot />
        <div className="text-[22px] font-bold mt-[24px]">{name}</div>
        <div>{role}</div>
        <div>{description}</div>
        <div className="flex w-full justify-center gap-x-[10px] mt-[16px]">
          {tags.map((tag: string, index: number) => (
            <CrewTag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MascotCard;