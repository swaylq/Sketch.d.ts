/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRegularLicense<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseOperationResultProtocol, BCLicenseProtocol {
    cxx_destruct<R = void>(): R;
    expiryDate<R = unknown>(): R;
    isAppNameValid<R = boolean>(): R;
    isExpired<R = boolean>(): R;
    isDeviceValid<R = boolean>(): R;
    isSignatureValid<R = boolean>(): R;
    validateSignature<R = void>(): R;
    payloadHash<R = unknown>(): R;
    networkTime<R = BCNetworkTime>(): R;
    setNetworkTime<R = void, P0 = BCNetworkTime>(_v: P0): R;
    signatureStatus<R = number>(): R;
    setSignatureStatus<R = void, P0 = number>(_v: P0): R;
    publicCertificate<R = NSString>(): R;
    setPublicCertificate<R = void, P0 = NSString>(_v: P0): R;
    metadata<R = NSDictionary>(): R;
    setMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    payload<R = NSDictionary>(): R;
    setPayload<R = void, P0 = NSDictionary>(_v: P0): R;
    applicationID<R = NSString>(): R;
    setApplicationID<R = void, P0 = NSString>(_v: P0): R;
    variants<R = NSArray>(): R;
    updatesHaveExpired<R = boolean>(): R;
    updateExpirationDate<R = NSDate>(): R;
    registrationStatus<R = NSString>(): R;
    licenseID<R = NSString>(): R;
    requiresRefresh<R = boolean>(): R;
    shouldRefresh<R = boolean>(): R;
    remainingDays<R = number>(): R;
    type<R = number>(): R;
    deviceID<R = NSString>(): R;
    email<R = NSString>(): R;
    isValid<R = boolean>(): R;
    isAboutToExpire<R = boolean>(): R;
    shouldTryToRequestNewTrialLicense<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCRegularLicense {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseOperationResultProtocol, BCLicenseProtocol {
      alloc<R = BCRegularLicense>(): R;
      new: <R = BCRegularLicense>() => R;
    }
  }
}

declare const BCRegularLicense: cocoa.BCRegularLicense.CLASS;
