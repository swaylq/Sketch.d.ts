/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteOverlayWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _blocksActionWhenModal<R = boolean, P0 = string>(__blocksActionWhenModal: P0): R;
    orderOut<R = void, P0 = unknown>(_orderOut: P0): R;
    _dismissModalForTerminate<R = void>(): R;
    _wantsSnapshotProxyWindowForOrderOutAnimation<R = boolean>(): R;
    done<R = void, P0 = unknown>(_done: P0): R;
    _quickTypeDidChange<R = void, P0 = unknown>(__quickTypeDidChange: P0): R;
    toggleQuicktype<R = void, P0 = unknown>(_toggleQuicktype: P0): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _blocksKeyAndMainWindowTouchBarsWhenModal<R = boolean>(): R;
    _windowDidBecomeKey<R = void, P0 = unknown>(__windowDidBecomeKey: P0): R;
    _appDidDeactivate<R = void, P0 = unknown>(__appDidDeactivate: P0): R;
    _handleIntrusion<R = void>(): R;
    animateOut<R = void>(): R;
    animateIn<R = void>(): R;
    _setModalWindowLevel<R = void>(): R;
    _isNonactivatingPanel<R = boolean>(): R;
    _headerLabelAttributedString<R = unknown>(): R;
    _headerLabelFont<R = unknown>(): R;
    _headerLabelInset<R = number>(): R;
    _paletteHorizontalInsets<R = number>(): R;
    _horizontalHeaderStackSpacing<R = number>(): R;
    _verticalStackSpacing<R = number>(): R;
    _doneButtonWidth<R = number>(): R;
    _postHeaderSpacing<R = number>(): R;
    _verticalStackInsets<R = NSEdgeInsets>(): R;
    initWithScreen_displayID_paletteContent<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithScreen: P0, _displayID: P1, _paletteContent: P2): R;
    _shouldDoLayerPerformanceUpdates<R = boolean>(): R;
    dragSize<R = CGSize>(): R;
    setDragSize<R = void, P0 = CGSize>(_v: P0): R;
    screenBottomDragTarget<R = _NSFunctionRowCustomizationDragTarget>(): R;
    debugMode<R = boolean>(): R;
    setDebugMode<R = void, P0 = boolean>(_v: P0): R;
    dragLabel<R = NSString>(): R;
    setDragLabel<R = void, P0 = NSString>(_v: P0): R;
    dragLocation<R = CGPoint>(): R;
    setDragLocation<R = void, P0 = CGPoint>(_v: P0): R;
    showQuickType<R = boolean>(): R;
    setShowQuickType<R = void, P0 = boolean>(_v: P0): R;
    paletteContentViewController<R = NSViewController>(): R;
    setPaletteContentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPaletteOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSTouchBarCustomizationPaletteOverlayWindow>(): R;
      new: <R = NSTouchBarCustomizationPaletteOverlayWindow>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteOverlayWindow: cocoa.NSTouchBarCustomizationPaletteOverlayWindow.CLASS;
