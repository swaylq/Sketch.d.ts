/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcurrentEventMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    callback<R = CDUnknownBlockType>(): R;
    setCallback<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    eventMask<R = number>(): R;
    setEventMask<R = void, P0 = number>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    isProcessing<R = boolean>(): R;
    setIsProcessing<R = void, P0 = boolean>(_v: P0): R;
    isValid<R = boolean>(): R;
    setIsValid<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSConcurrentEventMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSConcurrentEventMonitor>(): R;
      new: <R = NSConcurrentEventMonitor>() => R;
    }
  }
}

declare const NSConcurrentEventMonitor: cocoa.NSConcurrentEventMonitor.CLASS;
