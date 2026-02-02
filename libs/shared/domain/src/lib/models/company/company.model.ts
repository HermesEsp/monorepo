export interface Company {
  id: string;
  name: string; // Razão Social
  tradeName: string; // Nome Fantasia
  taxId: string; // CNPJ
  email: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: Date;
}
