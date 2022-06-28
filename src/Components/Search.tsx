import { Dialog } from '@headlessui/react'
import { useState } from "react"
import ListaArt from '../../listaBusca.json'
import { Header } from './Header';
import { MagnifyingGlass } from 'phosphor-react'


export function Search() {
    const [busca, setBusca] = useState('');
    let [isOpen, setIsOpen] = useState(true)
    const lowerBusca = busca.toLowerCase()
    const ListaFiltrada = ListaArt.Lista.filter((Lista) => Lista.toLowerCase().includes(lowerBusca))


    return (
        <div className="flex items-center justify-start px-20 py-2">
            <div>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-rep px-2 py-2 text-zinc-50 flex items-center gap-2 font-medium rounded hover:opacity-80 transition-colors'>
                    <MagnifyingGlass size={24} />
                    Pesquisar Artigo
                </button>
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className='bg-zinc-50 absolute top-0 left-0 w-screen h-screen py-0 leading-relaxed'>
                    <Header />
                    <div className='flex flex-col gap-4 px-20 py-12'>
                        <Dialog.Title className='text-2xl font-medium text-zinc-800'>Pesquisar Artigo</Dialog.Title>
                        <Dialog.Description className='text-zinc-700'>
                            Se você deseja buscar um artigo específico, indique-o na busca abaixo
                        </Dialog.Description>
                        <input
                            value={busca}
                            placeholder="Ex: Art 72"
                            className="max-w-[200px] px-2 py-2 bg-zinc-300 border-2 border-rep text-zinc-900 placeholder:text-zinc-900"
                            onChange={(ev) => setBusca(ev.target.value)}
                            type="text" />

                        <button
                            className='bg-rep max-w-[200px] px-2 py-2 text-zinc-50 font-medium rounded hover:opacity-80 transition-colors'
                            onClick={() => setIsOpen(false)}>
                            Voltar
                        </button>
                    </div>
                    <div className='px-8'>
                        {busca == '' ? (
                            <></>
                        ) : (
                            <div className="px-12 font-medium text-zinc-900">
                                <ul>
                                    {ListaFiltrada.map((lista: any) => (
                                        <li key={lista}>{lista}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Dialog.Panel>
            </Dialog>

        </div>
    )
}
