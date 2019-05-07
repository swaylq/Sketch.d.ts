/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackpadFeedbackPerformer<T0 = void, T1 = void, T2 = void> extends NSObject, NSInputFeedbackPerformerProtocol {
    _performFeedbackPattern<R = void, P0 = number>(__performFeedbackPattern: P0): R;
    _performFeedbackPattern_when<R = void, P0 = number, P1 = number>(__performFeedbackPattern: P0, _when: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTrackpadFeedbackPerformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSInputFeedbackPerformerProtocol {
      alloc<R = NSTrackpadFeedbackPerformer>(): R;
      new: <R = NSTrackpadFeedbackPerformer>() => R;
    }
  }
}

declare const NSTrackpadFeedbackPerformer: cocoa.NSTrackpadFeedbackPerformer.CLASS;
