/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSContentDrawViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    prepareForDealloc<R = void>(): R;
    changeToPage<R = void, P0 = unknown>(_changeToPage: P0): R;
    currentArtboardDidChange<R = void>(): R;
    awakeFromNib<R = void>(): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    flashController<R = MSFlashController>(): R;
    setFlashController<R = void, P0 = MSFlashController>(_v: P0): R;
    rulerHeightConstraint<R = NSLayoutConstraint>(): R;
    setRulerHeightConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    rulerWidthConstraint<R = NSLayoutConstraint>(): R;
    setRulerWidthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    rulerCornerView<R = NSView>(): R;
    setRulerCornerView<R = void, P0 = NSView>(_v: P0): R;
    verticalRuler<R = MSRulerView>(): R;
    setVerticalRuler<R = void, P0 = MSRulerView>(_v: P0): R;
    horizontalRuler<R = MSRulerView>(): R;
    setHorizontalRuler<R = void, P0 = MSRulerView>(_v: P0): R;
    contentDrawViewParent<R = MSContentDrawViewParent>(): R;
    setContentDrawViewParent<R = void, P0 = MSContentDrawViewParent>(_v: P0): R;
    contentDrawView<R = MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = MSContentDrawView>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = CGPoint>(): R;
    setScrollOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSContentDrawViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSContentDrawViewDelegateProtocol {
      alloc<R = MSContentDrawViewController>(): R;
      new: <R = MSContentDrawViewController>() => R;
    }
  }
}

declare const MSContentDrawViewController: cocoa.MSContentDrawViewController.CLASS;
