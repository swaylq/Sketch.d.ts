/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCIndifferentButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace BCIndifferentButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = BCIndifferentButtonCell>(): R;
      new: <R = BCIndifferentButtonCell>() => R;
    }
  }
}

declare const BCIndifferentButtonCell: cocoa.BCIndifferentButtonCell.CLASS;
