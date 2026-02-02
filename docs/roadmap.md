# 🚀 Roadmap de Engenharia (Visão 31/03)

Este roadmap não foca apenas em telas, mas na maturidade da plataforma monorepo.

## 🏁 Fase 1: Core & Static Analysis (Status: 90%)

- [x] **Monorepo Foundation:** Setup do Nx Minimal para evitar overhead de plugins desnecessários.
- [x] **Strict Linting:** Implementação de regras de "Clean Code" (No-var, Semi, No-unused-vars) aplicadas via ESLint 9.
- [x] **Domain Modeling:** Definição de entidades imutáveis e interfaces de contrato.
- [ ] **Git Shield:** Finalização do Husky + Lint-staged para garantir 0% de código sujo no repositório.

## ⚙️ Fase 2: Infrastructure Adapters & Dependency Injection (Fevereiro)

- [ ] **Decoupled Persistence:** Implementação de `InMemoryRepository` para desenvolvimento veloz (Offline-first).
- [ ] **DI Container:** Configuração do mecanismo de Injeção de Dependência do Angular para resolver interfaces do Domínio.
- [ ] **Anti-Corruption Layer (ACL):** Preparação de Data Mappers para transformar respostas de APIs/BaaS em Entidades de Domínio.
- [ ] **Unit Testing Strategy:** Setup de Vitest para testar Use Cases de forma isolada (sem browser).

## 🎨 Fase 3: UI System & Application Layer (Março)

- [ ] **Smart vs Dumb Components:** Separação clara entre componentes de lógica (Smart) e de apresentação (UI/Dumb).
- [ ] **Feature Libs:** Organização de libs por funcionalidade (ex: `libs/company/feature-list`).
- [ ] **Integration Testing:** Testes de integração garantindo que o fluxo Domínio -> Infra -> API funcione.

## 🚀 Fase 4: Production Readiness (Meta 31/03)

- [ ] **BaaS Integration:** Switch de memória para Supabase/Firebase ou API REST real.
- [ ] **Performance Audit:** Verificação de Bundle Size e estratégias de Lazy Loading.
- [ ] **Final Deploy:** Setup de ambientes de Staging/Production no Vercel/Netlify via GitHub Actions.
