import { useState } from 'react';
import { Button } from '../ui/button'
import { Mail } from 'lucide-react';
import Window from './window';
import { Link } from 'react-router-dom';



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
            <Link to= "/"><h1 className="font-bold font-Obitron text-2xl">Meditation-Program</h1></Link>
            <div className="flex gap-3">
                <div>
                    <Button 
                    onClick={openClick}
                    variant="outline">
                        自然の力とは？
                    </Button>
                    <Window openWindow={openWindow} onClose= {closeClick} />
                </div>
                <Button className='gap-3'><Mail />お問い合わせはこちら</Button>
            </div>
    </div>
  )
}

export default Header;
