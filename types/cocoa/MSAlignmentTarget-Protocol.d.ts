/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentTargetProtocol<T0 = void, T1 = void, T2 = void> {
    guideInfo<R = unknown>(): R;
    setGuideInfo<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSAlignmentTargetProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
