/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAAnimationGroup<T0 = void, T1 = void, T2 = void> {
    // + CAAnimationGroup(NSInternal): 
    NS_addAffectedKeyPaths<R = void, P0 = unknown>(_NS_addAffectedKeyPaths: P0): R;
    NS_renameKeyPathsUsingBlock<R = void, P0 = CDUnknownBlockType>(_NS_renameKeyPathsUsingBlock: P0): R;
    NS_renameKeyPath_toKeyPath<R = void, P0 = unknown, P1 = unknown>(_NS_renameKeyPath: P0, _toKeyPath: P1): R;
    NS_transformValuesAtKeyPath_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_NS_transformValuesAtKeyPath: P0, _usingBlock: P1): R;
    NS_takeImpliedValuesFromPresentationObject_modelObject<R = void, P0 = unknown, P1 = unknown>(_NS_takeImpliedValuesFromPresentationObject: P0, _modelObject: P1): R;
  }
  namespace CAAnimationGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CAAnimationGroup: cocoa.CAAnimationGroup.CLASS;
