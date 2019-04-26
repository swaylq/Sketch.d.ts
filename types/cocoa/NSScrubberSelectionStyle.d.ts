/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionStyle<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    makeSelectionView<R = unknown>(): R;
  }
  namespace NSScrubberSelectionStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSScrubberSelectionStyle>(): R;
      new: <R = NSScrubberSelectionStyle>() => R;
      selectionStyleWithViewClass<R = unknown, P0 = unknown>(_selectionStyleWithViewClass: P0): R;
      nonHighlightingOutlineOverlayStyle<R = unknown>(): R;
      outlineOverlayStyle<R = unknown>(): R;
      roundedBackgroundStyleWithTintColor<R = unknown, P0 = unknown>(_roundedBackgroundStyleWithTintColor: P0): R;
      roundedBackgroundStyle<R = unknown>(): R;
    }
  }
}

declare const NSScrubberSelectionStyle: cocoa.NSScrubberSelectionStyle.CLASS;
