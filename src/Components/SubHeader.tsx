import { Popover } from "@headlessui/react";
import { MdVerifiedUser } from "react-icons/md";
export function SubHeader() {

    return (
        <div className='w-screen h-auto flex flex-col items-center justify-around '>
            <strong><a href="https://legislacao.presidencia.gov.br/atos/?tipo=LEI&numero=8078&ano=1990&ato=376UTRq1keFpWTab7" className="underline" target='_blank'>LEI Nº 8.078, DE 11 DE SETEMBRO DE 1990.</a></strong>
            <Popover>
                <Popover.Button>
                    <div className="flex gap-4 px-4 py-2 text-rep">
                        <p className="font-bold text-xl">Link Oficiais</p>
                        <MdVerifiedUser size={24} />
                    </div>
                </Popover.Button>
                <Popover.Panel>
                    <ul className="grid grid-cols-3 px-8 py-4 sm:gap-2 gap-6 sm:flex flex-col ">
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#art118">Vigência</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/leis/Mensagem_Veto/anterior_98/vep664-L8078-90.htm">Mensagem de veto</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2006/Decreto/D5903.htm">Regulamento</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Decreto/D6523.htm">Regulamento</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2013/Decreto/D7962.htm">Regulamento</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/decreto/D2181.htm">(Vide Decreto nº 2.181, de 1997)</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2017/Lei/L13425.htm#art17">(Vide pela Lei nº 13.425, de 2017) (Vigência)</a></li>
                        <li><a
                            target="_blank"
                            className="text-md font-normal underline underline-offset-1 text-zinc-600 hover:text-rep hover:font-medium transition-all"
                            href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2022/Decreto/D11034.htm#art18">(Vide Decreto nº 11.034, de 2022) (Vigência)</a></li>
                    </ul>
                </Popover.Panel>
            </Popover>
            <p className="text-zinc-700 leading-relaxed">Dispõe sobre a proteção do consumidor e dá outras providências.</p>
            <p className="text-zinc-700 leading-relaxed"><strong>O PRESIDENTE DA REPÚBLICA</strong>, faço saber que o Congresso Nacional decreta e eu sanciono a seguinte lei:</p>
        </div>
    )
}
