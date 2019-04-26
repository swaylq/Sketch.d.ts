/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CABasicAnimation<T0 = void, T1 = void, T2 = void> {
    // + CABasicAnimation(NSInternal): 
    NS_transformValuesAtKeyPath_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_NS_transformValuesAtKeyPath: P0, _usingBlock: P1): R;
    NS_takeImpliedValuesFromPresentationObject_modelObject<R = void, P0 = unknown, P1 = unknown>(_NS_takeImpliedValuesFromPresentationObject: P0, _modelObject: P1): R;
  }
  namespace CABasicAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CABasicAnimation: cocoa.CABasicAnimation.CLASS;
