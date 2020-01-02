// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';

export class SystemPropertiesService extends BaseService {
  readonly serviceNane: string = 'SystemProperties';
  readonly controlUrl: string = '/SystemProperties/Control';  
  readonly eventSubUrl: string = '/SystemProperties/Event';
  readonly scpUrl: string = '/xml/SystemProperties1.xml';

  //#region methods
  AddAccountX(input: { AccountType: number; AccountID: string; AccountPassword: string }):
    Promise<AddAccountXResponse>{ return this.SoapRequestWithBody<typeof input, AddAccountXResponse>('AddAccountX', input); }

  AddOAuthAccountX(input: { AccountType: number; AccountToken: string; AccountKey: string; OAuthDeviceID: string; AuthorizationCode: string; RedirectURI: string; UserIdHashCode: string; AccountTier: number }):
    Promise<AddOAuthAccountXResponse>{ return this.SoapRequestWithBody<typeof input, AddOAuthAccountXResponse>('AddOAuthAccountX', input); }

  DoPostUpdateTasks():
    Promise<boolean> { return this.SoapRequestNoResponse('DoPostUpdateTasks'); }

  EditAccountMd(input: { AccountType: number; AccountID: string; NewAccountMd: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('EditAccountMd', input); }

  EditAccountPasswordX(input: { AccountType: number; AccountID: string; NewAccountPassword: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('EditAccountPasswordX', input); }

  EnableRDM(input: { RDMValue: boolean }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('EnableRDM', input); }

  GetRDM():
    Promise<GetRDMResponse>{ return this.SoapRequest<GetRDMResponse>('GetRDM'); }

  GetString(input: { VariableName: string }):
    Promise<GetStringResponse>{ return this.SoapRequestWithBody<typeof input, GetStringResponse>('GetString', input); }

  GetWebCode(input: { AccountType: number }):
    Promise<GetWebCodeResponse>{ return this.SoapRequestWithBody<typeof input, GetWebCodeResponse>('GetWebCode', input); }

  ProvisionCredentialedTrialAccountX(input: { AccountType: number; AccountID: string; AccountPassword: string }):
    Promise<ProvisionCredentialedTrialAccountXResponse>{ return this.SoapRequestWithBody<typeof input, ProvisionCredentialedTrialAccountXResponse>('ProvisionCredentialedTrialAccountX', input); }

  RefreshAccountCredentialsX(input: { AccountType: number; AccountUID: number; AccountToken: string; AccountKey: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('RefreshAccountCredentialsX', input); }

  Remove(input: { VariableName: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('Remove', input); }

  RemoveAccount(input: { AccountType: number; AccountID: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('RemoveAccount', input); }

  ReplaceAccountX(input: { AccountUDN: string; NewAccountID: string; NewAccountPassword: string; AccountToken: string; AccountKey: string; OAuthDeviceID: string }):
    Promise<ReplaceAccountXResponse>{ return this.SoapRequestWithBody<typeof input, ReplaceAccountXResponse>('ReplaceAccountX', input); }

  ResetThirdPartyCredentials():
    Promise<boolean> { return this.SoapRequestNoResponse('ResetThirdPartyCredentials'); }

  SetAccountNicknameX(input: { AccountUDN: string; AccountNickname: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetAccountNicknameX', input); }

  SetString(input: { VariableName: string; StringValue: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetString', input); }
  //#endregion
}

// Generated responses
export interface AddAccountXResponse {
  AccountUDN: string;
}

export interface AddOAuthAccountXResponse {
  AccountUDN: string;
  AccountNickname: string;
}

export interface GetRDMResponse {
  RDMValue: boolean;
}

export interface GetStringResponse {
  StringValue: string;
}

export interface GetWebCodeResponse {
  WebCode: string;
}

export interface ProvisionCredentialedTrialAccountXResponse {
  IsExpired: boolean;
  AccountUDN: string;
}

export interface ReplaceAccountXResponse {
  NewAccountUDN: string;
}
