/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowBorderOptionsAction<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
    showBorderOptions<R = void, P0 = unknown>(_showBorderOptions: P0): R;
  }
  namespace MSShowBorderOptionsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseStyleAction {
      alloc<R = MSShowBorderOptionsAction>(): R;
      new: <R = MSShowBorderOptionsAction>() => R;
    }
  }
}

declare const MSShowBorderOptionsAction: cocoa.MSShowBorderOptionsAction.CLASS;
