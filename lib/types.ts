export interface Telco {
  value: string;
  label: string;
}

export interface Errors {
  short: string;
  invalid: string;
}

export interface Constants {
  prefix: string;
  shotLength: number;
  fullLength: number;
  format: string;
  short: string;
  telcos: Telco[];
  errors: Errors;
}

export interface PhoneReturn {
  isOk: boolean;
  error: string | null;
  normalized: string;
  formatted: string;
  telco: string | null;
  short: string;
}

export type Phone<R> = (
  phoneNumber?: string,
  prefix?: string,
  shotLength?: number,
  telcos?: Telco[]
) => R;
