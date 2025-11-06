import svgPaths from "./svg-aat9vjzwyu";

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

function CardNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Card Number">
      <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] w-full">Card number</p>
      <Field />
    </div>
  );
}

function Icon1() {
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
          <Icon1 />
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

function Icon2() {
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
          <Icon2 />
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

function Button() {
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
      <Button />
      <Disclosure />
    </div>
  );
}

export default function PaymentForm() {
  return (
    <div className="bg-white relative rounded-[24px] size-full" data-name="Payment Form">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative size-full">
          <CardNumber />
          <DateSecurity />
          <Cardholder />
          <Action />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}