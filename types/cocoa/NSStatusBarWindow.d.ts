/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusBarWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _lighterViewDetaching<R = void, P0 = unknown>(__lighterViewDetaching: P0): R;
    _viewAttaching<R = void, P0 = unknown>(__viewAttaching: P0): R;
    viewNeedsDisplayInRectNotification<R = void, P0 = unknown>(_viewNeedsDisplayInRectNotification: P0): R;
    _canMiniaturize<R = boolean>(): R;
    _cgsMoveWindow_moveGroup<R = void, P0 = CGRect, P1 = boolean>(__cgsMoveWindow: P0, _moveGroup: P1): R;
    _hasActiveControls<R = boolean>(): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    _semanticContext<R = number>(): R;
    _automateLiveResize<R = void>(): R;
    canHide<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    convertBaseToScreen<R = CGPoint, P0 = CGPoint>(_convertBaseToScreen: P0): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    _orderForwardWithEvent<R = void, P0 = unknown>(__orderForwardWithEvent: P0): R;
    _windowMoved<R = void, P0 = unknown>(__windowMoved: P0): R;
    _noticeStatusBarVisibilityChangeIfNecessary<R = void>(): R;
    windowRef<R = void>(): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    setFrame_display<R = void, P0 = CGRect, P1 = boolean>(_setFrame: P0, _display: P1): R;
    _setWindowTag<R = void>(): R;
    _updateManagedDisplay<R = void>(): R;
    _bestScreenByGeometry<R = unknown>(): R;
    _showToolTip<R = boolean>(): R;
    _setWindowNumber<R = void, P0 = number>(__setWindowNumber: P0): R;
    setStatusBarView<R = void, P0 = unknown>(_setStatusBarView: P0): R;
    _testForAllowsVibrancy<R = void>(): R;
    underlaySelectionHighlight<R = void, P0 = boolean>(_underlaySelectionHighlight: P0): R;
    hasSelectionRect<R = boolean>(): R;
    setSelection_inRect_ofView_drawImmediately<R = void, P0 = boolean, P1 = CGRect, P2 = unknown, P3 = boolean>(_setSelection: P0, _inRect: P1, _ofView: P2, _drawImmediately: P3): R;
    setSelection_inRect_ofView<R = void, P0 = boolean, P1 = CGRect, P2 = unknown>(_setSelection: P0, _inRect: P1, _ofView: P2): R;
    _updateVisualEffectViewMaterial<R = void>(): R;
    _isNonactivatingPanel<R = boolean>(): R;
    initWithContentRect<R = unknown, P0 = CGRect>(_initWithContentRect: P0): R;
    _backdropBleedAmount<R = number>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    effectView<R = NSVisualEffectView>(): R;
    setEffectView<R = void, P0 = NSVisualEffectView>(_v: P0): R;
    statusItem<R = NSStatusItem>(): R;
    setStatusItem<R = void, P0 = NSStatusItem>(_v: P0): R;
    allowsVibrancy<R = boolean>(): R;
    setAllowsVibrancy<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSStatusBarWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSStatusBarWindow>(): R;
      new: <R = NSStatusBarWindow>() => R;
    }
  }
}

declare const NSStatusBarWindow: cocoa.NSStatusBarWindow.CLASS;
