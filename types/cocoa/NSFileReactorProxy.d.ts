/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileReactorProxy<T = any> extends cocoa.NSObject {
    collectDebuggingInformationWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_collectDebuggingInformationWithCompletionHandler: P0): R;
    _clientProxy<R = unknown>(): R;
    allowedForURL<R = boolean, P0 = unknown>(_allowedForURL: P0): R;
    description<R = unknown>(): R;
    descriptionWithIndenting<R = unknown, P0 = unknown>(_descriptionWithIndenting: P0): R;
    invalidate<R = void>(): R;
    forwardUsingProxy<R = void, P0 = unknown>(_forwardUsingProxy: P0): R;
    itemLocation<R = unknown>(): R;
    setItemLocation<R = void, P0 = unknown>(_setItemLocation: P0): R;
    reactorID<R = unknown>(): R;
    client<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithClient_reactorID<R = unknown, P0 = unknown, P1 = unknown>(_initWithClient: P0, _reactorID: P1): R;
    effectiveUserIdentifier<R = number>(): R;
    setEffectiveUserIdentifier<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSFileReactorProxy<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileReactorProxy>(): R;
      new: <R = NSFileReactorProxy>() => R;
      _enumerateParentDirectoriesStartingAtURL_usingBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__enumerateParentDirectoriesStartingAtURL: P0, _usingBlock: P1): R;
    }
  }
}

declare const NSFileReactorProxy: cocoa.classes.NSFileReactorProxy;
