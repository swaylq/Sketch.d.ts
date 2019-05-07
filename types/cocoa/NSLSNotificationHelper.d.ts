/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLSNotificationHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    isNonEmpty<R = boolean>(): R;
    removeEntryAndReturnIfEmpty<R = boolean, P0 = unknown>(_removeEntryAndReturnIfEmpty: P0): R;
    addEntryAndReturnIfWasEmpty<R = boolean, P0 = unknown>(_addEntryAndReturnIfWasEmpty: P0): R;
  }
  namespace NSLSNotificationHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSLSNotificationHelper>(): R;
      new: <R = NSLSNotificationHelper>() => R;
    }
  }
}

declare const NSLSNotificationHelper: cocoa.NSLSNotificationHelper.CLASS;
