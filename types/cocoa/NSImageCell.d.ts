/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageCell<T0 = void, T1 = void, T2 = void> extends NSCell, NSCopyingProtocol, NSCodingProtocol {
    _animationTimerCallback<R = void, P0 = unknown>(__animationTimerCallback: P0): R;
    _stopAnimation<R = void>(): R;
    _startAnimation<R = void>(): R;
    _setAnimates<R = void, P0 = boolean>(__setAnimates: P0): R;
    _animates<R = boolean>(): R;
    _setContentTintColor<R = void, P0 = unknown>(__setContentTintColor: P0): R;
    _contentTintColor<R = unknown>(): R;
    controlView<R = unknown>(): R;
    setControlView<R = void, P0 = unknown>(_setControlView: P0): R;
    setFormatter<R = void, P0 = unknown>(_setFormatter: P0): R;
    isOpaque<R = boolean>(): R;
    interiorBackgroundStyle<R = number>(): R;
    _drawBorderStyleWithRect_inView<R = void, P0 = CGRect, P1 = unknown>(__drawBorderStyleWithRect: P0, _inView: P1): R;
    _newCUIGrayBezelDrawOptionsInView<R = __CFDictionary, P0 = unknown>(__newCUIGrayBezelDrawOptionsInView: P0): R;
    _wantsFocusRingForControlView<R = boolean, P0 = unknown>(__wantsFocusRingForControlView: P0): R;
    _drawImageWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawImageWithFrame: P0, _inView: P1): R;
    _shouldDrawWithContentTintColorInView<R = boolean, P0 = unknown>(__shouldDrawWithContentTintColorInView: P0): R;
    _currentImageStateForView<R = number, P0 = unknown>(__currentImageStateForView: P0): R;
    _shouldClip<R = boolean>(): R;
    _imageRectForDrawing_inFrame_inView<R = CGRect, P0 = unknown, P1 = CGRect, P2 = unknown>(__imageRectForDrawing: P0, _inFrame: P1, _inView: P2): R;
    _cellSizeAccountingForImage_inControl<R = CGSize, P0 = unknown, P1 = unknown>(__cellSizeAccountingForImage: P0, _inControl: P1): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    image<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    setEditable<R = void, P0 = boolean>(_setEditable: P0): R;
    _hasAccessibilityTitle<R = boolean>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    imageFrameStyle<R = number>(): R;
    setImageFrameStyle<R = void, P0 = number>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    imageAlignment<R = number>(): R;
    setImageAlignment<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCell, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSImageCell>(): R;
      new: <R = NSImageCell>() => R;
      _imageRectForDrawingImageOfAlignmentRectSize_inFrame_scaling_alignment_flipped<R = CGRect, P0 = CGSize, P1 = CGRect, P2 = number, P3 = number, P4 = boolean>(__imageRectForDrawingImageOfAlignmentRectSize: P0, _inFrame: P1, _scaling: P2, _alignment: P3, _flipped: P4): R;
      _cellSizeAccountingForImageOfSize_frameStyle_flipped<R = CGSize, P0 = CGSize, P1 = number, P2 = boolean>(__cellSizeAccountingForImageOfSize: P0, _frameStyle: P1, _flipped: P2): R;
      _drawingRectForBounds_frameStyle_flipped<R = CGRect, P0 = CGRect, P1 = number, P2 = boolean>(__drawingRectForBounds: P0, _frameStyle: P1, _flipped: P2): R;
    }
  }
}

declare const NSImageCell: cocoa.NSImageCell.CLASS;
