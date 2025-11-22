# 📖 NoDistract# 📖 Outline Clone - Reader Mode



**Modo leitura limpo para qualquer site.** Remove anúncios, menus e distrações, mantendo apenas o conteúdo principal.Código JavaScript puro que transforma qualquer página web em um formato limpo e agradável para leitura, removendo anúncios, menus, cabeçalhos e outros elementos desnecessários.



[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)![License](https://img.shields.io/badge/license-MIT-blue.svg)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)]()![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow.svg)

![Version](https://img.shields.io/badge/version-2.0.0-green.svg)

---

## ✨ Funcionalidades

## ✨ Características

- 🎯 **Extração inteligente** de conteúdo principal usando Mozilla Readability

- 🎯 **Extração inteligente** de conteúdo usando Mozilla Readability- 🖼️ **Preserva imagens** relevantes do artigo

- 🖼️ **Preserva imagens** relevantes do artigo  - 📱 **Design responsivo** que funciona em desktop e mobile

- 📱 **Design responsivo** para desktop e mobile- 🎨 **Interface limpa** com tipografia otimizada para leitura

- 🎨 **Interface limpa** com tipografia otimizada- ⚡ **Zero dependências** (removido jQuery e Bootstrap)

- ⚡ **Zero dependências** externas (jQuery, Bootstrap, etc.)- 🔄 **Botão de fechar** para restaurar a página original

- 🔄 **Botão de fechar** para restaurar página original- 💾 **Modo de impressão** otimizado

- 💾 **Modo impressão** otimizado- � **Gerador automático** de bookmarklet com minificação



---## 🚀 Instalação Rápida



## 🚀 Instalação### 📱 Método Mais Fácil - Página de Instalação



### Método Mais Fácil**Acesse: [https://grapeia.github.io/outline-clone/install.html](https://grapeia.github.io/outline-clone/install.html)**



**Acesse:** [https://grapeia.github.io/nodistract/install.html](https://grapeia.github.io/nodistract/install.html)A página oferece:

- ✅ Botão para copiar bookmarklet automaticamente

A página gera o bookmarklet automaticamente no seu navegador com:- ✅ Opção de arrastar e soltar na barra de favoritos

- ✅ Botão para copiar- ✅ Instruções específicas para cada navegador

- ✅ Opção de arrastar para favoritos- ✅ Teste imediato do modo leitura

- ✅ Estatísticas de compressão

- ✅ Teste instantâneo### 🛠️ Método Manual - Para Desenvolvedores



### Instalação Manual#### 1. Gerar o Bookmarklet



1. **Copie este código:**Clone o repositório e gere o bookmarklet:

```javascript

javascript:(function(){if(window.NoDistract||window._ND){alert('NoDistract já está ativo!');return;}var s=document.createElement('script');s.src='https://raw.githubusercontent.com/grapeia/nodistract/main/nodistract.js';s.onerror=function(){alert('Erro ao carregar. Verifique sua conexão.');};document.head.appendChild(s);})();```bash

```git clone https://github.com/grapeia/outline-clone.git

cd outline-clone

2. **Crie um favorito:**node generate-bookmarklet.js

   - **Chrome/Edge:** `Ctrl+Shift+O` → "Adicionar página"```

   - **Firefox:** `Ctrl+Shift+B` → "Novo marcador"  

   - **Safari:** `Cmd+Shift+B` → "Adicionar página"Isso criará:

- `bookmarklet.json` - Todas as versões do bookmarklet

3. **Cole o código** no campo URL e salve como "NoDistract"- `bookmarklet.txt` - Versão texto para copiar facilmente



---#### 2. Instalar no Navegador



## 📖 Como Usar**Chrome/Edge:**

1. Pressione `Ctrl+Shift+O` (Windows/Linux) ou `Cmd+Shift+O` (Mac)

1. Navegue até qualquer artigo ou página de notícias2. Clique em "Adicionar nova página"

2. Clique no favorito **NoDistract**3. Nome: **Reader Mode**

3. Aproveite a leitura sem distrações!4. URL: Cole o código do `bookmarklet.txt`

4. Clique no botão **✕ Fechar** para voltar5. Salve!



---**Firefox:**

1. Pressione `Ctrl+Shift+B` (Windows/Linux) ou `Cmd+Shift+B` (Mac)

## 📁 Estrutura do Projeto2. Clique direito → "Novo marcador"

3. Nome: **Reader Mode**

```4. Localização: Cole o código do `bookmarklet.txt`

nodistract/5. Adicione!

├── nodistract.js    # Código fonte do modo leitura

├── install.html     # Página de instalação (gera bookmarklet via JS)**Safari:**

├── demo.html        # Página de demonstração1. Pressione `Cmd+Shift+B`

├── README.md        # Este arquivo2. Clique direito → "Adicionar página"

└── LICENSE          # Licença MIT3. Nome: **Reader Mode**

```4. URL: Cole o código do `bookmarklet.txt`

5. Adicione!

**Total:** 4 arquivos essenciais. Sem dependências Node.js!

#### 3. Como Usar

---

- Navegue até qualquer artigo ou notícia

## 🔧 Como Funciona- Clique no bookmark "Reader Mode"

- Aproveite a leitura sem distrações!

### Geração do Bookmarklet- Clique em "✕ Fechar" para voltar à página original



O `install.html` faz tudo no navegador:## 🔧 Para Desenvolvedores



1. Carrega `nodistract.js` via `fetch()`### Scripts Disponíveis

2. Minifica o código JavaScript (remove comentários e espaços)

3. Gera bookmarklet wrapper que carrega do GitHub```bash

4. Permite copiar ou arrastar para favoritos# Gerar bookmarklet automaticamente

npm run bookmarklet

**Vantagens:**

- ✅ Não precisa instalar Node.js# Gerar página de instalação

- ✅ Funciona direto no navegadornpm run install-page

- ✅ Atualização automática (carrega do GitHub)

- ✅ Bookmarklet pequeno (~300 bytes)# Gerar ambos (build completo)

npm run build

### Execução

# Testar localmente

```npm run dev

Usuário clica no bookmarklet

         ↓# Abrir demo

Verifica se já está ativonpm test

         ↓```

Carrega nodistract.js do GitHub

         ↓### Criar seu Próprio Bookmarklet

Script carrega Readability

         ↓O projeto inclui scripts para gerar bookmarklets automaticamente:

Extrai conteúdo principal

         ↓```bash

Renderiza interface limpanode generate-bookmarklet.js

         ↓```

Leitura sem distrações! 🎉

```Isso gera:

- **bookmarklet.json** - Versões CDN e inline do bookmarklet

---- **bookmarklet.txt** - Texto simples para copiar/colar



## 🎨 PersonalizaçãoVocê pode modificar `index.js` e regenerar o bookmarklet sempre que quiser.



Edite `nodistract.js` e personalize:### Criar Página de Instalação



```javascript```bash

// Mudar cor do botão de fecharnode generate-install-page.js

.readable-close {```

    background: #3498db; // Azul ao invés de vermelho

}Gera `install.html` - uma página bonita com:

- Botão de copiar automático

// Mudar largura máxima do conteúdo- Opção arrastar e soltar

.readable-page {- Instruções por navegador

    max-width: 1000px; // Ao invés de 800px- Teste ao vivo

}

## 🛠️ Melhorias Implementadas

// Mudar esquema de cores

body {### v2.0 (Última versão)

    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

}✅ **Sistema de Build Automático**

```- Gerador de bookmarklet com minificação

- Página de instalação responsiva

Depois, abra `install.html` para gerar o novo bookmarklet!- Scripts NPM para automação



---✅ **Removidas dependências desnecessárias**

- Eliminado jQuery (não era usado)

## 🧪 Testar Localmente- Eliminado Bootstrap (substituído por CSS customizado)

- Redução de ~200KB no tamanho total

```bash

# Clone o repositório✅ **Melhorias de UX**

git clone https://github.com/grapeia/nodistract.git- Loader visual durante carregamento

cd nodistract- Botão de fechar flutuante e responsivo

- Tratamento de erros de imagem

# Inicie um servidor HTTP (qualquer um serve)- Gradiente de fundo moderno

python3 -m http.server 8000

# ou✅ **Melhorias de código**

npx serve- Tratamento de erros robusto com try/catch

- Verificação de scripts já carregados

# Acesse no navegador- Código documentado com JSDoc

# http://localhost:8000/install.html - Instalar bookmarklet- Nomes de classes mais semânticas

# http://localhost:8000/demo.html - Ver demonstração

```✅ **Melhorias visuais**

- Tipografia otimizada para leitura

---- Espaçamento melhorado

- Animações suaves

## 🌐 GitHub Pages- Design moderno e clean



Para publicar seu fork:✅ **Responsividade**

- Layout adaptativo para mobile

1. **Configure GitHub Pages:**- Imagens responsivas

   - Vá em Settings → Pages- Fontes escaláveis

   - Source: `main` branch, `/ (root)`

   - Salve## 📋 Requisitos



2. **Aguarde 2-3 minutos**- **Para usuários:** Navegador moderno com suporte a ES6+

- **Para desenvolvedores:** Node.js 12+ (para gerar bookmarklets)

3. **Acesse:**- Conexão com internet (para carregar Readability CDN)

   - `https://seu-usuario.github.io/nodistract/install.html`

## 🎨 Personalização

4. **Atualize as URLs em `install.html`:**

   ```javascriptVocê pode personalizar as cores e estilos editando a função `injectStyles()` em `index.js`:

   const githubUrl = 'https://raw.githubusercontent.com/SEU-USUARIO/nodistract/main/nodistract.js';

   ``````javascript

// Exemplo: mudar cor do botão

---.readable-close {

    background: #3498db; // Azul ao invés de vermelho

## 🆚 Comparação}



| Característica | NoDistract | Extensões | Leitores Nativos |// Exemplo: mudar largura máxima

|----------------|------------|-----------|------------------|.readable-page {

| Instalação | 1 clique | Store + permissões | Já incluído |    max-width: 1000px; // Ao invés de 800px

| Tamanho | ~300 bytes | 1-5 MB | N/A |}

| Atualização | Automática | Manual/Auto | Auto |```

| Permissões | Nenhuma | Várias | Nenhuma |

| Personalização | Total | Limitada | Nenhuma |Após fazer mudanças, regenere o bookmarklet:

| Offline | Não (CDN) | Sim | Sim |```bash

npm run build

---```



## 🤝 Contribuir## 🧪 Testar Localmente



Contribuições são bem-vindas!1. Clone o repositório:

```bash

1. Fork o projetogit clone https://github.com/grapeia/outline-clone.git

2. Crie uma branch: `git checkout -b minha-feature`cd outline-clone

3. Commit: `git commit -m 'Adiciona feature X'````

4. Push: `git push origin minha-feature`

5. Abra um Pull Request2. Gere os arquivos necessários:

```bash

---npm run build

```

## 📄 Licença

3. Inicie um servidor local:

[MIT License](LICENSE) - Use livremente!```bash

npm run dev

---# ou

python3 -m http.server 8000

## 🙏 Créditos```



- [Mozilla Readability](https://github.com/mozilla/readability) - Biblioteca de extração de conteúdo4. Acesse:

- Inspirado no [Outline.com](https://outline.com/)   - Demo: `http://localhost:8000/demo.html`

   - Instalação: `http://localhost:8000/install.html`

---

## 📝 Estrutura do Projeto

## 📊 Estatísticas

```

- **Código fonte:** ~8KBoutline-clone/

- **Bookmarklet:** ~300 bytes├── index.js                    # Script principal do reader mode

- **Dependências:** 0├── generate-bookmarklet.js     # Gerador de bookmarklet

- **Navegadores:** Chrome, Firefox, Safari, Edge├── generate-install-page.js    # Gerador da página de instalação

- **Tempo de carga:** < 1 segundo├── package.json                # Configuração NPM

├── install.html                # Página de instalação (gerada)

---├── demo.html                   # Página de demonstração

├── bookmarklet.json            # Bookmarklets gerados

## 🐛 Reportar Problemas├── bookmarklet.txt             # Versão texto do bookmarklet

├── LICENSE                     # Licença MIT

Encontrou um bug? [Abra uma issue](https://github.com/grapeia/nodistract/issues)└── README.md                   # Esta documentação

```

---

## 🤝 Contribuindo

**Feito com ❤️ para leitura sem distrações**

Contribuições são bem-vindas! Sinta-se à vontade para:

[Instalar](https://grapeia.github.io/nodistract/install.html) • [Demo](https://grapeia.github.io/nodistract/demo.html) • [GitHub](https://github.com/grapeia/nodistract)

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## 🙏 Créditos

- [Mozilla Readability](https://github.com/mozilla/readability) - Biblioteca de extração de conteúdo
- Inspirado no [Outline.com](https://outline.com/)

## 🌐 GitHub Pages

Para hospedar no GitHub Pages:

1. Faça push do código para o GitHub
2. Vá em Settings → Pages
3. Source: `main` branch, `/ (root)`
4. Salve e aguarde alguns minutos
5. Acesse: `https://grapeia.github.io/outline-clone/install.html`

## � Comparação de Métodos

| Método | Tamanho | Velocidade | Atualização | Recomendado |
|--------|---------|------------|-------------|-------------|
| **CDN (GitHub Raw)** | ~200 bytes | Rápido | Automática | ✅ Sim |
| **GitHub Pages** | ~200 bytes | Rápido | Automática | ✅ Sim |
| **Inline** | ~15KB | Instantâneo | Manual | ⚠️ Só se offline |

## �🐛 Reportar Problemas

Encontrou um bug? [Abra uma issue](https://github.com/grapeia/outline-clone/issues)

## 📜 Changelog

### v2.0.0 (2025-11-22)
- ✨ Sistema de build automático com geração de bookmarklet
- ✨ Página de instalação interativa
- ✨ Minificação automática do código
- 🔧 Removido jQuery e Bootstrap
- 🎨 Design moderno e responsivo
- 📝 Documentação completa em português

### v1.0.0
- 🎉 Versão inicial com Readability
- 📖 Modo leitura básico

---

Feito com ❤️ para melhorar a experiência de leitura na web
