/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicenseMetadata<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseOperationResultProtocol {
    cxx_destruct<R = void>(): R;
    initWithUpdateExpirationDate<R = unknown, P0 = unknown>(_initWithUpdateExpirationDate: P0): R;
    updateExpirationDate<R = NSDate>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCLicenseMetadata {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseOperationResultProtocol {
      alloc<R = BCLicenseMetadata>(): R;
      new: <R = BCLicenseMetadata>() => R;
    }
  }
}

declare const BCLicenseMetadata: cocoa.BCLicenseMetadata.CLASS;
