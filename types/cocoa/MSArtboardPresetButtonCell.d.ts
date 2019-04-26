/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
    drawSecondaryTitleWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(_drawSecondaryTitleWithFrame: P0, _inView: P1): R;
    drawMainTitleWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(_drawMainTitleWithFrame: P0, _inView: P1): R;
    secondaryTitleRectWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(_secondaryTitleRectWithFrame: P0, _inView: P1): R;
    mainTitleRectWithFrame_inView<R = CGRect, P0 = CGRect, P1 = unknown>(_mainTitleRectWithFrame: P0, _inView: P1): R;
    arrowImage<R = unknown>(): R;
    arrowRectForBounds<R = CGRect, P0 = CGRect>(_arrowRectForBounds: P0): R;
    isHighlighted<R = boolean>(): R;
  }
  namespace MSArtboardPresetButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSArtboardPresetButtonCell>(): R;
      new: <R = MSArtboardPresetButtonCell>() => R;
    }
  }
}

declare const MSArtboardPresetButtonCell: cocoa.MSArtboardPresetButtonCell.CLASS;
