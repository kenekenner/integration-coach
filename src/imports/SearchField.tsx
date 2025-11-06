function Button() {
  return (
    <div className="bg-[#1c1c1c] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Area_Normal:ExtraBold',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Search</p>
    </div>
  );
}

export default function SearchField() {
  return (
    <div className="bg-[#fbfbfb] relative rounded-[100px] size-full" data-name="Search Field">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[6px_6px_50px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[24px] pr-[8px] py-[8px] relative size-full">
          <p className="font-['Area_Normal:SemiBold',_sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.5)] text-nowrap whitespace-pre">Search anything...</p>
          <Button />
        </div>
      </div>
    </div>
  );
}