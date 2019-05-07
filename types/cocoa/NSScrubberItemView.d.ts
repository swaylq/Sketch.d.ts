/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberItemView<T0 = void, T1 = void, T2 = void> extends NSScrubberArrangedView {
    _layoutMaskLayers<R = void>(): R;
    _createMaskLayersIfNeeded<R = void>(): R;
    _clearMaskLayers<R = void>(): R;
    _updateCornersWithSelectionRadius_defaultEndcapRadius<R = void, P0 = number, P1 = number>(__updateCornersWithSelectionRadius: P0, _defaultEndcapRadius: P1): R;
    _setSelected_highlighted<R = void, P0 = boolean, P1 = boolean>(__setSelected: P0, _highlighted: P1): R;
    _isLeftmost_isRightmost<R = void, P0 = string, P1 = string>(__isLeftmost: P0, _isRightmost: P1): R;
    _setIsLeftmost_isRightmost<R = void, P0 = boolean, P1 = boolean>(__setIsLeftmost: P0, _isRightmost: P1): R;
    _hasCustomSelectionViews<R = boolean>(): R;
    accessibilityRawIndex<R = number>(): R;
    setAccessibilityRawIndex<R = void, P0 = number>(_setAccessibilityRawIndex: P0): R;
    _accessibilityScrubber<R = unknown>(): R;
    accessibilityIndexAttribute<R = unknown>(): R;
    accessibilitySelectedAttribute<R = unknown>(): R;
    rightMaskLayer<R = CALayer>(): R;
    setRightMaskLayer<R = void, P0 = CALayer>(_v: P0): R;
    leftMaskLayer<R = CALayer>(): R;
    setLeftMaskLayer<R = void, P0 = CALayer>(_v: P0): R;
    selectionOverlayView<R = NSScrubberSelectionView>(): R;
    setSelectionOverlayView<R = void, P0 = NSScrubberSelectionView>(_v: P0): R;
    selectionBackgroundView<R = NSScrubberSelectionView>(): R;
    setSelectionBackgroundView<R = void, P0 = NSScrubberSelectionView>(_v: P0): R;
  }
  namespace NSScrubberItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberArrangedView {
      alloc<R = NSScrubberItemView>(): R;
      new: <R = NSScrubberItemView>() => R;
      createTouchBarColorListPickerSelectionOverlayView<R = unknown>(): R;
    }
  }
}

declare const NSScrubberItemView: cocoa.NSScrubberItemView.CLASS;
