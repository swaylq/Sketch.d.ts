/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSLayer<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    frame<R = MSRect>(): R;
    setFrame<R = void, P0 = MSRect>(_v: P0): R;
    flow<R = MSFlowConnection>(): R;
    setFlow<R = void, P0 = MSFlowConnection>(_v: P0): R;
    exportOptions<R = MSExportOptions>(): R;
    setExportOptions<R = void, P0 = MSExportOptions>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    shouldBreakMaskChain<R = boolean>(): R;
    setShouldBreakMaskChain<R = void, P0 = boolean>(_v: P0): R;
    rotation<R = number>(): R;
    setRotation<R = void, P0 = number>(_v: P0): R;
    resizingType<R = number>(): R;
    setResizingType<R = void, P0 = number>(_v: P0): R;
    resizingConstraint<R = number>(): R;
    setResizingConstraint<R = void, P0 = number>(_v: P0): R;
    originalObjectID<R = NSString>(): R;
    setOriginalObjectID<R = void, P0 = NSString>(_v: P0): R;
    nameIsFixed<R = boolean>(): R;
    setNameIsFixed<R = void, P0 = boolean>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    isVisible<R = boolean>(): R;
    setIsVisible<R = void, P0 = boolean>(_v: P0): R;
    isLocked<R = boolean>(): R;
    setIsLocked<R = void, P0 = boolean>(_v: P0): R;
    isFlippedVertical<R = boolean>(): R;
    setIsFlippedVertical<R = void, P0 = boolean>(_v: P0): R;
    isFlippedHorizontal<R = boolean>(): R;
    setIsFlippedHorizontal<R = void, P0 = boolean>(_v: P0): R;
    isFixedToViewport<R = boolean>(): R;
    setIsFixedToViewport<R = void, P0 = boolean>(_v: P0): R;
    booleanOperation<R = number>(): R;
    setBooleanOperation<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSLayer>(): R;
      new: <R = _MSLayer>() => R;
    }
  }
}
