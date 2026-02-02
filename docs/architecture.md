# 🏗️ Architectural Decision Records (ADR)

Este documento registra as decisões de design arquitetural e o contexto por trás de cada escolha.

## ADR 01: Clean Architecture & Agnostic layers

**Contexto:** O frontend frequentemente sofre com mudanças de backend (APIs que mudam de formato ou troca de provedor de BaaS).
**Decisão:** Separamos o sistema em 3 camadas concêntricas:

1. **Domain:** Contém a regra de negócio e as interfaces. Não conhece nada de rede ou frameworks.
2. **Infra:** Implementa as interfaces do domínio. Aqui reside o conhecimento sobre `HttpClient`, `LocalStorage` ou `Supabase`.
3. **Application/UI:** Onde o Angular reside. Ele apenas orquestra os Use Cases e exibe dados.
   **Consequência:** Podemos trocar o Angular por React ou o REST por GraphQL alterando apenas as camadas externas, mantendo o coração do negócio intacto.

## ADR 02: Monorepo Strategy com Nx Minimal

**Contexto:** Monorepos podem se tornar pesados e complexos.
**Decisão:** Utilizamos o Nx com o preset `minimal`.
**Justificativa:** Evitamos o "vendor lock-in" excessivo e mantemos o arquivo `package.json` limpo, instalando apenas o que é essencial para o desenvolvimento de bibliotecas TypeScript puras.

## ADR 03: Interface-Based Repositories

**Contexto:** Componentes injetando serviços concretos criam alto acoplamento.
**Decisão:** Casos de Uso dependem de `Interfaces` (Abstract Classes), não de classes concretas.
**Benefício:** Permite o "Mocks on-the-fly". Durante o desenvolvimento, usamos o `InMemoryRepository`. Em produção, injetamos o `HttpRepository`.

## ADR 04: Git Hooks & Early Failure

**Contexto:** O CI costuma falhar por erros simples (espaços, aspas, ponto e vírgula).
**Decisão:** Implementação de Husky + Lint-staged.
**Justificativa:** Movemos o custo da falha para o momento do commit (mais barato) em vez do momento do build no CI (mais caro em tempo e recursos).
