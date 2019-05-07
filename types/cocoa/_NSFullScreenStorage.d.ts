/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenStorage<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    startingSpaceID<R = number>(): R;
    setStartingSpaceID<R = void, P0 = number>(_v: P0): R;
    allSpaceParticipatingWindowNumbersDuringEnterTransition<R = NSSet>(): R;
    setAllSpaceParticipatingWindowNumbersDuringEnterTransition<R = void, P0 = NSSet>(_v: P0): R;
    participatingWindowNumbersDuringExitTransition<R = NSSet>(): R;
    setParticipatingWindowNumbersDuringExitTransition<R = void, P0 = NSSet>(_v: P0): R;
    participatingWindowNumbersDuringEnterTransition<R = NSSet>(): R;
    setParticipatingWindowNumbersDuringEnterTransition<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _NSFullScreenStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFullScreenStorage>(): R;
      new: <R = _NSFullScreenStorage>() => R;
    }
  }
}
