# 🏗️ Enterprise Monorepo - Frontend Architecture Study

Este repositório é um projeto de estudo de **Arquitetura Frontend Avançada**, focado na construção de sistemas escaláveis e **totalmente agnósticos ao provedor de dados**. A fundação foi desenhada para que a interface e as regras de negócio sejam independentes da infraestrutura, estando preparada para integração transparente com **APIs REST, gRPC, BaaS (Firebase/Supabase)** ou serviços de backend diversos.

## 🎯 Objetivos do Projeto

Desenvolver um ecossistema de **Gestão de Empresas** utilizando **Nx** para demonstrar:

- **Arquitetura Plug-and-Play:** Capacidade de trocar o provedor de backend (ex: mudar de uma API Mock para uma API real em Go) alterando apenas uma linha na camada de Infraestrutura.
- **Independência de Framework:** Regras de negócio protegidas na camada de Domínio, puramente em TypeScript.
- **Consistência de Código:** Padronização rigorosa com ESLint (Rules Sênior) e Prettier.
- **Qualidade e Segurança:** Automação de ganchos de commit (Git Hooks) com Husky para garantir integridade.

## 🛠️ Stack Tecnológica & Padrões

- **Monorepo:** [Nx](https://nx.dev) (Preset Minimal)
- **Arquitetura:** Clean Architecture / Hexagonal (Screaming Architecture)
- **Padronização:** ESLint (Flat Config) + Prettier
- **Garantia de Qualidade:** Husky + Lint-staged (Em configuração 🚧)
- **Core:** TypeScript 5.x + Angular (Standalone)

---

## 🏛️ Organização da Solução (`libs/`)

A estrutura foi pensada para desacoplar a "intenção" da "implementação":

1. **`shared/domain`**: O coração do sistema. Define as **Interfaces (Contracts)** e **Use Cases**. É aqui que o sistema "diz o que faz" sem saber "como é feito". **Zero dependências de bibliotecas externas.**
2. **`shared/infra`**: A camada de tradução. Aqui implementamos os Repositórios reais que falam com APIs, Firebase ou LocalStorage. É o único lugar que conhece detalhes de rede ou persistência.
3. **`shared/ui`**: Design System e componentes puramente visuais (Dumb Components).
4. **`shared/utils`**: Helpers e funções puras de suporte.

---

## 🚀 Plano de Ação (Roadmap até 31/03)

### Fase 1: Fundação & Domínio (Concluído ✅)

- [x] Configuração do Workspace Nx Minimal.
- [x] Padronização de Linting (Rules Sênior: ponto e vírgula, no-var, etc).
- [x] Modelagem do Domínio de Empresa (`Company`, `CompanyRepository`).
- [x] Criação de Use Cases de Negócio.

### Fase 2: Infraestrutura & Adaptadores (Próximo Passo 🏃)

- [ ] Implementação de Git Hooks (Husky + Lint-staged).
- [ ] Criação do `InMemoryCompanyRepository` (Mock para desenvolvimento offline).
- [ ] Preparação do `HttpCompanyRepository` (Pronto para consumo de API externa).
- [ ] Configuração de Injeção de Dependência para troca dinâmica de adaptadores.

### Fase 3: Frontend Angular (Dashboard)

- [ ] Geração da aplicação `apps/dash`.
- [ ] Consumo da camada de Domínio através da Injeção de Dependência da Infra.
- [ ] Desenvolvimento de UI Components na `shared-ui`.

---

## 🛠️ Como executar

1. Instale as dependências: `npm install`
2. Rode o lint para verificar o padrão: `npx nx lint shared-domain`

---

> **Nota de Estudo:** Este projeto simula um ambiente corporativo real, onde a agilidade de trocar o "motor" (backend) sem quebrar o "carro" (frontend) é um diferencial técnico de alto nível.
