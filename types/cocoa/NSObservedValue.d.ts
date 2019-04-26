/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservedValue<T0 = void, T1 = void, T2 = void> extends NSObject {
    copyToHeap<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    _isToManyChangeInformation<R = boolean>(): R;
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    finished<R = boolean>(): R;
    setFinished<R = void, P0 = boolean>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSObservedValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSObservedValue>(): R;
      new: <R = NSObservedValue>() => R;
    }
  }
}

declare const NSObservedValue: cocoa.NSObservedValue.CLASS;
