/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackpadHapticFeedbackPerformer<T0 = void, T1 = void, T2 = void> extends NSObject, NSHapticFeedbackPerformerProtocol {
    _performFeedbackPattern<R = void, P0 = number>(__performFeedbackPattern: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTrackpadHapticFeedbackPerformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSHapticFeedbackPerformerProtocol {
      alloc<R = NSTrackpadHapticFeedbackPerformer>(): R;
      new: <R = NSTrackpadHapticFeedbackPerformer>() => R;
    }
  }
}

declare const NSTrackpadHapticFeedbackPerformer: cocoa.NSTrackpadHapticFeedbackPerformer.CLASS;
