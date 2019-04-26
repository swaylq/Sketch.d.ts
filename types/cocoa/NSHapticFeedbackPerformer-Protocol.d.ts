/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHapticFeedbackPerformerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    performFeedbackPattern_performanceTime<R = void, P0 = number, P1 = number>(_performFeedbackPattern: P0, _performanceTime: P1): R;
  }
  namespace NSHapticFeedbackPerformerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
