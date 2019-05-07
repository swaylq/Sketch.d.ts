/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveUnusedStylesAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    removeUnusedStyles<R = void, P0 = unknown>(_removeUnusedStyles: P0): R;
  }
  namespace MSRemoveUnusedStylesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSRemoveUnusedStylesAction>(): R;
      new: <R = MSRemoveUnusedStylesAction>() => R;
    }
  }
}

declare const MSRemoveUnusedStylesAction: cocoa.MSRemoveUnusedStylesAction.CLASS;
