/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAlignmentFeedbackFilterPreparedContext<T0 = void, T1 = void, T2 = void> extends NSObject, NSAlignmentFeedbackTokenProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSAlignmentFeedbackFilterPreparedContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAlignmentFeedbackTokenProtocol {
      alloc<R = _NSAlignmentFeedbackFilterPreparedContext>(): R;
      new: <R = _NSAlignmentFeedbackFilterPreparedContext>() => R;
    }
  }
}
