/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFillAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    addFill<R = void, P0 = unknown>(_addFill: P0): R;
  }
  namespace MSAddFillAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSAddFillAction>(): R;
      new: <R = MSAddFillAction>() => R;
    }
  }
}

declare const MSAddFillAction: cocoa.MSAddFillAction.CLASS;
