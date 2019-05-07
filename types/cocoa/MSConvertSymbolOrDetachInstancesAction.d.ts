/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertSymbolOrDetachInstancesAction<T0 = void, T1 = void, T2 = void> extends MSBaseConvertSymbolOrDetachInstancesAction {
    detachSymbolInstances<R = void, P0 = unknown>(_detachSymbolInstances: P0): R;
    label<R = unknown>(): R;
  }
  namespace MSConvertSymbolOrDetachInstancesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseConvertSymbolOrDetachInstancesAction {
      alloc<R = MSConvertSymbolOrDetachInstancesAction>(): R;
      new: <R = MSConvertSymbolOrDetachInstancesAction>() => R;
    }
  }
}

declare const MSConvertSymbolOrDetachInstancesAction: cocoa.MSConvertSymbolOrDetachInstancesAction.CLASS;
