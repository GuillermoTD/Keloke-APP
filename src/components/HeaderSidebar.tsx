import { EllipsisVerticalIcon, MessageSquareText } from 'lucide-react';

const HeaderSidebar = () => {
  return (
    <div className="w-[100%] h-[3.8rem] flex items-center justify-between px-[1rem] overflow-hidden border-[1px]">
      <div className="w-[2.8rem] h-[2.8rem] bg-emerald-300 rounded-full"></div>
      <div className="flex gap-[1rem]">
        <EllipsisVerticalIcon size={20} strokeWidth={1.5} />
        <MessageSquareText size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default HeaderSidebar;
