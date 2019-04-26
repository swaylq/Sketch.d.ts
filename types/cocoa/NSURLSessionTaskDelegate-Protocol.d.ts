/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionTaskDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSURLSessionDelegateProtocol {
    URLSession_task_didCompleteWithError<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = NSError>(_URLSession: P0, _task: P1, _didCompleteWithError: P2): R;
    URLSession_task_didFinishCollectingMetrics<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = NSURLSessionTaskMetrics>(_URLSession: P0, _task: P1, _didFinishCollectingMetrics: P2): R;
    URLSession_task_didSendBodyData_totalBytesSent_totalBytesExpectedToSend<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = number, P3 = number, P4 = number>(_URLSession: P0, _task: P1, _didSendBodyData: P2, _totalBytesSent: P3, _totalBytesExpectedToSend: P4): R;
    URLSession_task_needNewBodyStream<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = CDUnknownBlockType>(_URLSession: P0, _task: P1, _needNewBodyStream: P2): R;
    URLSession_task_didReceiveChallenge_completionHandler<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = NSURLAuthenticationChallenge, P3 = CDUnknownBlockType>(_URLSession: P0, _task: P1, _didReceiveChallenge: P2, _completionHandler: P3): R;
    URLSession_task_willPerformHTTPRedirection_newRequest_completionHandler<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = NSHTTPURLResponse, P3 = NSURLRequest, P4 = CDUnknownBlockType>(_URLSession: P0, _task: P1, _willPerformHTTPRedirection: P2, _newRequest: P3, _completionHandler: P4): R;
    URLSession_taskIsWaitingForConnectivity<R = void, P0 = NSURLSession, P1 = NSURLSessionTask>(_URLSession: P0, _taskIsWaitingForConnectivity: P1): R;
    URLSession_task_willBeginDelayedRequest_completionHandler<R = void, P0 = NSURLSession, P1 = NSURLSessionTask, P2 = NSURLRequest, P3 = CDUnknownBlockType>(_URLSession: P0, _task: P1, _willBeginDelayedRequest: P2, _completionHandler: P3): R;
  }
  namespace NSURLSessionTaskDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLSessionDelegateProtocol {}
  }
}
