/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLSessionManagerTaskDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSURLSessionTaskDelegateProtocol, NSURLSessionDataDelegateProtocol, NSURLSessionDownloadDelegateProtocol {
    cxx_destruct<R = void>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    downloadTaskDidFinishDownloading<R = CDUnknownBlockType>(): R;
    setDownloadTaskDidFinishDownloading<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    downloadFileURL<R = NSURL>(): R;
    setDownloadFileURL<R = void, P0 = NSURL>(_v: P0): R;
    progress<R = NSProgress>(): R;
    setProgress<R = void, P0 = NSProgress>(_v: P0): R;
    mutableData<R = NSMutableData>(): R;
    setMutableData<R = void, P0 = NSMutableData>(_v: P0): R;
    manager<R = AFURLSessionManager>(): R;
    setManager<R = void, P0 = AFURLSessionManager>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace AFURLSessionManagerTaskDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSURLSessionTaskDelegateProtocol, NSURLSessionDataDelegateProtocol, NSURLSessionDownloadDelegateProtocol {
      alloc<R = AFURLSessionManagerTaskDelegate>(): R;
      new: <R = AFURLSessionManagerTaskDelegate>() => R;
    }
  }
}

declare const AFURLSessionManagerTaskDelegate: cocoa.AFURLSessionManagerTaskDelegate.CLASS;
