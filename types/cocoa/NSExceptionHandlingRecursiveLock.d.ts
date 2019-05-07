/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExceptionHandlingRecursiveLock<T0 = void, T1 = void, T2 = void> extends NSRecursiveLock {}
  namespace NSExceptionHandlingRecursiveLock {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRecursiveLock {
      alloc<R = NSExceptionHandlingRecursiveLock>(): R;
      new: <R = NSExceptionHandlingRecursiveLock>() => R;
    }
  }
}

declare const NSExceptionHandlingRecursiveLock: cocoa.NSExceptionHandlingRecursiveLock.CLASS;
