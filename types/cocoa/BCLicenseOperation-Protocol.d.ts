/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicenseOperationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  namespace BCLicenseOperationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      refreshLicense_handler<R = void, P0 = BCLicense, P1 = CDUnknownBlockType>(_refreshLicense: P0, _handler: P1): R;
    }
  }
}
