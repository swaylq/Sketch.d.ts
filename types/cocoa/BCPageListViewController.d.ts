/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPageListViewController<T0 = void, T1 = void, T2 = void> extends BCOutlineViewController {}
  namespace BCPageListViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCOutlineViewController {
      alloc<R = BCPageListViewController>(): R;
      new: <R = BCPageListViewController>() => R;
    }
  }
}

declare const BCPageListViewController: cocoa.BCPageListViewController.CLASS;
