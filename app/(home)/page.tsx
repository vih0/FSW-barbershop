import Image from "next/image";
import {format} from 'date-fns'
import Header from "../_components/Header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
  <div>
    <Header/>
    <div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Ola,Miguel</h2>
    <p className="text-sm">{format(Date(),"EEEE',' d 'de' MMMM",{
      locale:ptBR
    })}</p>
    </div>
  </div>
  );
}
