# 🏗️ Enterprise Monorepo - Frontend Architecture Study

Projeto focado em **Arquitetura Frontend Agnostica** e escalável, utilizando o ecossistema **Nx** para demonstrar a separação total entre regras de negócio e provedores de infraestrutura (APIs, BaaS, Mocks).

---

## 🎯 Visão Geral

Este workspace foi desenhado para ser resiliente a mudanças. Focado em **Arquitetura Desacoplada** e sistemas agnósticos, a interface e os casos de uso não conhecem a origem dos dados, permitindo a troca dinâmica entre um **Backend em Go**, um serviço como **Supabase** ou **Mocks em Memória** sem impacto no domínio.

## 🛠️ Filosofia do Projeto

Diferente de CRUDs convencionais, este sistema é construído sobre os pilares da **Screaming Architecture**, onde a estrutura de pastas revela o que o sistema **faz** e não qual framework ele **usa**.

## 🏛️ Estrutura de Camadas (`libs/`)

- **`shared/domain`**: Contratos (Interfaces) e Casos de Uso (Business Logic).
- **`shared/infra`**: Adaptadores técnicos e Repositórios (Persistência/Rede).
- **`shared/ui`**: Componentes visuais desacoplados.

## 📖 Documentação e Estudos

- [🚀 Roadmap Detalhado](docs/roadmap.md)
- [🏗️ Decisões Arquiteturais (ADRs)](docs/architecture.md)
- [⚙️ Configuração de CI/CD](docs/studies/ci-config.md)

---

_Status: Fase 1 finalizada. Iniciando desacoplamento de infraestrutura._

---

## 🛠️ Guia Rápido

1. **Instalação:** `npm install`
2. **Linting:** `npx nx lint shared-domain`
3. **Pipeline Local:** `npx nx affected -t lint test build`

> **Status do CI:** [![CI](https://github.com/HermesESP/monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/HermesESP/monorepo/actions)
