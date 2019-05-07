/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeItem<T0 = void, T1 = void, T2 = void> extends MSCustomShapeItem, MSInspectorMathValueAdaptorDelegateProtocol, MSLayerChangeObserverProtocol {
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    sliderAction<R = void, P0 = unknown>(_sliderAction: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    curvaturePopup<R = NSPopUpButton>(): R;
    setCurvaturePopup<R = void, P0 = NSPopUpButton>(_v: P0): R;
    radiusAdaptor<R = MSCornerRadiusInspectorValueAdaptor>(): R;
    setRadiusAdaptor<R = void, P0 = MSCornerRadiusInspectorValueAdaptor>(_v: P0): R;
    radiusSlider<R = NSSlider>(): R;
    setRadiusSlider<R = void, P0 = NSSlider>(_v: P0): R;
    radiusField<R = MSInlineUpDownTextField>(): R;
    setRadiusField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSRectangleShapeItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCustomShapeItem, MSInspectorMathValueAdaptorDelegateProtocol, MSLayerChangeObserverProtocol {
      alloc<R = MSRectangleShapeItem>(): R;
      new: <R = MSRectangleShapeItem>() => R;
    }
  }
}

declare const MSRectangleShapeItem: cocoa.MSRectangleShapeItem.CLASS;
