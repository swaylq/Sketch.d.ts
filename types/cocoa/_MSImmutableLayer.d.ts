/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableLayer<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    frame<R = MSImmutableRect>(): R;
    setFrame<R = void, P0 = MSImmutableRect>(_v: P0): R;
    flow<R = MSImmutableFlowConnection>(): R;
    setFlow<R = void, P0 = MSImmutableFlowConnection>(_v: P0): R;
    exportOptions<R = MSImmutableExportOptions>(): R;
    setExportOptions<R = void, P0 = MSImmutableExportOptions>(_v: P0): R;
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
  namespace _MSImmutableLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableLayer>(): R;
      new: <R = _MSImmutableLayer>() => R;
    }
  }
}
