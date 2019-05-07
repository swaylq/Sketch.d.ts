/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFullScreenContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    refreshLayerFrames<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    displayLayer<R = void, P0 = unknown>(_displayLayer: P0): R;
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
    createLayers<R = void>(): R;
    _createCornerLayers<R = void>(): R;
    refreshLayerContents<R = void>(): R;
    destroyToolbarLayers<R = void>(): R;
    getShadowImage<R = unknown>(): R;
    getToolbarLayout<R = NSToolbarFullScreenContentViewLayout_t>(): R;
    clearCompanionController<R = void>(): R;
    initWithFrame_companionController<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _companionController: P1): R;
    shadowWeight<R = number>(): R;
    setShadowWeight<R = void, P0 = number>(_v: P0): R;
    toolbarViewHeight<R = number>(): R;
    setToolbarViewHeight<R = void, P0 = number>(_v: P0): R;
    revealProgress<R = number>(): R;
    setRevealProgress<R = void, P0 = number>(_v: P0): R;
    companionController<R = _NSFullScreenDetachedToolbarMenuBarCompanionController>(): R;
    cornerRoundness<R = number>(): R;
    setCornerRoundness<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSToolbarFullScreenContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSToolbarFullScreenContentView>(): R;
      new: <R = NSToolbarFullScreenContentView>() => R;
    }
  }
}

declare const NSToolbarFullScreenContentView: cocoa.NSToolbarFullScreenContentView.CLASS;
