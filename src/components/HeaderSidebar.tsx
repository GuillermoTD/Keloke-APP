import { EllipsisVerticalIcon, Plus } from 'lucide-react';


const HeaderSidebar = () => {
  return (
    <div className="w-[100%] h-[3.8rem] flex items-center justify-between px-[1rem] overflow-hidden border-[1px]">
      <h2 className="text-[1.2rem] font-semibold">Chats</h2>
      <div className="flex gap-[1rem]">
        <button className='ButtonIcon'>
          <Plus size={22} strokeWidth={1.5}/>
        </button>

        <button className='ButtonIcon'>
          <EllipsisVerticalIcon size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default HeaderSidebar;
