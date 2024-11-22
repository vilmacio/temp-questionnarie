"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

interface TermsDialogProps {
  isOpen: boolean;
  isTermsAccepted: boolean;
  onTermsAcceptedChange: (accepted: boolean) => void;
  onAccept: () => void;
}

export function TermsDialog({ 
  isOpen, 
  isTermsAccepted,
  onTermsAcceptedChange,
  onAccept,
}: TermsDialogProps) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const reachedBottom = Math.abs(
      element.scrollHeight - element.clientHeight - element.scrollTop
    ) < 1;

    if (reachedBottom) {
      setHasScrolledToBottom(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => { }} modal={true}>
      <DialogContent
      className="max-w-2xl h-[80vh] flex flex-col" 
      onPointerDownOutside={(e) => e.preventDefault()}
      onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>CONSENTIMENTO PARA EXAMES E USO DE INFORMAÇÕES</DialogTitle>
          <DialogDescription>
            Atualizado em: 21/11/2024
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 mb-4 relative scroll-smooth" ref={contentRef} onScroll={handleScroll}>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <h1>CONSENTIMENTO DO PACIENTE PARA EXAMES E USO DE INFORMAÇÕES</h1>
            <p>
              Neste Consentimento do Paciente para Exames e Uso de Informações (este "Consentimento"), os termos "você" e "seu" referem-se à pessoa que está criando uma conta de paciente com a entidade profissional KAI PREVENTION identificada na Seção 1 ( " KAI PREVENTION", "nós") ou, no caso de um menor, "você" e "seu" referem-se e incluem (i) o pai/mãe ou responsável legal que fornece consentimento para a criação de tal conta por tal menor e (ii) o menor para quem o consentimento está sendo fornecido.            </p>

            <p>
              <p>
                A KAI PREVENTION é uma empresa de serviços de saúde que tem suporte próprio sendo, tecnológico e administrativo, inclusive é proprietária e opera o site da KAI PREVENTION localizado em
                <a href="https://www.kaiprevention.com.br">www.kaiprevention.com.br</a>, o aplicativo móvel KAI PREVENTION (coletivamente, a "Plataforma") e qualquer coisa associada a ele, incluindo seu conteúdo e quaisquer produtos ou serviços fornecidos por meio da Plataforma ou de outra forma pela KAI PREVENTION.
              </p>
              <p>
                Seu recebimento do questionário (definido abaixo) e outros serviços da KAI PREVENTION também estão sujeitos aos Termos de Uso da KAI PREVENTION
                <a href="https://www.kaiprevention.com.br/privacy-policy">https://www.kaiprevention.com.br/privacy-policy</a>.
              </p>
            </p>

            <p>
              Este Consentimento analisa os benefícios, riscos e limitações de se submeter a um questionário de triagem pela KAI PREVENTION para rastreá-lo, para certos tipos de condições médicas, conforme indicado no site da KAI PREVENTION.Ele também explica como suas informações serão usadas após a realização do Questionário . Antes de assinar este Consentimento Informado, você pode desejar falar com seu médico ou seu provedor de saúde solicitante ou encaminhador para obter mais orientações sobre o Questionário.
            </p>

            <h2>1. KAI PREVENTION</h2>

            <p>
              A KAI PREVENTION  emprega e/ou contrata médicos e profissionais de saúde aliados para fornecer serviços médicos aos pacientes. Somos uma empresa de médicos especialistas que aplicam os princípios da radiologia avançada de corpo inteiro para triagem e diagnóstico de câncer e doenças (a "Leitura"): a KAI PREVENTION  NÃO É UM PRESTADOR DE CUIDADOS PRIMÁRIOS. Sempre entre em contato diretamente com seu provedor de saúde regular com quaisquer perguntas sobre sua saúde pessoal ou condições médicas. A decisão de focar no diagnóstico, recomendações de tratamento ou ambos cabem a você e ao provedor de saúde.
            </p>

            <h3>Adequação do Questionário</h3>
            <p>
              A KAI PREVENTION revisará suas informações e, após determinar que o questionário é apropriado para você, ele solicitará o EXAME para você. Você também será solicitado a seguir as instruções para se preparar no dia do teste e fornecer suas informações de saúde pessoal e familiar (ESF). Suas imagens e ESF serão armazenadas pela KAI PREVENTION para análise. Para que o exame seja executado conforme o esperado, você deve fornecer informações precisas e corretas. Se outra pessoa estiver enviando seu ESF ou informações relacionadas em seu nome, ao assinar este Consentimento Informado, você declara e garante que tal pessoa está autorizada a fornecer tais informações e que todas essas informações são precisas e corretas. Após a conclusão bem-sucedida do exame, você solicita que um relatório seja disponibilizado a você e ao seu provedor de saúde solicitante para revisão. Recomendamos que você consulte seu provedor de saúde sobre seus resultados. Ao assinar este consentimento, você também reconhece e concorda que a KAI PREVENTION pode desidentificar seu ESF e qualquer informação que a KAI PREVENTION obtenha de sua análise pode ser agregada com informações desidentificadas de outros pacientes. Desidentificação significa que as informações de identificação pessoal (IIP) associadas às suas informações serão removidas. As informações desidentificadas podem ser enviadas pela KAI PREVENTION a bancos de dados públicos para promover pesquisas médicas.
            </p>


            <h2>2. Benefícios do Exame</h2>
            <p>
              Seus resultados podem indicar que você tem certas condições médicas, cujo diagnóstico precoce pode ter um impacto material nos resultados do tratamento.
              Esse conhecimento pode ajudar você e seu provedor de saúde a tomar decisões de saúde mais informadas.
            </p>

            <h2>3. Riscos do Exame</h2>
            <p>
              Este exame é uma triagem médica que pode fazer com que você descubra informações confidenciais sobre seu estado de saúde ou doença, incluindo doenças que atualmente não têm tratamento.
            </p>

            <h2>4. Limitações do Exame</h2>
            <p>O exame tem como objetivo diagnosticar a presença de certas condições médicas em condições ideais.</p>

            <h5>Triagem geral.</h5>
            <p>O exame de ressonância magnética de corpo inteiro KAI PREVENTION foi desenvolvido para avaliar pacientes assintomáticos com risco médio, pertencentes à população em geral, no contexto de uma triagem abrangente.</p>

            <h5>Não substitui a triagem de rotina.</h5>
            <p>O Exame pretende servir como um complemento, mas não pretende substituir, outras práticas de triagem baseadas em evidências estabelecidas para detecção precoce de malignidades específicas (por exemplo, colonoscopia, imagem de mama dedicada, triagem de Papanicolau para câncer cervical, TC de tórax de baixa dosagem para pacientes de alto risco).</p>

            <h5>Lesões.</h5>
            <p>Sob condições ideais, o exame é geralmente eficaz na visualização de lesões de 1,5 cm ou maiores na pele, abdômen e pelve. O pacote abrangente de cabeça e tronco também avalia a cabeça e o pescoço para lesões de 1 cm ou maiores.</p>

            <h5>Aneurismas.</h5>
            <p>O exame é geralmente eficaz para a detecção de aneurismas da artéria cerebral na ordem de 3 mm ou mais em tamanho em pacientes com vasculatura cerebral normal.</p>

            <h5>Limitações gerais.</h5>
            <p>Como em qualquer teste médico, devido a muitos fatores, incluindo o estado de progressão da doença, fisiologia corporal, posição ruim, preparação do paciente e movimento corporal, há limitações que tornam impossível para o exame detectar todas as malignidades e condições.</p>

            <h5>Coração.</h5>
            <p>O exame não avalia o coração em detalhes ou os vasos cardíacos.</p>

            <h5>Pulmões.</h5>
            <p>O exame não avalia a microarquitetura pulmonar detalhada e os micros nódulos pulmonares, mas avaliará a adenopatia/carcinoma mediastinal/hilar dentro dos limites da ressonância magnética sem contraste.</p>

            <h5>Víscera oca.</h5>
            <p>O exame é limitado na avaliação da víscera oca (intestino e estômago) e não substitui a endoscopia ou colonoscopia. A varredura não pode detectar pólipos de intestino.</p>

            <h5>Articulações.</h5>
            <p>O exame é limitado em sua avaliação das grandes articulações, pois o exame não é adaptado para avaliação detalhada dos ligamentos articulares, cartilagem, meniscos e lábio.</p>

            <h5>Pele.</h5>
            <p>O exame não deve ser considerado uma modalidade primária de triagem da pele. Isso é mais bem avaliado por exame físico direto.</p>

            <h5>Diagnóstico de Imagem.</h5>
            <p>O exame não se destina a substituir o diagnóstico por imagem dedicado no contexto de questões clínicas específicas de diagnósticos.</p>

            <h5>Nenhum câncer ativo ou recente sem aprovação.</h5>
            <p>
              O exame não é especificamente pretendido ou otimizado especificamente para avaliar câncer suspeito, ativo ou recente (nos últimos 5 anos). Qualquer pessoa que atenda a esse critério deve divulgar seu diagnóstico de câncer em seu ESF e ser encaminhada por sua equipe de atendimento primário ou oncológico, o que pode facilitar a aprovação para prosseguir com o exame caso a caso pela equipe de liderança clínica da KAI PREVENTION.
            </p>

            <p>
              A KAI PREVENTION implementa várias salvaguardas para evitar erros técnicos, mas, como em todos os exames médicos, há uma chance de um resultado falso positivo ou falso negativo. Um resultado falso positivo significa que uma condição médica foi diagnosticada, o que não está de fato presente. Um resultado negativo significa que o teste falhou em diagnosticar uma condição médica que é de fato presente. Outras fontes de erro, como confusão rara, confusão de estudo de imagem e erros de codificação. Se você tem doenças raras no corpo e órgãos, essas morfologias podem limitar a precisão dos resultados. Finalmente, os exames de imagem, em particular, dependem da correspondência de padrões para dar suporte a diagnósticos com diferenciais para muitas doenças. A KAI PREVENTION se isenta expressamente de qualquer responsabilidade pela imprecisão dos resultados dos exames resultantes de tais condições ou pela falha em fornecer ESF preciso, secreto ou completo, e você expressamente renuncia a quaisquer reclamações contra a KAI PREVENTION com relação a isso.
            </p>

            <h2>5. Resultados Potenciais</h2>
            <p>
              Se você receber um diagnóstico médico para o qual o acompanhamento é recomendado, você deve consultar seu médico para discutir os resultados do exame. É importante observar que os resultados que indicam que você não tem nenhuma descoberta clinicamente significativa não garantem que você esteja saudável. Ao assinar este Consentimento do Paciente, você entende e concorda que seus resultados devem ser considerados no contexto de um gerenciamento médico mais amplo por um profissional de saúde e que você não deve tomar decisões médicas sem consultar um profissional de saúde.
            </p>

            <h2>6. Uso da Informação</h2>
            <p>
              A radiologia é construída sobre "reconhecimento de padrões".! A KAI PREVENTION pode executar leituras de radiologia de alta qualidade porque tem vários anos de experiência nisso. O exame que você fará se beneficia de todas as leituras que vêm antes dela, pois ela cria um limite em um catálogo de condições que podem ser evitadas para informar um diagnóstico ou diagnósticos diferenciais importantes.
            </p>

            <p>
              Ao assinar este Consentimento, você permite e fornece seu consentimento expresso para a KAI PREVENTION, ou terceiros que trabalham em parceria  para usar, divulgar e/ou liberar suas imagens de Texto, Leituras, ESF, informações pessoais ou informações comerciais, informações de contato, informações altamente personalizadas (que são definidas abaixo) (chamadas separadamente de "Nutrição de Calor"), para fins de tratamento, pagamento, assistência médica operacional ou outras finalidades pagas, conforme especificado abaixo, até o limite máximo permitido pela lei aplicável.
            </p>

            <p>
              “Informações Altamente Confidenciais” significa informações sobre (a) tratamento de transtornos por uso de substâncias, (b) genética informações ou resultados de testes, (c) saúde ou doença mental ou deficiência intelectual ou de desenvolvimento, (d)   tratamento psiquiátrico, (e) teste ou tratamento ou estado de HIV/AIDS, (f) doenças transmissíveis ou transmitidas pelo sangue, (g) doenças sexualmente transmissíveis doenças transmissíveis, (h) abuso e negligência infantil ou doméstica, (i) abuso de um adulto com deficiência, (j) agressão sexual,(k) registros de maternidade (incluindo registros médicos de novas mães e recém-nascidos), (1). Assistência de infertilidade ou fertilidade, FIV, ou inseminação artificial, e (m) qualquer outro tipo de informação que receba proteção especial de privacidade ao abrigo.
            </p>

            <p>
              Ao assinar este Termo, você também autoriza e fornece sua autorização expressa a KAI PREVENTION ou a terceiros para acessar seus registros médicos de registros de saúde confiáveis ​​confirmados pela KAI PREVENTION para fins de (em particular, entender seu histórico médico e como ele pode melhorar as bibliotecas clínicas do Teste, pois você avalia a eficácia e a precisão do Exame por meio de pesquisas contínuas para melhorá-lo para você e outros.
            </p>

            <h2>7. Garantia Financeira</h2>
            <p>
              Você concorda que é incondicionalmente responsável pessoalmente por todos os serviços prestados a você ou em seu nome pela KAI PREVENTION e seus respectivos funcionários e contratados independentes durante seu tratamento na KAI PREVENTION, sejam ou não tais serviços cobertos por um terceiro pagador, na extensão máxima permitida por lei e outras obrigações legais ou contratuais da KAI PREVENTION. O pagamento é executado antes da realização do exame. Você deve informar ainda que é sua responsabilidade e sanar quaisquer dúvidas com antecedência quando tais termos não estiverem claros.
            </p>

            <h2>8. Outras disposições e avisos</h2>
            <p>
              <strong>Banco de dados nova money.</strong> O banco de dados nova money é uma ferramenta usada para gerenciar pagamentos feitos na KAI PREVENTION.
              Ele pode ser encontrado em <a href="https://kaiprevention.pay.nova.money/sign-in">Sign in - NovaPay</a>.
            </p>

            <h4>CONSENTIMENTO INFORMADO PARA SERVIÇOS DE TELE-RADIOLOGIA</h4>
            <p>
              <strong>NÃO USE ESTE SERVIÇO SE VOCÊ ESTIVER PASSANDO POR UMA EMERGÊNCIA MÉDICA.</strong> Em uma situação de emergência, você pode:
            </p>
            <ul>
              <li>(i) ligar para o 192;</li>
              <li>(ii) ir ao pronto-socorro mais próximo;</li>
              <li>(iii) entrar em contato com o centro de crise local;</li>
              <li>
                (iv) se aplicável, ligar para o
                <a href="tel:18002728255">National Suicide Prevention Lifeline (1-800-272-8255)</a>;
              </li>
              <li>
                (v) se aplicável, entrar em contato com a
                <a href="https://www.crisistextline.org">Crisis Text Line</a>
                (envie a mensagem de texto "GO" para 741-741).
              </li>
            </ul>

            <p>
              Estamos felizes que você tenha escolhido a KAI PREVENTION para suas necessidades de radiologia. Este documento tem a intenção de informá-lo sobre o que você pode esperar do seu clínico em termos de suas credenciais e em conexão com seu tratamento por meio de serviços de radiologia, que ocorrem tanto presencialmente quanto por telessaúde (teleradiologia).
              Depois de ler atentamente este documento e ter a oportunidade de ter suas perguntas respondidas, certas leis estaduais determinam que você deve assiná-lo e datá-lo antes de iniciar os serviços.
            </p>

            <p>
              INFORMAÇÕES IMPORTANTES SOBRE SEU TRATAMENTO POR PROVEDORES DE SAÚDE EM RADIOLOGIA, INCLUINDO RISCOS E BENEFÍCIOS POTENCIAIS. A KAI PREVENTION oferece serviços de telemedicina por vários tipos de assistência médica, presencialmente e por meio de tecnologia de telecomunicações (também conhecida como "tele radiologia"). Nossos SERVIÇOS incluem médicos, enfermeiros e profissionais licenciados equivalentes. Os serviços fornecidos também podem incluir revisão on-line, agendamento de consultas, lembretes de recarga, compartilhamento de informações sobre saúde e serviços não clínicos, como educação do paciente. Os sistemas de comunicação eletrônica que usamos incorporarão protocolos de segurança de rede e software para proteger a confidencialidade dos dados de identificação e imagem do paciente e incluirão medidas para proteger os dados e garantir sua integridade, prevenção de corrupção não intencional ou não intencional. Existem vários benefícios associados aos serviços de telemedicina, incluindo acesso aprimorado aos cuidados, permitindo que você permaneça...
            </p>

            <p>
              adulto dependente; ordem judicial e/ou intimação; permissão do cliente ou responsável (ou seja, liberação voluntária assinada pelo cliente ou responsável); durante consultas de supervisão; diagnóstico e datas de serviço compartilhados com uma seguradora para callent.payrcents, Intorenat ser liberado conforme autorizado. Em BEBAUVA'S Νατιας on Privacy Proclices.and Privacy Pelley, e como oshiesmae (dabwed by law)
            </p>

            <p>
              AGENDAMENTO E CANCELAMENTOS. Por favor, revise cuidadosamente a janela de Agendamento e Cancelamentos conforme detalhados em seu e-mail. Ao assinar este documento, você está atestando que leu, entendeu e concordou com os temos.
            </p>

            <p>
              TAXAS E ACORDOS DE COBRANÇA. As taxas para os serviços da KAI PREVENTION podem ser encontradas aqui. Os preços estão sujeitos a alterações.
              <a href="https://www.kaiprevention.com.br/agendamento/agendar"> Agendar (kaiprevention.com.br)</a>
            </p>

            <p>
              Por meio do arco de chenkingene Bertsciated com "Bousant fortificado, você deve reconhecer que você indecstand adicionar agvae com o seguinte:
            </p>
            <ul>
              <li>
                1. Você consente em receber os serviços da KAI PREVENTION por meio de tecnulogias de tele radiologia. Você entende que os colaboradores da KAI PREVENTION oferecem serviços médicos baseados em tele radiologia, mas que esses serviços não substituem o relacionamento entre você e seu médico de atenção primária. Você também entende que cabe ao radiologista da KAI PREVENTION determinar se suas necessidades clínicas específicas são ou não apropriadas para um encontro de tele radiologia.
              </li>
              <li>
                2. Você entende que as leis federais e estaduais exigem que os colaboradores de serviços de saúde protejam a privacidade e a segurança e informações de saúde. Você entende que a KAI PREVENTION tomará medidas para garantir que suas informações médicas sejam tapete visto por qualquer um que não deveria vê-lo. Você entende que a tele radiologia pode envolver a eletrônica comunicação de suas informações médicas pessoais a outros profissionais de saúde que possam estar localizados em outras áreas, concentrando-se em...
              </li>
              <li>
                3. Você entende que há um risco de falhas técnicas durante o paciente de tele radiologia além do controle da KAI PREVENTION. Você concorda em isentar a KAI PREVENTION de responsabilidade por atrasos na avaliação ou por informações perdidas devido a tais falhas técnicas.
              </li>
              <li>
                4. Você entende que tem o direito de reter ou retirar seu consentimento para o uso da tele radiologia no curso de seu tratamento a qualquer momento, sem afetar seu acesso a cuidados ou tratamentos futuros. Você entende que pode suspender ou encerrar o uso dos serviços de tele radiologia a qualquer momento, por qualquer motivo ou sem motivo. Você entende que, se estiver passando por uma emergência médica, será direcionado a discar 192 imediatamente e que os colaboradores da KAI PREVENTION não podem conectá-lo diretamente a nenhum serviço de emergência local ao se envolver na plataforma de tele radiologia.
              </li>
              <li>
                5. Você entende que alternativas aos serviços de tele radiologia, como serviços presenciais, estão disponíveis para você e, ao participar dos serviços de radiologia, você entende que algumas partes dos serviços que envolvem testes podem ser conduzidas sob a direção do provedor KAI PREVENTION.
              </li>
              <li>
                6. Você entende que pode usufruir dos benefícios previstos do uso da tele radiologia em seu tratamento, mas que nenhum resultado pode ser garantido ou assegurado.
              </li>
              <li>
                7. Você entende que suas informações de saúde podem ser compartilhadas com outras pessoas para fins de agendamento e cobrança. Os pacientes podem estar presentes na consulta médica ou no consultório médico para operar as tecnologias de tele radiologia. Você entende ainda que será informado sobre a presença delas na consulta. Portanto, terá o direito de solicitar o seguinte:
                <ul>
                  <li>(a) omitir detalhes específicos de sua consulta/exame médico que sejam pessoalmente sérios para você;</li>
                  <li>(b) pedir que pessoal não médico deixe o exame de tele radiologia;</li>
                  <li>(c) encerrar a consulta a qualquer momento.</li>
                </ul>
              </li>
              <li>
                8. Você entende que não lhe serão prescritos quaisquer medicamentos, nem há qualquer garantia de que lhe será dada uma receita.
              </li>
              <li>
                9. Você entende que, se participar de uma consulta, terá o direito de solicitar uma cópia de seus registros médicos, que lhe será fornecida a um custo razoável de preparação, envio e entrega.
              </li>
              <li>
                10. Você leu e compreende as divulgações estabelecidas no momento do encontro de tele radiologia, conforme estabelecido abaixo:
              </li>
            </ul>

            <p>
              Você leu este documento cuidadosamente e compreende os riscos e benefícios dos serviços de tele radiologia e respondeu às suas perguntas sobre os serviços expressos e aqui você dá seu consentimento informado para realizar consultas de radiologia sob os termos aqui descritos.
            </p>

            <p>
              AO ASSINAR ABAIXO, VOCÊ CONHECE QUE LEU, ACEITOU, COMPREENDEU E CONCORDA EM SEGUIR POR ESTE CONSENTIMENTO DO PACIENTE E CONSENTIMENTO PARA OS “SERVIÇOS" E USOS DAS INFORMAÇÕES DE SAÚDE AQUI CONTIDAS E ESTE "CONSENTIMENTO” INFORMADO PARA SERVIÇOS DE TELE-RADIOLOGIA. VOCÊ AQUI CONCEDE AUTORIDADE DA AGÊNCIA A QUALQUER PARTE QUE USE ESTE DOCUMENTO EM SEU NOME.
            </p>

            <p>
              Concordo com o formulário acima e que a assinatura eletrônica que aparece neste documento é a mesma que as assinaturas manuscritas para fins de validade, aplicabilidade e admissibilidade.
            </p>

          </div>

          {!hasScrolledToBottom && (
            <div className="sticky bottom-0 flex items-center justify-center p-4 bg-gradient-to-t from-white dark:from-gray-950 to-transparent">
              <div className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Leia tudo para continuar</span>
                <ChevronDown className="h-4 w-4 animate-bounce mt-1" />
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={isTermsAccepted}
              onCheckedChange={(checked) => onTermsAcceptedChange(checked as boolean)}
              disabled={!hasScrolledToBottom}
              className={!hasScrolledToBottom ? "cursor-not-allowed" : ""}
            />
            <label
              htmlFor="terms"
              className={`text-sm font-medium leading-none ${
                !hasScrolledToBottom 
                  ? "text-gray-400 dark:text-gray-600 cursor-not-allowed" 
                  : "text-gray-900 dark:text-gray-100"
              }`}
            >
              Eu li e aceito as condições.
            </label>
          </div>

          <DialogFooter>
            <Button
              onClick={onAccept}
              disabled={!isTermsAccepted}
              className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
              <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}