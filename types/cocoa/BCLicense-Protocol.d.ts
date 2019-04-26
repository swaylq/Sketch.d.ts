/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicenseProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    log<R = void>(): R;
    saveToURL_error<R = boolean, P0 = NSURL, P1 = unknown>(_saveToURL: P0, _error: P1): R;
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
    networkTime<R = BCNetworkTime>(): R;
    deviceID<R = NSString>(): R;
    email<R = NSString>(): R;
    licenseID<R = NSString>(): R;
  }
  namespace BCLicenseProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
