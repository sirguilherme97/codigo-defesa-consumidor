import { Popover } from '@headlessui/react'
export function T6() {
    return (
        <div className='w-screen px-20 mt-12 flex items-center justify-start '>
            <Popover>
                <Popover.Button className='flex flex-col items-start justify-center '>
                    <h1 className='text-xl font-bold'>Titulo VI</h1>
                    <p className='text-lg'>Disposições Finais</p>
                </Popover.Button>
                <Popover.Panel>
                    <h1>Oque_vai_aparecer_no_Painel</h1>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
