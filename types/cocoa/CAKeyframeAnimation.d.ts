/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAKeyframeAnimation<T0 = void, T1 = void, T2 = void> {
    // + CAKeyframeAnimation(NSInternal): 
    NS_transformValuesAtKeyPath_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_NS_transformValuesAtKeyPath: P0, _usingBlock: P1): R;
  }
  namespace CAKeyframeAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CAKeyframeAnimation: cocoa.CAKeyframeAnimation.CLASS;
