/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessArbiterProxy<T0 = void, T1 = void, T2 = void> extends NSObject, NSFileAccessClientLocalArbiterInterfaceProtocol, NSXPCListenerDelegateProtocol, NSXPCConnectionDelegateProtocol {
    handleCanceledServer<R = void>(): R;
    performBarrierAsync<R = void, P0 = CDUnknownBlockType>(_performBarrierAsync: P0): R;
    performBarrier<R = void>(): R;
    itemHasPresentersAtURL<R = boolean, P0 = unknown>(_itemHasPresentersAtURL: P0): R;
    getDebugInfoWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_getDebugInfoWithCompletionHandler: P0): R;
    idForFileReactor<R = unknown, P0 = unknown>(_idForFileReactor: P0): R;
    fileProviders<R = unknown>(): R;
    _onqueue_fileProviders<R = unknown>(): R;
    removeFileProvider<R = void, P0 = unknown>(_removeFileProvider: P0): R;
    addFileProvider_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_addFileProvider: P0, _completionHandler: P1): R;
    filePresenters<R = unknown>(): R;
    _onqueue_filePresenters<R = unknown>(): R;
    removeFilePresenter<R = void, P0 = unknown>(_removeFilePresenter: P0): R;
    addFilePresenter<R = void, P0 = unknown>(_addFilePresenter: P0): R;
    dealloc<R = void>(): R;
    initWithServer_queue<R = unknown, P0 = unknown, P1 = unknown>(_initWithServer: P0, _queue: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFileAccessArbiterProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFileAccessClientLocalArbiterInterfaceProtocol, NSXPCListenerDelegateProtocol, NSXPCConnectionDelegateProtocol {
      alloc<R = NSFileAccessArbiterProxy>(): R;
      new: <R = NSFileAccessArbiterProxy>() => R;
      _fileReactorDebuggingInformation<R = unknown>(): R;
      _willBeginOperationForReactor_withDescription<R = unknown, P0 = unknown, P1 = unknown>(__willBeginOperationForReactor: P0, _withDescription: P1): R;
      _accessPresenterOperationRecordsUsingBlock<R = void, P0 = CDUnknownBlockType>(__accessPresenterOperationRecordsUsingBlock: P0): R;
      _fetchProviderMessengerForListener<R = unknown, P0 = unknown>(__fetchProviderMessengerForListener: P0): R;
      _setProviderMessenger_forListener<R = void, P0 = unknown, P1 = unknown>(__setProviderMessenger: P0, _forListener: P1): R;
      _idForReactor<R = unknown, P0 = unknown>(__idForReactor: P0): R;
    }
  }
}

declare const NSFileAccessArbiterProxy: cocoa.NSFileAccessArbiterProxy.CLASS;
