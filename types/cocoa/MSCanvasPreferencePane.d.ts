/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCanvasPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
    refreshOpenDocuments<R = void>(): R;
    adjustFlowColorAction<R = void, P0 = unknown>(_adjustFlowColorAction: P0): R;
    adjustSnapColorAction<R = void, P0 = unknown>(_adjustSnapColorAction: P0): R;
    flowColorLabel<R = NSTextField>(): R;
    setFlowColorLabel<R = void, P0 = NSTextField>(_v: P0): R;
    flowColorWell<R = NSColorWell>(): R;
    setFlowColorWell<R = void, P0 = NSColorWell>(_v: P0): R;
  }
  namespace MSCanvasPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
      alloc<R = MSCanvasPreferencePane>(): R;
      new: <R = MSCanvasPreferencePane>() => R;
    }
  }
}

declare const MSCanvasPreferencePane: cocoa.MSCanvasPreferencePane.CLASS;
