/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBackingLayerContents<T0 = void, T1 = void, T2 = void> extends NSObject, CALayerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    NS_hasPartialPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPartialPrefetchedContentsForRect: P0): R;
    NS_hasPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPrefetchedContentsForRect: P0): R;
    NS_activeVisibleRect<R = CGRect>(): R;
    CA_copyRenderValue<R = void>(): R;
    CA_prepareRenderValue<R = void>(): R;
    NS_canDrawLayer<R = boolean, P0 = unknown>(_NS_canDrawLayer: P0): R;
    display<R = void>(): R;
    invalidateRect<R = void, P0 = CGRect>(_invalidateRect: P0): R;
    update<R = void>(): R;
    tileClass<R = unknown>(): R;
    dealloc<R = void>(): R;
    backingLayer<R = CALayer>(): R;
    setBackingLayer<R = void, P0 = CALayer>(_v: P0): R;
    contentLayer<R = CALayer>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSBackingLayerContents {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CALayerDelegateProtocol {
      alloc<R = _NSBackingLayerContents>(): R;
      new: <R = _NSBackingLayerContents>() => R;
    }
  }
}
