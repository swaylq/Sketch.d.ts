/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionView<T0 = void, T1 = void, T2 = void> extends NSScrubberArrangedView {}
  namespace NSScrubberSelectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberArrangedView {
      alloc<R = NSScrubberSelectionView>(): R;
      new: <R = NSScrubberSelectionView>() => R;
    }
  }
}

declare const NSScrubberSelectionView: cocoa.NSScrubberSelectionView.CLASS;
