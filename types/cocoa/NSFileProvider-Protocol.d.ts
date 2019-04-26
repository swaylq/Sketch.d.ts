/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _provideItemAtURL_completionHandler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(__provideItemAtURL: P0, _completionHandler: P1): R;
    _providedItemAtURL_withPresenterWithID_didMoveToURL<R = void, P0 = NSURL, P1 = unknown, P2 = NSURL>(__providedItemAtURL: P0, _withPresenterWithID: P1, _didMoveToURL: P2): R;
    _providedItemAtURL_didLosePresenterWithID<R = void, P0 = NSURL, P1 = unknown>(__providedItemAtURL: P0, _didLosePresenterWithID: P1): R;
    _providedItemAtURL_didGainPresenterWithID<R = void, P0 = NSURL, P1 = unknown>(__providedItemAtURL: P0, _didGainPresenterWithID: P1): R;
    _writerWithID_didFinishWritingForURL<R = void, P0 = unknown, P1 = NSURL>(__writerWithID: P0, _didFinishWritingForURL: P1): R;
    _getPhysicalURLForURL_completionHandler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(__getPhysicalURLForURL: P0, _completionHandler: P1): R;
    _physicalURLForURL<R = NSURL, P0 = NSURL>(__physicalURLForURL: P0): R;
    _cancelProvidingItemAtURL_toReaderWithID<R = void, P0 = NSURL, P1 = unknown>(__cancelProvidingItemAtURL: P0, _toReaderWithID: P1): R;
    _provideItemAtURL_toReaderWithID_completionHandler<R = void, P0 = NSURL, P1 = unknown, P2 = CDUnknownBlockType>(__provideItemAtURL: P0, _toReaderWithID: P1, _completionHandler: P2): R;
    _providedItemsOperationQueue<R = NSOperationQueue>(): R;
    _providedItemsURL<R = NSURL>(): R;
    _fileReactorID<R = NSString>(): R;
  }
  namespace NSFileProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
