/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderProtocol<T = any> extends cocoa.NSObjectProtocol {
    _provideItemAtURL_completionHandler<R = void, P0 = cocoa.NSURL, P1 = cocoa.CDUnknownBlockType>(__provideItemAtURL: P0, _completionHandler: P1): R;
    _providedItemAtURL_withPresenterWithID_didMoveToURL<R = void, P0 = cocoa.NSURL, P1 = unknown, P2 = cocoa.NSURL>(__providedItemAtURL: P0, _withPresenterWithID: P1, _didMoveToURL: P2): R;
    _providedItemAtURL_didLosePresenterWithID<R = void, P0 = cocoa.NSURL, P1 = unknown>(__providedItemAtURL: P0, _didLosePresenterWithID: P1): R;
    _providedItemAtURL_didGainPresenterWithID<R = void, P0 = cocoa.NSURL, P1 = unknown>(__providedItemAtURL: P0, _didGainPresenterWithID: P1): R;
    _writerWithID_didFinishWritingForURL<R = void, P0 = unknown, P1 = cocoa.NSURL>(__writerWithID: P0, _didFinishWritingForURL: P1): R;
    _getPhysicalURLForURL_completionHandler<R = void, P0 = cocoa.NSURL, P1 = cocoa.CDUnknownBlockType>(__getPhysicalURLForURL: P0, _completionHandler: P1): R;
    _physicalURLForURL<R = cocoa.NSURL, P0 = cocoa.NSURL>(__physicalURLForURL: P0): R;
    _cancelProvidingItemAtURL_toReaderWithID<R = void, P0 = cocoa.NSURL, P1 = unknown>(__cancelProvidingItemAtURL: P0, _toReaderWithID: P1): R;
    _provideItemAtURL_toReaderWithID_completionHandler<R = void, P0 = cocoa.NSURL, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(__provideItemAtURL: P0, _toReaderWithID: P1, _completionHandler: P2): R;
    _providedItemsOperationQueue<R = cocoa.NSOperationQueue>(): R;
    _providedItemsURL<R = cocoa.NSURL>(): R;
    _fileReactorID<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSFileProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSFileProviderProtocol: cocoa.classes.NSFileProviderProtocol;
