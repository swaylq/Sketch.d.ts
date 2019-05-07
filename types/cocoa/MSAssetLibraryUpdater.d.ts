/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryUpdater<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dictionaryValueForDownloadTaskWithIdentifier_key<R = unknown, P0 = unknown, P1 = unknown>(_dictionaryValueForDownloadTaskWithIdentifier: P0, _key: P1): R;
    completionHandlerForIdentifier<R = CDUnknownBlockType, P0 = unknown>(_completionHandlerForIdentifier: P0): R;
    progressHandlerForIdentifier<R = CDUnknownBlockType, P0 = unknown>(_progressHandlerForIdentifier: P0): R;
    downloadManager_downloadTaskWithIdentifier_failedWithError<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_downloadManager: P0, _downloadTaskWithIdentifier: P1, _failedWithError: P2): R;
    downloadManager_downloadTaskFinishedForIdentifier_downloadedURL_httpStatusCode<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_downloadManager: P0, _downloadTaskFinishedForIdentifier: P1, _downloadedURL: P2, _httpStatusCode: P3): R;
    downloadManager_downloadTaskHasUpdatedForIdentifier_downloadedSoFar_withDownloadSize<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_downloadManager: P0, _downloadTaskHasUpdatedForIdentifier: P1, _downloadedSoFar: P2, _withDownloadSize: P3): R;
    cancelDownloadTaskWithIdentifier<R = void, P0 = unknown>(_cancelDownloadTaskWithIdentifier: P0): R;
    updateAssetLibrary_withLibraryDownloadedTo<R = boolean, P0 = unknown, P1 = unknown>(_updateAssetLibrary: P0, _withLibraryDownloadedTo: P1): R;
    startFileDownload_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_startFileDownload: P0, _completionHandler: P1): R;
    startDownloadingAssetLibrary_progressHandler_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_startDownloadingAssetLibrary: P0, _progressHandler: P1, _completionHandler: P2): R;
    updatingInfoForLatestVersionInAppcast<R = unknown, P0 = unknown>(_updatingInfoForLatestVersionInAppcast: P0): R;
    downloadAppcastAtURL_withCompletionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_downloadAppcastAtURL: P0, _withCompletionHandler: P1): R;
    downloadAssetLibraryAppcasts_downloadAppcastHandler_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_downloadAssetLibraryAppcasts: P0, _downloadAppcastHandler: P1, _completionHandler: P2): R;
    downloadTasks<R = NSMutableDictionary>(): R;
    setDownloadTasks<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    downloadManager<R = BCDownloadManager>(): R;
    setDownloadManager<R = void, P0 = BCDownloadManager>(_v: P0): R;
  }
  namespace MSAssetLibraryUpdater {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSAssetLibraryUpdater>(): R;
      new: <R = MSAssetLibraryUpdater>() => R;
      downloadManagerSessionConfiguration<R = unknown>(): R;
    }
  }
}

declare const MSAssetLibraryUpdater: cocoa.MSAssetLibraryUpdater.CLASS;
