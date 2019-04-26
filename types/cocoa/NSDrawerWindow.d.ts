/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDrawerWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _usesCustomDrawing<R = boolean>(): R;
    _drawerDefaultRightTrailingOffset<R = number>(): R;
    _drawerDefaultLeftLeadingOffset<R = number>(): R;
    _drawerDefaultBottomTrailingOffset<R = number>(): R;
    _drawerDefaultTopLeadingOffset<R = number>(): R;
    _drawerDepthInset<R = number>(): R;
    _drawerDepthOffset<R = number>(): R;
    _drawerRightOffset<R = number>(): R;
    _drawerLeftOffset<R = number>(): R;
    _drawerBottomOffset<R = number>(): R;
    _drawerTopOffset<R = number>(): R;
    _drawerCloseThreshold<R = number>(): R;
    _drawerVerticalOpenOffset<R = number>(): R;
    _drawerHorizontalOpenOffset<R = number>(): R;
    _cycleDrawersReversed<R = void, P0 = boolean>(__cycleDrawersReversed: P0): R;
    isMovableByWindowBackground<R = boolean>(): R;
    isMovable<R = boolean>(): R;
    _adjustWindowToScreen<R = void>(): R;
    performMiniaturize<R = void, P0 = unknown>(_performMiniaturize: P0): R;
    performZoom<R = void, P0 = unknown>(_performZoom: P0): R;
    performClose<R = void, P0 = unknown>(_performClose: P0): R;
    runToolbarCustomizationPalette<R = void, P0 = unknown>(_runToolbarCustomizationPalette: P0): R;
    toggleToolbarShown<R = void, P0 = unknown>(_toggleToolbarShown: P0): R;
    hideToolbar<R = void, P0 = unknown>(_hideToolbar: P0): R;
    showToolbar<R = void, P0 = unknown>(_showToolbar: P0): R;
    _isVertical<R = boolean>(): R;
    resizeWithDelta_fromFrame_beginOperation_endOperation<R = void, P0 = CGPoint, P1 = CGRect, P2 = boolean, P3 = boolean>(_resizeWithDelta: P0, _fromFrame: P1, _beginOperation: P2, _endOperation: P3): R;
    _selectFirstKeyView<R = void>(): R;
    _oldFirstResponderBeforeBecoming<R = unknown>(): R;
    _newFirstResponderAfterResigning<R = unknown>(): R;
    makeFirstResponder<R = boolean, P0 = unknown>(_makeFirstResponder: P0): R;
    _resetFirstResponder<R = void>(): R;
    fieldEditor_forObject<R = unknown, P0 = boolean, P1 = unknown>(_fieldEditor: P0, _forObject: P1): R;
    isExcludedFromWindowsMenu<R = boolean>(): R;
    _getUndoManager<R = unknown, P0 = boolean>(__getUndoManager: P0): R;
    worksWhenModal<R = boolean>(): R;
    _setForceActiveControls<R = void, P0 = boolean>(__setForceActiveControls: P0): R;
    _hasActiveControls<R = boolean>(): R;
    resignMainWindow<R = void>(): R;
    makeMainWindow<R = void>(): R;
    becomeMainWindow<R = void>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    isMainWindow<R = boolean>(): R;
    orderOut<R = void, P0 = unknown>(_orderOut: P0): R;
    _resetDrawerFirstResponder<R = void>(): R;
    _setDrawerVisibleWithoutLogin<R = void>(): R;
    _changeDrawerFirstResponder<R = void>(): R;
    _changeDrawerMainState<R = void>(): R;
    _changeDrawerKeyState<R = void>(): R;
    resignKeyWindow<R = void>(): R;
    makeKeyWindow<R = void>(): R;
    _drawerTakeFocus<R = void>(): R;
    becomeKeyWindow<R = void>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    hasKeyAppearance<R = boolean>(): R;
    isKeyWindow<R = boolean>(): R;
    _changeKeyAndMainLimitedOK<R = void, P0 = boolean>(__changeKeyAndMainLimitedOK: P0): R;
    hasShadow<R = boolean>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    _potentialMaxSize<R = CGSize>(): R;
    _potentialMinSize<R = CGSize>(): R;
    _parentWindow<R = unknown>(): R;
    _setParentWindow<R = void, P0 = unknown>(__setParentWindow: P0): R;
    _changeTexture<R = void>(): R;
    initWithContentRect_styleMask_backing_defer_drawer<R = unknown, P0 = CGRect, P1 = number, P2 = number, P3 = boolean, P4 = unknown>(_initWithContentRect: P0, _styleMask: P1, _backing: P2, _defer: P3, _drawer: P4): R;
    accessibilitySetSizeAttribute<R = void, P0 = unknown>(_accessibilitySetSizeAttribute: P0): R;
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
  }
  namespace NSDrawerWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSDrawerWindow>(): R;
      new: <R = NSDrawerWindow>() => R;
      frameViewClassForStyleMask<R = unknown, P0 = number>(_frameViewClassForStyleMask: P0): R;
    }
  }
}

declare const NSDrawerWindow: cocoa.NSDrawerWindow.CLASS;
