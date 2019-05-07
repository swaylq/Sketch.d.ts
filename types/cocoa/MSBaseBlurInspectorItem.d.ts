/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseBlurInspectorItem<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorItem, MSInspectorValueAdaptorDelegateProtocol {
    popUpMenuIndexFromBlurType<R = number, P0 = number>(_popUpMenuIndexFromBlurType: P0): R;
    blurTypeFromPopUpMenuIndex<R = number, P0 = number>(_blurTypeFromPopUpMenuIndex: P0): R;
    menuNeedsUpdate<R = void, P0 = unknown>(_menuNeedsUpdate: P0): R;
    blurPopUpAction<R = void, P0 = unknown>(_blurPopUpAction: P0): R;
    radiusAdapter<R = MSMathInspectorValueAdaptor>(): R;
    setRadiusAdapter<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    multipleBlursMenuItem<R = NSMenuItem>(): R;
    setMultipleBlursMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    backgroundBlurMenuItem<R = NSMenuItem>(): R;
    setBackgroundBlurMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    blurPopUp<R = NSPopUpButton>(): R;
    setBlurPopUp<R = void, P0 = NSPopUpButton>(_v: P0): R;
    radiusSlider<R = NSSlider>(): R;
    setRadiusSlider<R = void, P0 = NSSlider>(_v: P0): R;
    radiusField<R = MSUpDownTextField>(): R;
    setRadiusField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBaseBlurInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorItem, MSInspectorValueAdaptorDelegateProtocol {
      alloc<R = MSBaseBlurInspectorItem>(): R;
      new: <R = MSBaseBlurInspectorItem>() => R;
    }
  }
}

declare const MSBaseBlurInspectorItem: cocoa.MSBaseBlurInspectorItem.CLASS;
