/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDataDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSURLSessionTaskDelegateProtocol {
    URLSession_dataTask_willCacheResponse_completionHandler<R = void, P0 = NSURLSession, P1 = NSURLSessionDataTask, P2 = NSCachedURLResponse, P3 = CDUnknownBlockType>(_URLSession: P0, _dataTask: P1, _willCacheResponse: P2, _completionHandler: P3): R;
    URLSession_dataTask_didReceiveData<R = void, P0 = NSURLSession, P1 = NSURLSessionDataTask, P2 = NSData>(_URLSession: P0, _dataTask: P1, _didReceiveData: P2): R;
    URLSession_dataTask_didBecomeStreamTask<R = void, P0 = NSURLSession, P1 = NSURLSessionDataTask, P2 = NSURLSessionStreamTask>(_URLSession: P0, _dataTask: P1, _didBecomeStreamTask: P2): R;
    URLSession_dataTask_didBecomeDownloadTask<R = void, P0 = NSURLSession, P1 = NSURLSessionDataTask, P2 = NSURLSessionDownloadTask>(_URLSession: P0, _dataTask: P1, _didBecomeDownloadTask: P2): R;
    URLSession_dataTask_didReceiveResponse_completionHandler<R = void, P0 = NSURLSession, P1 = NSURLSessionDataTask, P2 = NSURLResponse, P3 = CDUnknownBlockType>(_URLSession: P0, _dataTask: P1, _didReceiveResponse: P2, _completionHandler: P3): R;
  }
  namespace NSURLSessionDataDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLSessionTaskDelegateProtocol {}
  }
}
