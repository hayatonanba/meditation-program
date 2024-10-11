import { useEffect, useRef, useState } from 'react'
import { Button } from './button';
import { Volume2, VolumeX } from 'lucide-react';

interface BgmPlayerProps {
    src: string;
  }  

const BgmPlayer: React.FC<BgmPlayerProps> = ({src}) => {

    const [isPlayed, setIsPlayed]= useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleplay = () => {
        setIsPlayed(!isPlayed)
    }

    useEffect (() => {
        if (audioRef.current) {
        isPlayed ? audioRef.current.play() : audioRef.current.pause()
        }
    },[isPlayed])
  return (
    <div>
        <audio
            ref={audioRef}
            src={src}
            loop
            autoPlay
        />
        <Button onClick={handleplay}>
            {isPlayed ? <Volume2 /> : <VolumeX />}
        </Button>
    </div>
  )
}

export default BgmPlayer;