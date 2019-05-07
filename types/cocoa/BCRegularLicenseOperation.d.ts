/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRegularLicenseOperation<T0 = void, T1 = void, T2 = void> extends BCURLOperation, BCLicenseOperationProtocol {
    cxx_destruct<R = void>(): R;
    executeWithHandler<R = void, P0 = CDUnknownBlockType>(_executeWithHandler: P0): R;
    cancel<R = void>(): R;
    main<R = void>(): R;
    resultWithData<R = unknown, P0 = unknown>(_resultWithData: P0): R;
    handleResponse_data_error<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_handleResponse: P0, _data: P1, _error: P2): R;
    initWithRequest<R = unknown, P0 = unknown>(_initWithRequest: P0): R;
    init<R = unknown>(): R;
    resultType<R = unknown>(): R;
    setResultType<R = void, P0 = unknown>(_v: P0): R;
    task<R = NSURLSessionDataTask>(): R;
    setTask<R = void, P0 = NSURLSessionDataTask>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    result<R = BCLicenseOperationResult>(): R;
    setResult<R = void, P0 = BCLicenseOperationResult>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCRegularLicenseOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCURLOperation, BCLicenseOperationProtocol {
      requestMetadataForLicense_handler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_requestMetadataForLicense: P0, _handler: P1): R;
      unregisterLicense<R = void, P0 = unknown>(_unregisterLicense: P0): R;
      requestTrialWithHandler<R = void, P0 = CDUnknownBlockType>(_requestTrialWithHandler: P0): R;
      registerWithLicenseKey_handler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_registerWithLicenseKey: P0, _handler: P1): R;
      configureWithApplicationID_publicCertificate<R = void, P0 = unknown, P1 = unknown>(_configureWithApplicationID: P0, _publicCertificate: P1): R;
    }
  }
}

declare const BCRegularLicenseOperation: cocoa.BCRegularLicenseOperation.CLASS;
