/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSVectorCanvasDelegateProtocol, NSTextDelegateProtocol, NSMenuDelegateProtocol, MSGestureRecognizerDelegateProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    performPathControllerUpdate<R = void, P0 = CDUnknownBlockType>(_performPathControllerUpdate: P0): R;
    refreshCloseOrOpenPathUI<R = void>(): R;
    pathDidOpenOrClose<R = void>(): R;
    curveModeForPressedKey<R = number, P0 = number>(_curveModeForPressedKey: P0): R;
    parentGroupForInserting<R = unknown>(): R;
    insertNewShapeForEditingAtPoint<R = void, P0 = CGPoint>(_insertNewShapeForEditingAtPoint: P0): R;
    updateToolButton<R = void>(): R;
    setAllowSelectionOnly<R = void, P0 = boolean>(_setAllowSelectionOnly: P0): R;
    toggleForceSelection<R = void, P0 = unknown>(_toggleForceSelection: P0): R;
    forceSelection<R = void, P0 = unknown>(_forceSelection: P0): R;
    markLayer_asEditing<R = void, P0 = unknown, P1 = boolean>(_markLayer: P0, _asEditing: P1): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    resetWithOptions<R = void, P0 = number>(_resetWithOptions: P0): R;
    styleSection<R = MSStyleInspectorSection>(): R;
    setStyleSection<R = void, P0 = MSStyleInspectorSection>(_v: P0): R;
    editingBehavior<R = MSShapeEditingBehavior>(): R;
    setEditingBehavior<R = void, P0 = MSShapeEditingBehavior>(_v: P0): R;
    pathController<R = MSPathController>(): R;
    canvasHandler<R = MSVectorCanvas>(): R;
    layers<R = NSArray>(): R;
    ignorePathController<R = boolean>(): R;
    inspectorViewController<R = MSEditShapeInspectorViewController>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSShapeEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSVectorCanvasDelegateProtocol, NSTextDelegateProtocol, NSMenuDelegateProtocol, MSGestureRecognizerDelegateProtocol {
      alloc<R = MSShapeEventHandler>(): R;
      new: <R = MSShapeEventHandler>() => R;
    }
  }
}

declare const MSShapeEventHandler: cocoa.MSShapeEventHandler.CLASS;
