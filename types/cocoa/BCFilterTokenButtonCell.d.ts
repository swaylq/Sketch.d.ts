/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTokenButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    cellSize<R = CGSize>(): R;
    preferredTextSize<R = CGSize>(): R;
  }
  namespace BCFilterTokenButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = BCFilterTokenButtonCell>(): R;
      new: <R = BCFilterTokenButtonCell>() => R;
    }
  }
}

declare const BCFilterTokenButtonCell: cocoa.BCFilterTokenButtonCell.CLASS;
