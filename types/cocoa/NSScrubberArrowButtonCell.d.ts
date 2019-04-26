/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberArrowButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    _coreUIBackgroundDrawOptionsInView<R = __CFDictionary, P0 = unknown>(__coreUIBackgroundDrawOptionsInView: P0): R;
  }
  namespace NSScrubberArrowButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSScrubberArrowButtonCell>(): R;
      new: <R = NSScrubberArrowButtonCell>() => R;
    }
  }
}

declare const NSScrubberArrowButtonCell: cocoa.NSScrubberArrowButtonCell.CLASS;
