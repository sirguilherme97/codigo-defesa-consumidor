import { Popover } from '@headlessui/react'
export function T3() {
    return (
        <div className='w-screen px-20 mt-12 flex items-center justify-start '>
            <Popover>
                <Popover.Button className='flex flex-col items-start justify-center '>
                    <h1 className='text-xl font-bold'>Titulo III</h1>
                    <p className='text-lg'>Da Defesa do Consumidor em Juízo</p>
                </Popover.Button>
                <Popover.Panel>
                    <h1>Oque_vai_aparecer_no_Painel</h1>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
