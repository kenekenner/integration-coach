import svgPaths from "./svg-21zrdd4dun";
import imgAvatar from "figma:asset/b0d2d5ea5055b79f16ff67894a2dd7832cea62af.png";
import imgAvatar1 from "figma:asset/f7d870fa782fbf28b65187d6f49782d3dc7f97c0.png";
import imgInner from "figma:asset/a73e54416b10f10dc49c15bdb9d3bdb1f88dea51.png";
import imgAvatar2 from "figma:asset/42a83213755a123b23b887c43c69d2d6448d82c4.png";

function Percentage() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="Percentage">
      <p className="font-['Area_Normal:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] w-full">+11.02%</p>
    </div>
  );
}

function ArrowRise() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRise">
          <path clipRule="evenodd" d={svgPaths.pb846800} fill="var(--fill-0, #1C1C1C)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowRise />
    </div>
  );
}

function Graph() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative rounded-[8px] shrink-0" data-name="Graph">
      <Percentage />
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center justify-between relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <p className="css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[24px] text-nowrap whitespace-pre">$16,249</p>
      <Graph />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center left-[50px] min-w-[200px] p-[24px] rounded-[16px] top-[50px] w-[241.333px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <p className="font-['Area_Normal:Regular',_sans-serif] h-[20px] leading-[18px] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] w-full">Title</p>
      <Content />
    </div>
  );
}

function Sun() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sun">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sun">
          <path d={svgPaths.p3e8fad80} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p3a584a80} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Sun />
    </div>
  );
}

function LightTheme() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Light Theme">
      <Icon1 />
    </div>
  );
}

function ClockCounterClockwise() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ClockCounterClockwise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ClockCounterClockwise">
          <path d={svgPaths.p29ef7bf0} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p24927c00} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ClockCounterClockwise />
    </div>
  );
}

function History() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="History">
      <Icon2 />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bell">
          <path d={svgPaths.p3343f900} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p2b9cf700} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Dot() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p1b6fb500} fill="var(--fill-0, #B8DCBE)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute content-stretch flex items-center left-[8px] rounded-[80px] size-[16px] top-[-8px]" data-name="Badge">
      <Dot />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Bell />
      <Badge />
    </div>
  );
}

function Notification() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Notification">
      <Icon3 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.pb1bd5f0} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p33bc7a00} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Sidebar />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Sidebar">
      <Icon4 />
    </div>
  );
}

function IconSet() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[8px] items-center left-[323.33px] rounded-[8px] top-[50px]" data-name="Icon Set">
      <LightTheme />
      <History />
      <Notification />
      <Sidebar1 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow">
          <path clipRule="evenodd" d={svgPaths.pefb9580} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative rounded-[8px] shrink-0" data-name="Icon">
      <Arrow />
    </div>
  );
}

function Chart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chart">
          <path d={svgPaths.p26498400} fill="var(--fill-0, #1C1C1C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Chart />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Content">
      <Icon6 />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] h-full leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] w-[108px]">Active Tab</p>
    </div>
  );
}

function ActiveTab() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Active Tab">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center p-[8px] relative w-full">
          <Icon5 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Arrow">
          <path clipRule="evenodd" d={svgPaths.pefb9580} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Arrow1 />
    </div>
  );
}

function Shopping() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Shopping">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Shopping">
          <path d={svgPaths.p33a54a80} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p2cf00800} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Shopping />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Content">
      <Icon8 />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] h-full leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] w-[116px]">Inactive Tab</p>
    </div>
  );
}

function InactiveTab() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Inactive Tab">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center p-[8px] relative w-full">
          <Icon7 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function SidebarItems() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[50px] top-[194px] w-[180px]" data-name="Sidebar Items">
      <ActiveTab />
      <InactiveTab />
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Back">
          <rect fill="var(--fill-0, #1C1C1C)" fillOpacity="0.05" height="24" rx="12" width="24" />
          <path d="M14 16L10 12L14 8" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Forth() {
  return (
    <div className="relative size-[24px]" data-name="Forth">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Forth">
          <rect fill="var(--fill-0, #1C1C1C)" fillOpacity="0.05" height="24" rx="12" width="24" />
          <path d="M14 16L10 12L14 8" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Display() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Display">
      <Back />
      <p className="font-['Area_Normal:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap whitespace-pre">October 2024</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Forth />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">MON</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">1</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">8</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">15</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">22</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">29</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">TUE</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">2</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">9</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">16</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">23</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">30</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">WED</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">3</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">10</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">17</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">24</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">31</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">THU</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">4</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">11</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">18</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">25</p>
      <p className="leading-[1.5] opacity-50 relative shrink-0 text-[14px]">1</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">FRI</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">5</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">12</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">19</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">26</p>
      <p className="leading-[1.5] opacity-50 relative shrink-0 text-[14px]">2</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">SAT</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">6</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">13</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">20</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">27</p>
      <p className="leading-[1.5] opacity-50 relative shrink-0 text-[14px]">3</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex flex-col font-['Area_Normal:SemiBold',_sans-serif] h-full items-center justify-between not-italic overflow-clip relative shrink-0 text-[#1c1c1c] text-nowrap whitespace-pre" data-name="Row">
      <p className="leading-[normal] opacity-50 relative shrink-0 text-[12px]">SUN</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">7</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">14</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">21</p>
      <p className="leading-[1.5] relative shrink-0 text-[15px]">28</p>
      <p className="leading-[1.5] opacity-50 relative shrink-0 text-[14px]">4</p>
    </div>
  );
}

function Dates() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Dates">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute bg-white h-[280px] left-[323.33px] rounded-[24px] top-[110px] w-[300px]" data-name="Calendar">
      <div className="box-border content-stretch flex flex-col gap-[20px] h-[280px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-[300px]">
        <Display />
        <Dates />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Information() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="Information">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[20px] relative shrink-0 text-[#1c1c1c] text-[20px] w-full">Confirmation Modal</p>
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] relative shrink-0 text-[14px] text-[rgba(28,28,28,0.5)] w-full">This is a confirmation modal. Do you confirm your action?</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start justify-center p-[24px] relative w-full">
          <Information />
        </div>
      </div>
    </div>
  );
}

function Cancel() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Cancel">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.5)] text-center text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function Confirm() {
  return (
    <div className="bg-[#1c1c1c] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Confirm">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Confirm</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex items-center justify-end p-[12px] relative w-full">
          <Cancel />
          <Confirm />
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute bg-[#fbfbfb] content-stretch flex flex-col items-center justify-center left-[656px] rounded-[24px] top-[50px]" data-name="Modal">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <Container />
      <Buttons />
    </div>
  );
}

function ActiveTab1() {
  return (
    <div className="basis-0 bg-[#fbfbfb] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Active Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[10px] relative size-full">
          <p className="basis-0 font-['Area_Normal:Bold',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-center">Tab</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
    </div>
  );
}

function InactiveTab1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Inactive Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[10px] relative size-full">
          <p className="basis-0 font-['Area_Normal:Bold',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-center">Tab</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.05)] border-solid bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
    </div>
  );
}

function InactiveTab2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Inactive Tab">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[10px] relative size-full">
          <p className="basis-0 font-['Area_Normal:Bold',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-center">Tab</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute bg-white left-[656px] rounded-[5px] top-[241px] w-[300px]" data-name="Tabs">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-[300px]">
        <ActiveTab1 />
        <InactiveTab1 />
        <InactiveTab2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3683fe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
          <path d={svgPaths.pffb2080} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3cc25800} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Active() {
  return (
    <div className="bg-[#1c1c1c] relative rounded-[24px] shrink-0 w-full" data-name="Active">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon9 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">Edit</p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p383db00} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
          <path d={svgPaths.p1310000} id="Vector_2" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InactiveItem() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Inactive Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon10 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[12px]">Duplicate</p>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bcdef00} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
          <path d={svgPaths.pd91d00} id="Vector_2" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
          <path d="M10 9.5L8 11.5L6 9.5" id="Vector_3" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
          <path d="M8 10.8091V7" id="Vector_4" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InactiveItem1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Inactive Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon11 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[12px]">Archive</p>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39f1ff80} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
          <path d="M10.3428 8H5.3125" id="Vector_2" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
          <path d={svgPaths.p38443f0} id="Vector_3" stroke="var(--stroke-0, #1C1C1C)" />
        </g>
      </svg>
    </div>
  );
}

function InactiveItem2() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Inactive Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon12 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[12px]">Move</p>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36bb2e80} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InactiveItem3() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Inactive Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon13 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[12px]">Share</p>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17ebf0} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InactiveItem4() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Inactive Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon14 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[12px]">Add to favorites</p>
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p27efd298} id="Vector" stroke="var(--stroke-0, #8A1111)" strokeLinejoin="round" />
          <path d="M2.5 3.5H13.5" id="Vector_2" stroke="var(--stroke-0, #8A1111)" />
          <path d={svgPaths.p21973dc} id="Vector_3" stroke="var(--stroke-0, #8A1111)" strokeLinejoin="round" />
          <path d="M8 5.5V12.5" id="Vector_4" stroke="var(--stroke-0, #8A1111)" strokeLinejoin="round" />
          <path d="M5.75 5.5L6 12.5" id="Vector_5" stroke="var(--stroke-0, #8A1111)" strokeLinejoin="round" />
          <path d="M10.25 5.5L10 12.5" id="Vector_6" stroke="var(--stroke-0, #8A1111)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function InactiveItem5() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Inactive Item">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <Icon15 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#8a1111] text-[12px]">Delete</p>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[50px] p-[24px] rounded-[24px] top-[302px] w-[241px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <Active />
      <InactiveItem />
      <InactiveItem1 />
      <InactiveItem2 />
      <InactiveItem3 />
      <InactiveItem4 />
      <InactiveItem5 />
    </div>
  );
}

function Dot1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p10453ef0} fill="var(--fill-0, #1C1C1C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="box-border content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
      <Dot1 />
      <p className="font-['Area_Normal:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-nowrap whitespace-pre">This year</p>
    </div>
  );
}

function Dot2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p10453ef0} fill="var(--fill-0, #A8C5DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="box-border content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
      <Dot2 />
      <p className="font-['Area_Normal:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-nowrap whitespace-pre">Last year</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Info">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] h-full leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] w-[105px]">Total Revenues</p>
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] h-full leading-[20px] not-italic relative shrink-0 text-[13px] text-[rgba(28,28,28,0.4)] w-[83px]">Total Orders</p>
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] h-full leading-[20px] not-italic relative shrink-0 text-[13px] text-[rgba(28,28,28,0.2)] w-[5px]">|</p>
      <Tag />
      <Tag1 />
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-end justify-between leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)] text-right" data-name="Numbers">
      <p className="basis-0 css-9s1c2v grow min-h-px min-w-px relative shrink-0 w-full">30K</p>
      <p className="basis-0 css-9s1c2v grow min-h-px min-w-px relative shrink-0 w-full">20K</p>
      <p className="basis-0 css-9s1c2v grow min-h-px min-w-px relative shrink-0 w-full">10K</p>
      <p className="basis-0 css-9s1c2v grow min-h-px min-w-px relative shrink-0 w-full">0</p>
    </div>
  );
}

function UpperLine() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Upper Line">
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Dates1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)] text-center w-[451px]" data-name="Dates">
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">Jan</p>
      </div>
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">Feb</p>
      </div>
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">Mar</p>
      </div>
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">Apr</p>
      </div>
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">May</p>
      </div>
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">Jun</p>
      </div>
      <div className="basis-0 css-9s1c2v flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[18px]">Jul</p>
      </div>
    </div>
  );
}

function LineTwo() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 244">
      <g id="Line Two">
        <mask height="244" id="mask0_9_837" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="451" x="0" y="0">
          <rect fill="var(--fill-0, black)" height="244" id="Rectangle" width="451" />
        </mask>
        <g mask="url(#mask0_9_837)">
          <path d={svgPaths.p38ee5880} id="Line 2" stroke="var(--stroke-0, #A8C5DA)" strokeDasharray="2 4" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}

function LineOne() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 244">
      <g id="Line One">
        <mask height="244" id="mask0_9_894" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="451" x="0" y="0">
          <rect fill="var(--fill-0, black)" height="244" id="Rectangle" width="451" />
        </mask>
        <g mask="url(#mask0_9_894)">
          <g id="Background">
            <mask height="203" id="mask1_9_894" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="438" x="1" y="41">
              <path d={svgPaths.p18bb8e00} fill="url(#paint0_radial_9_894)" id="Vector" />
            </mask>
            <g mask="url(#mask1_9_894)">
              <path d={svgPaths.p3f7a3800} fill="var(--fill-0, #1C1C1C)" id="Vector_2" opacity="0.6" />
            </g>
          </g>
          <g id="Line">
            <path d={svgPaths.pc6c9e00} stroke="url(#paint1_linear_9_894)" strokeLinecap="round" />
            <path d={svgPaths.pc6c9e00} stroke="var(--stroke-1, #1C1C1C)" strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
          </g>
        </g>
      </g>
      <defs>
        <radialGradient cx="0" cy="0" gradientTransform="translate(219.862 64.739) rotate(90) scale(119.495 214.16)" gradientUnits="userSpaceOnUse" id="paint0_radial_9_894" r="1">
          <stop stopOpacity="0.08" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_9_894" x1="3.66831" x2="438.114" y1="202.035" y2="202.035">
          <stop stopOpacity="0.4" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Chart1() {
  return (
    <div className="h-[244px] relative shrink-0 w-[451px]" data-name="Chart">
      <LineTwo />
      <LineOne />
    </div>
  );
}

function Graph1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Graph">
      <UpperLine />
      <Dates1 />
      <Chart1 />
    </div>
  );
}

function Chart2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Chart">
      <Numbers />
      <Graph1 />
    </div>
  );
}

function AnalyticsGraph() {
  return (
    <div className="absolute bg-white h-[330px] left-[323.33px] rounded-[16px] top-[422px] w-[538px]" data-name="Analytics Graph">
      <div className="box-border content-stretch flex flex-col gap-[16px] h-[330px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-[538px]">
        <Info />
        <Chart2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pfa6ba00} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Search Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Icon16 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1c1c1c] text-[15px]">Fin|</p>
          <div className="relative shrink-0 size-[9px]" data-name="Close">
            <div className="absolute inset-[-3.93%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p154e8600} id="Close" stroke="var(--stroke-0, #1C1C1C)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[25px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Role() {
  return (
    <div className="bg-[#1c1c1c] box-border content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="Role">
      <p className="font-['Area_Normal:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Role</p>
      <div className="relative shrink-0 size-[9px]" data-name="Vector">
        <div className="absolute inset-[-3.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p154e8600} id="Vector" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] box-border content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="Messages">
      <p className="font-['Area_Normal:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">Messages</p>
    </div>
  );
}

function Files() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] box-border content-stretch flex gap-[6px] items-center overflow-clip px-[16px] py-[6px] relative rounded-[24px] shrink-0" data-name="Files">
      <p className="font-['Area_Normal:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">Files</p>
    </div>
  );
}

function Filters() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] overflow-clip top-[43px]" data-name="Filters">
      <Role />
      <Messages />
      <Files />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] content-stretch flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-center text-nowrap whitespace-pre">AB</p>
    </div>
  );
}

function User() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] overflow-clip top-[125px]" data-name="User">
      <Avatar />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] text-nowrap whitespace-pre">Ashley Barret</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] content-stretch flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-center text-nowrap whitespace-pre">TD</p>
    </div>
  );
}

function User1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] overflow-clip top-[173px]" data-name="User">
      <Avatar1 />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] text-nowrap whitespace-pre">Ted Darren</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] content-stretch flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-center text-nowrap whitespace-pre">MK</p>
    </div>
  );
}

function User2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] overflow-clip top-[221px]" data-name="User">
      <Avatar2 />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] text-nowrap whitespace-pre">Mike Koo</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[40px] left-[16px] right-[16px] rounded-[24px] top-[277px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[16px] py-0 relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">Show All</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Results() {
  return (
    <div className="bg-white h-[333px] relative rounded-[24px] shrink-0 w-full" data-name="Results">
      <div className="h-[333px] overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] left-[16px] not-italic text-[#1c1c1c] text-[12px] text-nowrap top-[16px] whitespace-pre">Filters</p>
        <Filters />
        <p className="absolute font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] left-[16px] not-italic text-[#1c1c1c] text-[12px] text-nowrap top-[98px] whitespace-pre">Results</p>
        <User />
        <User1 />
        <User2 />
        <Button />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SearchResults() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[889.67px] top-[438px] w-[360px]" data-name="Search Results">
      <SearchBar />
      <Results />
    </div>
  );
}

function Sidebar2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Sidebar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Sidebar">
          <path d={svgPaths.pb1bd5f0} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p33bc7a00} fill="var(--fill-0, #1C1C1C)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <Sidebar2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="Name">
      <div className="css-9s1c2v flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] text-center w-full">
        <p className="leading-[20px]">Breadcrumb</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Item">
      <Name />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="Divider">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[13px] text-[rgba(28,28,28,0.2)] w-full">/</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0" data-name="Name">
      <div className="css-gv6zft flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-center w-full">
        <p className="leading-[20px]">Breadcrumb</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Item">
      <Name1 />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="Breadcrumbs">
      <Item />
      <Divider />
      <Item1 />
    </div>
  );
}

function Breadcrumbs1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[656px] top-[310px]" data-name="Breadcrumbs">
      <Container1 />
      <Breadcrumbs />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white left-[50px] rounded-[4px] top-[606px] w-[241px]" data-name="Body">
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[20px] relative rounded-[inherit] w-[241px]">
        <p className="font-['Area_Normal:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">Tooltip Title</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Tip() {
  return (
    <div className="absolute h-[8px] left-[162px] overflow-clip top-[665px] w-[17px]" data-name="Tip">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071068286895752)+(var(--transform-inner-height)*0.7071068286895752)))] items-center justify-center left-0 top-[-8.48px] w-[calc(1px*((var(--transform-inner-height)*0.7071068286895752)+(var(--transform-inner-width)*0.7071068286895752)))]" style={{ "--transform-inner-width": "12", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="bg-[#1c1c1c] relative rounded-[2px] size-[12px]" data-name="Rectangle">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute contents left-[50px] top-[606px]" data-name="Tooltip">
      <Body />
      <Tip />
    </div>
  );
}

function Avatars() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[60px]" data-name="Avatars">
      <div className="relative shrink-0 size-[40px]" data-name="Avatar">
        <div className="absolute inset-[-110%_-140%_-140%_-110%]">
          <img alt="" className="block max-w-none size-full" height="140" src={imgAvatar} width="140" />
        </div>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="Avatar">
        <div className="absolute inset-[-110%_-140%_-140%_-110%]">
          <img alt="" className="block max-w-none size-full" height="140" src={imgAvatar1} width="140" />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0" data-name="Text">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] relative shrink-0 text-[#1c1c1c] text-[14px] w-full">You have a notification.</p>
      <p className="font-['Area_Normal:SemiBold',_sans-serif] relative shrink-0 text-[12px] text-[rgba(28,28,28,0.5)] w-full">Click to see more</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Avatars />
      <Text />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p12f8ad00} fill="var(--fill-0, #1C1C1C)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function QuickNotification() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-center justify-center left-[988px] p-[16px] rounded-[100px] top-[256px] w-[400px]" data-name="Quick Notification">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <Container2 />
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p39615d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Icon19 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#1c1c1c] text-[15px]">0000 0000 0000 0000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CardNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Card Number">
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] w-full">Card number</p>
      <Field />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p37cab180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Icon20 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#1c1c1c] text-[15px]">MM / YY</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Expiry() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative self-stretch shrink-0" data-name="Expiry">
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] w-full">Expiration</p>
      <Field1 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa6a0900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <Icon21 />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#1c1c1c] text-[15px]">CVC</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Security() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative self-stretch shrink-0" data-name="Security">
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] w-full">Security code</p>
      <Field2 />
    </div>
  );
}

function DateSecurity() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Date & Security">
      <Expiry />
      <Security />
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#1c1c1c] text-[15px]">Sarah Garret</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Cardholder() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Cardholder">
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] w-full">Cardholder name</p>
      <Field3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1c1c1c] h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <p className="font-['Area_Normal:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Pay $12.99</p>
        </div>
      </div>
    </div>
  );
}

function Disclosure() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Disclosure">
      <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <path clipRule="evenodd" d={svgPaths.p25b04c80} fill="var(--fill-0, #1C1C1C)" fillRule="evenodd" id="Icon" opacity="0.6" />
        </svg>
      </div>
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-nowrap whitespace-pre">This is a secure transaction.</p>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Action">
      <Button2 />
      <Disclosure />
    </div>
  );
}

function PaymentForm() {
  return (
    <div className="absolute bg-white left-[1278px] rounded-[24px] top-[647px] w-[400px]" data-name="Payment Form">
      <div className="box-border content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-[400px]">
        <CardNumber />
        <DateSecurity />
        <Cardholder />
        <Action />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Speedometer() {
  return (
    <div className="absolute contents left-[1388px] top-[333px]" data-name="Speedometer">
      <div className="absolute h-[231.31px] left-[1388px] top-[333px] w-[260px]" data-name="Outer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 232">
          <path d={svgPaths.p2eb9180} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.05" id="Outer" />
        </svg>
      </div>
      <div className="absolute h-[180.942px] left-[1388px] top-[377.82px] w-[63.444px]" data-name="Progress">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 181">
          <path d={svgPaths.p2fb10480} fill="var(--fill-0, #1C1C1C)" id="Progress" />
        </svg>
      </div>
      <div className="absolute h-[146.323px] left-[1438px] top-[383px] w-[160px]" data-name="Inner">
        <img alt="" className="block max-w-none size-full" height="146.323" src={imgInner} width="160" />
      </div>
      <p className="absolute font-['Area_Normal:SemiBold',_sans-serif] leading-[12px] left-[1461px] not-italic text-[#1c1c1c] text-[12px] text-nowrap top-[527px] whitespace-pre">00</p>
      <p className="absolute font-['Area_Normal:SemiBold',_sans-serif] leading-[12px] left-[1555px] not-italic text-[#1c1c1c] text-[12px] text-nowrap top-[531px] whitespace-pre">100</p>
      <div className="absolute inset-[40.38%_11.47%_57.5%_87.15%]" data-name="Handle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p6823600} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.05" id="Handle" />
        </svg>
      </div>
      <div className="absolute inset-[35.36%_11.8%_58.02%_83.91%]" data-name="Arrow">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 74">
          <path d={svgPaths.p26be2580} fill="var(--fill-0, #1C1C1C)" id="Arrow" />
        </svg>
      </div>
      <div className="absolute inset-[41.06%_12.01%_58.32%_87.59%]" data-name="Handle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <path d={svgPaths.p25d3d880} fill="var(--fill-0, white)" id="Handle" />
        </svg>
      </div>
      <p className="absolute font-['Area_Normal:Bold',_sans-serif] leading-[36px] left-[1479px] not-italic text-[#1c1c1c] text-[36px] text-nowrap top-[549px] whitespace-pre">78%</p>
    </div>
  );
}

function Description() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[1.2] min-h-px min-w-px not-italic relative shrink-0" data-name="Description">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] relative shrink-0 text-[#1c1c1c] text-[14px] w-full">Connor Jackson</p>
      <p className="font-['Area_Normal:SemiBold',_sans-serif] relative shrink-0 text-[12px] text-[rgba(28,28,28,0.5)] w-full">28 mins ago</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Avatar">
        <div className="absolute inset-[-5%_-7.5%_-10%_-7.5%]">
          <img alt="" className="block max-w-none size-full" height="46" src={imgAvatar2} width="46" />
        </div>
      </div>
      <Description />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bc90b00} fill="var(--fill-0, #1C1C1C)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-end relative shrink-0 w-full" data-name="Top">
      <Container3 />
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a8fa680} id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Comments() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Comments">
      <Icon23 />
      <p className="basis-0 font-['Area_Normal:ExtraBold',_sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.5)]">24</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1c1c1c] box-border content-stretch flex items-start px-[24px] py-[12px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[12px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">View</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Comments />
      <Button3 />
    </div>
  );
}

function Notification1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] items-start left-[1115px] p-[24px] rounded-[24px] top-[50px] w-[400px]" data-name="Notification">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <Top />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] w-full">Hi Susan, have you seen the annual reports yet?</p>
      <Container4 />
    </div>
  );
}

function Field4() {
  return (
    <div className="absolute contents left-[115px] top-[797px]" data-name="Field">
      <div className="absolute bg-white h-[56px] left-[115px] rounded-br-[100px] rounded-tr-[100px] top-[797px] w-[285px]" data-name="BG">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-br-[100px] rounded-tr-[100px]" />
      </div>
      <p className="absolute font-['Area_Normal:Bold',_sans-serif] leading-[normal] left-[137px] not-italic text-[16px] text-[rgba(28,28,28,0.3)] text-nowrap top-[calc(50%+260.5px)] whitespace-pre">Phone Number</p>
    </div>
  );
}

function CountryCode() {
  return (
    <div className="absolute contents left-[50px] top-[797px]" data-name="Country Code">
      <div className="absolute bg-[rgba(28,28,28,0.05)] h-[56px] left-[50px] rounded-bl-[100px] rounded-tl-[100px] top-[797px] w-[66px]" data-name="BG">
        <div aria-hidden="true" className="absolute border-[1px_0px_1px_1px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tl-[100px]" />
      </div>
      <p className="absolute font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] left-[calc(50%-790px)] not-italic text-[#1c1c1c] text-[16px] text-nowrap top-[calc(50%+260.5px)] whitespace-pre">+1</p>
    </div>
  );
}

function InputFIeld() {
  return (
    <div className="absolute contents left-[50px] top-[797px]" data-name="Input FIeld">
      <Field4 />
      <CountryCode />
    </div>
  );
}

function Field5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Field">
      <div className="[grid-area:1_/_1] bg-white h-[56px] ml-0 mt-0 relative rounded-bl-[100px] rounded-tl-[100px] w-[285px]" data-name="BG">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[100px] rounded-tl-[100px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Area_Normal:Bold',_sans-serif] leading-[normal] ml-[22px] mt-[23px] not-italic relative text-[16px] text-[rgba(28,28,28,0.3)] text-nowrap whitespace-pre">0.00</p>
    </div>
  );
}

function Value() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Value">
      <div className="[grid-area:1_/_1] bg-[rgba(28,28,28,0.05)] h-[56px] ml-0 mt-0 relative rounded-br-[100px] rounded-tr-[100px] w-[66px]" data-name="BG">
        <div aria-hidden="true" className="absolute border-[1px_1px_1px_0px] border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-br-[100px] rounded-tr-[100px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] ml-[16px] mt-[22px] not-italic relative text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">USD</p>
    </div>
  );
}

function InputField() {
  return (
    <div className="absolute box-border content-stretch flex items-center leading-[0] left-[50px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)] top-[885px]" data-name="Input Field">
      <Field5 />
      <Value />
    </div>
  );
}

function Primary() {
  return (
    <div className="bg-[#1c1c1c] box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Button</p>
    </div>
  );
}

function Secondary() {
  return (
    <div className="bg-[#f2f2f2] box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center p-[24px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Secondary">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(28,28,28,0.5)] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function Active1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Active">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function SecondaryActive() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Secondary Active">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(28,28,28,0.5)] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function Hover() {
  return (
    <div className="bg-[rgba(251,251,251,0.75)] box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Hover">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[16px] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function SecondaryHover() {
  return (
    <div className="bg-[#fbfbfb] box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Secondary Hover">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(28,28,28,0.5)] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function Disabled() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Disabled">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#73787d] text-[16px] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function SecondaryDisabled() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[36px] py-[21px] relative rounded-[6px] shrink-0 w-[166px]" data-name="Secondary Disabled">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(28,28,28,0.3)] text-nowrap whitespace-pre">Button</p>
    </div>
  );
}

function ButtonSet() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[20px] items-center left-[433px] top-[783px] w-[352px]" data-name="Button Set">
      <Primary />
      <Secondary />
      <Active1 />
      <SecondaryActive />
      <Hover />
      <SecondaryHover />
      <Disabled />
      <SecondaryDisabled />
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] h-[22px] ml-0 mt-0 relative w-[40px]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 22">
        <g id="Container">
          <rect fill="var(--fill-0, #1C1C1C)" height="22" id="Base" rx="11" width="40" />
          <ellipse cx="29" cy="11" fill="var(--fill-0, white)" id="Dial" rx="9" ry="9" />
        </g>
      </svg>
    </div>
  );
}

function Toggle() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Toggle">
      <Container5 />
    </div>
  );
}

function ToggleOn() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Toggle On">
      <Toggle />
      <p className="[grid-area:1_/_1] font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] ml-[48px] mt-[6px] not-italic relative text-[#1c1c1c] text-[14px] text-nowrap whitespace-pre">On</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] h-[22px] ml-0 mt-0 relative w-[40px]" data-name="Container">
      <div className="absolute bottom-[-4.55%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 23">
          <g id="Container">
            <rect fill="var(--fill-0, #1C1C1C)" fillOpacity="0.05" height="22" id="Base" rx="11" width="40" />
            <g filter="url(#filter0_dd_9_765)" id="Dial">
              <ellipse cx="11" cy="11" fill="var(--fill-0, white)" rx="9" ry="9" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_dd_9_765" width="22" x="0" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_765" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_9_765" mode="normal" result="effect2_dropShadow_9_765" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_9_765" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Toggle">
      <Container6 />
    </div>
  );
}

function ToggleOff() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Toggle Off">
      <Toggle1 />
      <p className="[grid-area:1_/_1] font-['Area_Normal:ExtraBold',_sans-serif] leading-[normal] ml-[48px] mt-[6px] not-italic relative text-[#1c1c1c] text-[14px] text-nowrap whitespace-pre">Off</p>
    </div>
  );
}

function Toggle2() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-center leading-[0] left-[1510px] top-[248px]" data-name="Toggle">
      <ToggleOn />
      <ToggleOff />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute h-[18px] left-[986.17px] top-[374px] w-[167px]" data-name="Slider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167 18">
        <g id="Slider">
          <g id="Container">
            <rect fill="var(--fill-0, #1C1C1C)" fillOpacity="0.05" height="3" rx="1.5" width="167" y="8" />
            <rect height="2" rx="1" stroke="var(--stroke-0, black)" strokeOpacity="0.05" width="166" x="0.5" y="8.5" />
          </g>
          <g id="Progress Bar">
            <rect fill="var(--fill-0, #1C1C1C)" height="3" rx="1.5" width="80" y="8" />
            <rect height="2" rx="1" stroke="var(--stroke-0, black)" strokeOpacity="0.05" width="79" x="0.5" y="8.5" />
          </g>
          <g id="Toggle">
            <circle cx="81" cy="9" fill="var(--fill-0, white)" r="9" />
            <circle cx="81" cy="9" r="7.5" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M11 14L5 8L11 2" id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Previous() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Previous">
      <div className="[grid-area:1_/_1] flex flex-col font-['Area_Normal:ExtraBold',_sans-serif] justify-center ml-[34px] mt-[8.5px] not-italic relative text-[14px] text-[rgba(28,28,28,0.5)] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Prev</p>
      </div>
      <Icon24 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[rgba(28,28,28,0.05)] relative rounded-[5px] shrink-0 size-[38px]" data-name="1">
      <div className="overflow-clip relative rounded-[inherit] size-[38px]">
        <div className="absolute flex flex-col font-['Area_Normal:Bold',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#1c1c1c] text-[14px] text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1c1c1c] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#fbfbfb] overflow-clip relative rounded-[5px] shrink-0 size-[38px]" data-name="2">
      <div className="absolute flex flex-col font-['Area_Normal:ExtraBold',_sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#1c1c1c] text-[14px] text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#fbfbfb] overflow-clip relative rounded-[5px] shrink-0 size-[38px]" data-name="...">
      <div className="absolute flex flex-col font-['Area_Normal:ExtraBold',_sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#1c1c1c] text-[14px] text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">...</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#fbfbfb] overflow-clip relative rounded-[5px] shrink-0 size-[38px]" data-name="9">
      <div className="absolute flex flex-col font-['Area_Normal:ExtraBold',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#1c1c1c] text-[14px] text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#fbfbfb] overflow-clip relative rounded-[5px] shrink-0 size-[38px]" data-name="10">
      <div className="absolute flex flex-col font-['Area_Normal:ExtraBold',_sans-serif] justify-center leading-[0] left-1/2 not-italic text-[#1c1c1c] text-[14px] text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Count">
      <Component1 />
      <Component2 />
      <Component />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="[grid-area:1_/_1] ml-[37px] mt-0 relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5 14L11 8L5 2" id="Vector" stroke="var(--stroke-0, #1C1C1C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Next() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Next">
      <div className="[grid-area:1_/_1] flex flex-col font-['Area_Normal:ExtraBold',_sans-serif] justify-center ml-[17px] mt-[8.5px] not-italic relative text-[#1c1c1c] text-[14px] text-center text-nowrap translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Next</p>
      </div>
      <Icon25 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute content-stretch flex gap-[17px] items-center left-[851.5px] top-[943px]" data-name="Pagination">
      <Previous />
      <Count />
      <Next />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute contents left-[851.5px] top-[855px]" data-name="Container">
      <div className="absolute bg-white h-[56px] left-[851.5px] rounded-[100px] top-[855px] w-[360px]" data-name="Field">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <p className="absolute font-['Area_Normal:Bold',_sans-serif] leading-[normal] left-[872.97px] not-italic text-[16px] text-[rgba(28,28,28,0.3)] top-[calc(50%+318.5px)] w-[142.737px]">Type in...</p>
    </div>
  );
}

function InputField1() {
  return (
    <div className="absolute contents left-[851.5px] top-[855px]" data-name="Input Field">
      <Container7 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#1c1c1c] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Search</p>
    </div>
  );
}

function SearchField() {
  return (
    <div className="absolute bg-[#fbfbfb] box-border content-stretch flex items-center justify-between left-[50px] pl-[24px] pr-[8px] py-[8px] rounded-[100px] top-[973px] w-[351px]" data-name="Search Field">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.5)] text-nowrap whitespace-pre">Search anything...</p>
      <Button4 />
    </div>
  );
}

function Target() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Target">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_9_867)" id="Target">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_9_867">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[4px] relative shrink-0" data-name="Icon">
      <Target />
    </div>
  );
}

function Message() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative rounded-[8px] shrink-0" data-name="Message">
      <p className="[white-space-collapse:collapse] font-['Area_Normal:ExtraBold',_sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#1c1c1c] text-[13px] text-nowrap w-full">Some event has occurred.</p>
      <p className="font-['Area_Normal:Regular',_sans-serif] leading-[18px] relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)] w-full">Just now</p>
    </div>
  );
}

function ToastMessage() {
  return (
    <div className="absolute box-border content-start flex flex-wrap gap-[8px] items-start left-[851.5px] p-[8px] rounded-[12px] top-[1013px] w-[248px]" data-name="Toast Message">
      <Icon26 />
      <Message />
    </div>
  );
}

function Checked() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checked">
      <div className="absolute inset-[-220%_-280%_-280%_-220%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <g filter="url(#filter0_d_9_757)" id="Checked">
            <rect fill="var(--fill-0, #1C1C1C)" height="20" rx="5" shapeRendering="crispEdges" width="20" x="44" y="44" />
            <path d="M49 53.4783L53.8148 58L59 50" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_9_757" width="120" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="6" dy="6" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_757" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_757" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <div className="absolute inset-[-220%_-280%_-280%_-220%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <g filter="url(#filter0_d_9_757)" id="Checked">
            <rect fill="var(--fill-0, #1C1C1C)" height="20" rx="5" shapeRendering="crispEdges" width="20" x="44" y="44" />
            <path d="M49 53.4783L53.8148 58L59 50" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_9_757" width="120" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="6" dy="6" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_757" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_757" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Checked1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Checked">
      <Checkbox />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] text-nowrap whitespace-pre">Checked</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[89px]">
      <Checked />
      <Checked1 />
    </div>
  );
}

function Unchecked() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[20px]" data-name="Unchecked">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[5px] shrink-0 size-[20px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Defaultt() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Defaultt">
      <Checkbox1 />
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] text-nowrap whitespace-pre">Default</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[77px]">
      <Unchecked />
      <Defaultt />
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="absolute content-stretch flex gap-[43px] items-center left-[66px] top-[705px]" data-name="Checkboxes">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function MinimalistUiKit() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Minimalist UI Kit">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Card />
        <IconSet />
        <SidebarItems />
        <Calendar />
        <Modal />
        <Tabs />
        <Dropdown />
        <AnalyticsGraph />
        <SearchResults />
        <Breadcrumbs1 />
        <Tooltip />
        <QuickNotification />
        <PaymentForm />
        <Speedometer />
        <Notification1 />
        <InputFIeld />
        <InputField />
        <ButtonSet />
        <Toggle2 />
        <Slider />
        <Pagination />
        <InputField1 />
        <SearchField />
        <ToastMessage />
        <Checkboxes />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[-25px_-25px_25px_0px_rgba(213,213,213,0.15),25px_25px_25px_0px_rgba(213,213,213,0.15)]" />
    </div>
  );
}