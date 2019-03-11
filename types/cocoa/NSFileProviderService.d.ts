/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderService<T = any> extends cocoa.NSObject {
    getFileProviderConnectionWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_getFileProviderConnectionWithCompletionHandler: P0): R;
    initWithName_endpointCreatingProxy_requestFinishedGroup<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithName: P0, _endpointCreatingProxy: P1, _requestFinishedGroup: P2): R;
    dealloc<R = void>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSFileProviderService<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileProviderService>(): R;
      new: <R = NSFileProviderService>() => R;
    }
  }
}

declare const NSFileProviderService: cocoa.classes.NSFileProviderService;
