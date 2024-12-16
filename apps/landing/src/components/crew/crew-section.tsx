import TalkImg from '@assets/icons/ico-talk.svg';
import CrewCard from './crew-card';
import GyuriImage from '@assets/icons/ico-member-gyuri.svg';
import HyunjiImage from '@assets/icons/ico-member-hyunji.svg';
import GeuntaeImage from '@assets/icons/ico-member-geuntae.svg';
import SeungminImage from '@assets/icons/ico-member-seungmin.svg';
import JaehoonImage from '@assets/icons/ico-member-jaehoon.svg';
import HyunjaeImage from '@assets/icons/ico-member-hyunjae.svg';
import GichanImage from '@assets/icons/ico-member-gichan.svg';
import HwijungImage from '@assets/icons/ico-member-hwijung.svg';
import YoonjinImage from '@assets/icons/ico-member-yoonjin.svg';
import EunjinImage from '@assets/icons/ico-member-eunjin.svg';
import HiwonImage from '@assets/icons/ico-member-hiwon.svg';

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface CrewData {
  Crew: SVGComponent;
  name: string;
  role: string;
  alchol: string;
  favor: string;
  comment: string;
}

const Gyuri = GyuriImage as SVGComponent;
const Hyunji = HyunjiImage as SVGComponent;
const Geuntae = GeuntaeImage as SVGComponent;
const Seungmin = SeungminImage as SVGComponent;
const Jaehoon = JaehoonImage as SVGComponent;
const Hyunjae = HyunjaeImage as SVGComponent;
const Gichan = GichanImage as SVGComponent;
const HwiJung = HwijungImage as SVGComponent;
const Yoonjin = YoonjinImage as SVGComponent;
const Eunjin = EunjinImage as SVGComponent;
const Hiwon = HiwonImage as SVGComponent;

const crew: CrewData[] = [
  {
    Crew: Gyuri,
    name: '이규리',
    role: '서비스를 만드는 PO/PM, 그리고 팀 전반과 서비스의 운영관리를 맡고 있습니다✨',
    alchol: '소주! 아니면 소맥을 좋아합니다',
    favor: '해리포터 덕후기도 하고, 디즈니/픽사 영화 좋아합니다…',
    comment:
      '유저와 함께 성장해나가는 서비스를 만들고 싶어요! 피드백은 언제나 환영입니다🙌',
  },
  {
    Crew: Hyunji,
    name: '김현지',
    role: '유저분들을 술닥술닥으로 모셔오고, 또 즐기실 수 있는 다양한 콘텐츠를 기획하는 마케팅 담당 입니다!',
    alchol: '막걸리를 제외한 모든 술!',
    favor: '여행 / 여행지에서 즐기는 커피, 술, 재즈를 위해 떠납니다!',
    comment: '좋은 이야기와 술 한잔, 술닥술닥에서 만나요!',
  },
  {
    Crew: Geuntae,
    name: '박근태',
    role: '앱개발 파트에서 승민코리한테 혼나는 포지션',
    alchol: '위스키! 하이볼! 소맥! 스까먹기!를 좋아해요',
    favor: '제 일상은 재미가 없어서 남 일상 듣는게 제일 재밌어요',
    comment: '노는게 제일 좋아 친구들 모여라!',
  },
  {
    Crew: Seungmin,
    name: '최승민',
    role: '막내 앱 개발자',
    alchol: '칵테일, 위스키',
    favor: '운동/건강, 취미생활(야외), 취미생활(실내)',
    comment:
      '저희가 준비한 서비스가 여러분의 술잔에 맛있는 이야기를 더해줄 수 있으면 좋겠습니다~!',
  },
  {
    Crew: Jaehoon,
    name: '허재훈',
    role: 'Back-end 개발 파트와 서버 관리 역할을 맡고 있는 네버랜드입니다.',
    alchol: '와인, 막걸리를 제외하고는 잘 먹어요!',
    favor: '20대, 술 이야기, 노는 것 좋아합니다',
    comment: '소주, 소주, 맥주, 위스키, 소주, 소주, 연태, 연태 순으로 먹어라.',
  },
  {
    Crew: Hyunjae,
    name: '김현재',
    role: '프론트엔드 개발 및 개발 환경 관리를 담당하고 있습니다.',
    alchol: '다카라, 야마나시, 화이트피치',
    favor: '주식에 관한 이야기를 좋아합니다',
    comment:
      '개발에 참여한 팀원분들, 사용하시는 유저분들 모두에게 좋은 경험을 제공해주는 프로덕트면 좋겠습니다!',
  },
  {
    Crew: Gichan,
    name: '이기찬',
    role: '술닥술닥 백오피스를 맡고 있습니다.',
    alchol: '맥주를 좋아하고 쓴 맛 나는 술은 별로 안 좋아합니다',
    favor:
      '영화관 보다는 집에서 혼자 보는 걸 좋아해요! 쿠엔틴 타란티노, 고레에다 히로카즈 감독 작품을 가장 좋아합니다. (바스터즈: 거친 녀석들, 아무도 모른다) 추천!',
    comment:
      '술닥술닥이 건강한 술 문화를 주도할 수 있도록 많은 사랑 부탁드립니다!',
  },
  {
    Crew: Yoonjin,
    name: '안윤진',
    role: '랜딩페이지와 술닥술닥의 웹뷰 개발을 맡고 있는 웹 프론트엔드 개발자입니다',
    alchol: '맥주! 생맥주를 좋아해요 🍻',
    favor:
      '여행! 요즘은 상하이 여행을 가고 싶어서 상하이 여행 브이로그를 찾아보고 있어요',
    comment: '술닥술닥 화이팅!',
  },
  {
    Crew: HwiJung,
    name: '김휘정',
    role: '사용자들이 술닥술닥을 쉽고 편하게 사용하기 위해 프로덕트를 제작하고 있는 UXUI디자이너입니다.',
    alchol: '달달한 술은 다 좋아요!✌',
    favor: '재밌는 작품을 추천하고 같이 보는것을 좋아합니다',
    comment: '술닥술닥에서 건강하고 즐거운 술모임을 가져가시길 바랍니다💖',
  },
  {
    Crew: Eunjin,
    name: '안은진',
    role: 'BI/BX 파트를 맡아 재미있고 즐거운 경험을 디자인하려 노력하고 있습니다.',
    alchol: '요즘은 전통주에 빠져있습니다. 청주가 좋아요!',
    favor:
      '반려동물과 함께 삶을 꾸려나가며 자연과 동물을 사랑하는, 비슷한 라이프스타일을 가진 분들과 좋은 술자리를 갖고 싶습니다🐾',
    comment: '퇴근 후 가볍게 술 한잔 하기 좋은 곳을 소개해주세요!',
  },
  {
    Crew: Hiwon,
    name: '신희원',
    role: '반갑습니다^^',
    alchol: '반갑습니다^^',
    favor: '반갑습니다^^',
    comment: '반갑습니다^^',
  },
];

function CrewSection() {
  return (
    <div className="flex w-full flex-col bg-suldak-mint-50 items-center py-24">
      <div className="flex flex-col w-full max-w-6xl">
        <TalkImg />
        <div>
          <div className="text-3xl font-semibold">술닥술닥을 함께</div>
          <div className="text-3xl font-semibold">만들어가는 동료들이예요.</div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {crew.map((member, index) => (
            <CrewCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CrewSection;