import { Popover } from '@headlessui/react'
export function T1() {
    return (
        <div className='w-screen px-20 sm:px-8 mt-12 flex items-center justify-start '>
            <Popover>
                <Popover.Button className='flex flex-col items-start justify-center '>
                    <h1 className='text-xl font-bold text-rep'>Titulo I</h1>
                    <p className='text-lg'>Dos Direitos do Consumidor</p>
                </Popover.Button>
                <Popover.Panel>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo I</h1>
                            <p>Disposições Gerais</p>
                        </Popover.Button>

                        <Popover.Panel className='mt-4 ml-6'>
                            <div className='leading-relaxed flex flex-col gap-4'>
                                <p><strong>Art. 1°</strong> O presente código estabelece normas de proteção e defesa do consumidor, de ordem pública e interesse social, nos termos dos arts. 5°, inciso XXXII, 170, inciso V, da Constituição Federal e art. 48 de suas Disposições Transitórias.</p>
                                <div>
                                    <p><strong>Art. 2°</strong> Consumidor é toda pessoa física ou jurídica que adquire ou utiliza produto ou serviço como destinatário final.</p>
                                    <p className='ml-7'> Parágrafo único. Equipara-se a consumidor a coletividade de pessoas, ainda que indetermináveis, que haja intervindo nas relações de consumo.</p>
                                </div>
                                <div>
                                    <p><strong>Art. 3°</strong> Fornecedor é toda pessoa física ou jurídica, pública ou privada, nacional ou estrangeira, bem como os entes despersonalizados, que desenvolvem atividade de produção, montagem, criação, construção, transformação, importação, exportação, distribuição ou comercialização de produtos ou prestação de serviços.</p>
                                    <p className='ml-7'><strong>§ 1°</strong> Produto é qualquer bem, móvel ou imóvel, material ou imaterial.</p>
                                    <p className='ml-7'><strong>§ 2°</strong> Serviço é qualquer atividade fornecida no mercado de consumo, mediante remuneração, inclusive as de natureza bancária, financeira, de crédito e securitária, salvo as decorrentes das relações de caráter trabalhista.</p>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo II</h1>
                            <p>Da Política Nacional de Relações de Consumo</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <div className='leading-relaxed flex flex-col gap-4'>
                                <p><strong>Art. 4º</strong> A Política Nacional das Relações de Consumo tem por objetivo o atendimento das necessidades dos consumidores, o respeito à sua dignidade, saúde e segurança, a proteção de seus interesses econômicos, a melhoria da sua qualidade de vida, bem como a transparência e harmonia das relações de consumo, atendidos os seguintes princípios: <a href="http://www.planalto.gov.br/ccivil_03/leis/L9008.htm#art7" className="underline text-rep font-semibold" target='_blank'> (Redação dada pela Lei nº 9.008, de 21.3.1995)</a></p>
                                <div className='ml-4'>
                                    <p><strong>I -</strong> reconhecimento da vulnerabilidade do consumidor no mercado de consumo;</p>
                                    <p><strong>II -</strong> ação governamental no sentido de proteger efetivamente o consumidor:</p>
                                    <div className='ml-4'>
                                        <p><strong>a)</strong> por iniciativa direta;</p>
                                        <p><strong>b)</strong> por incentivos à criação e desenvolvimento de associações representativas;</p>
                                        <p><strong>c)</strong> pela presença do Estado no mercado de consumo;</p>
                                        <p><strong>d)</strong> pela garantia dos produtos e serviços com padrões adequados de qualidade, segurança, durabilidade e desempenho.</p>
                                    </div>
                                    <p><strong>III -</strong> harmonização dos interesses dos participantes das relações de consumo e compatibilização da proteção do consumidor com a necessidade de desenvolvimento econômico e tecnológico, de modo a viabilizar os princípios nos quais se funda a ordem econômica (art. 170, da Constituição Federal), sempre com base na boa-fé e equilíbrio nas relações entre consumidores e fornecedores;</p>
                                    <p><strong>IV -</strong> educação e informação de fornecedores e consumidores, quanto aos seus direitos e deveres, com vistas à melhoria do mercado de consumo;</p>
                                    <p><strong>V -</strong> incentivo à criação pelos fornecedores de meios eficientes de controle de qualidade e segurança de produtos e serviços, assim como de mecanismos alternativos de solução de conflitos de consumo;</p>
                                    <p><strong>VI -</strong> coibição e repressão eficientes de todos os abusos praticados no mercado de consumo, inclusive a concorrência desleal e utilização indevida de inventos e criações industriais das marcas e nomes comerciais e signos distintivos, que possam causar prejuízos aos consumidores;</p>
                                    <p><strong>VII -</strong> racionalização e melhoria dos serviços públicos;</p>
                                    <p><strong>VIII -</strong> estudo constante das modificações do mercado de consumo.</p>
                                    <p><strong>IX -</strong> fomento de ações direcionadas à educação financeira e ambiental dos consumidores; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>X -</strong> prevenção e tratamento do superendividamento como forma de evitar a exclusão social do consumidor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                </div>
                                <p><strong>Art. 5°</strong> Para a execução da Política Nacional das Relações de Consumo, contará o poder público com os seguintes instrumentos, entre outros:</p>
                                <div className='ml-4'>
                                    <p><strong>I -</strong> manutenção de assistência jurídica, integral e gratuita para o consumidor carente;</p>
                                    <p><strong>II -</strong> instituição de Promotorias de Justiça de Defesa do Consumidor, no âmbito do Ministério Público;</p>
                                    <p><strong>III -</strong> criação de delegacias de polícia especializadas no atendimento de consumidores vítimas de infrações penais de consumo;</p>
                                    <p><strong>IV -</strong> criação de Juizados Especiais de Pequenas Causas e Varas Especializadas para a solução de litígios de consumo;</p>
                                    <p><strong>V -</strong> concessão de estímulos à criação e desenvolvimento das Associações de Defesa do Consumidor.</p>
                                    <p><strong>VI -</strong> instituição de mecanismos de prevenção e tratamento extrajudicial e judicial do superendividamento e de proteção do consumidor pessoa natural; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>VII -</strong> instituição de núcleos de conciliação e mediação de conflitos oriundos de superendividamento. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <div className='ml-4'>
                                        <p><strong>§ 1°</strong> (Vetado).</p>
                                        <p><strong>§ 2º</strong> (Vetado).</p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo III</h1>
                            <p>Dos Direitos Básicos do Consumidor</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <div className='leading-relaxed flex flex-col gap-4'>
                                <p><strong>Art. 6º</strong> São direitos básicos do consumidor:</p>
                                <div className='ml-6'>
                                    <p><strong>I -</strong> a proteção da vida, saúde e segurança contra os riscos provocados por práticas no fornecimento de produtos e serviços considerados perigosos ou nocivos;</p>
                                    <p><strong>II -</strong> a educação e divulgação sobre o consumo adequado dos produtos e serviços, asseguradas a liberdade de escolha e a igualdade nas contratações;</p>
                                    <p><strong>III -</strong> a informação adequada e clara sobre os diferentes produtos e serviços, com especificação correta de quantidade, características, composição, qualidade, tributos incidentes e preço, bem como sobre os riscos que apresentem; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2012/Lei/L12741.htm#art6" target="_blank" className='underline text-rep font-semibold'>(Redação dada pela Lei nº 12.741, de 2012) Vigência</a></p>
                                    <p><strong>IV -</strong> a proteção contra a publicidade enganosa e abusiva, métodos comerciais coercitivos ou desleais, bem como contra práticas e cláusulas abusivas ou impostas no fornecimento de produtos e serviços;</p>
                                    <p><strong>V -</strong> a modificação das cláusulas contratuais que estabeleçam prestações desproporcionais ou sua revisão em razão de fatos supervenientes que as tornem excessivamente onerosas;</p>
                                    <p><strong>VI -</strong> a efetiva prevenção e reparação de danos patrimoniais e morais, individuais, coletivos e difusos;</p>
                                    <p><strong>VII -</strong> o acesso aos órgãos judiciários e administrativos com vistas à prevenção ou reparação de danos patrimoniais e morais, individuais, coletivos ou difusos, assegurada a proteção Jurídica, administrativa e técnica aos necessitados;</p>
                                    <p><strong>VIII -</strong> a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, no processo civil, quando, a critério do juiz, for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiências;</p>
                                    <p><strong>IX -</strong> (Vetado);</p>
                                    <p><strong>X -</strong> a adequada e eficaz prestação dos serviços públicos em geral.</p>
                                    <p><strong>XI -</strong> a garantia de práticas de crédito responsável, de educação financeira e de prevenção e tratamento de situações de superendividamento, preservado o mínimo existencial, nos termos da regulamentação, por meio da revisão e da repactuação da dívida, entre outras medidas;<a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>XII -</strong> a preservação do mínimo existencial, nos termos da regulamentação, na repactuação de dívidas e na concessão de crédito;<a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>XIII -</strong> a informação acerca dos preços dos produtos por unidade de medida, tal como por quilo, por litro, por metro ou por outra unidade, conforme o caso. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><br />Parágrafo único.  A informação de que trata o inciso III do caput deste artigo deve ser acessível à pessoa com deficiência, observado o disposto em regulamento <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm#art100" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 13.146, de 2015) (Vigência)</a></p>
                                </div>
                                <p><strong>Art. 7°</strong> Os direitos previstos neste código não excluem outros decorrentes de tratados ou convenções internacionais de que o Brasil seja signatário, da legislação interna ordinária, de regulamentos expedidos pelas autoridades administrativas competentes, bem como dos que derivem dos princípios gerais do direito, analogia, costumes e equidade.</p>
                                <p>Parágrafo único. Tendo mais de um autor a ofensa, todos responderão solidariamente pela reparação dos danos previstos nas normas de consumo.</p>
                            </div>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo IV</h1>
                            <p>Da Qualidade de Produtos e Serviços, da Prevenção e da Reparação dos Danos</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <Popover>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção I</h1>
                                    <p>Da Proteção à Saúde e Segurança</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 8°</strong> Os produtos e serviços colocados no mercado de consumo não acarretarão riscos à saúde ou segurança dos consumidores, exceto os considerados normais e previsíveis em decorrência de sua natureza e fruição, obrigando-se os fornecedores, em qualquer hipótese, a dar as informações necessárias e adequadas a seu respeito.</p>
                                    <div className='ml-6'>
                                        <p><strong>§1º</strong>  Em se tratando de produto industrial, ao fabricante cabe prestar as informações a que se refere este artigo, através de impressos apropriados que devam acompanhar o produto. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2017/Lei/L13486.htm" target="_blank" className='underline text-rep font-semibold'>(Redação dada pela Lei nº 13.486, de 2017)</a></p>
                                        <p><strong>§2º</strong>  O fornecedor deverá higienizar os equipamentos e utensílios utilizados no fornecimento de produtos ou serviços, ou colocados à disposição do consumidor, e informar, de maneira ostensiva e adequada, quando for o caso, sobre o risco de contaminação. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2017/Lei/L13486.htm" target="_blank" className='underline text-rep font-semibold'>(Incluído pela Lei nº 13.486, de 2017)</a></p>
                                    </div>
                                    <p><strong>Art. 9°</strong> O fornecedor de produtos e serviços potencialmente nocivos ou perigosos à saúde ou segurança deverá informar, de maneira ostensiva e adequada, a respeito da sua nocividade ou periculosidade, sem prejuízo da adoção de outras medidas cabíveis em cada caso concreto.</p>
                                    <p><strong>Art. 10.</strong> O fornecedor não poderá colocar no mercado de consumo produto ou serviço que sabe ou deveria saber apresentar alto grau de nocividade ou periculosidade à saúde ou segurança.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> O fornecedor de produtos e serviços que, posteriormente à sua introdução no mercado de consumo, tiver conhecimento da periculosidade que apresentem, deverá comunicar o fato imediatamente às autoridades competentes e aos consumidores, mediante anúncios publicitários.</p>
                                        <p><strong>§ 2°</strong> Os anúncios publicitários a que se refere o parágrafo anterior serão veiculados na imprensa, rádio e televisão, às expensas do fornecedor do produto ou serviço.</p>
                                        <p><strong>§ 3°</strong> Sempre que tiverem conhecimento de periculosidade de produtos ou serviços à saúde ou segurança dos consumidores, a União, os Estados, o Distrito Federal e os Municípios deverão informá-los a respeito.</p>
                                    </div>
                                    <p><strong>Art. 11.</strong> (Vetado).</p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção II</h1>
                                    <p>Da Responsabilidade pelo Fato do Produto e do Serviço</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 12.</strong> O fabricante, o produtor, o construtor, nacional ou estrangeiro, e o importador respondem, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos decorrentes de projeto, fabricação, construção, montagem, fórmulas, manipulação, apresentação ou acondicionamento de seus produtos, bem como por informações insuficientes ou inadequadas sobre sua utilização e riscos.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> O produto é defeituoso quando não oferece a segurança que dele legitimamente se espera, levando-se em consideração as circunstâncias relevantes, entre as quais:</p>
                                        <div className='ml-6'>
                                            <p><strong>I -</strong> sua apresentação;</p>
                                            <p><strong>II -</strong> o uso e os riscos que razoavelmente dele se esperam;</p>
                                            <p><strong>III -</strong> a época em que foi colocado em circulação.</p>
                                        </div>
                                        <p><strong>§ 2º</strong> O produto não é considerado defeituoso pelo fato de outro de melhor qualidade ter sido colocado no mercado.</p>
                                        <p><strong>§ 3º</strong> O fabricante, o construtor, o produtor ou importador só não será responsabilizado quando provar:</p>
                                        <div className='ml-6'>
                                            <p><strong>I -</strong> que não colocou o produto no mercado;</p>
                                            <p><strong>II -</strong> que, embora haja colocado o produto no mercado, o defeito inexiste;</p>
                                            <p><strong>III -</strong> a culpa exclusiva do consumidor ou de terceiro.</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 13.</strong> O comerciante é igualmente responsável, nos termos do artigo anterior, quando:</p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> o fabricante, o construtor, o produtor ou o importador não puderem ser identificados;</p>
                                        <p><strong>II -</strong> o produto for fornecido sem identificação clara do seu fabricante, produtor, construtor ou importador;</p>
                                        <p><strong>III -</strong> não conservar adequadamente os produtos perecíveis.</p>
                                        <p>Parágrafo único. Aquele que efetivar o pagamento ao prejudicado poderá exercer o direito de regresso contra os demais responsáveis, segundo sua participação na causação do evento danoso.</p>
                                    </div>
                                    <p><strong>Art. 14.</strong> O fornecedor de serviços responde, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços, bem como por informações insuficientes ou inadequadas sobre sua fruição e riscos.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> O serviço é defeituoso quando não fornece a segurança que o consumidor dele pode esperar, levando-se em consideração as circunstâncias relevantes, entre as quais:</p>
                                        <div className='ml-6'>
                                            <p><strong>I -</strong> o modo de seu fornecimento;</p>
                                            <p><strong>II -</strong> o resultado e os riscos que razoavelmente dele se esperam;</p>
                                            <p><strong>III -</strong> a época em que foi fornecido.</p>
                                        </div>
                                        <p><strong>§ 2º</strong> O serviço não é considerado defeituoso pela adoção de novas técnicas.</p>
                                        <p><strong>§ 3°</strong> O fornecedor de serviços só não será responsabilizado quando provar:</p>
                                        <div className='ml-6'>
                                            <p><strong>I -</strong> que, tendo prestado o serviço, o defeito inexiste;</p>
                                            <p><strong>II -</strong> a culpa exclusiva do consumidor ou de terceiro.</p>
                                        </div>
                                        <p><strong>§ 4°</strong> A responsabilidade pessoal dos profissionais liberais será apurada mediante a verificação de culpa.</p>
                                    </div>
                                    <p><strong>Art. 15.</strong> (Vetado).</p>
                                    <p><strong>Art. 16.</strong> (Vetado).</p>
                                    <p><strong>Art. 17.</strong> Para os efeitos desta Seção, equiparam-se aos consumidores todas as vítimas do evento.</p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção III</h1>
                                    <p>Da Responsabilidade por Vício do Produto e do Serviço</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 18.</strong> Os fornecedores de produtos de consumo duráveis ou não duráveis respondem solidariamente pelos vícios de qualidade ou quantidade que os tornem impróprios ou inadequados ao consumo a que se destinam ou lhes diminuam o valor, assim como por aqueles decorrentes da disparidade, com a indicações constantes do recipiente, da embalagem, rotulagem ou mensagem publicitária, respeitadas as variações decorrentes de sua natureza, podendo o consumidor exigir a substituição das partes viciadas.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> Não sendo o vício sanado no prazo máximo de trinta dias, pode o consumidor exigir, alternativamente e à sua escolha:</p>
                                        <div className='ml-6'>
                                            <p><strong>I -</strong> a substituição do produto por outro da mesma espécie, em perfeitas condições de uso;</p>
                                            <p><strong>II -</strong> a restituição imediata da quantia paga, monetariamente atualizada, sem prejuízo de eventuais perdas e danos;</p>
                                            <p><strong>III -</strong> o abatimento proporcional do preço.</p>
                                        </div>
                                        <p><strong>§ 2.</strong> Poderão as partes convencionar a redução ou ampliação do prazo previsto no parágrafo anterior, não podendo ser inferior a sete nem superior a cento e oitenta dias. Nos contratos de adesão, a cláusula de prazo deverá ser convencionada em separado, por meio de manifestação expressa do consumidor.</p>
                                        <p><strong>§ 3.</strong> O consumidor poderá fazer uso imediato das alternativas do § 1° deste artigo sempre que, em razão da extensão do vício, a substituição das partes viciadas puder comprometer a qualidade ou características do produto, diminuir-lhe o valor ou se tratar de produto essencial.</p>
                                        <p><strong>§ 4.</strong> Tendo o consumidor optado pela alternativa do inciso I do § 1° deste artigo, e não sendo possível a substituição do bem, poderá haver substituição por outro de espécie, marca ou modelo diversos, mediante complementação ou restituição de eventual diferença de preço, sem prejuízo do disposto nos incisos II e III do § 1° deste artigo.</p>
                                        <p><strong>§ 5.</strong> No caso de fornecimento de produtos in natura, será responsável perante o consumidor o fornecedor imediato, exceto quando identificado claramente seu produtor.</p>
                                        <p><strong>§ 6.</strong> São impróprios ao uso e consumo:</p>
                                        <div className='ml-6'>
                                            <p><strong>I -</strong> os produtos cujos prazos de validade estejam vencidos;</p>
                                            <p><strong>II -</strong> os produtos deteriorados, alterados, adulterados, avariados, falsificados, corrompidos, fraudados, nocivos à vida ou à saúde, perigosos ou, ainda, aqueles em desacordo com as normas regulamentares de fabricação, distribuição ou apresentação;</p>
                                            <p><strong>III -</strong> os produtos que, por qualquer motivo, se revelem inadequados ao fim a que se destinam.</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 19.</strong> Os fornecedores respondem solidariamente pelos vícios de quantidade do produto sempre que, respeitadas as variações decorrentes de sua natureza, seu conteúdo líquido for inferior às indicações constantes do recipiente, da embalagem, rotulagem ou de mensagem publicitária, podendo o consumidor exigir, alternativamente e à sua escolha:</p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> o abatimento proporcional do preço;</p>
                                        <p><strong>II -</strong> complementação do peso ou medida;</p>
                                        <p><strong>III -</strong> a substituição do produto por outro da mesma espécie, marca ou modelo, sem os aludidos vícios;</p>
                                        <p><strong>IV -</strong> a restituição imediata da quantia paga, monetariamente atualizada, sem prejuízo de eventuais perdas e danos.</p>
                                        <div className='ml-6'>
                                            <p><strong>§ 1°</strong> Aplica-se a este artigo o disposto no § 4° do artigo anterior.</p>
                                            <p><strong>§ 2°</strong> O fornecedor imediato será responsável quando fizer a pesagem ou a medição e o instrumento utilizado não estiver aferido segundo os padrões oficiais.</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 20.</strong> O fornecedor de serviços responde pelos vícios de qualidade que os tornem impróprios ao consumo ou lhes diminuam o valor, assim como por aqueles decorrentes da disparidade com as indicações constantes da oferta ou mensagem publicitária, podendo o consumidor exigir, alternativamente e à sua escolha:</p>
                                    <div>
                                        <p><strong>I -</strong> a reexecução dos serviços, sem custo adicional e quando cabível;</p>
                                        <p><strong>II -</strong> a restituição imediata da quantia paga, monetariamente atualizada, sem prejuízo de eventuais perdas e danos;</p>
                                        <p><strong>III -</strong> o abatimento proporcional do preço.</p>
                                        <div className='ml-6'>
                                            <p><strong>§ 1°</strong> A reexecução dos serviços poderá ser confiada a terceiros devidamente capacitados, por conta e risco do fornecedor.</p>
                                            <p><strong>§ 2°</strong> São impróprios os serviços que se mostrem inadequados para os fins que razoavelmente deles se esperam, bem como aqueles que não atendam as normas regulamentares de prestabilidade.</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 21.</strong> No fornecimento de serviços que tenham por objetivo a reparação de qualquer produto considerar-se-á implícita a obrigação do fornecedor de empregar componentes de reposição originais adequados e novos, ou que mantenham as especificações técnicas do fabricante, salvo, quanto a estes últimos, autorização em contrário do consumidor.</p>
                                    <p><strong>Art. 22.</strong> Os órgãos públicos, por si ou suas empresas, concessionárias, permissionárias ou sob qualquer outra forma de empreendimento, são obrigados a fornecer serviços adequados, eficientes, seguros e, quanto aos essenciais, contínuos.</p>
                                    <p>Parágrafo único. Nos casos de descumprimento, total ou parcial, das obrigações referidas neste artigo, serão as pessoas jurídicas compelidas a cumpri-las e a reparar os danos causados, na forma prevista neste código.</p>
                                    <p><strong>Art. 23.</strong> A ignorância do fornecedor sobre os vícios de qualidade por inadequação dos produtos e serviços não o exime de responsabilidade.</p>
                                    <p><strong>Art. 24.</strong> A garantia legal de adequação do produto ou serviço independe de termo expresso, vedada a exoneração contratual do fornecedor.</p>
                                    <p><strong>Art. 25.</strong> É vedada a estipulação contratual de cláusula que impossibilite, exonere ou atenue a obrigação de indenizar prevista nesta e nas seções anteriores.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> Havendo mais de um responsável pela causação do dano, todos responderão solidariamente pela reparação prevista nesta e nas seções anteriores.</p>
                                        <p><strong>§ 2°</strong> Sendo o dano causado por componente ou peça incorporada ao produto ou serviço, são responsáveis solidários seu fabricante, construtor ou importador e o que realizou a incorporação.</p>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção IV</h1>
                                    <p>Da Decadência e da Prescrição</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 26.</strong> O direito de reclamar pelos vícios aparentes ou de fácil constatação caduca em:</p>
                                    <div>
                                        <p><strong>I -</strong> trinta dias, tratando-se de fornecimento de serviço e de produtos não duráveis;</p>
                                        <p><strong>II -</strong> noventa dias, tratando-se de fornecimento de serviço e de produtos duráveis.</p>
                                        <div className='ml-6'>
                                            <p><strong>§ 1°</strong> Inicia-se a contagem do prazo decadencial a partir da entrega efetiva do produto ou do término da execução dos serviços.</p>
                                            <p><strong>§ 2°</strong> Obstam a decadência:</p>
                                            <div className='ml-6'>
                                                <p><strong>I -</strong> a reclamação comprovadamente formulada pelo consumidor perante o fornecedor de produtos e serviços até a resposta negativa correspondente, que deve ser transmitida de forma inequívoca;</p>
                                                <p><strong>II -</strong> (Vetado).</p>
                                                <p><strong>III -</strong> a instauração de inquérito civil, até seu encerramento.</p>
                                            </div>
                                            <p><strong>§ 3°</strong> Tratando-se de vício oculto, o prazo decadencial inicia-se no momento em que ficar evidenciado o defeito.</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 27.</strong> Prescreve em cinco anos a pretensão à reparação pelos danos causados por fato do produto ou do serviço prevista na Seção II deste Capítulo, iniciando-se a contagem do prazo a partir do conhecimento do dano e de sua autoria.</p>
                                    <p>Parágrafo único. (Vetado).</p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção V</h1>
                                    <p>Da Desconsideração da Personalidade Jurídica</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 28.</strong> O juiz poderá desconsiderar a personalidade jurídica da sociedade quando, em detrimento do consumidor, houver abuso de direito, excesso de poder, infração da lei, fato ou ato ilícito ou violação dos estatutos ou contrato social. A desconsideração também será efetivada quando houver falência, estado de insolvência, encerramento ou inatividade da pessoa jurídica provocados por má administração.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> (Vetado).</p>
                                        <p><strong>§ 2°</strong> As sociedades integrantes dos grupos societários e as sociedades controladas, são subsidiariamente responsáveis pelas obrigações decorrentes deste código.</p>
                                        <p><strong>§ 3°</strong> As sociedades consorciadas são solidariamente responsáveis pelas obrigações decorrentes deste código.</p>
                                        <p><strong>§ 4°</strong> As sociedades coligadas só responderão por culpa.</p>
                                        <p><strong>§ 5°</strong> Também poderá ser desconsiderada a pessoa jurídica sempre que sua personalidade for, de alguma forma, obstáculo ao ressarcimento de prejuízos causados aos consumidores.</p>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo V</h1>
                            <p>Das Práticas Comerciais</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção I</h1>
                                    <p>Das Disposições Gerais</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 29.</strong> Para os fins deste Capítulo e do seguinte, equiparam-se aos consumidores todas as pessoas determináveis ou não, expostas às práticas nele previstas.</p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção II</h1>
                                    <p>Da Oferta</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 30.</strong> Toda informação ou publicidade, suficientemente precisa, veiculada por qualquer forma ou meio de comunicação com relação a produtos e serviços oferecidos ou apresentados, obriga o fornecedor que a fizer veicular ou dela se utilizar e integra o contrato que vier a ser celebrado.</p>
                                    <p><strong>Art. 31.</strong> A oferta e apresentação de produtos ou serviços devem assegurar informações corretas, claras, precisas, ostensivas e em língua portuguesa sobre suas características, qualidades, quantidade, composição, preço, garantia, prazos de validade e origem, entre outros dados, bem como sobre os riscos que apresentam à saúde e segurança dos consumidores.</p>
                                    <p>Parágrafo único.  As informações de que trata este artigo, nos produtos refrigerados oferecidos ao consumidor, serão gravadas de forma indelével. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Lei/L11989.htm#art1" target='_blank'>(Incluído pela Lei nº 11.989, de 2009)</a></p>
                                    <p><strong>Art. 32.</strong> Os fabricantes e importadores deverão assegurar a oferta de componentes e peças de reposição enquanto não cessar a fabricação ou importação do produto.</p>
                                    <p>Parágrafo único. Cessadas a produção ou importação, a oferta deverá ser mantida por período razoável de tempo, na forma da lei.</p>
                                    <p><strong>Art. 33.</strong> Em caso de oferta ou venda por telefone ou reembolso postal, deve constar o nome do fabricante e endereço na embalagem, publicidade e em todos os impressos utilizados na transação comercial.</p>
                                    <p>Parágrafo único.  É proibida a publicidade de bens e serviços por telefone, quando a chamada for onerosa ao consumidor que a origina. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Lei/L11800.htm#art1" target='_blank'> (Incluído pela Lei nº 11.800, de 2008).</a></p>
                                    <p><strong>Art. 34.</strong> O fornecedor do produto ou serviço é solidariamente responsável pelos atos de seus prepostos ou representantes autônomos.</p>
                                    <p><strong>Art. 35.</strong> Se o fornecedor de produtos ou serviços recusar cumprimento à oferta, apresentação ou publicidade, o consumidor poderá, alternativamente e à sua livre escolha:</p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> exigir o cumprimento forçado da obrigação, nos termos da oferta, apresentação ou publicidade;</p>
                                        <p><strong>II -</strong> aceitar outro produto ou prestação de serviço equivalente;</p>
                                        <p><strong>III -</strong> rescindir o contrato, com direito à restituição de quantia eventualmente antecipada, monetariamente atualizada, e a perdas e danos.</p>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção III</h1>
                                    <p>Da Publicidade</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 36.</strong> A publicidade deve ser veiculada de tal forma que o consumidor, fácil e imediatamente, a identifique como tal.</p>
                                    <p>Parágrafo único. O fornecedor, na publicidade de seus produtos ou serviços, manterá, em seu poder, para informação dos legítimos interessados, os dados fáticos, técnicos e científicos que dão sustentação à mensagem.</p>
                                    <p><strong>Art. 37.</strong> É proibida toda publicidade enganosa ou abusiva.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> É enganosa qualquer modalidade de informação ou comunicação de caráter publicitário, inteira ou parcialmente falsa, ou, por qualquer outro modo, mesmo por omissão, capaz de induzir em erro o consumidor a respeito da natureza, características, qualidade, quantidade, propriedades, origem, preço e quaisquer outros dados sobre produtos e serviços.</p>
                                        <p><strong>§ 2°</strong> É abusiva, dentre outras a publicidade discriminatória de qualquer natureza, a que incite à violência, explore o medo ou a superstição, se aproveite da deficiência de julgamento e experiência da criança, desrespeita valores ambientais, ou que seja capaz de induzir o consumidor a se comportar de forma prejudicial ou perigosa à sua saúde ou segurança.</p>
                                        <p><strong>§ 3°</strong> Para os efeitos deste código, a publicidade é enganosa por omissão quando deixar de informar sobre dado essencial do produto ou serviço.</p>
                                        <p><strong>§ 4°</strong> (Vetado).</p>
                                    </div>
                                    <p><strong>Art. 38.</strong> O ônus da prova da veracidade e correção da informação ou comunicação publicitária cabe a quem as patrocina.</p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção IV</h1>
                                    <p>Das Práticas Abusivas</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 39.</strong> É vedado ao fornecedor de produtos ou serviços, dentre outras práticas abusivas: <a href="http://www.planalto.gov.br/ccivil_03/leis/L8884.htm#art39" target='_blank'>(Redação dada pela Lei nº 8.884, de 11.6.1994)</a></p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> condicionar o fornecimento de produto ou de serviço ao fornecimento de outro produto ou serviço, bem como, sem justa causa, a limites quantitativos;</p>
                                        <p><strong>II -</strong> recusar atendimento às demandas dos consumidores, na exata medida de suas disponibilidades de estoque, e, ainda, de conformidade com os usos e costumes;</p>
                                        <p><strong>III -</strong> enviar ou entregar ao consumidor, sem solicitação prévia, qualquer produto, ou fornecer qualquer serviço;</p>
                                        <p><strong>IV -</strong> prevalecer-se da fraqueza ou ignorância do consumidor, tendo em vista sua idade, saúde, conhecimento ou condição social, para impingir-lhe seus produtos ou serviços;</p>
                                        <p><strong>V -</strong> exigir do consumidor vantagem manifestamente excessiva</p>
                                        <p><strong>VI -</strong> executar serviços sem a prévia elaboração de orçamento e autorização expressa do consumidor, ressalvadas as decorrentes de práticas anteriores entre as partes;</p>
                                        <p><strong>VII -</strong> repassar informação depreciativa, referente a ato praticado pelo consumidor no exercício de seus direitos;</p>
                                        <p><strong>VIII -</strong> colocar, no mercado de consumo, qualquer produto ou serviço em desacordo com as normas expedidas pelos órgãos oficiais competentes ou, se normas específicas não existirem, pela Associação Brasileira de Normas Técnicas ou outra entidade credenciada pelo Conselho Nacional de Metrologia, Normalização e Qualidade Industrial (Conmetro);</p>
                                        <p><strong>IX -</strong> recusar a venda de bens ou a prestação de serviços, diretamente a quem se disponha a adquiri-los mediante pronto pagamento, ressalvados os casos de intermediação regulados em leis especiais; <a href="http://www.planalto.gov.br/ccivil_03/leis/L8884.htm#art39" target='_blank'>(Redação dada pela Lei nº 8.884, de 11.6.1994)</a></p>
                                        <p><strong>X -</strong> elevar sem justa causa o preço de produtos ou serviços. <a href="http://www.planalto.gov.br/ccivil_03/leis/L8884.htm#art39" target="_blank">(Incluído pela Lei nº 8.884, de 11.6.1994)</a></p>
                                        <p><strong>XI -</strong>  Dispositivo  incluído pela <a href="http://www.planalto.gov.br/ccivil_03/MPV/Antigas/1890-67.htm#art9" target="_blank">MPV  nº 1.890-67, de 22.10.1999</a>, transformado em inciso  XIII, quando da conversão na <a href="http://www.planalto.gov.br/ccivil_03/leis/L9870.htm#art39xiii" target='_blank'>Lei nº 9.870, de 23.11.1999</a></p>
                                        <p><strong>XII -</strong> deixar de estipular prazo para o cumprimento de sua obrigação ou deixar a fixação de seu termo inicial a seu exclusivo critério. <a href="http://www.planalto.gov.br/ccivil_03/leis/L9008.htm#art7" target='_blank'>(Incluído pela Lei nº 9.008, de 21.3.1995)</a></p>
                                        <p><strong>XIII -</strong> aplicar fórmula ou índice de reajuste diverso do legal ou contratualmente estabelecido. <a href="http://www.planalto.gov.br/ccivil_03/leis/L9870.htm#art39xiii" target='_blank'>(Incluído pela Lei nº 9.870, de 23.11.1999)</a></p>
                                        <p><strong>XIV -</strong> permitir o ingresso em estabelecimentos comerciais ou de serviços de um número maior de consumidores que o fixado pela autoridade administrativa como máximo. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2017/Lei/L13425.htm#art17" target='_blank'> (Incluído pela Lei nº 13.425, de 2017)</a></p>
                                        <p>Parágrafo único. Os serviços prestados e os produtos remetidos ou entregues ao consumidor, na hipótese prevista no inciso III, equiparam-se às amostras grátis, inexistindo obrigação de pagamento.</p>
                                    </div>
                                    <p><strong>Art. 40.</strong> O fornecedor de serviço será obrigado a entregar ao consumidor orçamento prévio discriminando o valor da mão-de-obra, dos materiais e equipamentos a serem empregados, as condições de pagamento, bem como as datas de início e término dos serviços.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1º</strong> Salvo estipulação em contrário, o valor orçado terá validade pelo prazo de dez dias, contado de seu recebimento pelo consumidor.</p>
                                        <p><strong>§ 2°</strong> Uma vez aprovado pelo consumidor, o orçamento obriga os contraentes e somente pode ser alterado mediante livre negociação das partes.</p>
                                        <p><strong>§ 3°</strong> O consumidor não responde por quaisquer ônus ou acréscimos decorrentes da contratação de serviços de terceiros não previstos no orçamento prévio.</p>
                                    </div>
                                    <p><strong>Art. 41.</strong> No caso de fornecimento de produtos ou de serviços sujeitos ao regime de controle ou de tabelamento de preços, os fornecedores deverão respeitar os limites oficiais sob pena de não o fazendo, responderem pela restituição da quantia recebida em excesso, monetariamente atualizada, podendo o consumidor exigir à sua escolha, o desfazimento do negócio, sem prejuízo de outras sanções cabíveis.</p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção V</h1>
                                    <p>Da Cobrança de Dívidas</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 42.</strong> Na cobrança de débitos, o consumidor inadimplente não será exposto a ridículo, nem será submetido a qualquer tipo de constrangimento ou ameaça.</p>
                                    <p>Parágrafo único. O consumidor cobrado em quantia indevida tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros legais, salvo hipótese de engano justificável.</p>
                                    <p><strong>Art. 42-A.</strong>  Em todos os documentos de cobrança de débitos apresentados ao consumidor, deverão constar o nome, o endereço e o número de inscrição no Cadastro de Pessoas Físicas – CPF ou no Cadastro Nacional de Pessoa Jurídica – CNPJ do fornecedor do produto ou serviço correspondente <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Lei/L12039.htm" target='_blank'> (Incluído pela Lei nº 12.039, de 2009)</a></p>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção VI</h1>
                                    <p>Dos Bancos de Dados e Cadastros de Consumidores</p>
                                </Popover.Button>
                                <Popover.Panel className='mt-4 ml-6'>
                                    <p><strong>Art. 43.</strong> O consumidor, sem prejuízo do disposto no art. 86, terá acesso às informações existentes em cadastros, fichas, registros e dados pessoais e de consumo arquivados sobre ele, bem como sobre as suas respectivas fontes.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> Os cadastros e dados de consumidores devem ser objetivos, claros, verdadeiros e em linguagem de fácil compreensão, não podendo conter informações negativas referentes a período superior a cinco anos.</p>
                                        <p><strong>§ 2°</strong> A abertura de cadastro, ficha, registro e dados pessoais e de consumo deverá ser comunicada por escrito ao consumidor, quando não solicitada por ele.</p>
                                        <p><strong>§ 3°</strong> O consumidor, sempre que encontrar inexatidão nos seus dados e cadastros, poderá exigir sua imediata correção, devendo o arquivista, no prazo de cinco dias úteis, comunicar a alteração aos eventuais destinatários das informações incorretas</p>
                                        <p><strong>§ 4°</strong> Os bancos de dados e cadastros relativos a consumidores, os serviços de proteção ao crédito e congêneres são considerados entidades de caráter público.</p>
                                        <p><strong>§ 5°</strong> Consumada a prescrição relativa à cobrança de débitos do consumidor, não serão fornecidas, pelos respectivos Sistemas de Proteção ao Crédito, quaisquer informações que possam impedir ou dificultar novo acesso ao crédito junto aos fornecedores.</p>
                                        <p><strong>§ 6º</strong> Todas as informações de que trata o caput deste artigo devem ser disponibilizadas em formatos acessíveis, inclusive para a pessoa com deficiência, mediante solicitação do consumidor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm#art100" target='_blank'>(Incluído pela Lei nº 13.146, de 2015)    (Vigência)</a></p>
                                    </div>
                                    <p><strong>Art. 44.</strong> Os órgãos públicos de defesa do consumidor manterão cadastros atualizados de reclamações fundamentadas contra fornecedores de produtos e serviços, devendo divulgá-lo pública e anualmente. A divulgação indicará se a reclamação foi atendida ou não pelo fornecedor.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> É facultado o acesso às informações lá constantes para orientação e consulta por qualquer interessado.</p>
                                        <p><strong>§ 2°</strong> Aplicam-se a este artigo, no que couber, as mesmas regras enunciadas no artigo anterior e as do parágrafo único do art. 22 deste código.</p>
                                    </div>
                                    <p><strong>Art. 45.</strong> (Vetado).</p>
                                </Popover.Panel>
                            </Popover>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo VI</h1>
                            <p>Disposições Gerais</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6 gap-4'>
                            <Popover>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção I</h1>
                                    <p>Da Cobrança de Dívidas</p>
                                </Popover.Button>
                                <Popover.Panel className='ml-6'>
                                    <p><strong>Art. 46.</strong> Os contratos que regulam as relações de consumo não obrigarão os consumidores, se não lhes for dada a oportunidade de tomar conhecimento prévio de seu conteúdo, ou se os respectivos instrumentos forem redigidos de modo a dificultar a compreensão de seu sentido e alcance.</p>
                                    <p><strong>Art. 47.</strong> As cláusulas contratuais serão interpretadas de maneira mais favorável ao consumidor.</p>
                                    <p><strong>Art. 48.</strong> As declarações de vontade constantes de escritos particulares, recibos e pré-contratos relativos às relações de consumo vinculam o fornecedor, ensejando inclusive execução específica, nos termos do art. 84 e parágrafos.</p>
                                    <p><strong>Art. 49.</strong> O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio.</p>
                                    <div className='ml-6'>
                                        <p>Parágrafo único. Se o consumidor exercitar o direito de arrependimento previsto neste artigo, os valores eventualmente pagos, a qualquer título, durante o prazo de reflexão, serão devolvidos, de imediato, monetariamente atualizados.</p>
                                    </div>
                                    <p><strong>Art. 50.</strong> A garantia contratual é complementar à legal e será conferida mediante termo escrito.</p>
                                    <div className='ml-6'>
                                        <p>Parágrafo único. O termo de garantia ou equivalente deve ser padronizado e esclarecer, de maneira adequada em que consiste a mesma garantia, bem como a forma, o prazo e o lugar em que pode ser exercitada e os ônus a cargo do consumidor, devendo ser-lhe entregue, devidamente preenchido pelo fornecedor, no ato do fornecimento, acompanhado de manual de instrução, de instalação e uso do produto em linguagem didática, com ilustrações.</p>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção II</h1>
                                    <p>Das Cláusulas Abusivas</p>
                                </Popover.Button>
                                <Popover.Panel className='ml-6'>
                                    <p><strong>Art. 51.</strong> São nulas de pleno direito, entre outras, as cláusulas contratuais relativas ao fornecimento de produtos e serviços que:</p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> impossibilitem, exonerem ou atenuem a responsabilidade do fornecedor por vícios de qualquer natureza dos produtos e serviços ou impliquem renúncia ou disposição de direitos. Nas relações de consumo entre o fornecedor e o consumidor pessoa jurídica, a indenização poderá ser limitada, em situações justificáveis;</p>
                                        <p><strong>II -</strong> subtraiam ao consumidor a opção de reembolso da quantia já paga, nos casos previstos neste código;</p>
                                        <p><strong>III -</strong> transfiram responsabilidades a terceiros;</p>
                                        <p><strong>IV -</strong> estabeleçam obrigações consideradas iníquas, abusivas, que coloquem o consumidor em desvantagem exagerada, ou sejam incompatíveis com a boa-fé ou a eqüidade;</p>
                                        <p><strong>V -</strong> (Vetado);</p>
                                        <p><strong>VI -</strong> estabeleçam inversão do ônus da prova em prejuízo do consumidor;</p>
                                        <p><strong>VII -</strong> determinem a utilização compulsória de arbitragem;</p>
                                        <p><strong>VIII -</strong> imponham representante para concluir ou realizar outro negócio jurídico pelo consumidor;</p>
                                        <p><strong>IX -</strong> deixem ao fornecedor a opção de concluir ou não o contrato, embora obrigando o consumidor;</p>
                                        <p><strong>X -</strong> permitam ao fornecedor, direta ou indiretamente, variação do preço de maneira unilateral;</p>
                                        <p><strong>XI -</strong> autorizem o fornecedor a cancelar o contrato unilateralmente, sem que igual direito seja conferido ao consumidor;</p>
                                        <p><strong>XII -</strong> obriguem o consumidor a ressarcir os custos de cobrança de sua obrigação, sem que igual direito lhe seja conferido contra o fornecedor;</p>
                                        <p><strong>XIII -</strong> autorizem o fornecedor a modificar unilateralmente o conteúdo ou a qualidade do contrato, após sua celebração;</p>
                                        <p><strong>XIV -</strong> infrinjam ou possibilitem a violação de normas ambientais;</p>
                                        <p><strong>XV -</strong> estejam em desacordo com o sistema de proteção ao consumidor;</p>
                                        <p><strong>XVI -</strong> possibilitem a renúncia do direito de indenização por benfeitorias necessárias.</p>
                                        <p><strong>XVII -</strong> condicionem ou limitem de qualquer forma o acesso aos órgãos do Poder Judiciário; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                        <p><strong>XVIII -</strong> estabeleçam prazos de carência em caso de impontualidade das prestações mensais ou impeçam o restabelecimento integral dos direitos do consumidor e de seus meios de pagamento a partir da purgação da mora ou do acordo com os credores; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                        <p><strong>XIX -</strong> (VETADO). <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                        <div className='ml-6'>
                                            <p><strong>§ 1º</strong> Presume-se exagerada, entre outros casos, a vantagem que:</p>
                                            <div className='ml-6'>
                                                <p><strong>I -</strong> ofende os princípios fundamentais do sistema jurídico a que pertence;</p>
                                                <p><strong>II -</strong> restringe direitos ou obrigações fundamentais inerentes à natureza do contrato, de tal modo a ameaçar seu objeto ou equilíbrio contratual;</p>
                                                <p><strong>III -</strong> se mostra excessivamente onerosa para o consumidor, considerando-se a natureza e conteúdo do contrato, o interesse das partes e outras circunstâncias peculiares ao caso.</p>
                                            </div>
                                            <p><strong>§ 2°</strong> A nulidade de uma cláusula contratual abusiva não invalida o contrato, exceto quando de sua ausência, apesar dos esforços de integração, decorrer ônus excessivo a qualquer das partes.</p>
                                            <p><strong>§ 3°</strong> (Vetado).</p>
                                            <p><strong>§ 4°</strong> É facultado a qualquer consumidor ou entidade que o represente requerer ao Ministério Público que ajuíze a competente ação para ser declarada a nulidade de cláusula contratual que contrarie o disposto neste código ou de qualquer forma não assegure o justo equilíbrio entre direitos e obrigações das partes.</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 52.</strong> No fornecimento de produtos ou serviços que envolva outorga de crédito ou concessão de financiamento ao consumidor, o fornecedor deverá, entre outros requisitos, informá-lo prévia e adequadamente sobre:</p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> preço do produto ou serviço em moeda corrente nacional;</p>
                                        <p><strong>II -</strong> montante dos juros de mora e da taxa efetiva anual de juros;</p>
                                        <p><strong>III -</strong> acréscimos legalmente previstos;</p>
                                        <p><strong>IV -</strong> número e periodicidade das prestações;</p>
                                        <p><strong>V -</strong> soma total a pagar, com e sem financiamento.</p>
                                        <div className='ml-6'>
                                            <p><strong>§ 1°</strong> As multas de mora decorrentes do inadimplemento de obrigações no seu termo não poderão ser superiores a dois por cento do valor da prestação. <a href="http://www.planalto.gov.br/ccivil_03/leis/L9298.htm#art52%C2%A71" target='_blank'>(Redação dada pela Lei nº 9.298, de 1º.8.1996)</a></p>
                                            <p><strong>§ 2º</strong> É assegurado ao consumidor a liquidação antecipada do débito, total ou parcialmente, mediante redução proporcional dos juros e demais acréscimos.</p>
                                            <p><strong>§ 3º</strong> (Vetado).</p>
                                        </div>
                                    </div>
                                    <p><strong>Art. 53.</strong> Nos contratos de compra e venda de móveis ou imóveis mediante pagamento em prestações, bem como nas alienações fiduciárias em garantia, consideram-se nulas de pleno direito as cláusulas que estabeleçam a perda total das prestações pagas em benefício do credor que, em razão do inadimplemento, pleitear a resolução do contrato e a retomada do produto alienado.</p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> (Vetado).</p>
                                        <p><strong>§ 2º</strong> Nos contratos do sistema de consórcio de produtos duráveis, a compensação ou a restituição das parcelas quitadas, na forma deste artigo, terá descontada, além da vantagem econômica auferida com a fruição, os prejuízos que o desistente ou inadimplente causar ao grupo.</p>
                                        <p><strong>§ 3°</strong> Os contratos de que trata o caput deste artigo serão expressos em moeda corrente nacional.</p>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                            <Popover className='mt-4'>
                                <Popover.Button className='flex gap-4'>
                                    <h1 className='font-bold text-rep'>Seção III</h1>
                                    <p>Dos Contratos de Adesão</p>
                                </Popover.Button>
                                <Popover.Panel className='ml-6'>
                                    <p><strong>Art. 54.</strong> Contrato de adesão é aquele cujas cláusulas tenham sido aprovadas pela autoridade competente ou estabelecidas unilateralmente pelo fornecedor de produtos ou serviços, sem que o consumidor possa discutir ou modificar substancialmente seu conteúdo. </p>
                                    <div className='ml-6'>
                                        <p><strong>§ 1°</strong> A inserção de cláusula no formulário não desfigura a natureza de adesão do contrato.</p>
                                        <p><strong>§ 2°</strong> Nos contratos de adesão admite-se cláusula resolutória, desde que a alternativa, cabendo a escolha ao consumidor, ressalvando-se o disposto no § 2° do artigo anterior.</p>
                                        <p><strong>§ 3º</strong> Os contratos de adesão escritos serão redigidos em termos claros e com caracteres ostensivos e legíveis, cujo tamanho da fonte não será inferior ao corpo doze, de modo a facilitar sua compreensão pelo consumidor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Lei/L11785.htm#art1" target='_blank'>(Redação dada pela nº 11.785, de 2008)</a></p>
                                        <p><strong>§ 4°</strong> As cláusulas que implicarem limitação de direito do consumidor deverão ser redigidas com destaque, permitindo sua imediata e fácil compreensão.</p>
                                        <p><strong>§ 5°</strong> (Vetado)</p>
                                    </div>
                                </Popover.Panel>
                            </Popover>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo VI-A</h1>
                            <p>Da prevenção e do tratamento do superendividamento</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6 gap-4'>
                            <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a>
                            <p className='mt-4'><strong>Art. 54-A.</strong> Este Capítulo dispõe sobre a prevenção do superendividamento da pessoa natural, sobre o crédito responsável e sobre a educação financeira do consumidor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>§ 1º</strong> Entende-se por superendividamento a impossibilidade manifesta de o consumidor pessoa natural, de boa-fé, pagar a totalidade de suas dívidas de consumo, exigíveis e vincendas, sem comprometer seu mínimo existencial, nos termos da regulamentação. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 2º</strong> As dívidas referidas no § 1º deste artigo englobam quaisquer compromissos financeiros assumidos decorrentes de relação de consumo, inclusive operações de crédito, compras a prazo e serviços de prestação continuada. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 3º</strong> O disposto neste Capítulo não se aplica ao consumidor cujas dívidas tenham sido contraídas mediante fraude ou má-fé, sejam oriundas de contratos celebrados dolosamente com o propósito de não realizar o pagamento ou decorram da aquisição ou contratação de produtos e serviços de luxo de alto valor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            </div>
                            <p><strong>Art. 54-B.</strong> No fornecimento de crédito e na venda a prazo, além das informações obrigatórias previstas no art. 52 deste Código e na legislação aplicável à matéria, o fornecedor ou o intermediário deverá informar o consumidor, prévia e adequadamente, no momento da oferta, sobre: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'> (Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> o custo efetivo total e a descrição dos elementos que o compõem; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>II -</strong> a taxa efetiva mensal de juros, bem como a taxa dos juros de mora e o total de encargos, de qualquer natureza, previstos para o atraso no pagamento; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>III -</strong> o montante das prestações e o prazo de validade da oferta, que deve ser, no mínimo, de 2 (dois) dias; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>IV -</strong> o nome e o endereço, inclusive o eletrônico, do fornecedor; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'> (Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>V -</strong> o direito do consumidor à liquidação antecipada e não onerosa do débito, nos termos do § 2º do art. 52 deste Código e da regulamentação em vigor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <div className='ml-6'>
                                    <p><strong>§ 1º</strong> As informações referidas no art. 52 deste Código e no caput deste artigo devem constar de forma clara e resumida do próprio contrato, da fatura ou de instrumento apartado, de fácil acesso ao consumidor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>§ 2º</strong> Para efeitos deste Código, o custo efetivo total da operação de crédito ao consumidor consistirá em taxa percentual anual e compreenderá todos os valores cobrados do consumidor, sem prejuízo do cálculo padronizado pela autoridade reguladora do sistema financeiro. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>§ 3º</strong> Sem prejuízo do disposto no art. 37 deste Código, a oferta de crédito ao consumidor e a oferta de venda a prazo, ou a fatura mensal, conforme o caso, devem indicar, no mínimo, o custo efetivo total, o agente financiador e a soma total a pagar, com e sem financiamento. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                </div>
                            </div>
                            <p><strong>Art. 54-C.</strong> É vedado, expressa ou implicitamente, na oferta de crédito ao consumidor, publicitária ou não: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank">(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> (VETADO); <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'> (Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>II -</strong> indicar que a operação de crédito poderá ser concluída sem consulta a serviços de proteção ao crédito ou sem avaliação da situação financeira do consumidor; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>III -</strong> ocultar ou dificultar a compreensão sobre os ônus e os riscos da contratação do crédito ou da venda a prazo; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>IV -</strong> assediar ou pressionar o consumidor para contratar o fornecimento de produto, serviço ou crédito, principalmente se se tratar de consumidor idoso, analfabeto, doente ou em estado de vulnerabilidade agravada ou se a contratação envolver prêmio; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>V -</strong> condicionar o atendimento de pretensões do consumidor ou o início de tratativas à renúncia ou à desistência de demandas judiciais, ao pagamento de honorários advocatícios ou a depósitos judiciais. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p>Parágrafo único. (VETADO). <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            </div>
                            <p><strong>Art. 54-D.</strong> Na oferta de crédito, previamente à contratação, o fornecedor ou o intermediário deverá, entre outras condutas: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> informar e esclarecer adequadamente o consumidor, considerada sua idade, sobre a natureza e a modalidade do crédito oferecido, sobre todos os custos incidentes, observado o disposto nos arts. 52 e 54-B deste Código, e sobre as consequências genéricas e específicas do inadimplemento; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>II -</strong> avaliar, de forma responsável, as condições de crédito do consumidor, mediante análise das informações disponíveis em bancos de dados de proteção ao crédito, observado o disposto neste Código e na legislação sobre proteção de dados; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>III -</strong> informar a identidade do agente financiador e entregar ao consumidor, ao garante e a outros coobrigados cópia do contrato de crédito. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p>Parágrafo único. O descumprimento de qualquer dos deveres previstos no caput deste artigo e nos arts. 52 e 54-C deste Código poderá acarretar judicialmente a redução dos juros, dos encargos ou de qualquer acréscimo ao principal e a dilação do prazo de pagamento previsto no contrato original, conforme a gravidade da conduta do fornecedor e as possibilidades financeiras do consumidor, sem prejuízo de outras sanções e de indenização por perdas e danos, patrimoniais e morais, ao consumidor. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            </div>
                            <p><strong>Art. 54-E.</strong> (VETADO). <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <p><strong>Art. 54-F.</strong> São conexos, coligados ou interdependentes, entre outros, o contrato principal de fornecimento de produto ou serviço e os contratos acessórios de crédito que lhe garantam o financiamento quando o fornecedor de crédito: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> recorrer aos serviços do fornecedor de produto ou serviço para a preparação ou a conclusão do contrato de crédito; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'> (Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>II -</strong> oferecer o crédito no local da atividade empresarial do fornecedor de produto ou serviço financiado ou onde o contrato principal for celebrado. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <div className='ml-6'>
                                    <p><strong>§ 1º</strong> O exercício do direito de arrependimento nas hipóteses previstas neste Código, no contrato principal ou no contrato de crédito, implica a resolução de pleno direito do contrato que lhe seja conexo. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>§ 2º</strong> Nos casos dos incisos I e II do caput deste artigo, se houver inexecução de qualquer das obrigações e deveres do fornecedor de produto ou serviço, o consumidor poderá requerer a rescisão do contrato não cumprido contra o fornecedor do crédito. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>§ 3º</strong> O direito previsto no § 2º deste artigo caberá igualmente ao consumidor: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <div className='ml-6'>
                                        <p><strong>I -</strong> contra o portador de cheque pós-datado emitido para aquisição de produto ou serviço a prazo; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank">(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                        <p><strong>II -</strong> contra o administrador ou o emitente de cartão de crédito ou similar quando o cartão de crédito ou similar e o produto ou serviço forem fornecidos pelo mesmo fornecedor ou por entidades pertencentes a um mesmo grupo econômico. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    </div>
                                    <p><strong>§ 4º</strong> A invalidade ou a ineficácia do contrato principal implicará, de pleno direito, a do contrato de crédito que lhe seja conexo, nos termos do caput deste artigo, ressalvado ao fornecedor do crédito o direito de obter do fornecedor do produto ou serviço a devolução dos valores entregues, inclusive relativamente a tributos. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                </div>
                            </div>
                            <p><strong>Art. 54-G.</strong> Sem prejuízo do disposto no art. 39 deste Código e na legislação aplicável à matéria, é vedado ao fornecedor de produto ou serviço que envolva crédito, entre outras condutas: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> realizar ou proceder à cobrança ou ao débito em conta de qualquer quantia que houver sido contestada pelo consumidor em compra realizada com cartão de crédito ou similar, enquanto não for adequadamente solucionada a controvérsia, desde que o consumidor haja notificado a administradora do cartão com antecedência de pelo menos 10 (dez) dias contados da data de vencimento da fatura, vedada a manutenção do valor na fatura seguinte e assegurado ao consumidor o direito de deduzir do total da fatura o valor em disputa e efetuar o pagamento da parte não contestada, podendo o emissor lançar como crédito em confiança o valor idêntico ao da transação contestada que tenha sido cobrada, enquanto não encerrada a apuração da contestação; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>II -</strong> recusar ou não entregar ao consumidor, ao garante e aos outros coobrigados cópia da minuta do contrato principal de consumo ou do contrato de crédito, em papel ou outro suporte duradouro, disponível e acessível, e, após a conclusão, cópia do contrato; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>III -</strong> impedir ou dificultar, em caso de utilização fraudulenta do cartão de crédito ou similar, que o consumidor peça e obtenha, quando aplicável, a anulação ou o imediato bloqueio do pagamento, ou ainda a restituição dos valores indevidamente recebidos. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank">(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <div className='ml-6'>
                                    <p><strong>§ 1º</strong> Sem prejuízo do dever de informação e esclarecimento do consumidor e de entrega da minuta do contrato, no empréstimo cuja liquidação seja feita mediante consignação em folha de pagamento, a formalização e a entrega da cópia do contrato ou do instrumento de contratação ocorrerão após o fornecedor do crédito obter da fonte pagadora a indicação sobre a existência de margem consignável. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target="_blank">(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>§ 2º</strong> Nos contratos de adesão, o fornecedor deve prestar ao consumidor, previamente, as informações de que tratam o art. 52 e o caput do art. 54-B deste Código, além de outras porventura determinadas na legislação em vigor, e fica obrigado a entregar ao consumidor cópia do contrato, após a sua conclusão <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4 ml-6 sm:ml-0'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo VII</h1>
                            <p>Das Sanções Administrativas</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6 gap-4'>
                            <a href="http://www.planalto.gov.br/ccivil_03/leis/L8656.htm#art2" target='_blank'>(Vide Lei nº 8.656, de 1993)</a>
                            <p className='mt-4'><strong>Art. 55.</strong> A União, os Estados e o Distrito Federal, em caráter concorrente e nas suas respectivas áreas de atuação administrativa, baixarão normas relativas à produção, industrialização, distribuição e consumo de produtos e serviços.</p>
                            <div className='ml-6'>
                                <p><strong>§ 1°</strong> A União, os Estados, o Distrito Federal e os Municípios fiscalizarão e controlarão a produção, industrialização, distribuição, a publicidade de produtos e serviços e o mercado de consumo, no interesse da preservação da vida, da saúde, da segurança, da informação e do bem-estar do consumidor, baixando as normas que se fizerem necessárias.</p>
                                <p><strong>§ 2°</strong> (Vetado).</p>
                                <p><strong>§ 3°</strong> Os órgãos federais, estaduais, do Distrito Federal e municipais com atribuições para fiscalizar e controlar o mercado de consumo manterão comissões permanentes para elaboração, revisão e atualização das normas referidas no § 1°, sendo obrigatória a participação dos consumidores e fornecedores.</p>
                                <p><strong>§ 4°</strong> Os órgãos oficiais poderão expedir notificações aos fornecedores para que, sob pena de desobediência, prestem informações sobre questões de interesse do consumidor, resguardado o segredo industrial.</p>
                            </div>
                            <p><strong>Art. 56.</strong> As infrações das normas de defesa do consumidor ficam sujeitas, conforme o caso, às seguintes sanções administrativas, sem prejuízo das de natureza civil, penal e das definidas em normas específicas:</p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> multa;</p>
                                <p><strong>II -</strong> apreensão do produto;</p>
                                <p><strong>III -</strong> inutilização do produto;</p>
                                <p><strong>IV -</strong> cassação do registro do produto junto ao órgão competente;</p>
                                <p><strong>V -</strong> proibição de fabricação do produto;</p>
                                <p><strong>VI -</strong> suspensão de fornecimento de produtos ou serviço;</p>
                                <p><strong>VII -</strong> suspensão temporária de atividade;</p>
                                <p><strong>VIII -</strong> revogação de concessão ou permissão de uso;</p>
                                <p><strong>IX -</strong> cassação de licença do estabelecimento ou de atividade;</p>
                                <p><strong>X -</strong> interdição, total ou parcial, de estabelecimento, de obra ou de atividade;</p>
                                <p><strong>XI -</strong> intervenção administrativa;</p>
                                <p><strong>XII -</strong> imposição de contrapropaganda.</p>
                                <p>Parágrafo único. As sanções previstas neste artigo serão aplicadas pela autoridade administrativa, no âmbito de sua atribuição, podendo ser aplicadas cumulativamente, inclusive por medida cautelar, antecedente ou incidente de procedimento administrativo.</p>
                            </div>
                            <p><strong>Art. 57.</strong> A pena de multa, graduada de acordo com a gravidade da infração, a vantagem auferida e a condição econômica do fornecedor, será aplicada mediante procedimento administrativo, revertendo para o Fundo de que trata a Lei nº 7.347, de 24 de julho de 1985, os valores cabíveis à União, ou para os Fundos estaduais ou municipais de proteção ao consumidor nos demais casos. <a href="http://www.planalto.gov.br/ccivil_03/leis/L8656.htm#art57" target='_blank'>(Redação dada pela Lei nº 8.656, de 21.5.1993)</a></p>
                            <p>Parágrafo único. A multa será em montante não inferior a duzentas e não superior a três milhões de vezes o valor da Unidade Fiscal de Referência (Ufir), ou índice equivalente que venha a substituí-lo. <a href="http://www.planalto.gov.br/ccivil_03/leis/L8703.htm#art1" target='_blank'>(Parágrafo acrescentado pela Lei nº 8.703, de 6.9.1993)</a></p>
                            <p><strong>Art. 58.</strong> As penas de apreensão, de inutilização de produtos, de proibição de fabricação de produtos, de suspensão do fornecimento de produto ou serviço, de cassação do registro do produto e revogação da concessão ou permissão de uso serão aplicadas pela administração, mediante procedimento administrativo, assegurada ampla defesa, quando forem constatados vícios de quantidade ou de qualidade por inadequação ou insegurança do produto ou serviço.</p>
                            <p><strong>Art. 59.</strong> As penas de cassação de alvará de licença, de interdição e de suspensão temporária da atividade, bem como a de intervenção administrativa, serão aplicadas mediante procedimento administrativo, assegurada ampla defesa, quando o fornecedor reincidir na prática das infrações de maior gravidade previstas neste código e na legislação de consumo.</p>
                            <div className='ml-6'>
                                <p><strong>§ 1°</strong> A pena de cassação da concessão será aplicada à concessionária de serviço público, quando violar obrigação legal ou contratual.</p>
                                <p><strong>§ 2°</strong> A pena de intervenção administrativa será aplicada sempre que as circunstâncias de fato desaconselharem a cassação de licença, a interdição ou suspensão da atividade.</p>
                                <p><strong>§ 3°</strong> Pendendo ação judicial na qual se discuta a imposição de penalidade administrativa, não haverá reincidência até o trânsito em julgado da sentença.</p>
                            </div>
                            <p><strong>Art. 60.</strong> A imposição de contrapropaganda será cominada quando o fornecedor incorrer na prática de publicidade enganosa ou abusiva, nos termos do art. 36 e seus parágrafos, sempre às expensas do infrator.</p>
                            <div className='ml-6'>
                                <p><strong>§ 1º</strong> A contrapropaganda será divulgada pelo responsável da mesma forma, freqüência e dimensão e, preferencialmente no mesmo veículo, local, espaço e horário, de forma capaz de desfazer o malefício da publicidade enganosa ou abusiva.</p>
                                <p><strong>§ 2°</strong> (Vetado)</p>
                                <p><strong>§ 3°</strong> (Vetado).</p>
                            </div>
                        </Popover.Panel>
                    </Popover>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
