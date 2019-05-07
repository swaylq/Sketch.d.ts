/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddBorderAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    addBorder<R = void, P0 = unknown>(_addBorder: P0): R;
  }
  namespace MSAddBorderAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSAddBorderAction>(): R;
      new: <R = MSAddBorderAction>() => R;
    }
  }
}

declare const MSAddBorderAction: cocoa.MSAddBorderAction.CLASS;
