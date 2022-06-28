import { Popover } from '@headlessui/react'
export function T4() {
    return (
        <div className='w-screen px-20 mt-12 flex items-center justify-start '>
            <Popover>
                <Popover.Button className='flex flex-col items-start justify-center'>
                    <h1 className='text-xl font-bold text-rep'>Titulo IV</h1>
                    <p className='text-lg'>Do Sistema Nacional de Defesa do Consumidor</p>
                </Popover.Button>
                <Popover.Panel className='mt-4 ml-6'>
                    <p><strong>Art. 105.</strong> Integram o Sistema Nacional de Defesa do Consumidor (SNDC), os órgãos federais, estaduais, do Distrito Federal e municipais e as entidades privadas de defesa do consumidor.</p>
                    <p><strong>Art. 106.</strong> O Departamento Nacional de Defesa do Consumidor, da Secretaria Nacional de Direito Econômico (MJ), ou órgão federal que venha substituí-lo, é organismo de coordenação da política do Sistema Nacional de Defesa do Consumidor, cabendo-lhe:</p>
                    <div className='ml-6'>
                        <p><strong>I -</strong> planejar, elaborar, propor, coordenar e executar a política nacional de proteção ao consumidor;</p>
                        <p><strong>II -</strong> receber, analisar, avaliar e encaminhar consultas, denúncias ou sugestões apresentadas por entidades representativas ou pessoas jurídicas de direito público ou privado;</p>
                        <p><strong>III -</strong> prestar aos consumidores orientação permanente sobre seus direitos e garantias;</p>
                        <p><strong>IV -</strong> informar, conscientizar e motivar o consumidor através dos diferentes meios de comunicação;</p>
                        <p><strong>V -</strong> solicitar à polícia judiciária a instauração de inquérito policial para a apreciação de delito contra os consumidores, nos termos da legislação vigente;</p>
                        <p><strong>VI -</strong> representar ao Ministério Público competente para fins de adoção de medidas processuais no âmbito de suas atribuições;</p>
                        <p><strong>VII -</strong> levar ao conhecimento dos órgãos competentes as infrações de ordem administrativa que violarem os interesses difusos, coletivos, ou individuais dos consumidores;</p>
                        <p><strong>VIII -</strong> solicitar o concurso de órgãos e entidades da União, Estados, do Distrito Federal e Municípios, bem como auxiliar a fiscalização de preços, abastecimento, quantidade e segurança de bens e serviços;</p>
                        <p><strong>IX -</strong> incentivar, inclusive com recursos financeiros e outros programas especiais, a formação de entidades de defesa do consumidor pela população e pelos órgãos públicos estaduais e municipais;</p>
                        <p><strong>X -</strong> (Vetado).</p>
                        <p><strong>XI -</strong> (Vetado).</p>
                        <p><strong>XII -</strong> (Vetado)</p>
                        <p><strong>XIII -</strong> desenvolver outras atividades compatíveis com suas finalidades.</p>
                        <p>Parágrafo único. Para a consecução de seus objetivos, o Departamento Nacional de Defesa do Consumidor poderá solicitar o concurso de órgãos e entidades de notória especialização técnico-científica.</p>
                    </div>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
