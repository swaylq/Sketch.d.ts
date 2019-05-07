/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAbstractLayoutGuide<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutItemProtocol, NSISVariableDelegateProtocol, NSCodingProtocol {
    nsis_shouldIntegralizeVariable<R = boolean, P0 = unknown>(_nsis_shouldIntegralizeVariable: P0): R;
    _isDescendantOf<R = boolean, P0 = unknown>(__isDescendantOf: P0): R;
    _snipReferencingConstraints<R = void>(): R;
    dealloc<R = void>(): R;
    initWithConcreteLayoutGuide<R = unknown, P0 = unknown>(_initWithConcreteLayoutGuide: P0): R;
    heightVariable<R = NSISVariable>(): R;
    widthVariable<R = NSISVariable>(): R;
    minYVariable<R = NSISVariable>(): R;
    minXVariable<R = NSISVariable>(): R;
    layoutFrame<R = CGRect>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    frame<R = CGRect>(): R;
    owningView<R = NSLayoutItem>(): R;
    setOwningView<R = void, P0 = NSLayoutItem>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    nsli_piercingToken<R = number>(): R;
    setNsli_piercingToken<R = void, P0 = number>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace NSAbstractLayoutGuide {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutItemProtocol, NSISVariableDelegateProtocol, NSCodingProtocol {
      alloc<R = NSAbstractLayoutGuide>(): R;
      new: <R = NSAbstractLayoutGuide>() => R;
    }
  }
}

declare const NSAbstractLayoutGuide: cocoa.NSAbstractLayoutGuide.CLASS;
