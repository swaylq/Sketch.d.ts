/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLSessionManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSURLSessionDelegateProtocol, NSURLSessionTaskDelegateProtocol, NSURLSessionDataDelegateProtocol, NSURLSessionDownloadDelegateProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    setDownloadTaskDidResumeBlock<R = void, P0 = CDUnknownBlockType>(_setDownloadTaskDidResumeBlock: P0): R;
    setDownloadTaskDidWriteDataBlock<R = void, P0 = CDUnknownBlockType>(_setDownloadTaskDidWriteDataBlock: P0): R;
    setDownloadTaskDidFinishDownloadingBlock<R = void, P0 = CDUnknownBlockType>(_setDownloadTaskDidFinishDownloadingBlock: P0): R;
    setDataTaskWillCacheResponseBlock<R = void, P0 = CDUnknownBlockType>(_setDataTaskWillCacheResponseBlock: P0): R;
    setDataTaskDidReceiveDataBlock<R = void, P0 = CDUnknownBlockType>(_setDataTaskDidReceiveDataBlock: P0): R;
    setDataTaskDidBecomeDownloadTaskBlock<R = void, P0 = CDUnknownBlockType>(_setDataTaskDidBecomeDownloadTaskBlock: P0): R;
    setDataTaskDidReceiveResponseBlock<R = void, P0 = CDUnknownBlockType>(_setDataTaskDidReceiveResponseBlock: P0): R;
    setTaskDidCompleteBlock<R = void, P0 = CDUnknownBlockType>(_setTaskDidCompleteBlock: P0): R;
    setTaskDidSendBodyDataBlock<R = void, P0 = CDUnknownBlockType>(_setTaskDidSendBodyDataBlock: P0): R;
    setTaskDidReceiveAuthenticationChallengeBlock<R = void, P0 = CDUnknownBlockType>(_setTaskDidReceiveAuthenticationChallengeBlock: P0): R;
    setTaskWillPerformHTTPRedirectionBlock<R = void, P0 = CDUnknownBlockType>(_setTaskWillPerformHTTPRedirectionBlock: P0): R;
    setTaskNeedNewBodyStreamBlock<R = void, P0 = CDUnknownBlockType>(_setTaskNeedNewBodyStreamBlock: P0): R;
    setDidFinishEventsForBackgroundURLSessionBlock<R = void, P0 = CDUnknownBlockType>(_setDidFinishEventsForBackgroundURLSessionBlock: P0): R;
    setSessionDidReceiveAuthenticationChallengeBlock<R = void, P0 = CDUnknownBlockType>(_setSessionDidReceiveAuthenticationChallengeBlock: P0): R;
    setSessionDidBecomeInvalidBlock<R = void, P0 = CDUnknownBlockType>(_setSessionDidBecomeInvalidBlock: P0): R;
    downloadProgressForTask<R = unknown, P0 = unknown>(_downloadProgressForTask: P0): R;
    uploadProgressForTask<R = unknown, P0 = unknown>(_uploadProgressForTask: P0): R;
    downloadTaskWithResumeData_progress_destination_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_downloadTaskWithResumeData: P0, _progress: P1, _destination: P2, _completionHandler: P3): R;
    downloadTaskWithRequest_progress_destination_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_downloadTaskWithRequest: P0, _progress: P1, _destination: P2, _completionHandler: P3): R;
    uploadTaskWithStreamedRequest_progress_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_uploadTaskWithStreamedRequest: P0, _progress: P1, _completionHandler: P2): R;
    uploadTaskWithRequest_fromData_progress_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_uploadTaskWithRequest: P0, _fromData: P1, _progress: P2, _completionHandler: P3): R;
    uploadTaskWithRequest_fromFile_progress_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_uploadTaskWithRequest: P0, _fromFile: P1, _progress: P2, _completionHandler: P3): R;
    dataTaskWithRequest_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_dataTaskWithRequest: P0, _completionHandler: P1): R;
    invalidateSessionCancelingTasks<R = void, P0 = boolean>(_invalidateSessionCancelingTasks: P0): R;
    tasksForKeyPath<R = unknown, P0 = unknown>(_tasksForKeyPath: P0): R;
    removeAllDelegates<R = void>(): R;
    removeDelegateForTask<R = void, P0 = unknown>(_removeDelegateForTask: P0): R;
    addDelegateForDownloadTask_progress_destination_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_addDelegateForDownloadTask: P0, _progress: P1, _destination: P2, _completionHandler: P3): R;
    addDelegateForUploadTask_progress_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_addDelegateForUploadTask: P0, _progress: P1, _completionHandler: P2): R;
    addDelegateForDataTask_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_addDelegateForDataTask: P0, _completionHandler: P1): R;
    setDelegate_forTask<R = void, P0 = unknown, P1 = unknown>(_setDelegate: P0, _forTask: P1): R;
    delegateForTask<R = unknown, P0 = unknown>(_delegateForTask: P0): R;
    taskDidSuspend<R = void, P0 = unknown>(_taskDidSuspend: P0): R;
    taskDidResume<R = void, P0 = unknown>(_taskDidResume: P0): R;
    dealloc<R = void>(): R;
    initWithSessionConfiguration<R = unknown, P0 = unknown>(_initWithSessionConfiguration: P0): R;
    downloadTaskDidResume<R = CDUnknownBlockType>(): R;
    setDownloadTaskDidResume<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    downloadTaskDidWriteData<R = CDUnknownBlockType>(): R;
    setDownloadTaskDidWriteData<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    downloadTaskDidFinishDownloading<R = CDUnknownBlockType>(): R;
    setDownloadTaskDidFinishDownloading<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    dataTaskWillCacheResponse<R = CDUnknownBlockType>(): R;
    setDataTaskWillCacheResponse<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    dataTaskDidReceiveData<R = CDUnknownBlockType>(): R;
    setDataTaskDidReceiveData<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    dataTaskDidBecomeDownloadTask<R = CDUnknownBlockType>(): R;
    setDataTaskDidBecomeDownloadTask<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    dataTaskDidReceiveResponse<R = CDUnknownBlockType>(): R;
    setDataTaskDidReceiveResponse<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    taskDidComplete<R = CDUnknownBlockType>(): R;
    setTaskDidComplete<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    taskDidSendBodyData<R = CDUnknownBlockType>(): R;
    setTaskDidSendBodyData<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    taskNeedNewBodyStream<R = CDUnknownBlockType>(): R;
    setTaskNeedNewBodyStream<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    taskDidReceiveAuthenticationChallenge<R = CDUnknownBlockType>(): R;
    setTaskDidReceiveAuthenticationChallenge<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    taskWillPerformHTTPRedirection<R = CDUnknownBlockType>(): R;
    setTaskWillPerformHTTPRedirection<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    didFinishEventsForBackgroundURLSession<R = CDUnknownBlockType>(): R;
    setDidFinishEventsForBackgroundURLSession<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    sessionDidReceiveAuthenticationChallenge<R = CDUnknownBlockType>(): R;
    setSessionDidReceiveAuthenticationChallenge<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    sessionDidBecomeInvalid<R = CDUnknownBlockType>(): R;
    setSessionDidBecomeInvalid<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    lock<R = NSLock>(): R;
    setLock<R = void, P0 = NSLock>(_v: P0): R;
    mutableTaskDelegatesKeyedByTaskIdentifier<R = NSMutableDictionary>(): R;
    setMutableTaskDelegatesKeyedByTaskIdentifier<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    sessionConfiguration<R = NSURLSessionConfiguration>(): R;
    setSessionConfiguration<R = void, P0 = NSURLSessionConfiguration>(_v: P0): R;
    attemptsToRecreateUploadTasksForBackgroundSessions<R = boolean>(): R;
    setAttemptsToRecreateUploadTasksForBackgroundSessions<R = void, P0 = boolean>(_v: P0): R;
    completionGroup<R = OS_dispatch_group>(): R;
    setCompletionGroup<R = void, P0 = OS_dispatch_group>(_v: P0): R;
    completionQueue<R = OS_dispatch_queue>(): R;
    setCompletionQueue<R = void, P0 = OS_dispatch_queue>(_v: P0): R;
    reachabilityManager<R = AFNetworkReachabilityManager>(): R;
    setReachabilityManager<R = void, P0 = AFNetworkReachabilityManager>(_v: P0): R;
    securityPolicy<R = AFSecurityPolicy>(): R;
    setSecurityPolicy<R = void, P0 = AFSecurityPolicy>(_v: P0): R;
    responseSerializer<R = AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = AFURLResponseSerialization>(_v: P0): R;
    operationQueue<R = NSOperationQueue>(): R;
    setOperationQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
    session<R = NSURLSession>(): R;
    setSession<R = void, P0 = NSURLSession>(_v: P0): R;
    description<R = NSString>(): R;
    downloadTasks<R = NSArray>(): R;
    uploadTasks<R = NSArray>(): R;
    dataTasks<R = NSArray>(): R;
    tasks<R = NSArray>(): R;
    taskDescriptionForSessionTasks<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace AFURLSessionManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSURLSessionDelegateProtocol, NSURLSessionTaskDelegateProtocol, NSURLSessionDataDelegateProtocol, NSURLSessionDownloadDelegateProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = AFURLSessionManager>(): R;
      new: <R = AFURLSessionManager>() => R;
    }
  }
}

declare const AFURLSessionManager: cocoa.AFURLSessionManager.CLASS;
