/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentMainThreadSynchronizer<T0 = void, T1 = void, T2 = void> extends NSObject {
    scrollView_boundsChangedForClipView<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _boundsChangedForClipView: P1): R;
    _synchronize_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(__synchronize: P0, _completionHandler: P1): R;
    _doIdlePrefetch<R = boolean>(): R;
    _updateSharedData<R = void>(): R;
    _scrollToCanonicalOrigin<R = void>(): R;
    signal_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_signal: P0, _completionHandler: P1): R;
    signal<R = void, P0 = number>(_signal: P0): R;
    suspend<R = void>(): R;
    resume<R = void>(): R;
    dealloc<R = void>(): R;
    initWithSharedData_constantData<R = unknown, P0 = unknown, P1 = unknown>(_initWithSharedData: P0, _constantData: P1): R;
    scrollStateDelegate<R = _NSScrollStateEventListener>(): R;
    setScrollStateDelegate<R = void, P0 = _NSScrollStateEventListener>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentMainThreadSynchronizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollingConcurrentMainThreadSynchronizer>(): R;
      new: <R = _NSScrollingConcurrentMainThreadSynchronizer>() => R;
    }
  }
}
