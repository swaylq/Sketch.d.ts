/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridSheetBase<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSWindowDelegateProtocol {
    lightColorUpdated<R = void, P0 = unknown>(_lightColorUpdated: P0): R;
    darkColorUpdated<R = void, P0 = unknown>(_darkColorUpdated: P0): R;
    prepareColorPickers<R = void>(): R;
    turnOffForcedDrawing<R = void>(): R;
    gridChanged<R = void, P0 = unknown>(_gridChanged: P0): R;
    refreshCanvas<R = void, P0 = unknown>(_refreshCanvas: P0): R;
    refreshView<R = void>(): R;
    buildApplicableRootLayerList<R = unknown>(): R;
    awakeFromNib<R = void>(): R;
    applyTemplateObjectToLayer<R = void, P0 = unknown>(_applyTemplateObjectToLayer: P0): R;
    applyObject_toLayer<R = void, P0 = unknown, P1 = unknown>(_applyObject: P0, _toLayer: P1): R;
    defaultObject<R = unknown>(): R;
    document<R = unknown>(): R;
    baseObjectForRootLayer<R = unknown, P0 = unknown>(_baseObjectForRootLayer: P0): R;
    lightColorButton<R = MSColorWell>(): R;
    setLightColorButton<R = void, P0 = MSColorWell>(_v: P0): R;
    darkColorButton<R = MSColorWell>(): R;
    setDarkColorButton<R = void, P0 = MSColorWell>(_v: P0): R;
    templateObject<R = MSBaseGrid>(): R;
    setTemplateObject<R = void, P0 = MSBaseGrid>(_v: P0): R;
    originalSettings<R = NSMapTable>(): R;
    setOriginalSettings<R = void, P0 = NSMapTable>(_v: P0): R;
    lightColor<R = NSColor>(): R;
    setLightColor<R = void, P0 = NSColor>(_v: P0): R;
    darkColor<R = NSColor>(): R;
    setDarkColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSGridSheetBase {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSWindowDelegateProtocol {
      alloc<R = MSGridSheetBase>(): R;
      new: <R = MSGridSheetBase>() => R;
    }
  }
}

declare const MSGridSheetBase: cocoa.MSGridSheetBase.CLASS;
