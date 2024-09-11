export type Contract = 'ts' | 'rs' | 'none';
export const CONTRACTS: Contract[] = ['ts', 'rs', 'none'];

export type Frontend = 'next-app' | 'next-page' | 'none';
export const FRONTENDS: Frontend[] = ['next-app' , 'next-page', 'none'];

export type App = 'contract' | 'gateway';
export const APPS: App[] = ['contract', 'gateway'];

export type ProjectName = string;

export interface UserConfig {
  contract: Contract;
  frontend: Frontend;
  components: boolean;
  projectName: ProjectName;
  install: boolean;
  error: (() => void) | undefined;
}

export type CreateContractParams = {
  contract: Contract,
  projectPath: string,
  templatesDir: string,
}

export type CreateGatewayParams = {
  frontend: Frontend,
  components: boolean,
  projectPath: string,
  templatesDir: string,
}

export type FrontendMessage = {
  [key in Exclude<Frontend, 'none'>]: string;
};