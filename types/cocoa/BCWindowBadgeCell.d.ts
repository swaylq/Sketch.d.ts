/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCWindowBadgeCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    fittingTitleSize<R = CGSize>(): R;
    backgroundColorForBadge<R = unknown, P0 = unknown>(_backgroundColorForBadge: P0): R;
  }
  namespace BCWindowBadgeCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = BCWindowBadgeCell>(): R;
      new: <R = BCWindowBadgeCell>() => R;
    }
  }
}

declare const BCWindowBadgeCell: cocoa.BCWindowBadgeCell.CLASS;
