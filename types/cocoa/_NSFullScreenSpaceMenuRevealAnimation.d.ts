/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenSpaceMenuRevealAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    dealloc<R = void>(): R;
    siblingSpace<R = _NSFullScreenSpace>(): R;
    setSiblingSpace<R = void, P0 = _NSFullScreenSpace>(_v: P0): R;
    serverStartTime<R = number>(): R;
    setServerStartTime<R = void, P0 = number>(_v: P0): R;
    endingReveal<R = number>(): R;
    setEndingReveal<R = void, P0 = number>(_v: P0): R;
    startingReveal<R = number>(): R;
    setStartingReveal<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSFullScreenSpaceMenuRevealAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = _NSFullScreenSpaceMenuRevealAnimation>(): R;
      new: <R = _NSFullScreenSpaceMenuRevealAnimation>() => R;
    }
  }
}
