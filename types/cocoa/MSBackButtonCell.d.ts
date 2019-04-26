/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    highlightsBy<R = number>(): R;
    showsStateBy<R = number>(): R;
  }
  namespace MSBackButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSBackButtonCell>(): R;
      new: <R = MSBackButtonCell>() => R;
    }
  }
}

declare const MSBackButtonCell: cocoa.MSBackButtonCell.CLASS;
