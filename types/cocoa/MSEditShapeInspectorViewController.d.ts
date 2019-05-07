/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditShapeInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    changeTool<R = void, P0 = unknown>(_changeTool: P0): R;
    menuNeedsUpdate<R = void, P0 = unknown>(_menuNeedsUpdate: P0): R;
    titleForRoundingPopUp<R = unknown>(): R;
    refreshRoundingPopUpTitle<R = void>(): R;
    roundingPopUpAction<R = void, P0 = unknown>(_roundingPopUpAction: P0): R;
    cornerRadiusAction<R = void, P0 = unknown>(_cornerRadiusAction: P0): R;
    refreshCornerRadiusButton<R = void>(): R;
    refreshCoordinates<R = void>(): R;
    vectorModeSegmentedButtonAction<R = void, P0 = unknown>(_vectorModeSegmentedButtonAction: P0): R;
    refreshCurveModeControls<R = void>(): R;
    finishEditingAction<R = void, P0 = unknown>(_finishEditingAction: P0): R;
    refreshClosePathButton<R = void>(): R;
    views<R = unknown>(): R;
    refresh<R = void>(): R;
    buttonItem<R = MSShapeButtonInspectorItem>(): R;
    setButtonItem<R = void, P0 = MSShapeButtonInspectorItem>(_v: P0): R;
    pointsController<R = NSArrayController>(): R;
    setPointsController<R = void, P0 = NSArrayController>(_v: P0): R;
    yAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setYAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    xAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setXAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    cornerRadiusSlider<R = NSSlider>(): R;
    setCornerRadiusSlider<R = void, P0 = NSSlider>(_v: P0): R;
    curvePointYField<R = MSInlineUpDownTextField>(): R;
    setCurvePointYField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    curvePointXField<R = MSInlineUpDownTextField>(): R;
    setCurvePointXField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    closePathButton<R = NSButton>(): R;
    setClosePathButton<R = void, P0 = NSButton>(_v: P0): R;
    makeRectSelectionButton<R = NSButton>(): R;
    setMakeRectSelectionButton<R = void, P0 = NSButton>(_v: P0): R;
    curveModeBackgroundView<R = NSView>(): R;
    setCurveModeBackgroundView<R = void, P0 = NSView>(_v: P0): R;
    roundingPopUpButton<R = NSPopUpButton>(): R;
    setRoundingPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    cornerRadiusField<R = NSTextField>(): R;
    setCornerRadiusField<R = void, P0 = NSTextField>(_v: P0): R;
    isMakingRectSelection<R = boolean>(): R;
    setIsMakingRectSelection<R = void, P0 = boolean>(_v: P0): R;
    shapeEventHandler<R = MSShapeEventHandler>(): R;
    setShapeEventHandler<R = void, P0 = MSShapeEventHandler>(_v: P0): R;
    pathController<R = MSPathController>(): R;
    setPathController<R = void, P0 = MSPathController>(_v: P0): R;
  }
  namespace MSEditShapeInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorChildControllerProtocol {
      alloc<R = MSEditShapeInspectorViewController>(): R;
      new: <R = MSEditShapeInspectorViewController>() => R;
    }
  }
}

declare const MSEditShapeInspectorViewController: cocoa.MSEditShapeInspectorViewController.CLASS;
