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

export default function Buttons() {
  return (
    <div className="relative rounded-bl-[24px] rounded-br-[24px] size-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex items-center justify-end p-[12px] relative size-full">
          <Cancel />
          <Confirm />
        </div>
      </div>
    </div>
  );
}