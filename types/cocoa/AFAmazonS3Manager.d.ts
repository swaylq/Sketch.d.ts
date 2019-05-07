/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3Manager<T0 = void, T1 = void, T2 = void> extends AFHTTPRequestOperationManager, NSSecureCodingProtocol, NSCopyingProtocol {
    deleteObjectWithPath_success_failure<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_deleteObjectWithPath: P0, _success: P1, _failure: P2): R;
    setObjectWithMethod_file_destinationPath_parameters_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType, P5 = CDUnknownBlockType, P6 = CDUnknownBlockType>(_setObjectWithMethod: P0, _file: P1, _destinationPath: P2, _parameters: P3, _progress: P4, _success: P5, _failure: P6): R;
    putObjectWithFile_destinationPath_parameters_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType, P5 = CDUnknownBlockType>(_putObjectWithFile: P0, _destinationPath: P1, _parameters: P2, _progress: P3, _success: P4, _failure: P5): R;
    postObjectWithFile_destinationPath_parameters_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType, P5 = CDUnknownBlockType>(_postObjectWithFile: P0, _destinationPath: P1, _parameters: P2, _progress: P3, _success: P4, _failure: P5): R;
    getObjectWithPath_outputStream_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_getObjectWithPath: P0, _outputStream: P1, _progress: P2, _success: P3, _failure: P4): R;
    getObjectWithPath_progress_success_failure<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_getObjectWithPath: P0, _progress: P1, _success: P2, _failure: P3): R;
    headObjectWithPath_success_failure<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_headObjectWithPath: P0, _success: P1, _failure: P2): R;
    deleteBucket_success_failure<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_deleteBucket: P0, _success: P1, _failure: P2): R;
    putBucket_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_putBucket: P0, _parameters: P1, _success: P2, _failure: P3): R;
    getBucket_success_failure<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_getBucket: P0, _success: P1, _failure: P2): R;
    getServiceWithSuccess_failure<R = unknown, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_getServiceWithSuccess: P0, _failure: P1): R;
    enqueueS3RequestOperationWithMethod_path_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_enqueueS3RequestOperationWithMethod: P0, _path: P1, _parameters: P2, _success: P3, _failure: P4): R;
    initWithAccessKeyID_secret<R = unknown, P0 = unknown, P1 = unknown>(_initWithAccessKeyID: P0, _secret: P1): R;
    baseURL<R = NSURL>(): R;
    setBaseURL<R = void, P0 = NSURL>(_v: P0): R;
    requestSerializer<R = AFURLRequestSerialization>(): R;
    setRequestSerializer<R = void, P0 = AFURLRequestSerialization>(_v: P0): R;
  }
  namespace AFAmazonS3Manager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPRequestOperationManager, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = AFAmazonS3Manager>(): R;
      new: <R = AFAmazonS3Manager>() => R;
      keyPathsForValuesAffectingBaseURL<R = unknown>(): R;
    }
  }
}

declare const AFAmazonS3Manager: cocoa.AFAmazonS3Manager.CLASS;
