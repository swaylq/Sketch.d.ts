/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionGradient<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSectionWithPicker, MSGradientEventHandlerDelegateProtocol, MSGradientBarViewDelegateProtocol {
    toolTipForAltButton_alternate<R = unknown, P0 = unknown, P1 = boolean>(_toolTipForAltButton: P0, _alternate: P1): R;
    closeGradientHandler<R = void>(): R;
    gradients<R = unknown>(): R;
    flipGradient<R = void, P0 = unknown>(_flipGradient: P0): R;
    rotateGradientAction<R = void, P0 = unknown>(_rotateGradientAction: P0): R;
    updateOtherGradientsToReflectChanges<R = void>(): R;
    currentlySelectedColor<R = unknown>(): R;
    switchToGradientHandler<R = void>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    highlightCurrentGradient<R = void>(): R;
    gradientBarAction<R = void, P0 = unknown>(_gradientBarAction: P0): R;
    switchToGradientHandlerIfNecessary<R = void>(): R;
    allSecondaryAssetPickerDataSources<R = unknown>(): R;
    secondaryAssetPickerDataSources<R = unknown>(): R;
    updateUIAfterGradientChange<R = void>(): R;
    rotateRightButton<R = NSButton>(): R;
    setRotateRightButton<R = void, P0 = NSButton>(_v: P0): R;
    rotateLeftButton<R = NSButton>(): R;
    setRotateLeftButton<R = void, P0 = NSButton>(_v: P0): R;
    secondaryAssetPickerController<R = MSAssetPickerController>(): R;
    setSecondaryAssetPickerController<R = void, P0 = MSAssetPickerController>(_v: P0): R;
    gradientHandler<R = MSGradientEventHandler>(): R;
    setGradientHandler<R = void, P0 = MSGradientEventHandler>(_v: P0): R;
    gradientBarView<R = MSGradientBarView>(): R;
    setGradientBarView<R = void, P0 = MSGradientBarView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspectorSectionGradient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSectionWithPicker, MSGradientEventHandlerDelegateProtocol, MSGradientBarViewDelegateProtocol {
      alloc<R = MSColorInspectorSectionGradient>(): R;
      new: <R = MSColorInspectorSectionGradient>() => R;
      canHandleStylePart<R = boolean, P0 = unknown>(_canHandleStylePart: P0): R;
      filterSelection<R = unknown, P0 = unknown>(_filterSelection: P0): R;
    }
  }
}

declare const MSColorInspectorSectionGradient: cocoa.MSColorInspectorSectionGradient.CLASS;
