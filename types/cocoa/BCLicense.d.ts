/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicense<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseProtocol {
    cxx_destruct<R = void>(): R;
    variants<R = unknown>(): R;
    updatesHaveExpired<R = boolean>(): R;
    updateExpirationDate<R = unknown>(): R;
    validateDate<R = void>(): R;
    status<R = unknown>(): R;
    licenseID<R = unknown>(): R;
    purchaseIsExpiring<R = boolean>(): R;
    expiryDate<R = unknown>(): R;
    remainingDays<R = number>(): R;
    type<R = number>(): R;
    deviceID<R = unknown>(): R;
    email<R = unknown>(): R;
    isValid<R = boolean>(): R;
    isAppNameValid<R = boolean>(): R;
    isExpired<R = boolean>(): R;
    isDeviceValid<R = boolean>(): R;
    isSignatureValid<R = boolean>(): R;
    validateSignature<R = void>(): R;
    payloadHash<R = unknown>(): R;
    isAboutToExpire<R = boolean>(): R;
    shouldTryToRequestNewTrialLicense<R = boolean>(): R;
    initWithURL_applicationID_publicCertificate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithURL: P0, _applicationID: P1, _publicCertificate: P2): R;
    initWithJSONData_applicationID_publicCertificate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithJSONData: P0, _applicationID: P1, _publicCertificate: P2): R;
    networkDate<R = NSDate>(): R;
    setNetworkDate<R = void, P0 = NSDate>(_v: P0): R;
    referenceDate<R = NSDate>(): R;
    setReferenceDate<R = void, P0 = NSDate>(_v: P0): R;
    referenceTime<R = number>(): R;
    setReferenceTime<R = void, P0 = number>(_v: P0): R;
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
    currentDate<R = NSDate>(): R;
    systemStartupTime<R = number>(): R;
  }
  namespace BCLicense {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, BCLicenseProtocol {
      alloc<R = BCLicense>(): R;
      new: <R = BCLicense>() => R;
    }
  }
}

declare const BCLicense: cocoa.BCLicense.CLASS;
