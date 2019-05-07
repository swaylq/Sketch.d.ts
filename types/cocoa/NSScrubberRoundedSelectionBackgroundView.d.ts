/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberRoundedSelectionBackgroundView<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionView {
    wantsUpdateLayer<R = boolean>(): R;
    _roundedBackgroundCommonInit<R = void>(): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSScrubberRoundedSelectionBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberSelectionView {
      alloc<R = NSScrubberRoundedSelectionBackgroundView>(): R;
      new: <R = NSScrubberRoundedSelectionBackgroundView>() => R;
    }
  }
}

declare const NSScrubberRoundedSelectionBackgroundView: cocoa.NSScrubberRoundedSelectionBackgroundView.CLASS;
