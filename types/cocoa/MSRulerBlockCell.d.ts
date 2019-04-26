/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerBlockCell<T0 = void, T1 = void, T2 = void> extends MSTintedHoverButtonCell {
    hoverTint<R = unknown>(): R;
    normalTint<R = unknown>(): R;
    state<R = number>(): R;
  }
  namespace MSRulerBlockCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTintedHoverButtonCell {
      alloc<R = MSRulerBlockCell>(): R;
      new: <R = MSRulerBlockCell>() => R;
    }
  }
}

declare const MSRulerBlockCell: cocoa.MSRulerBlockCell.CLASS;
