# 📜 Sistema de Busca de Legislação Municipal - Marechal Floriano/ES

Sistema web para consulta de 438 leis municipais de Marechal Floriano/ES (1993-2024).

## 🚀 Como Usar

### Localmente

1. Abra o arquivo `busca_legislacao.html` no navegador
2. Pronto! O sistema carrega automaticamente o `legislacao.json`

### Online (GitHub Pages)

Após fazer push para o GitHub:

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione `main`/`master`
3. Salve
4. Acesse: `https://seu-usuario.github.io/nome-do-repo/busca_legislacao.html`

## 📋 Funcionalidades

### 🔍 Busca Simples (Local)
- Busque por número: `100/1994`
- Busque por ano: `2011`
- Busque por palavra-chave: `previdência`, `servidor`, `salário`
- Resultados instantâneos (sem API)

### 🤖 Busca Semântica (Claude IA)
- Faça perguntas em linguagem natural
- Exemplo: "Quais leis tratam da previdência dos servidores?"
- Exemplo: "Leis sobre cargos de comissão criados após 2010"
- Requer API Key do Claude (gratuita para começar)

## 🔑 Configurar API Key (Busca Semântica)

1. Acesse: https://console.anthropic.com/
2. Crie conta (gratuita)
3. Gere uma API Key
4. No sistema, clique em **Busca Semântica (IA)**
5. Cole a chave e clique em **Salvar**

**Privacidade:** A chave fica apenas no seu navegador (localStorage).

## 📊 Dados

- **Total:** 438 leis
- **Período:** 1993 - 2024
- **Fonte:** `geral/OUTPUT/LEIS_TXT/` (textos extraídos via OCR)
- **Formato:** JSON estruturado

## 🛠️ Arquivos

```
busca_legislacao.html  ← Interface web (abra no navegador)
legislacao.json        ← Base de dados (438 leis)
```

## 💡 Exemplos de Busca

### Simples
- `565/2005` → Lei específica
- `2011` → Todas as leis de 2011
- `magistério` → Leis sobre educação
- `salário` → Leis sobre remuneração

### Semântica (IA)
- "Leis que criaram cargos de saúde"
- "Legislação sobre gratificações revogadas"
- "Alterações no plano de carreira após 2015"
- "Leis relacionadas a contratos temporários"

## 📝 Notas

- Sistema 100% client-side (funciona sem servidor)
- Dados estáticos (atualize `legislacao.json` conforme necessário)
- Busca semântica consome ~0,01 USD por consulta (Claude API)

---

**Desenvolvido para:** Prefeitura Municipal de Marechal Floriano/ES  
**Projeto:** PCCV - Plano de Cargos, Carreiras e Vencimentos  
**Data:** Maio/2026
