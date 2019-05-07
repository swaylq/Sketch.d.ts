/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGlobalPreferenceTransition<T0 = void, T1 = void, T2 = void> extends NSObject {
    waitForTransitionWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_waitForTransitionWithCompletionHandler: P0): R;
    postChangeNotification_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_postChangeNotification: P0, _completionHandler: P1): R;
    _invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initTransition<R = unknown>(): R;
  }
  namespace NSGlobalPreferenceTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSGlobalPreferenceTransition>(): R;
      new: <R = NSGlobalPreferenceTransition>() => R;
      transition<R = unknown>(): R;
    }
  }
}

declare const NSGlobalPreferenceTransition: cocoa.NSGlobalPreferenceTransition.CLASS;
