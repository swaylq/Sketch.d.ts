/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputFeedbackManager<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSInputFeedbackManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSInputFeedbackManager>(): R;
      new: <R = NSInputFeedbackManager>() => R;
      defaultPerformer<R = unknown>(): R;
    }
  }
}

declare const NSInputFeedbackManager: cocoa.NSInputFeedbackManager.CLASS;
