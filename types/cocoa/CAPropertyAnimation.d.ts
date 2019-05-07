/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAPropertyAnimation<T0 = void, T1 = void, T2 = void> {
    // + CAPropertyAnimation(NSInternal): 
    NS_addAffectedKeyPaths<R = void, P0 = unknown>(_NS_addAffectedKeyPaths: P0): R;
    NS_renameKeyPathsUsingBlock<R = void, P0 = CDUnknownBlockType>(_NS_renameKeyPathsUsingBlock: P0): R;
    NS_renameKeyPath_toKeyPath<R = void, P0 = unknown, P1 = unknown>(_NS_renameKeyPath: P0, _toKeyPath: P1): R;
  }
  namespace CAPropertyAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CAPropertyAnimation: cocoa.CAPropertyAnimation.CLASS;
