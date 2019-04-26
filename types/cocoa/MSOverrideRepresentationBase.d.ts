/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideRepresentationBase<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    updateAfterSelectingChild<R = void>(): R;
    modifiedMasterForInstanceInMaster<R = unknown, P0 = unknown>(_modifiedMasterForInstanceInMaster: P0): R;
    syncChildrenWithOverrides<R = void, P0 = unknown>(_syncChildrenWithOverrides: P0): R;
    initWithInstance<R = unknown, P0 = unknown>(_initWithInstance: P0): R;
    selfOrChildrenSelected<R = boolean>(): R;
    layerListExpandedType<R = boolean>(): R;
    childrenForLayerList<R = unknown>(): R;
    selectedOverrides<R = unknown>(): R;
    isEditable<R = boolean>(): R;
    instance<R = MSSymbolInstance>(): R;
    children<R = NSArray>(): R;
    setChildren<R = void, P0 = NSArray>(_v: P0): R;
    transformForConvertingToInstance<R = NSAffineTransform>(): R;
    isExpanded<R = boolean>(): R;
    // + MSOverrideRepresentationBase(LayerList): 
    selfOrChildrenSelected<R = boolean>(): R;
    layerListExpandedType<R = boolean>(): R;
    childrenForLayerList<R = unknown>(): R;
    // + MSOverrideRepresentationBase(LayerList):
    isExpanded<R = boolean>(): R;
  }
  namespace MSOverrideRepresentationBase {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOverrideRepresentationBase>(): R;
      new: <R = MSOverrideRepresentationBase>() => R;
  
  }
  }
}

declare const MSOverrideRepresentationBase: cocoa.MSOverrideRepresentationBase.CLASS;
