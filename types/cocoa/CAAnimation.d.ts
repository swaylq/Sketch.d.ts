/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAAnimation<T0 = void, T1 = void, T2 = void> {
    // + CAAnimation(NSInternal): 
    NS_affectedKeyPaths<R = unknown>(): R;
    NS_addAffectedKeyPaths<R = void, P0 = unknown>(_NS_addAffectedKeyPaths: P0): R;
    NS_renameKeyPath_toKeyPath<R = void, P0 = unknown, P1 = unknown>(_NS_renameKeyPath: P0, _toKeyPath: P1): R;
    NS_renameKeyPathsUsingBlock<R = void, P0 = CDUnknownBlockType>(_NS_renameKeyPathsUsingBlock: P0): R;
    NS_transformValuesAtKeyPath_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_NS_transformValuesAtKeyPath: P0, _usingBlock: P1): R;
    NS_takeImpliedValuesFromPresentationObject_modelObject<R = void, P0 = unknown, P1 = unknown>(_NS_takeImpliedValuesFromPresentationObject: P0, _modelObject: P1): R;
    NS_endTime<R = number>(): R;
    // + CAAnimation(NSSafariCAAnimationExtras): 
    _safari_ensureDelegateIsSafariCAAnimationDelegate<R = void>(): R;
    // + CAAnimation(NSAnimationManager):
    NS_active<R = boolean>(): R;
    setNS_active<R = void, P0 = boolean>(_v: P0): R;
    NS_completionHandlerSuspension<R = unknown>(): R;
    setNS_completionHandlerSuspension<R = void, P0 = unknown>(_v: P0): R;
    NS_targetKeyPath<R = unknown>(): R;
    setNS_targetKeyPath<R = void, P0 = unknown>(_v: P0): R;
    NS_targetObject<R = unknown>(): R;
    setNS_targetObject<R = void, P0 = unknown>(_v: P0): R;
    NS_targetValue<R = unknown>(): R;
    setNS_targetValue<R = void, P0 = unknown>(_v: P0): R;
    // + CAAnimation(NSSafariCAAnimationExtras):
    _appkit_animationDidStopHandler<R = CDUnknownBlockType>(): R;
    set_appkit_animationDidStopHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace CAAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CAAnimation: cocoa.CAAnimation.CLASS;
