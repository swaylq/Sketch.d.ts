/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCloudLicenseOperation<T0 = void, T1 = void, T2 = void> extends SCKOAuthAPIOperation, BCLicenseOperationProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCCloudLicenseOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SCKOAuthAPIOperation, BCLicenseOperationProtocol {
      licenseClass<R = unknown>(): R;
    }
  }
}

declare const BCCloudLicenseOperation: cocoa.BCCloudLicenseOperation.CLASS;
