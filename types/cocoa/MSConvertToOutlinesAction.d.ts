/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertToOutlinesAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validate<R = boolean>(): R;
    isFirstLayerText<R = boolean>(): R;
    historyMomentTitle<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    convertToOutlines<R = void, P0 = unknown>(_convertToOutlines: P0): R;
  }
  namespace MSConvertToOutlinesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSConvertToOutlinesAction>(): R;
      new: <R = MSConvertToOutlinesAction>() => R;
    }
  }
}

declare const MSConvertToOutlinesAction: cocoa.MSConvertToOutlinesAction.CLASS;
