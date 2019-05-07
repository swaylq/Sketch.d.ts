/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowFillOptionsAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    showFillOptions<R = void, P0 = unknown>(_showFillOptions: P0): R;
  }
  namespace MSShowFillOptionsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSShowFillOptionsAction>(): R;
      new: <R = MSShowFillOptionsAction>() => R;
    }
  }
}

declare const MSShowFillOptionsAction: cocoa.MSShowFillOptionsAction.CLASS;
