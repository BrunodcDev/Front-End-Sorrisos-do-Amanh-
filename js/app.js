// js/app.js - SPA SIMPLIFICADA E FUNCIONAL

console.log('=== SORRISOS DO AMANHÃ - INICIANDO ===');

const STORAGE_KEY = 'sorrisos_voluntarios';

// Templates
const templates = {
  home: `
    <section class="hero">
      <div class="hero-card">
        <h2>Transforme vidas com um sorriso</h2>
        <p>Na <strong>Sorrisos do Amanhã</strong> promovemos educação, alimentação e atividades culturais para crianças em situação de vulnerabilidade.</p>
        <div class="cta-row">
          <a href="#/cadastro" class="botao">Seja voluntário</a>
          <a href="#/projetos" class="botao-secundario">Conheça os projetos</a>
        </div>
      </div>
      <div class="hero-img">
        <img src="img/criancas-sorrindo.png" alt="Crianças sorrindo">
      </div>
    </section>

    <div class="grid-destaque">
      <div class="card">
        <h3>Voluntariado</h3>
        <p>Envolva-se com atividades educativas, culturais e de apoio alimentar.</p>
      </div>
      <div class="card">
        <h3>Doações</h3>
        <p>Contribua para garantir refeições e materiais para as atividades.</p>
      </div>
      <div class="card">
        <h3>Transparência</h3>
        <p>Divulgamos relatórios e resultados das ações.</p>
      </div>
    </div>
  `,

  projetos: `
    <section style="padding: 20px;">
      <h2 style="text-align: center; color: #2b6ca3; margin-bottom: 30px;">Nossos Projetos</h2>
      <div class="cards-projetos">
        <div class="card-projeto">
          <div class="card-imagem">
            <img src="img/projeto-educar.png" alt="Projeto Educação" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuM2VtIj7imqMgRWR1Y2HDp8OjbzwvdGV4dD48L3N2Zz4='">
          </div>
          <div class="card-conteudo">
            <h3>📚 Educação</h3>
            <p>Reforço escolar, oficinas de leitura e inclusão digital.</p>
          </div>
        </div>
        
        <div class="card-projeto">
          <div class="card-imagem">
            <img src="img/projeto-alimentar.png" alt="Projeto Alimentação" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuM2VtIj7imqMgQWxpbWVudGHDp8OjbzwvdGV4dD48L3N2Zz4='">
          </div>
          <div class="card-conteudo">
            <h3>🍎 Alimentação</h3>
            <p>Refeições balanceadas e ações de segurança alimentar.</p>
          </div>
        </div>
        
        <div class="card-projeto">
          <div class="card-imagem">
            <img src="img/projeto-arte.png" alt="Projeto Artes" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuM2VtIj7imqMgQXJ0ZXM8L3RleHQ+PC9zdmc+='">
          </div>
          <div class="card-conteudo">
            <h3>🎨 Artes</h3>
            <p>Oficinas de música, pintura e teatro para desenvolvimento pessoal.</p>
          </div>
        </div>
      </div>
    </section>
    `,

    cadastro: `
      <section style="padding: 20px;">
        <h2 style="text-align: center; color: #2b6ca3; margin-bottom: 30px;">Seja Voluntário</h2>
        
        <form id="formVoluntario" style="max-width: 700px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.1);">
          
          <!-- ==================== -->
          <!-- DADOS PESSOAIS -->
          <!-- ==================== -->
          <fieldset style="border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <legend style="font-weight: bold; color: #2b6ca3; padding: 0 10px;">Dados Pessoais</legend>
            
            <!-- Nome Completo -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">Nome completo *</label>
              <input type="text" id="nome" name="nome" required 
                    style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                    minlength="3" maxlength="100"
                    placeholder="Digite seu nome completo">
            </div>
            
            <!-- CPF -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">CPF *</label>
              <input type="text" id="cpf" name="cpf" required 
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                    placeholder="000.000.000-00" 
                    title="Formato: 000.000.000-00">
            </div>
            
            <!-- Data de Nascimento -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">Data de Nascimento *</label>
              <input type="date" id="nascimento" name="nascimento" required 
                    style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                    max="${new Date().toISOString().split('T')[0]}">
            </div>
          </fieldset>
    
          <!-- ==================== -->
          <!-- CONTATO -->
          <!-- ==================== -->
          <fieldset style="border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <legend style="font-weight: bold; color: #2b6ca3; padding: 0 10px;">Contato</legend>
            
            <!-- Email -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">E-mail *</label>
              <input type="email" id="email" name="email" required 
                    style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                    placeholder="seu@email.com">
            </div>
            
            <!-- Telefone -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">Telefone/WhatsApp *</label>
              <input type="tel" id="telefone" name="telefone" required 
                style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                placeholder="(00) 00000-0000" 
                title="Formato: (00) 00000-0000 ou (00) 0000-0000">
            </div>
          </fieldset>
    
          <!-- ==================== -->
          <!-- ENDEREÇO -->
          <!-- ==================== -->
          <fieldset style="border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <legend style="font-weight: bold; color: #2b6ca3; padding: 0 10px;">Endereço</legend>
            
            <!-- CEP -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">CEP</label>
              <input type="text" id="cep" name="cep"
                    pattern="[0-9]{5}-[0-9]{3}"
                    style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                    placeholder="00000-000"
                    title="Formato: 00000-000">
            </div>
            
            <!-- Endereço -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">Endereço</label>
              <input type="text" id="endereco" name="endereco"
                    style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                    placeholder="Rua, Avenida, etc.">
            </div>
            
            <!-- Cidade e Estado -->
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 15px;">
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Cidade</label>
                <input type="text" id="cidade" name="cidade"
                      style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;"
                      placeholder="Sua cidade">
              </div>
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">Estado</label>
                <select id="estado" name="estado" style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;">
                  <option value="">Selecione...</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>
          </fieldset>
    
          <!-- ==================== -->
          <!-- DISPONIBILIDADE -->
          <!-- ==================== -->
          <fieldset style="border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <legend style="font-weight: bold; color: #2b6ca3; padding: 0 10px;">Disponibilidade</legend>
            
            <!-- Área de Interesse -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">Área de Interesse *</label>
              <select id="area" name="area" required style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px;">
                <option value="">Selecione...</option>
                <option value="educacao">📚 Educação</option>
                <option value="alimentacao">🍎 Alimentação</option>
                <option value="arte">🎨 Artes</option>
                <option value="administrativo">💼 Apoio Administrativo</option>
                <option value="eventos">🎪 Organização de Eventos</option>
              </select>
            </div>
            
            <!-- Dias da Semana -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 10px; font-weight: bold;">Dias disponíveis *</label>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="segunda" style="width: 18px; height: 18px;">
                  Segunda-feira
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="terca" style="width: 18px; height: 18px;">
                  Terça-feira
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="quarta" style="width: 18px; height: 18px;">
                  Quarta-feira
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="quinta" style="width: 18px; height: 18px;">
                  Quinta-feira
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="sexta" style="width: 18px; height: 18px;">
                  Sexta-feira
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="sabado" style="width: 18px; height: 18px;">
                  Sábado
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="dias" value="domingo" style="width: 18px; height: 18px;">
                  Domingo
                </label>
              </div>
            </div>
            
            <!-- Período -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 10px; font-weight: bold;">Período preferencial *</label>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="radio" name="periodo" value="manha" required style="width: 18px; height: 18px;">
                  Manhã
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="radio" name="periodo" value="tarde" required style="width: 18px; height: 18px;">
                  Tarde
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="radio" name="periodo" value="noite" required style="width: 18px; height: 18px;">
                  Noite
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="radio" name="periodo" value="qualquer" required style="width: 18px; height: 18px;">
                  Qualquer
                </label>
              </div>
            </div>
          </fieldset>
    
          <!-- ==================== -->
          <!-- INFORMAÇÕES ADICIONAIS -->
          <!-- ==================== -->
          <fieldset style="border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <legend style="font-weight: bold; color: #2b6ca3; padding: 0 10px;">Informações Adicionais</legend>
            
            <!-- Experiência Prévia -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 10px; font-weight: bold;">Possui experiência prévia em trabalho voluntário?</label>
              <div style="display: flex; gap: 20px;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="radio" name="experiencia" value="sim" style="width: 18px; height: 18px;">
                  Sim
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="radio" name="experiencia" value="nao" checked style="width: 18px; height: 18px;">
                  Não
                </label>
              </div>
            </div>
            
            <!-- Mensagem -->
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-weight: bold;">Mensagem ou observações</label>
              <textarea id="mensagem" name="mensagem" rows="4" 
                        style="width: 100%; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 16px; resize: vertical;"
                        placeholder="Conte um pouco sobre sua motivação para ser voluntário..."></textarea>
            </div>
          </fieldset>
    
          <!-- ==================== -->
          <!-- BOTÃO DE ENVIO -->
          <!-- ==================== -->
          <button type="submit" 
                  style="background: #2b6ca3; color: white; border: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; font-size: 18px; transition: background 0.3s;">
            📨 Enviar Cadastro
          </button>
          
          <p style="text-align: center; color: #666; margin-top: 15px; font-size: 14px;">
            * Campos obrigatórios
          </p>
        </form>
        
        <!-- Mensagem de Sucesso -->
        <div id="msgSucesso" style="display: none; background: #4caf50; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 30px auto; max-width: 600px; font-weight: bold;">
          ✅ Cadastro enviado com sucesso! Entraremos em contato em breve.
        </div>
      </section>
    `,

  admin: `
    <section style="padding: 20px; max-width: 1400px; margin: 0 auto;">
      <h2 style="text-align: center; color: #2b6ca3; margin-bottom: 10px;">Admin - Voluntários Cadastrados</h2>
      <p style="text-align: center; color: #666; margin-bottom: 30px;">Gerencie os voluntários cadastrados no sistema</p>
      
      <!-- Contadores -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
        <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">👥</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #2b6ca3;" id="totalVoluntarios">0</div>
          <div style="color: #666;">Total de Voluntários</div>
        </div>
        <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">📚</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #4caf50;" id="totalEducacao">0</div>
          <div style="color: #666;">Interessados em Educação</div>
        </div>
        <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🍎</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #ff9800;" id="totalAlimentacao">0</div>
          <div style="color: #666;">Interessados em Alimentação</div>
        </div>
        <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🎨</div>
          <div style="font-size: 1.5rem; font-weight: bold; color: #9c27b0;" id="totalArtes">0</div>
          <div style="color: #666;">Interessados em Artes</div>
        </div>
      </div>
      
      <!-- Botões de Ação -->
      <div style="display: flex; gap: 10px; justify-content: center; margin: 20px 0; flex-wrap: wrap;">
        <button id="btnExportar" style="background: #ffd43b; color: #111827; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          <span>⬇️</span>
          <span>Exportar CSV</span>
        </button>
        <button id="btnLimpar" style="background: #e53935; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          <span>🗑️</span>
          <span>Apagar Todos</span>
        </button>
      </div>

      <!-- Tabela de Voluntários -->
      <div id="tabelaContainer" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 6px 18px rgba(0,0,0,0.1); overflow: hidden;">
        <div class="table-header" style="display: none; grid-template-columns: 1.5fr 1fr 1fr 1fr 0.8fr 1fr 1.2fr; gap: 12px; padding: 15px; background: #f7fafc; border-radius: 8px; font-weight: bold; margin-bottom: 10px;">
          <div>Nome</div>
          <div>CPF</div>
          <div>Contato</div>
          <div>Área</div>
          <div>Dias</div>
          <div>Período</div>
          <div>Data</div>
        </div>
        <div id="listaVoluntarios"></div>
      </div>
    </section>
    `,
};
/* ==========================================================================
   🎯 FUNÇÕES UTILITÁRIAS
   ========================================================================== */
// Função para formatar CPF
function formatarCPF(cpf) {
  // Remove tudo que não é número
  cpf = cpf.replace(/\D/g, '');
  
  // Aplica a formatação
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
  return cpf;
}

// Função para formatar CEP
function formatarCEP(cep) {
  cep = cep.replace(/\D/g, '');
  cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
  return cep;
}

// Função para escapar dados no CSV (evitar problemas com vírgulas e aspas)
function escapeCsv(value = '') {
  const s = String(value).replace(/\r?\n/g, ' ').replace(/"/g, '""');
  return (s.includes(',') || s.includes('"')) ? `"${s}"` : s;
}

// Função para validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para calcular idade a partir da data de nascimento
function calcularIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  
  if (mesAtual < mesNascimento || 
      (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  
  return idade;
}
// Sistema de roteamento
function navigate() {
  const hash = window.location.hash || '#/';
  const route = hash.replace('#/', '') || 'home';
  
  console.log('Navegando para:', route);
  
  const content = document.getElementById('conteudo');
  if (!content) {
    console.error('Elemento #conteudo não encontrado!');
    return;
  }
  
  // Animação de fade
  content.style.opacity = '0';
  
  setTimeout(() => {
    content.innerHTML = templates[route] || templates.home;
    content.style.opacity = '1';
    
    // Inicializar comportamentos específicos da página
    initializePage(route);
  }, 200);
}

// Inicializar comportamentos da página
function initializePage(page) {
  console.log('Inicializando página:', page);
  
  // Fechar menu mobile se estiver aberto
  const nav = document.querySelector('nav ul');
  if (nav) {
    nav.classList.remove('ativo');
  }
  
  switch(page) {
    case 'cadastro':
      initializeForm();
      break;
    case 'admin':
      initializeAdmin();
      break;
  }
}

/* ==========================================================================
   📝 INICIALIZAÇÃO DO FORMULÁRIO (ATUALIZADA)
   ========================================================================== */
   function initializeForm() {
    console.log('📝 Inicializando formulário completo...');
    
    const form = document.getElementById('formVoluntario');
    const msgSucesso = document.getElementById('msgSucesso');
    
    if (!form) {
      console.error('Formulário não encontrado!');
      return;
    }
    
    console.log('✅ Formulário encontrado! Configurando máscaras...');
    
    // ==================== MÁSCARAS DE FORMATAÇÃO ====================
    
    // Máscara para CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
      cpfInput.addEventListener('input', function(e) {
        e.target.value = formatarCPF(e.target.value);
      });
    }
    
    // Máscara para CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
      cepInput.addEventListener('input', function(e) {
        e.target.value = formatarCEP(e.target.value);
      });
    }
    
    // Máscara para Telefone - CORRIGIDA
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
      telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '').slice(0, 11);
        
        // Formatação consistente
        if (value.length === 0) {
          e.target.value = '';
        } else if (value.length <= 2) {
          e.target.value = '(' + value;
        } else if (value.length <= 6) {
          e.target.value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
        } else if (value.length <= 10) {
          e.target.value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 6) + '-' + value.slice(6);
        } else {
          e.target.value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
        }
      });
    }
    
    // ==================== VALIDAÇÃO DO FORMULÁRIO ====================
    
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // ⚠️ IMPORTANTE: Isso impede o envio padrão do formulário!
      console.log('📤 Formulário completo submetido!');
      
      // Coletar todos os dados do formulário
      const dadosFormulario = {
        // Dados Pessoais
        nome: document.getElementById('nome').value.trim(),
        cpf: document.getElementById('cpf').value.trim(),
        nascimento: document.getElementById('nascimento').value,
        
        // Contato
        email: document.getElementById('email').value.trim(),
        telefone: document.getElementById('telefone').value.trim(),
        
        // Endereço
        cep: document.getElementById('cep').value.trim(),
        endereco: document.getElementById('endereco').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        estado: document.getElementById('estado').value,
        
        // Disponibilidade
        area: document.getElementById('area').value,
        dias: Array.from(document.querySelectorAll('input[name="dias"]:checked'))
               .map(checkbox => checkbox.value),
        periodo: document.querySelector('input[name="periodo"]:checked')?.value,
        
        // Informações Adicionais
        experiencia: document.querySelector('input[name="experiencia"]:checked')?.value,
        mensagem: document.getElementById('mensagem').value.trim(),
        
        // Metadados
        dataCadastro: new Date().toLocaleString('pt-BR'),
        idade: calcularIdade(document.getElementById('nascimento').value)
      };
      
      console.log('Dados coletados:', dadosFormulario);
      
      // ==================== VALIDAÇÕES AVANÇADAS ====================
      
      // Validar campos obrigatórios
      if (!dadosFormulario.nome) {
        alert('❌ Por favor, informe seu nome completo.');
        document.getElementById('nome').focus();
        return;
      }
      
      if (!dadosFormulario.cpf || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(dadosFormulario.cpf)) {
        alert('❌ Por favor, insira um CPF válido no formato 000.000.000-00.');
        document.getElementById('cpf').focus();
        return;
      }
      
      if (!dadosFormulario.nascimento) {
        alert('❌ Por favor, informe sua data de nascimento.');
        document.getElementById('nascimento').focus();
        return;
      }
      
      // Validar idade mínima (16 anos)
      if (dadosFormulario.idade < 16) {
        alert('❌ É necessário ter pelo menos 16 anos para ser voluntário.');
        document.getElementById('nascimento').focus();
        return;
      }
      
      // Validar email
      if (!dadosFormulario.email || !validarEmail(dadosFormulario.email)) {
        alert('❌ Por favor, insira um e-mail válido.');
        document.getElementById('email').focus();
        return;
      }
      
      // 🔧 VALIDAÇÃO DO TELEFONE
        
        const telefoneValido = validarTelefone(dadosFormulario.telefone);
        console.log('🔍 DEBUG - Resultado validação:', telefoneValido);
        
        if (!telefoneValido.valido) {
          console.log('❌ DEBUG - Telefone inválido, mostrando alerta');
          alert(`❌ ${telefoneValido.mensagem}`);
          document.getElementById('telefone').focus();
          return;
        }
        
        console.log('✅ DEBUG - Telefone válido, continuando...');
      
      // Validar área de interesse
      if (!dadosFormulario.area) {
        alert('❌ Por favor, selecione uma área de interesse.');
        document.getElementById('area').focus();
        return;
      }
      
      // Validar que pelo menos um dia foi selecionado
      if (dadosFormulario.dias.length === 0) {
        alert('❌ Por favor, selecione pelo menos um dia disponível.');
        return;
      }
      
      // Validar período
      if (!dadosFormulario.periodo) {
        alert('❌ Por favor, selecione um período preferencial.');
        return;
      }
      
      // ==================== SALVAR NO LOCALSTORAGE ====================
      
      try {
        // Recuperar voluntários existentes
        const voluntariosExistentes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        
        // Verificar se CPF já está cadastrado (prevenção de duplicatas)
        const cpfExistente = voluntariosExistentes.find(v => v.cpf === dadosFormulario.cpf);
        if (cpfExistente) {
          alert('❌ Este CPF já está cadastrado em nosso sistema.');
          document.getElementById('cpf').focus();
          return;
        }
        
        // Adicionar novo voluntário
        voluntariosExistentes.push(dadosFormulario);
        
        // Salvar no localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(voluntariosExistentes));
        
        console.log('✅ Voluntário salvo com sucesso!');
        console.log('Total de voluntários:', voluntariosExistentes.length);
        console.log('Dados salvos:', dadosFormulario);
        
        // ==================== FEEDBACK DE SUCESSO ====================
        
        // Mostrar mensagem de sucesso
        if (msgSucesso) {
          msgSucesso.style.display = 'block';
          msgSucesso.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Limpar formulário
        form.reset();
        
        // Feedback visual adicional
        setTimeout(() => {
          if (msgSucesso) {
            msgSucesso.style.display = 'none';
          }
        }, 5000);
        
      } catch (error) {
        console.error('❌ Erro ao salvar no localStorage:', error);
        alert('❌ Erro ao salvar cadastro. Por favor, tente novamente.');
      }
    });
  }
  
  // 🔧 FUNÇÃO AUXILIAR PARA VALIDAR TELEFONE - ADICIONE ESTA FUNÇÃO
  function validarTelefone(telefone) {
    if (!telefone) {
      return { valido: false, mensagem: 'Por favor, informe um telefone.' };
    }
    
    // Remove todos os caracteres não numéricos
    const apenasNumeros = telefone.replace(/\D/g, '');
    
    // Verifica se tem entre 10 e 11 dígitos (10 para fixo, 11 para celular)
    if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
      return { 
        valido: false, 
        mensagem: 'Telefone deve ter 10 ou 11 dígitos. Formato: (00) 00000-0000' 
      };
    }
    
    // Verifica DDD válido (11 a 99)
    const ddd = apenasNumeros.substring(0, 2);
    if (ddd < 11 || ddd > 99) {
      return { 
        valido: false, 
        mensagem: 'DDD inválido. Use um DDD entre 11 e 99.' 
      };
    }
    
    // Formatação visual básica
    const temFormatacao = /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
    if (!temFormatacao) {
      return { 
        valido: false, 
        mensagem: 'Formato inválido. Use: (00) 00000-0000' 
      };
    }
    
    return { valido: true, mensagem: 'Telefone válido' };
  }
/* ==========================================================================
   ⚙️ INICIALIZAÇÃO DA PÁGINA ADMIN (ATUALIZADA)
   ========================================================================== */
    function initializeAdmin() {
    console.log('👨‍💼 Inicializando admin completo...');
    
    const listaVoluntarios = document.getElementById('listaVoluntarios');
    const btnExportar = document.getElementById('btnExportar');
    const btnLimpar = document.getElementById('btnLimpar');
    
    if (!listaVoluntarios) {
      console.error('❌ Elemento listaVoluntarios não encontrado!');
      return;
    }
    
    // 🔧 CARREGAR VOLUNTÁRIOS COM SEGURANÇA
    function loadVoluntarios() {
      try {
        // 🛡️ Carregar dados com proteção contra erros
        let voluntarios = [];
        const dadosSalvos = localStorage.getItem(STORAGE_KEY);
        
        if (dadosSalvos) {
          voluntarios = JSON.parse(dadosSalvos);
          // 🛡️ Garantir que é um array
          if (!Array.isArray(voluntarios)) {
            console.warn('⚠️ Dados não são um array, convertendo...');
            voluntarios = [];
          }
        }
        
        console.log('📋 Carregando voluntários:', voluntarios);
        
        // 🛡️ Atualizar contadores com segurança
        atualizarContadores(voluntarios);
        
        if (!voluntarios || voluntarios.length === 0) {
          listaVoluntarios.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #666; background: #f9fafb; border-radius: 8px;">
              <div style="font-size: 48px; margin-bottom: 16px;">📭</div>
              <h3 style="margin: 0 0 8px 0; color: #374151;">Nenhum voluntário cadastrado</h3>
              <p style="margin: 0; color: #6b7280;">Os voluntários aparecerão aqui quando se cadastrarem.</p>
            </div>
          `;
          return;
        }
        
        // 🛡️ Para desktop - grid layout com proteção
        if (window.innerWidth > 768) {
          listaVoluntarios.innerHTML = `
            <div class="table-header" style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 0.8fr 1fr 1.2fr; gap: 12px; padding: 15px; background: #f7fafc; border-radius: 8px; font-weight: bold; margin-bottom: 10px;">
              <div>Nome</div>
              <div>CPF</div>
              <div>Contato</div>
              <div>Área</div>
              <div>Dias</div>
              <div>Período</div>
              <div>Data</div>
            </div>
            ${voluntarios.map(voluntario => `
              <div class="table-row" style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 0.8fr 1fr 1.2fr; gap: 12px; padding: 15px; border-bottom: 1px solid #e5e7eb; align-items: center; transition: background-color 0.2s;">
                <div style="font-weight: 500;">${voluntario.nome || 'N/A'}</div>
                <div style="font-family: monospace; font-size: 14px;">${voluntario.cpf || 'N/A'}</div>
                <div>
                  <div style="font-weight: 500;">${voluntario.telefone || 'N/A'}</div>
                  <div style="font-size: 12px; color: #666;">${voluntario.email || 'N/A'}</div>
                </div>
                <div>
                  <span style="background: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                    ${voluntario.area || 'N/A'}
                  </span>
                </div>
                <div style="font-size: 12px; color: #666;">
                  ${(voluntario.dias && voluntario.dias.length) ? voluntario.dias.length + ' dias' : '0 dias'}
                </div>
                <div style="font-size: 14px; color: #6b7280; text-transform: capitalize;">
                  ${voluntario.periodo || 'N/A'}
                </div>
                <div style="font-size: 14px; color: #6b7280;">${voluntario.dataCadastro || 'N/A'}</div>
              </div>
            `).join('')}
          `;
        } else {
          // 🛡️ Para mobile - cards layout com proteção
          listaVoluntarios.innerHTML = voluntarios.map(voluntario => `
            <div class="voluntario-card" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
                <div style="font-weight: 600; font-size: 18px; color: #1e293b;">${voluntario.nome || 'N/A'}</div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <span style="background: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">
                    ${voluntario.area || 'N/A'}
                  </span>
                  <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500;">
                    ${voluntario.idade || '0'} anos
                  </span>
                </div>
              </div>
              
              <div style="display: grid; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <span style="color: #64748b;">🆔</span>
                  <span style="font-family: monospace; font-size: 14px;">${voluntario.cpf || 'N/A'}</span>
                </div>
                
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: #64748b;">📧</span>
                  <span style="word-break: break-all;">${voluntario.email || 'N/A'}</span>
                </div>
                
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: #64748b;">📞</span>
                  <span>${voluntario.telefone || 'N/A'}</span>
                </div>
                
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: #64748b;">🗓️</span>
                  <span style="font-size: 14px; color: #6b7280;">
                    ${(voluntario.dias && voluntario.dias.length) ? voluntario.dias.length + ' dias' : '0 dias'} • ${voluntario.periodo || 'N/A'}
                  </span>
                </div>
                
                ${voluntario.endereco ? `
                  <div style="display: flex; align-items: flex-start; gap: 8px;">
                    <span style="color: #64748b; margin-top: 2px;">🏠</span>
                    <span style="font-size: 14px; color: #475569;">
                      ${voluntario.endereco || ''}${voluntario.cidade ? `, ${voluntario.cidade}` : ''}${voluntario.estado ? `-${voluntario.estado}` : ''}
                    </span>
                  </div>
                ` : ''}
                
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: #64748b;">📅</span>
                  <span style="font-size: 14px; color: #6b7280;">${voluntario.dataCadastro || 'N/A'}</span>
                </div>
                
                ${voluntario.mensagem ? `
                  <div style="display: flex; align-items: flex-start; gap: 8px; margin-top: 8px; padding-top: 8px; border-top: 1px solid #e2e8f0;">
                    <span style="color: #64748b; margin-top: 2px;">💬</span>
                    <span style="font-style: italic; color: #475569; font-size: 14px;">"${voluntario.mensagem}"</span>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('');
        }
        
      } catch (error) {
        console.error('❌ Erro ao carregar voluntários:', error);
        listaVoluntarios.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #e53935; background: #ffebee; border-radius: 8px;">
            <div style="font-size: 48px; margin-bottom: 16px;">❌</div>
            <h3 style="margin: 0 0 8px 0;">Erro ao carregar dados</h3>
            <p style="margin: 0;">Por favor, recarregue a página.</p>
          </div>
        `;
      }
    }
    
    // 🛡️ ATUALIZAR CONTADORES COM SEGURANÇA
    function atualizarContadores(voluntarios = []) {
      try {
        const totalVoluntarios = document.getElementById('totalVoluntarios');
        const totalEducacao = document.getElementById('totalEducacao');
        const totalAlimentacao = document.getElementById('totalAlimentacao');
        const totalArtes = document.getElementById('totalArtes');
        
        if (totalVoluntarios) {
          totalVoluntarios.textContent = voluntarios.length || 0;
        }
        
        if (totalEducacao) {
          const count = voluntarios.filter(v => v.area === 'educacao').length;
          totalEducacao.textContent = count || 0;
        }
        
        if (totalAlimentacao) {
          const count = voluntarios.filter(v => v.area === 'alimentacao').length;
          totalAlimentacao.textContent = count || 0;
        }
        
        if (totalArtes) {
          const count = voluntarios.filter(v => v.area === 'arte').length;
          totalArtes.textContent = count || 0;
        }
      } catch (error) {
        console.error('❌ Erro ao atualizar contadores:', error);
      }
    }
    
    // 🛡️ EXPORTAÇÃO COM SEGURANÇA
    function exportarCSVCompleto() {
      try {
        let voluntarios = [];
        const dadosSalvos = localStorage.getItem(STORAGE_KEY);
        
        if (dadosSalvos) {
          voluntarios = JSON.parse(dadosSalvos);
          if (!Array.isArray(voluntarios)) voluntarios = [];
        }
        
        if (voluntarios.length === 0) {
          alert('Nenhum voluntário cadastrado para exportar.');
          return;
        }
        
        // Cabeçalhos completos do CSV
        const headers = [
          'Nome', 'CPF', 'Idade', 'Data_Nascimento', 'Email', 'Telefone',
          'CEP', 'Endereco', 'Cidade', 'Estado', 'Area_Interesse',
          'Dias_Disponiveis', 'Periodo', 'Experiencia_Previa', 'Mensagem', 'Data_Cadastro'
        ];
        
        // Converter dados para linhas CSV com proteção
        const csvRows = voluntarios.map(voluntario => [
          escapeCsv(voluntario.nome || ''),
          escapeCsv(voluntario.cpf || ''),
          escapeCsv(voluntario.idade || ''),
          escapeCsv(voluntario.nascimento || ''),
          escapeCsv(voluntario.email || ''),
          escapeCsv(voluntario.telefone || ''),
          escapeCsv(voluntario.cep || ''),
          escapeCsv(voluntario.endereco || ''),
          escapeCsv(voluntario.cidade || ''),
          escapeCsv(voluntario.estado || ''),
          escapeCsv(voluntario.area || ''),
          escapeCsv((voluntario.dias && voluntario.dias.join) ? voluntario.dias.join(', ') : ''),
          escapeCsv(voluntario.periodo || ''),
          escapeCsv(voluntario.experiencia || ''),
          escapeCsv(voluntario.mensagem || ''),
          escapeCsv(voluntario.dataCadastro || '')
        ].join(','));
        
        // Criar arquivo CSV
        const csv = [headers.join(','), ...csvRows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        
        // Criar link de download
        const link = document.createElement('a');
        link.href = url;
        link.download = `voluntarios_sorrisos_amanha_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        console.log('✅ CSV exportado com sucesso!');
        alert(`📊 Relatório exportado com ${voluntarios.length} voluntários!`);
        
      } catch (error) {
        console.error('❌ Erro ao exportar CSV:', error);
        alert('❌ Erro ao exportar dados. Por favor, tente novamente.');
      }
    }
    
    // Carregar dados iniciais
    loadVoluntarios();
    
    // Configurar botões
    if (btnExportar) {
      btnExportar.addEventListener('click', exportarCSVCompleto);
    }
    
    if (btnLimpar) {
      btnLimpar.addEventListener('click', function() {
        if (confirm('🚨 ATENÇÃO: Deseja realmente apagar TODOS os voluntários cadastrados?\n\nEsta ação não pode ser desfeita e todos os dados serão perdidos permanentemente.')) {
          localStorage.removeItem(STORAGE_KEY);
          loadVoluntarios();
          alert('✅ Todos os registros foram removidos com sucesso.');
        }
      });
    }
    
    // Atualizar layout quando a janela for redimensionada
    window.addEventListener('resize', loadVoluntarios);
  }
// Menu mobile
function initializeMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav ul');
  
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('ativo');
    });
  }
}

// Inicialização da aplicação
window.addEventListener('load', function() {
  console.log('Aplicação carregada!');
  initializeMenu();
  navigate();
});

window.addEventListener('hashchange', navigate);

// Debug helper
window.debugVoluntarios = function() {
  const voluntarios = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  console.log('📊 Voluntários no localStorage:', voluntarios);
  console.log('Total:', voluntarios.length);
  return voluntarios;
};

console.log('💡 Digite debugVoluntarios() no console para ver os dados!');