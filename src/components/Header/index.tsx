import { useState } from 'react';
import { Button } from '../ui/button'
import { CircleHelp, Mail } from 'lucide-react';
import Window from './window';
import { Link } from 'react-router-dom';
import Menu from './menu';



const Header = () => {
    const [openWindow, setopenWindow] = useState (false);

    const openClick = () => {
        setopenWindow (true);
    };

    const closeClick = () => {
        setopenWindow (!openWindow);
    };

  return (
    <div
        className="fixed flex justify-between px-8 w-screen h-16 bg-gray-500 
        items-center drop-shadow-2xl shadow-md z-10">
            <Link to= "/"><h1 className="font-bold font-Obitron text-xl">Meditation-Program</h1></Link>
            <div className="flex gap-3">
                    <Button 
                    onClick={openClick}
                    variant="outline">
                        <div className='max-sm:hidden'>
                            自然の力とは？
                        </div>
                        <div className='sm:hidden'>
                            <CircleHelp />
                        </div>
                    </Button>
                    <Window openWindow={openWindow} onClose= {closeClick} />             
                    <Button className='gap-3 max-sm:hidden'><Mail />お問い合わせはこちら</Button>
                    <Button className='sm:hidden'><Menu /></Button>
            </div>
    </div>
  )
}

export default Header;
