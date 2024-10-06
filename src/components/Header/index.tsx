import { Button } from '../ui/button'

const Header = () => {
  return (
    <div 
        className="fixed flex justify-between px-8 w-screen h-16 bg-gray-500 
        items-center drop-shadow-2xl shadow-md z-10">
            <h1 className="font-bold text-2xl">Meditation-Program</h1>
            <div className="flex gap-3">
                <Button variant="outline">
                    <a href="https://ui.shadcn.com/docs">Meditation-Programとは？</a>
                </Button>
                <Button>menu</Button>
            </div>
    </div>
  )
}

export default Header;
