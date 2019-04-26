/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBlurInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController, MSStylePartInspectorItemDelegateProtocol, NSMenuDelegateProtocol {
    layers<R = unknown>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    blurKinds<R = unknown>(): R;
    items<R = unknown>(): R;
    prepareLayersForBackgroundBlur<R = void, P0 = unknown>(_prepareLayersForBackgroundBlur: P0): R;
    reloadInspectorStack<R = void, P0 = unknown>(_reloadInspectorStack: P0): R;
    paddingItem<R = MSPaddingInspectorItem>(): R;
    setPaddingItem<R = void, P0 = MSPaddingInspectorItem>(_v: P0): R;
    backgroundBlurItem<R = MSBackgroundBlurInspectorItem>(): R;
    setBackgroundBlurItem<R = void, P0 = MSBackgroundBlurInspectorItem>(_v: P0): R;
    zoomBlurItem<R = MSZoomBlurInspectorItem>(): R;
    setZoomBlurItem<R = void, P0 = MSZoomBlurInspectorItem>(_v: P0): R;
    motionBlurItem<R = MSMotionBlurInspectorItem>(): R;
    setMotionBlurItem<R = void, P0 = MSMotionBlurInspectorItem>(_v: P0): R;
    simpleBlurItem<R = MSSimpleBlurInspectorItem>(): R;
    setSimpleBlurItem<R = void, P0 = MSSimpleBlurInspectorItem>(_v: P0): R;
    blurNameItem<R = MSBlurNameInspectorItem>(): R;
    setBlurNameItem<R = void, P0 = MSBlurNameInspectorItem>(_v: P0): R;
    paddingView<R = MSSeparatorlessView>(): R;
    setPaddingView<R = void, P0 = MSSeparatorlessView>(_v: P0): R;
    multipleBlursMenuItem<R = NSMenuItem>(): R;
    setMultipleBlursMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    backgroundBlurMenuItem<R = NSMenuItem>(): R;
    setBackgroundBlurMenuItem<R = void, P0 = NSMenuItem>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBlurInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController, MSStylePartInspectorItemDelegateProtocol, NSMenuDelegateProtocol {
      alloc<R = MSBlurInspectorViewController>(): R;
      new: <R = MSBlurInspectorViewController>() => R;
    }
  }
}

declare const MSBlurInspectorViewController: cocoa.MSBlurInspectorViewController.CLASS;
