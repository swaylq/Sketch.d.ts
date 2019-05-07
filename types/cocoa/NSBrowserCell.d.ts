/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowserCell<T0 = void, T1 = void, T2 = void> extends NSCell {
    interiorBackgroundStyle<R = number>(): R;
    _drawFillWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawFillWithFrame: P0, _inView: P1): R;
    _drawLiveResizeHighlightWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawLiveResizeHighlightWithFrame: P0, _inView: P1): R;
    highlightColorInView<R = unknown, P0 = unknown>(_highlightColorInView: P0): R;
    _checkLoaded_rect_highlight<R = boolean, P0 = unknown, P1 = CGRect, P2 = number>(__checkLoaded: P0, _rect: P1, _highlight: P2): R;
    set<R = void>(): R;
    reset<R = void>(): R;
    _isLoaded<R = boolean>(): R;
    _titleReservedRectForBounds<R = CGRect, P0 = CGRect>(__titleReservedRectForBounds: P0): R;
    _browserCell_imageRectForBounds<R = CGRect, P0 = CGRect>(__browserCell_imageRectForBounds: P0): R;
    _imageReservedRectForBounds<R = CGRect, P0 = CGRect>(__imageReservedRectForBounds: P0): R;
    _branchImageRectForBounds_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__branchImageRectForBounds: P0, _inView: P1): R;
    _branchImageReservedRectForBounds_inView<R = CGRect, P0 = CGRect, P1 = unknown>(__branchImageReservedRectForBounds: P0, _inView: P1): R;
    _branchImageReservedSize<R = CGSize>(): R;
    _imageReservedSize<R = CGSize>(): R;
    _currentImage<R = unknown>(): R;
    _currentImageWithView<R = unknown, P0 = unknown>(__currentImageWithView: P0): R;
    _currentBranchImageWithView<R = unknown, P0 = unknown>(__currentBranchImageWithView: P0): R;
    _fillSurfaceBackgroundStyleWithView<R = number, P0 = unknown>(__fillSurfaceBackgroundStyleWithView: P0): R;
    _browserFillStyle<R = number>(): R;
    _browserBackgroundColorWithView<R = unknown, P0 = unknown>(__browserBackgroundColorWithView: P0): R;
    _enclosingBrowserForControlView<R = unknown, P0 = unknown>(__enclosingBrowserForControlView: P0): R;
    _branchImageEnabled<R = boolean>(): R;
    _setBranchImageEnabled<R = void, P0 = boolean>(__setBranchImageEnabled: P0): R;
    loaded<R = boolean>(): R;
    setLoaded<R = void, P0 = boolean>(_v: P0): R;
    leaf<R = boolean>(): R;
    setLeaf<R = void, P0 = boolean>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    setAlternateImage<R = void, P0 = NSImage>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace NSBrowserCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCell {
      alloc<R = NSBrowserCell>(): R;
      new: <R = NSBrowserCell>() => R;
      highlightedBranchImage<R = unknown>(): R;
      branchImage<R = unknown>(): R;
    }
  }
}

declare const NSBrowserCell: cocoa.NSBrowserCell.CLASS;
