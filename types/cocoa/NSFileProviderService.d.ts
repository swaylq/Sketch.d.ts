/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderService<T0 = void, T1 = void, T2 = void> extends NSObject {
    getFileProviderConnectionWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_getFileProviderConnectionWithCompletionHandler: P0): R;
    initWithName_endpointCreatingProxy_requestFinishedGroup<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithName: P0, _endpointCreatingProxy: P1, _requestFinishedGroup: P2): R;
    dealloc<R = void>(): R;
    name<R = NSString>(): R;
  }
  namespace NSFileProviderService {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileProviderService>(): R;
      new: <R = NSFileProviderService>() => R;
    }
  }
}

declare const NSFileProviderService: cocoa.NSFileProviderService.CLASS;
