/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFeedbackAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    feedback<R = void, P0 = unknown>(_feedback: P0): R;
  }
  namespace MSFeedbackAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSFeedbackAction>(): R;
      new: <R = MSFeedbackAction>() => R;
    }
  }
}

declare const MSFeedbackAction: cocoa.MSFeedbackAction.CLASS;
