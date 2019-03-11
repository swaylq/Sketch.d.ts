/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveUnusedStylesAction<T = any> extends cocoa.MSBaseStyleAction {
    removeUnusedStyles<R = void, P0 = unknown>(_removeUnusedStyles: P0): R;
  }
  namespace classes {
    export interface MSRemoveUnusedStylesAction<T = any> extends cocoa.classes.MSBaseStyleAction {
      alloc<R = MSRemoveUnusedStylesAction>(): R;
      new: <R = MSRemoveUnusedStylesAction>() => R;
    }
  }
}

declare const MSRemoveUnusedStylesAction: cocoa.classes.MSRemoveUnusedStylesAction;
