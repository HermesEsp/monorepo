import type { Company } from '../../models/company/company.model';
import type { CompanyRepository } from '../../repositories/company/company.repository';

export class CreateCompanyUseCase {
  constructor(private repository: CompanyRepository) {}

  async execute(data: Omit<Company, 'id' | 'createdAt'>): Promise<Company> {
    // Regra de Negócio 1: Bloquear CNPJ inválido (exemplo simples)
    if (data.taxId.length !== 14) {
      throw new Error('CNPJ deve conter exatamente 14 dígitos.');
    }

    // Regra de Negócio 2: Nome Fantasia não pode ser vazio
    if (!data.tradeName || data.tradeName.trim() === '') {
      data.tradeName = data.name; // Fallback: usa a Razão Social
    }

    return this.repository.create(data);
  }
}