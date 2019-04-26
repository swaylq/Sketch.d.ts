/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertSymbolOrDetachInstancesRecursivelyAction<T0 = void, T1 = void, T2 = void> extends MSBaseConvertSymbolOrDetachInstancesAction {
    detachSymbolInstancesRecursively<R = void, P0 = unknown>(_detachSymbolInstancesRecursively: P0): R;
    label<R = unknown>(): R;
  }
  namespace MSConvertSymbolOrDetachInstancesRecursivelyAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseConvertSymbolOrDetachInstancesAction {
      alloc<R = MSConvertSymbolOrDetachInstancesRecursivelyAction>(): R;
      new: <R = MSConvertSymbolOrDetachInstancesRecursivelyAction>() => R;
    }
  }
}

declare const MSConvertSymbolOrDetachInstancesRecursivelyAction: cocoa.MSConvertSymbolOrDetachInstancesRecursivelyAction.CLASS;
