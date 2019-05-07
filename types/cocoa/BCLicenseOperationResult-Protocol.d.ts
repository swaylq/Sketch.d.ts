/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicenseOperationResultProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    initWithDictionary_applicationID_publicCertificate<R = unknown, P0 = NSDictionary, P1 = NSString, P2 = NSString>(_initWithDictionary: P0, _applicationID: P1, _publicCertificate: P2): R;
  }
  namespace BCLicenseOperationResultProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
