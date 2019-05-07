/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    hasDynamicTitle<R = boolean>(): R;
    selectedOverrideRepresentation<R = MSOverrideRepresentation>(): R;
    selectedOverrides<R = NSArray>(): R;
    instance<R = MSSymbolInstance>(): R;
  }
  namespace MSOverrideAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSOverrideAction>(): R;
      new: <R = MSOverrideAction>() => R;
    }
  }
}

declare const MSOverrideAction: cocoa.MSOverrideAction.CLASS;
