import { useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function NotFound() {

  return (
    
    <div className="container flex mx-auto items-center h-screen">
    <div className="flex w-full">
    </div>
    <div className="flex flex-col w-full">
        <div className="flex justify-center items-center flex-col w-full rounded text-white">
            <p className="text-main-main">
                Nie znaleziono!
            </p>
            <p className="text-sub-sub">
            Zab³¹dzi³eœ w naszym tajemniczym kocim labiryncie.
            Naciœniêcie przycisku powrotu do strony g³ównej spowoduje powrót do cywilizacji.
            </p>
            <div className="flex justify-center items-center flex-col w-2/5 bg-white p-2 rounded border border-gray-primary">
            <ButtonCustom link="/" name="Home" color="white" icon={<HomeOutlinedIcon />} />
            </div>
        </div>
    </div>
</div>

  );
}