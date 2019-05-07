/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackObservedValue<T0 = void, T1 = void, T2 = void> extends NSObservedValue {
    setError<R = void, P0 = unknown>(_setError: P0): R;
    setValue<R = void, P0 = unknown>(_setValue: P0): R;
    setFinished<R = void, P0 = boolean>(_setFinished: P0): R;
  }
  namespace NSStackObservedValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservedValue {
      alloc<R = NSStackObservedValue>(): R;
      new: <R = NSStackObservedValue>() => R;
    }
  }
}

declare const NSStackObservedValue: cocoa.NSStackObservedValue.CLASS;
