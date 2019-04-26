/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseConvertSymbolOrDetachInstancesAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    hasDynamicTitle<R = boolean>(): R;
    convertSymbolMastersToArtboards<R = void, P0 = unknown>(_convertSymbolMastersToArtboards: P0): R;
    detachOrConvertSymbolInstancesRecursively<R = void, P0 = boolean>(_detachOrConvertSymbolInstancesRecursively: P0): R;
    containsSymbolMasters<R = boolean, P0 = unknown>(_containsSymbolMasters: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSBaseConvertSymbolOrDetachInstancesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseConvertSymbolOrDetachInstancesAction>(): R;
      new: <R = MSBaseConvertSymbolOrDetachInstancesAction>() => R;
    }
  }
}

declare const MSBaseConvertSymbolOrDetachInstancesAction: cocoa.MSBaseConvertSymbolOrDetachInstancesAction.CLASS;
