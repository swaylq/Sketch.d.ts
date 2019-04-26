/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNotificationObservable<T0 = void, T1 = void, T2 = void> extends NSObservationSource {
    initWithName_object<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _object: P1): R;
  }
  namespace NSNotificationObservable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationSource {
      alloc<R = NSNotificationObservable>(): R;
      new: <R = NSNotificationObservable>() => R;
      observableWithName_object<R = unknown, P0 = unknown, P1 = unknown>(_observableWithName: P0, _object: P1): R;
    }
  }
}

declare const NSNotificationObservable: cocoa.NSNotificationObservable.CLASS;
