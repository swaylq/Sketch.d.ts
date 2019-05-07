/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentationSearcher<T0 = void, T1 = void, T2 = void> extends NSObject, NSUserInterfaceItemSearchingProtocol {
    cxx_destruct<R = void>(): R;
    downloadRequest<R = unknown>(): R;
    addSearchOperationForItemsWithSearchString_completionBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_addSearchOperationForItemsWithSearchString: P0, _completionBlock: P1): R;
    addDownloadOperation<R = void>(): R;
    documentationMightHaveChanged<R = void>(): R;
    searchEntries<R = NSArray>(): R;
    setSearchEntries<R = void, P0 = NSArray>(_v: P0): R;
    queue<R = NSOperationQueue>(): R;
    setQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDocumentationSearcher {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSUserInterfaceItemSearchingProtocol {
      alloc<R = MSDocumentationSearcher>(): R;
      new: <R = MSDocumentationSearcher>() => R;
    }
  }
}

declare const MSDocumentationSearcher: cocoa.MSDocumentationSearcher.CLASS;
