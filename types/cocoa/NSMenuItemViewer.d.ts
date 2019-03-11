/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemViewer<T = any> extends cocoa.NSVisualEffectView {
    _displayFromCarbonIgnoringOpacity<R = void>(): R;
    _restoreOrBecomeFirstResponder<R = boolean>(): R;
    _rememberAndResignFirstResponder<R = boolean>(): R;
    opaqueAncestor<R = unknown>(): R;
    _setClipRect<R = void, P0 = cocoa.CGRect>(__setClipRect: P0): R;
    drawMenuItemBackgroundWithHighlight_inRect_withClipRect<R = void, P0 = boolean, P1 = cocoa.CGRect, P2 = cocoa.CGRect>(_drawMenuItemBackgroundWithHighlight: P0, _inRect: P1, _withClipRect: P2): R;
    wantsDefaultClipping<R = boolean>(): R;
    initWithFrame_forMenuItem<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _forMenuItem: P1): R;
    _hiView<R = void>(): R;
    _setHIView<R = void, P0 = void>(__setHIView: P0): R;
    _setMenuItemView<R = void, P0 = unknown>(__setMenuItemView: P0): R;
    _minimumViewSize<R = cocoa.CGSize>(): R;
    _menuItemViewFrameChanged<R = void, P0 = unknown>(__menuItemViewFrameChanged: P0): R;
    _setFrameFromHIViewFrame<R = void, P0 = cocoa.CGRect>(__setFrameFromHIViewFrame: P0): R;
    _clearMenuItem<R = void>(): R;
    _menuItem<R = unknown>(): R;
    _menuItemView<R = unknown>(): R;
  }
  namespace classes {
    export interface NSMenuItemViewer<T = any> extends cocoa.classes.NSVisualEffectView {
      alloc<R = NSMenuItemViewer>(): R;
      new: <R = NSMenuItemViewer>() => R;
      _getMenuItemViewerHIViewClassRegisteringIfNecessary<R = cocoa.__CFString>(): R;
    }
  }
}

declare const NSMenuItemViewer: cocoa.classes.NSMenuItemViewer;
