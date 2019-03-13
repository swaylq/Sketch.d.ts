/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowFillOptionsAction<T = any> extends MSBaseStyleAction {
    showFillOptions<R = void, P0 = unknown>(_showFillOptions: P0): R;
  }
  namespace classes {
    export interface MSShowFillOptionsAction<T = any> extends MSBaseStyleAction {
      alloc<R = MSShowFillOptionsAction>(): R;
      new: <R = MSShowFillOptionsAction>() => R;
    }
  }
}

declare const MSShowFillOptionsAction: cocoa.classes.MSShowFillOptionsAction;