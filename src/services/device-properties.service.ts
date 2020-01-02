// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';

/**
 * Modify device properties, like led status and stereo pairs
 *
 * @export
 * @class DevicePropertiesService
 * @extends {BaseService}
 */
export class DevicePropertiesService extends BaseService {
  readonly serviceNane: string = 'DeviceProperties';
  readonly controlUrl: string = '/DeviceProperties/Control';  
  readonly eventSubUrl: string = '/DeviceProperties/Event';
  readonly scpUrl: string = '/xml/DeviceProperties1.xml';

  //#region methods
  AddBondedZones(input: { ChannelMapSet: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('AddBondedZones', input); }

  AddHTSatellite(input: { HTSatChanMapSet: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('AddHTSatellite', input); }

  CreateStereoPair(input: { ChannelMapSet: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('CreateStereoPair', input); }

  EnterConfigMode(input: { Mode: string; Options: string }):
    Promise<EnterConfigModeResponse>{ return this.SoapRequestWithBody<typeof input, EnterConfigModeResponse>('EnterConfigMode', input); }

  ExitConfigMode(input: { Options: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('ExitConfigMode', input); }

  GetAutoplayLinkedZones(input: { Source: string }):
    Promise<GetAutoplayLinkedZonesResponse>{ return this.SoapRequestWithBody<typeof input, GetAutoplayLinkedZonesResponse>('GetAutoplayLinkedZones', input); }

  GetAutoplayRoomUUID(input: { Source: string }):
    Promise<GetAutoplayRoomUUIDResponse>{ return this.SoapRequestWithBody<typeof input, GetAutoplayRoomUUIDResponse>('GetAutoplayRoomUUID', input); }

  GetAutoplayVolume(input: { Source: string }):
    Promise<GetAutoplayVolumeResponse>{ return this.SoapRequestWithBody<typeof input, GetAutoplayVolumeResponse>('GetAutoplayVolume', input); }

  GetButtonLockState():
    Promise<GetButtonLockStateResponse>{ return this.SoapRequest<GetButtonLockStateResponse>('GetButtonLockState'); }

  GetButtonState():
    Promise<GetButtonStateResponse>{ return this.SoapRequest<GetButtonStateResponse>('GetButtonState'); }

  GetHouseholdID():
    Promise<GetHouseholdIDResponse>{ return this.SoapRequest<GetHouseholdIDResponse>('GetHouseholdID'); }

  GetLEDState():
    Promise<GetLEDStateResponse>{ return this.SoapRequest<GetLEDStateResponse>('GetLEDState'); }

  GetUseAutoplayVolume(input: { Source: string }):
    Promise<GetUseAutoplayVolumeResponse>{ return this.SoapRequestWithBody<typeof input, GetUseAutoplayVolumeResponse>('GetUseAutoplayVolume', input); }

  GetZoneAttributes():
    Promise<GetZoneAttributesResponse>{ return this.SoapRequest<GetZoneAttributesResponse>('GetZoneAttributes'); }

  GetZoneInfo():
    Promise<GetZoneInfoResponse>{ return this.SoapRequest<GetZoneInfoResponse>('GetZoneInfo'); }

  RemoveBondedZones(input: { ChannelMapSet: string; KeepGrouped: boolean }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('RemoveBondedZones', input); }

  RemoveHTSatellite(input: { SatRoomUUID: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('RemoveHTSatellite', input); }

  SeparateStereoPair(input: { ChannelMapSet: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SeparateStereoPair', input); }

  SetAutoplayLinkedZones(input: { IncludeLinkedZones: boolean; Source: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetAutoplayLinkedZones', input); }

  SetAutoplayRoomUUID(input: { RoomUUID: string; Source: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetAutoplayRoomUUID', input); }

  SetAutoplayVolume(input: { Volume: number; Source: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetAutoplayVolume', input); }

  SetButtonLockState(input: { DesiredButtonLockState: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetButtonLockState', input); }

  SetLEDState(input: { DesiredLEDState: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetLEDState', input); }

  SetUseAutoplayVolume(input: { UseVolume: boolean; Source: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetUseAutoplayVolume', input); }

  SetZoneAttributes(input: { DesiredZoneName: string; DesiredIcon: string; DesiredConfiguration: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetZoneAttributes', input); }
  //#endregion
}

// Generated responses
export interface EnterConfigModeResponse {
  State: string;
}

export interface GetAutoplayLinkedZonesResponse {
  IncludeLinkedZones: boolean;
}

export interface GetAutoplayRoomUUIDResponse {
  RoomUUID: string;
}

export interface GetAutoplayVolumeResponse {
  CurrentVolume: number;
}

export interface GetButtonLockStateResponse {
  CurrentButtonLockState: string;
}

export interface GetButtonStateResponse {
  State: string;
}

export interface GetHouseholdIDResponse {
  CurrentHouseholdID: string;
}

export interface GetLEDStateResponse {
  CurrentLEDState: string;
}

export interface GetUseAutoplayVolumeResponse {
  UseVolume: boolean;
}

export interface GetZoneAttributesResponse {
  CurrentZoneName: string;
  CurrentIcon: string;
  CurrentConfiguration: string;
}

export interface GetZoneInfoResponse {
  SerialNumber: string;
  SoftwareVersion: string;
  DisplaySoftwareVersion: string;
  HardwareVersion: string;
  IPAddress: string;
  MACAddress: string;
  CopyrightInfo: string;
  ExtraInfo: string;
  HTAudioIn: number;
  Flags: number;
}
