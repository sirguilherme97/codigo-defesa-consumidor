import { Popover } from '@headlessui/react'
export function T3() {
    return (
        <div className='w-screen px-20 mt-12 flex items-center justify-start '>
            <Popover>
                <Popover.Button className='flex flex-col items-start justify-center'>
                    <h1 className='text-xl font-bold text-rep'>Titulo III</h1>
                    <p className='text-lg'>Da Defesa do Consumidor em Juízo</p>
                </Popover.Button>
                <Popover.Panel className='mt-4 ml-6'>
                    <Popover>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo I</h1>
                            <p>Disposições Gerais</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <p><strong>Art. 81.</strong> A defesa dos interesses e direitos dos consumidores e das vítimas poderá ser exercida em juízo individualmente, ou a título coletivo.</p>
                            <p>Parágrafo único. A defesa coletiva será exercida quando se tratar de:</p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> interesses ou direitos difusos, assim entendidos, para efeitos deste código, os transindividuais, de natureza indivisível, de que sejam titulares pessoas indeterminadas e ligadas por circunstâncias de fato;</p>
                                <p><strong>II -</strong> interesses ou direitos coletivos, assim entendidos, para efeitos deste código, os transindividuais, de natureza indivisível de que seja titular grupo, categoria ou classe de pessoas ligadas entre si ou com a parte contrária por uma relação jurídica base;</p>
                                <p><strong>III -</strong> interesses ou direitos individuais homogêneos, assim entendidos os decorrentes de origem comum.</p>
                            </div>
                            <p><strong>Art. 82.</strong> Para os fins do art. 81, parágrafo único, são legitimados concorrentemente: <a href="http://www.planalto.gov.br/ccivil_03/leis/L9008.htm#art7" target='_blank'>(Redação dada pela Lei nº 9.008, de 21.3.1995)</a></p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> o Ministério Público,</p>
                                <p><strong>II -</strong> a União, os Estados, os Municípios e o Distrito Federal;</p>
                                <p><strong>III -</strong> as entidades e órgãos da Administração Pública, direta ou indireta, ainda que sem personalidade jurídica, especificamente destinados à defesa dos interesses e direitos protegidos por este código;</p>
                                <p><strong>IV -</strong> as associações legalmente constituídas há pelo menos um ano e que incluam entre seus fins institucionais a defesa dos interesses e direitos protegidos por este código, dispensada a autorização assemblear.</p>
                                <div className='ml-6'>
                                    <p><strong>§ 1°</strong> O requisito da pré-constituição pode ser dispensado pelo juiz, nas ações previstas nos arts. 91 e seguintes, quando haja manifesto interesse social evidenciado pela dimensão ou característica do dano, ou pela relevância do bem jurídico a ser protegido.</p>
                                    <p><strong>§ 2°</strong> (Vetado).</p>
                                    <p><strong>§ 3°</strong> (Vetado).</p>
                                </div>
                            </div>
                            <p><strong>Art. 83.</strong> Para a defesa dos direitos e interesses protegidos por este código são admissíveis todas as espécies de ações capazes de propiciar sua adequada e efetiva tutela.</p>
                            <p>Parágrafo único. (Vetado).</p>
                            <p><strong>Art. 84.</strong> Na ação que tenha por objeto o cumprimento da obrigação de fazer ou não fazer, o juiz concederá a tutela específica da obrigação ou determinará providências que assegurem o resultado prático equivalente ao do adimplemento.</p>
                            <div className='ml-6'>
                                <p><strong>§ 1°</strong> A conversão da obrigação em perdas e danos somente será admissível se por elas optar o autor ou se impossível a tutela específica ou a obtenção do resultado prático correspondente.</p>
                                <p><strong>§ 2°</strong> A indenização por perdas e danos se fará sem prejuízo da multa (art. 287, do Código de Processo Civil).</p>
                                <p><strong>§ 3°</strong> Sendo relevante o fundamento da demanda e havendo justificado receio de ineficácia do provimento final, é lícito ao juiz conceder a tutela liminarmente ou após justificação prévia, citado o réu.</p>
                                <p><strong>§ 4°</strong> O juiz poderá, na hipótese do § 3° ou na sentença, impor multa diária ao réu, independentemente de pedido do autor, se for suficiente ou compatível com a obrigação, fixando prazo razoável para o cumprimento do preceito.</p>
                                <p><strong>§ 5°</strong> Para a tutela específica ou para a obtenção do resultado prático equivalente, poderá o juiz determinar as medidas necessárias, tais como busca e apreensão, remoção de coisas e pessoas, desfazimento de obra, impedimento de atividade nociva, além de requisição de força policial.</p>
                            </div>
                            <p><strong>Art. 85.</strong> (Vetado).</p>
                            <p><strong>Art. 86.</strong> (Vetado).</p>
                            <p><strong>Art. 87.</strong> Nas ações coletivas de que trata este código não haverá adiantamento de custas, emolumentos, honorários periciais e quaisquer outras despesas, nem condenação da associação autora, salvo comprovada má-fé, em honorários de advogados, custas e despesas processuais.</p>
                            <p>Parágrafo único. Em caso de litigância de má-fé, a associação autora e os diretores responsáveis pela propositura da ação serão solidariamente condenados em honorários advocatícios e ao décuplo das custas, sem prejuízo da responsabilidade por perdas e danos.</p>
                            <p><strong>Art. 88.</strong> Na hipótese do art. 13, parágrafo único deste código, a ação de regresso poderá ser ajuizada em processo autônomo, facultada a possibilidade de prosseguir-se nos mesmos autos, vedada a denunciação da lide.</p>
                            <p><strong>Art. 89.</strong> (Vetado)</p>
                            <p><strong>Art. 90.</strong> Aplicam-se às ações previstas neste título as normas do Código de Processo Civil e da Lei n° 7.347, de 24 de julho de 1985, inclusive no que respeita ao inquérito civil, naquilo que não contrariar suas disposições.</p>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo II</h1>
                            <p>Das Ações Coletivas Para a Defesa de Interesses Individuais Homogêneos</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <p><strong>Art. 91.</strong> Os legitimados de que trata o art. 82 poderão propor, em nome próprio e no interesse das vítimas ou seus sucessores, ação civil coletiva de responsabilidade pelos danos individualmente sofridos, de acordo com o disposto nos artigos seguintes. <a href="http://www.planalto.gov.br/ccivil_03/leis/L9008.htm#art7" target='_blank'> (Redação dada pela Lei nº 9.008, de 21.3.1995)</a></p>
                            <p><strong>Art. 92.</strong> O Ministério Público, se não ajuizar a ação, atuará sempre como fiscal da lei.</p>
                            <p>Parágrafo único. (Vetado).</p>
                            <p><strong>Art. 93.</strong> Ressalvada a competência da Justiça Federal, é competente para a causa a justiça local:</p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> no foro do lugar onde ocorreu ou deva ocorrer o dano, quando de âmbito local;</p>
                                <p><strong>II -</strong> no foro da Capital do Estado ou no do Distrito Federal, para os danos de âmbito nacional ou regional, aplicando-se as regras do Código de Processo Civil aos casos de competência concorrente.</p>
                            </div>
                            <p><strong>Art. 94.</strong> Proposta a ação, será publicado edital no órgão oficial, a fim de que os interessados possam intervir no processo como litisconsortes, sem prejuízo de ampla divulgação pelos meios de comunicação social por parte dos órgãos de defesa do consumidor.</p>
                            <p><strong>Art. 95.</strong> Em caso de procedência do pedido, a condenação será genérica, fixando a responsabilidade do réu pelos danos causados.</p>
                            <p><strong>Art. 96.</strong> (Vetado).</p>
                            <p><strong>Art. 97.</strong> A liquidação e a execução de sentença poderão ser promovidas pela vítima e seus sucessores, assim como pelos legitimados de que trata o art. 82.</p>
                            <p>Parágrafo único. (Vetado).</p>
                            <p><strong>Art. 98.</strong> A execução poderá ser coletiva, sendo promovida pelos legitimados de que trata o art. 82, abrangendo as vítimas cujas indenizações já tiveram sido fixadas em sentença de liquidação, sem prejuízo do ajuizamento de outras execuções. <a href="http://www.planalto.gov.br/ccivil_03/leis/L9008.htm#art7" target='_blank'>(Redação dada pela Lei nº 9.008, de 21.3.1995)</a></p>
                            <div className='ml-6'>
                                <p><strong>§ 1°</strong> A execução coletiva far-se-á com base em certidão das sentenças de liquidação, da qual deverá constar a ocorrência ou não do trânsito em julgado.</p>
                                <p><strong>§ 2°</strong> É competente para a execução o juízo:</p>
                                <div className='ml-6'>
                                    <p><strong>I -</strong> da liquidação da sentença ou da ação condenatória, no caso de execução individual;</p>
                                    <p><strong>II -</strong> da ação condenatória, quando coletiva a execução.</p>
                                </div>
                            </div>
                            <p><strong>Art. 99.</strong> Em caso de concurso de créditos decorrentes de condenação prevista na Lei n.° 7.347, de 24 de julho de 1985 e de indenizações pelos prejuízos individuais resultantes do mesmo evento danoso, estas terão preferência no pagamento.</p>
                            <p>Parágrafo único. Para efeito do disposto neste artigo, a destinação da importância recolhida ao fundo criado pela Lei n°7.347 de 24 de julho de 1985, ficará sustada enquanto pendentes de decisão de segundo grau as ações de indenização pelos danos individuais, salvo na hipótese de o patrimônio do devedor ser manifestamente suficiente para responder pela integralidade das dívidas.</p>
                            <p><strong>Art. 100.</strong> Decorrido o prazo de um ano sem habilitação de interessados em número compatível com a gravidade do dano, poderão os legitimados do art. 82 promover a liquidação e execução da indenização devida.</p>
                            <p>Parágrafo único. O produto da indenização devida reverterá para o fundo criado pela Lei n.° 7.347, de 24 de julho de 1985.</p>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo III</h1>
                            <p>Das Ações de Responsabilidade do Fornecedor de Produtos e Serviços</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <p><strong>Art. 101.</strong> Na ação de responsabilidade civil do fornecedor de produtos e serviços, sem prejuízo do disposto nos Capítulos I e II deste título, serão observadas as seguintes normas:</p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> a ação pode ser proposta no domicílio do autor;</p>
                                <p><strong>II -</strong> o réu que houver contratado seguro de responsabilidade poderá chamar ao processo o segurador, vedada a integração do contraditório pelo Instituto de Resseguros do Brasil. Nesta hipótese, a sentença que julgar procedente o pedido condenará o réu nos termos do art. 80 do Código de Processo Civil. Se o réu houver sido declarado falido, o síndico será intimado a informar a existência de seguro de responsabilidade, facultando-se, em caso afirmativo, o ajuizamento de ação de indenização diretamente contra o segurador, vedada a denunciação da lide ao Instituto de Resseguros do Brasil e dispensado o litisconsórcio obrigatório com este.</p>
                            </div>
                            <p><strong>Art. 102.</strong> Os legitimados a agir na forma deste código poderão propor ação visando compelir o Poder Público competente a proibir, em todo o território nacional, a produção, divulgação distribuição ou venda, ou a determinar a alteração na composição, estrutura, fórmula ou acondicionamento de produto, cujo uso ou consumo regular se revele nocivo ou perigoso à saúde pública e à incolumidade pessoal.</p>
                            <div className='ml-6'>
                                <p><strong>§ 1°</strong> (Vetado).</p>
                                <p><strong>§ 2°</strong> (Vetado)</p>
                            </div>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo IV</h1>
                            <p>Da Coisa Julgada</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <p><strong>Art. 103.</strong> Nas ações coletivas de que trata este código, a sentença fará coisa julgada:</p>
                            <div className='ml-6'>
                                <p><strong>I -</strong> erga omnes, exceto se o pedido for julgado improcedente por insuficiência de provas, hipótese em que qualquer legitimado poderá intentar outra ação, com idêntico fundamento valendo-se de nova prova, na hipótese do inciso I do parágrafo único do art. 81;</p>
                                <p><strong>II -</strong> ultra partes, mas limitadamente ao grupo, categoria ou classe, salvo improcedência por insuficiência de provas, nos termos do inciso anterior, quando se tratar da hipótese prevista no inciso II do parágrafo único do art. 81;</p>
                                <p><strong>III -</strong> erga omnes, apenas no caso de procedência do pedido, para beneficiar todas as vítimas e seus sucessores, na hipótese do inciso III do parágrafo único do art. 81.</p>
                                <div className='ml-6'>
                                    <p><strong>§ 1°</strong> Os efeitos da coisa julgada previstos nos incisos I e II não prejudicarão interesses e direitos individuais dos integrantes da coletividade, do grupo, categoria ou classe.</p>
                                    <p><strong>§ 2°</strong> Na hipótese prevista no inciso III, em caso de improcedência do pedido, os interessados que não tiverem intervindo no processo como litisconsortes poderão propor ação de indenização a título individual.</p>
                                    <p><strong>§ 3°</strong> Os efeitos da coisa julgada de que cuida o art. 16, combinado com o art. 13 da Lei n° 7.347, de 24 de julho de 1985, não prejudicarão as ações de indenização por danos pessoalmente sofridos, propostas individualmente ou na forma prevista neste código, mas, se procedente o pedido, beneficiarão as vítimas e seus sucessores, que poderão proceder à liquidação e à execução, nos termos dos arts. 96 a 99.</p>
                                    <p><strong>§ 4º</strong> Aplica-se o disposto no parágrafo anterior à sentença penal condenatória.</p>
                                </div>
                            </div>
                            <p><strong>Art. 104.</strong> As ações coletivas, previstas nos incisos I e II e do parágrafo único do art. 81, não induzem litispendência para as ações individuais, mas os efeitos da coisa julgada erga omnes ou ultra partes a que aludem os incisos II e III do artigo anterior não beneficiarão os autores das ações individuais, se não for requerida sua suspensão no prazo de trinta dias, a contar da ciência nos autos do ajuizamento da ação coletiva.</p>
                        </Popover.Panel>
                    </Popover>
                    <Popover className='mt-4'>
                        <Popover.Button className='flex gap-4'>
                            <h1 className='font-bold text-rep'>Capítulo V</h1>
                            <p>Da conciliação no superendividamento</p>
                        </Popover.Button>
                        <Popover.Panel className='mt-4 ml-6'>
                            <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a>
                            <p className='mt-4'><strong>Art. 104-A.</strong> A requerimento do consumidor superendividado pessoa natural, o juiz poderá instaurar processo de repactuação de dívidas, com vistas à realização de audiência conciliatória, presidida por ele ou por conciliador credenciado no juízo, com a presença de todos os credores de dívidas previstas no art. 54-A deste Código, na qual o consumidor apresentará proposta de plano de pagamento com prazo máximo de 5 (cinco) anos, preservados o mínimo existencial, nos termos da regulamentação, e as garantias e as formas de pagamento originalmente pactuadas. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>§ 1º</strong> Excluem-se do processo de repactuação as dívidas, ainda que decorrentes de relações de consumo, oriundas de contratos celebrados dolosamente sem o propósito de realizar pagamento, bem como as dívidas provenientes de contratos de crédito com garantia real, de financiamentos imobiliários e de crédito rural. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 2º</strong> O não comparecimento injustificado de qualquer credor, ou de seu procurador com poderes especiais e plenos para transigir, à audiência de conciliação de que trata o caput deste artigo acarretará a suspensão da exigibilidade do débito e a interrupção dos encargos da mora, bem como a sujeição compulsória ao plano de pagamento da dívida se o montante devido ao credor ausente for certo e conhecido pelo consumidor, devendo o pagamento a esse credor ser estipulado para ocorrer apenas após o pagamento aos credores presentes à audiência conciliatória. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 3º</strong> No caso de conciliação, com qualquer credor, a sentença judicial que homologar o acordo descreverá o plano de pagamento da dívida e terá eficácia de título executivo e força de coisa julgada. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 4º</strong> Constarão do plano de pagamento referido no § 3º deste artigo: <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <div className='ml-6'>
                                    <p><strong>I -</strong> medidas de dilação dos prazos de pagamento e de redução dos encargos da dívida ou da remuneração do fornecedor, entre outras destinadas a facilitar o pagamento da dívida; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>II -</strong> referência à suspensão ou à extinção das ações judiciais em curso; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>III -</strong> data a partir da qual será providenciada a exclusão do consumidor de bancos de dados e de cadastros de inadimplentes; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                    <p><strong>IV -</strong> condicionamento de seus efeitos à abstenção, pelo consumidor, de condutas que importem no agravamento de sua situação de superendividamento. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                </div>
                                <p><strong>§ 5º</strong> O pedido do consumidor a que se refere o caput deste artigo não importará em declaração de insolvência civil e poderá ser repetido somente após decorrido o prazo de 2 (dois) anos, contado da liquidação das obrigações previstas no plano de pagamento homologado, sem prejuízo de eventual repactuação. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            </div>
                            <p><strong>Art. 104-B.</strong> Se não houver êxito na conciliação em relação a quaisquer credores, o juiz, a pedido do consumidor, instaurará processo por superendividamento para revisão e integração dos contratos e repactuação das dívidas remanescentes mediante plano judicial compulsório e procederá à citação de todos os credores cujos créditos não tenham integrado o acordo porventura celebrado. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>§ 1º</strong> Serão considerados no processo por superendividamento, se for o caso, os documentos e as informações prestadas em audiência. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 2º</strong> No prazo de 15 (quinze) dias, os credores citados juntarão documentos e as razões da negativa de aceder ao plano voluntário ou de renegociar. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 3º</strong> O juiz poderá nomear administrador, desde que isso não onere as partes, o qual, no prazo de até 30 (trinta) dias, após cumpridas as diligências eventualmente necessárias, apresentará plano de pagamento que contemple medidas de temporização ou de atenuação dos encargos. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 4º</strong> O plano judicial compulsório assegurará aos credores, no mínimo, o valor do principal devido, corrigido monetariamente por índices oficiais de preço, e preverá a liquidação total da dívida, após a quitação do plano de pagamento consensual previsto no art. 104-A deste Código, em, no máximo, 5 (cinco) anos, sendo que a primeira parcela será devida no prazo máximo de 180 (cento e oitenta) dias, contado de sua homologação judicial, e o restante do saldo será devido em parcelas mensais iguais e sucessivas. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'> (Incluído pela Lei nº 14.181, de 2021)</a></p>
                            </div>
                            <p><strong>Art. 104-C.</strong> Compete concorrente e facultativamente aos órgãos públicos integrantes do Sistema Nacional de Defesa do Consumidor a fase conciliatória e preventiva do processo de repactuação de dívidas, nos moldes do art. 104-A deste Código, no que couber, com possibilidade de o processo ser regulado por convênios específicos celebrados entre os referidos órgãos e as instituições credoras ou suas associações. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                            <div className='ml-6'>
                                <p><strong>§ 1º</strong> Em caso de conciliação administrativa para prevenir o superendividamento do consumidor pessoa natural, os órgãos públicos poderão promover, nas reclamações individuais, audiência global de conciliação com todos os credores e, em todos os casos, facilitar a elaboração de plano de pagamento, preservado o mínimo existencial, nos termos da regulamentação, sob a supervisão desses órgãos, sem prejuízo das demais atividades de reeducação financeira cabíveis. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'>(Incluído pela Lei nº 14.181, de 2021)</a></p>
                                <p><strong>§ 2º</strong> O acordo firmado perante os órgãos públicos de defesa do consumidor, em caso de superendividamento do consumidor pessoa natural, incluirá a data a partir da qual será providenciada a exclusão do consumidor de bancos de dados e de cadastros de inadimplentes, bem como o condicionamento de seus efeitos à abstenção, pelo consumidor, de condutas que importem no agravamento de sua situação de superendividamento, especialmente a de contrair novas dívidas. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2021/Lei/L14181.htm#art1" target='_blank'> (Incluído pela Lei nº 14.181, de 2021)</a></p>
                            </div>
                        </Popover.Panel>
                    </Popover>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
