import { useState } from 'react';
import { Button } from '../ui/button'
import Window from './window';


const Header = () => {
    const [openWindow, setopenWindow] = useState (false);

    const openClick = () => {
        setopenWindow (true);
    };

    const closeClick = () => {
        setopenWindow (false);
    };

  return (
    <div
        className="fixed flex justify-between px-8 w-screen h-16 bg-gray-500 
        items-center drop-shadow-2xl shadow-md z-10">
            <h1 className="font-bold text-2xl">Meditation-Program</h1>
            <div className="flex gap-3">
                <div>
                    <Button 
                    onClick={openClick}
                    variant="outline">
                        そもそも瞑想とは？
                    </Button>
                    <Window openWindow={openWindow} onClose= {closeClick} />
                </div>
                <Button>menu</Button>
            </div>
    </div>
  )
}

export default Header;
