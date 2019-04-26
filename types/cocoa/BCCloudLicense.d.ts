/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCloudLicense<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseOperationResultProtocol, BCLicenseProtocol {
    cxx_destruct<R = void>(): R;
    initWithToken<R = unknown, P0 = unknown>(_initWithToken: P0): R;
    networkTime<R = BCNetworkTime>(): R;
    setNetworkTime<R = void, P0 = BCNetworkTime>(_v: P0): R;
    jwt<R = SCKJWT>(): R;
    variants<R = NSArray>(): R;
    updatesHaveExpired<R = boolean>(): R;
    updateExpirationDate<R = NSDate>(): R;
    isAboutToExpire<R = boolean>(): R;
    shouldTryToRequestNewTrialLicense<R = boolean>(): R;
    requiresRefresh<R = boolean>(): R;
    shouldRefresh<R = boolean>(): R;
    remainingDays<R = number>(): R;
    type<R = number>(): R;
    isValid<R = boolean>(): R;
    deviceID<R = NSString>(): R;
    email<R = NSString>(): R;
    licenseID<R = NSString>(): R;
    userID<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCCloudLicense {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseOperationResultProtocol, BCLicenseProtocol {
      alloc<R = BCCloudLicense>(): R;
      new: <R = BCCloudLicense>() => R;
    }
  }
}

declare const BCCloudLicense: cocoa.BCCloudLicense.CLASS;
