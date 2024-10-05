import { Button } from '../ui/button'

const Index = () => {
  return (
    <div className="fixed flex justify-between px-8 w-screen h-16 bg-teal-400 items-center drop-shadow-2xl border-b border-gray-300 shadow-md">
            <h1 className="font-bold text-2xl">meditation-program</h1>
            <div className="flex gap-3">
                <Button variant="outline">
                    <a href="https://ui.shadcn.com/docs">そもそも瞑想とは？</a>
                </Button>
                <Button>menu</Button>
            </div>
    </div>
  )
}

export default Index
