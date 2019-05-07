/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputFeedbackPerformerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    performFeedbackPattern_forTimestamp<R = void, P0 = number, P1 = number>(_performFeedbackPattern: P0, _forTimestamp: P1): R;
  }
  namespace NSInputFeedbackPerformerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
