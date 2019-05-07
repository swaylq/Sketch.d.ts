/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSegue<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    perform<R = void>(): R;
    _prepare<R = void>(): R;
    initWithIdentifier_source_destination<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithIdentifier: P0, _source: P1, _destination: P2): R;
    dealloc<R = void>(): R;
    prepareHandler<R = CDUnknownBlockType>(): R;
    setPrepareHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    performHandler<R = CDUnknownBlockType>(): R;
    setPerformHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    destinationController<R = unknown>(): R;
    sourceController<R = unknown>(): R;
    identifier<R = NSString>(): R;
  }
  namespace NSStoryboardSegue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStoryboardSegue>(): R;
      new: <R = NSStoryboardSegue>() => R;
      segueWithIdentifier_source_destination_performHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_segueWithIdentifier: P0, _source: P1, _destination: P2, _performHandler: P3): R;
    }
  }
}

declare const NSStoryboardSegue: cocoa.NSStoryboardSegue.CLASS;
