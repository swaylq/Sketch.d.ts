/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDownloadDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSURLSessionTaskDelegateProtocol {
    URLSession_downloadTask_didFinishDownloadingToURL<R = void, P0 = NSURLSession, P1 = NSURLSessionDownloadTask, P2 = NSURL>(_URLSession: P0, _downloadTask: P1, _didFinishDownloadingToURL: P2): R;
    URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes<R = void, P0 = NSURLSession, P1 = NSURLSessionDownloadTask, P2 = number, P3 = number>(_URLSession: P0, _downloadTask: P1, _didResumeAtOffset: P2, _expectedTotalBytes: P3): R;
    URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite<R = void, P0 = NSURLSession, P1 = NSURLSessionDownloadTask, P2 = number, P3 = number, P4 = number>(_URLSession: P0, _downloadTask: P1, _didWriteData: P2, _totalBytesWritten: P3, _totalBytesExpectedToWrite: P4): R;
  }
  namespace NSURLSessionDownloadDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLSessionTaskDelegateProtocol {}
  }
}
