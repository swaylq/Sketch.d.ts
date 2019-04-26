/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLicenseManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    websiteAvailableVersionsURL<R = unknown>(): R;
    websiteRenewalURLForLicenseKey<R = unknown, P0 = unknown>(_websiteRenewalURLForLicenseKey: P0): R;
    websiteRenewalURL<R = unknown>(): R;
    licenseStateChanged<R = void>(): R;
    completeUpdateWithHandler_status_info_error<R = void, P0 = CDUnknownBlockType, P1 = number, P2 = unknown, P3 = unknown>(_completeUpdateWithHandler: P0, _status: P1, _info: P2, _error: P3): R;
    fallbackToTrial_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_fallbackToTrial: P0, _completionHandler: P1): R;
    processLicenseRefreshResult_error_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_processLicenseRefreshResult: P0, _error: P1, _completionHandler: P2): R;
    processDataOfRegistration_handler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_processDataOfRegistration: P0, _handler: P1): R;
    numberOfDaysLeftInTrialMode<R = number>(): R;
    canRenewLicense<R = boolean>(): R;
    canInstallUpdates<R = boolean>(): R;
    updateExpirationDate<R = unknown>(): R;
    registeredEmailAddress<R = unknown>(): R;
    currentLicenseIdentifier<R = unknown>(): R;
    currentLicenseProvider<R = unknown>(): R;
    currentLicenseState<R = unknown>(): R;
    currentLicenseType<R = number>(): R;
    licenseVariantIsSupported<R = boolean, P0 = unknown>(_licenseVariantIsSupported: P0): R;
    licenseVersionIsSupported<R = boolean, P0 = unknown>(_licenseVersionIsSupported: P0): R;
    applyLicense<R = boolean, P0 = unknown>(_applyLicense: P0): R;
    networkTimeDidChangeNotification<R = void, P0 = unknown>(_networkTimeDidChangeNotification: P0): R;
    checkForDeploymentKeyWithPath_removeFile_completionHandler<R = void, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_checkForDeploymentKeyWithPath: P0, _removeFile: P1, _completionHandler: P2): R;
    fetchLicenseMetadata<R = void, P0 = CDUnknownBlockType>(_fetchLicenseMetadata: P0): R;
    unregister<R = void>(): R;
    validateLicenseWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_validateLicenseWithCompletionHandler: P0): R;
    tryToRefreshLicense_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_tryToRefreshLicense: P0, _completionHandler: P1): R;
    refreshLicenseIfNeededWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_refreshLicenseIfNeededWithCompletionHandler: P0): R;
    refreshLicenseWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_refreshLicenseWithCompletionHandler: P0): R;
    obtainCloudLicenseIfNeededWithCompletionHandler<R = boolean, P0 = CDUnknownBlockType>(_obtainCloudLicenseIfNeededWithCompletionHandler: P0): R;
    obtainCloudLicenseWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_obtainCloudLicenseWithCompletionHandler: P0): R;
    obtainFallbackCloudLicenseWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_obtainFallbackCloudLicenseWithCompletionHandler: P0): R;
    obtainFallbackTrialLicenseWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_obtainFallbackTrialLicenseWithCompletionHandler: P0): R;
    updateLicenseWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_updateLicenseWithCompletionHandler: P0): R;
    registerWithLicenseKey_handler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_registerWithLicenseKey: P0, _handler: P1): R;
    initWithApplicationID_publicCertificate_licenseURL_applicationBuildDate_applicationVariant<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithApplicationID: P0, _publicCertificate: P1, _licenseURL: P2, _applicationBuildDate: P3, _applicationVariant: P4): R;
    applicationVariant<R = NSString>(): R;
    setApplicationVariant<R = void, P0 = NSString>(_v: P0): R;
    applicationBuildDate<R = NSDate>(): R;
    setApplicationBuildDate<R = void, P0 = NSDate>(_v: P0): R;
    completedLoadingLicense<R = boolean>(): R;
    setCompletedLoadingLicense<R = void, P0 = boolean>(_v: P0): R;
    licenseURL<R = NSURL>(): R;
    setLicenseURL<R = void, P0 = NSURL>(_v: P0): R;
    license<R = BCLicense>(): R;
    canUseCloud<R = boolean>(): R;
  }
  namespace BCLicenseManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCLicenseManager>(): R;
      new: <R = BCLicenseManager>() => R;
      enableCloud<R = void>(): R;
      cloudEnabled<R = boolean>(): R;
      load<R = void>(): R;
    }
  }
}

declare const BCLicenseManager: cocoa.BCLicenseManager.CLASS;
