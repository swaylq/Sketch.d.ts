/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLConnectionOperation<T0 = void, T1 = void, T2 = void> extends NSOperation, NSURLConnectionDelegateProtocol, NSURLConnectionDataDelegateProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    cancelConnection<R = void>(): R;
    finish<R = void>(): R;
    operationDidStart<R = void>(): R;
    isConcurrent<R = boolean>(): R;
    isFinished<R = boolean>(): R;
    isExecuting<R = boolean>(): R;
    isReady<R = boolean>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_setCompletionBlock: P0): R;
    setRedirectResponseBlock<R = void, P0 = CDUnknownBlockType>(_setRedirectResponseBlock: P0): R;
    setCacheResponseBlock<R = void, P0 = CDUnknownBlockType>(_setCacheResponseBlock: P0): R;
    setWillSendRequestForAuthenticationChallengeBlock<R = void, P0 = CDUnknownBlockType>(_setWillSendRequestForAuthenticationChallengeBlock: P0): R;
    setDownloadProgressBlock<R = void, P0 = CDUnknownBlockType>(_setDownloadProgressBlock: P0): R;
    setUploadProgressBlock<R = void, P0 = CDUnknownBlockType>(_setUploadProgressBlock: P0): R;
    resume<R = void>(): R;
    isPaused<R = boolean>(): R;
    operationDidPause<R = void>(): R;
    pause<R = void>(): R;
    initWithRequest<R = unknown, P0 = unknown>(_initWithRequest: P0): R;
    redirectResponse<R = CDUnknownBlockType>(): R;
    setRedirectResponse<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    cacheResponse<R = CDUnknownBlockType>(): R;
    setCacheResponse<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    authenticationChallenge<R = CDUnknownBlockType>(): R;
    setAuthenticationChallenge<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    downloadProgress<R = CDUnknownBlockType>(): R;
    setDownloadProgress<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    uploadProgress<R = CDUnknownBlockType>(): R;
    setUploadProgress<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    backgroundTaskCleanup<R = CDUnknownBlockType>(): R;
    setBackgroundTaskCleanup<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    totalBytesRead<R = number>(): R;
    setTotalBytesRead<R = void, P0 = number>(_v: P0): R;
    responseStringEncoding<R = number>(): R;
    setResponseStringEncoding<R = void, P0 = number>(_v: P0): R;
    responseString<R = NSString>(): R;
    setResponseString<R = void, P0 = NSString>(_v: P0): R;
    connection<R = NSURLConnection>(): R;
    setConnection<R = void, P0 = NSURLConnection>(_v: P0): R;
    lock<R = NSRecursiveLock>(): R;
    setLock<R = void, P0 = NSRecursiveLock>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    completionGroup<R = OS_dispatch_group>(): R;
    setCompletionGroup<R = void, P0 = OS_dispatch_group>(_v: P0): R;
    completionQueue<R = OS_dispatch_queue>(): R;
    setCompletionQueue<R = void, P0 = OS_dispatch_queue>(_v: P0): R;
    securityPolicy<R = AFSecurityPolicy>(): R;
    setSecurityPolicy<R = void, P0 = AFSecurityPolicy>(_v: P0): R;
    credential<R = NSURLCredential>(): R;
    setCredential<R = void, P0 = NSURLCredential>(_v: P0): R;
    shouldUseCredentialStorage<R = boolean>(): R;
    setShouldUseCredentialStorage<R = void, P0 = boolean>(_v: P0): R;
    responseData<R = NSData>(): R;
    setResponseData<R = void, P0 = NSData>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    response<R = NSURLResponse>(): R;
    setResponse<R = void, P0 = NSURLResponse>(_v: P0): R;
    request<R = NSURLRequest>(): R;
    setRequest<R = void, P0 = NSURLRequest>(_v: P0): R;
    runLoopModes<R = NSSet>(): R;
    setRunLoopModes<R = void, P0 = NSSet>(_v: P0): R;
    description<R = NSString>(): R;
    outputStream<R = NSOutputStream>(): R;
    setOutputStream<R = void, P0 = NSOutputStream>(_v: P0): R;
    inputStream<R = NSInputStream>(): R;
    setInputStream<R = void, P0 = NSInputStream>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace AFURLConnectionOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation, NSURLConnectionDelegateProtocol, NSURLConnectionDataDelegateProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = AFURLConnectionOperation>(): R;
      new: <R = AFURLConnectionOperation>() => R;
      batchOfRequestOperations_progressBlock_completionBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_batchOfRequestOperations: P0, _progressBlock: P1, _completionBlock: P2): R;
      networkRequestThread<R = unknown>(): R;
      networkRequestThreadEntryPoint<R = void, P0 = unknown>(_networkRequestThreadEntryPoint: P0): R;
    }
  }
}

declare const AFURLConnectionOperation: cocoa.AFURLConnectionOperation.CLASS;
