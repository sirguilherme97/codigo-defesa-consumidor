import { Popover } from '@headlessui/react'
export function T5() {
    return (
        <div className='w-screen px-20 mt-12 flex items-center justify-start '>
            <Popover>
                <Popover.Button className='flex flex-col items-start justify-center'>
                    <h1 className='text-xl font-bold text-rep'>Titulo V</h1>
                    <p className='text-lg'>Da Convenção Coletiva de Consumo</p>
                </Popover.Button>
                <Popover.Panel className='mt-4 ml-6'>
                    <p><strong>Art. 107.</strong> As entidades civis de consumidores e as associações de fornecedores ou sindicatos de categoria econômica podem regular, por convenção escrita, relações de consumo que tenham por objeto estabelecer condições relativas ao preço, à qualidade, à quantidade, à garantia e características de produtos e serviços, bem como à reclamação e composição do conflito de consumo.</p>
                    <div className='ml-6'>
                        <p><strong>§ 1°</strong> A convenção tornar-se-á obrigatória a partir do registro do instrumento no cartório de títulos e documentos.</p>
                        <p><strong>§ 2°</strong> A convenção somente obrigará os filiados às entidades signatárias.</p>
                        <p><strong>§ 3°</strong> Não se exime de cumprir a convenção o fornecedor que se desligar da entidade em data posterior ao registro do instrumento.</p>
                    </div>
                    <p><strong>Art. 108.</strong> (Vetado).</p>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
