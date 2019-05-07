/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataTableView<T0 = void, T1 = void, T2 = void> extends BCKeyEventActionTableView {}
  namespace MSDataTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCKeyEventActionTableView {
      alloc<R = MSDataTableView>(): R;
      new: <R = MSDataTableView>() => R;
    }
  }
}

declare const MSDataTableView: cocoa.MSDataTableView.CLASS;
