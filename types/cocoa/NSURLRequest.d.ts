/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLRequest<T0 = void, T1 = void, T2 = void> {}
  namespace NSURLRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSURLRequest(Licensing): 
      metadataRequestForLicense<R = unknown, P0 = unknown>(_metadataRequestForLicense: P0): R;
      unregisterRequestForLicense_applicationID<R = unknown, P0 = unknown, P1 = unknown>(_unregisterRequestForLicense: P0, _applicationID: P1): R;
      trialRequestWithApplicationID<R = unknown, P0 = unknown>(_trialRequestWithApplicationID: P0): R;
      refreshRequestForLicense_applicationID<R = unknown, P0 = unknown, P1 = unknown>(_refreshRequestForLicense: P0, _applicationID: P1): R;
      registerRequestWithLicenseKey_applicationID<R = unknown, P0 = unknown, P1 = unknown>(_registerRequestWithLicenseKey: P0, _applicationID: P1): R;
      requestWithAPIEndpoint_queryItems<R = unknown, P0 = unknown, P1 = unknown>(_requestWithAPIEndpoint: P0, _queryItems: P1): R;
      deviceNameBase64<R = unknown>(): R;
      deviceName<R = unknown>(): R;
      bundleVersion<R = unknown>(): R;
      apiBaseURL<R = unknown>(): R;
    }
  }
}

declare const NSURLRequest: cocoa.NSURLRequest.CLASS;
