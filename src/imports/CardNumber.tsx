import svgPaths from "./svg-jqx8eibki1";

function Icon() {
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
          <Icon />
          <p className="basis-0 font-['Area_Normal:SemiBold',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[#1c1c1c] text-[15px]">0000 0000 0000 0000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function CardNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Card Number">
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] w-full">Card number</p>
      <Field />
    </div>
  );
}