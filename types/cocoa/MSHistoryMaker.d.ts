/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHistoryMaker<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    installedFontsChanged<R = void>(): R;
    ignoreDocumentChangesInBlock<R = boolean, P0 = CDUnknownBlockType>(_ignoreDocumentChangesInBlock: P0): R;
    moveThroughHistoryBackInTime<R = void, P0 = boolean>(_moveThroughHistoryBackInTime: P0): R;
    canMoveThroughHistoryBackInTime<R = boolean, P0 = boolean>(_canMoveThroughHistoryBackInTime: P0): R;
    updateCurrentMomentWithSelection<R = void, P0 = unknown>(_updateCurrentMomentWithSelection: P0): R;
    makeHistoryIfNecessaryUsingTransientMoment<R = void, P0 = boolean>(_makeHistoryIfNecessaryUsingTransientMoment: P0): R;
    deferMakingHistoryInBlock<R = void, P0 = CDUnknownBlockType>(_deferMakingHistoryInBlock: P0): R;
    makeTransientMomentInHistoryIfNecessary<R = void>(): R;
    makeHistoryIfNecessary<R = void>(): R;
    commitTransientMomentIfNecessary<R = void>(): R;
    coalesceHistoryInBlock<R = void, P0 = CDUnknownBlockType>(_coalesceHistoryInBlock: P0): R;
    finishCoalescingHistory<R = void>(): R;
    startCoalescingHistory<R = void>(): R;
    registerHistoryMomentTitle<R = void, P0 = unknown>(_registerHistoryMomentTitle: P0): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    deferMakingHistoryCounter<R = number>(): R;
    setDeferMakingHistoryCounter<R = void, P0 = number>(_v: P0): R;
    isMakingHistory<R = boolean>(): R;
    setIsMakingHistory<R = void, P0 = boolean>(_v: P0): R;
    isMovingThroughHistory<R = boolean>(): R;
    setIsMovingThroughHistory<R = void, P0 = boolean>(_v: P0): R;
    fontsDidChange<R = boolean>(): R;
    setFontsDidChange<R = void, P0 = boolean>(_v: P0): R;
    historyIsCoalescing<R = boolean>(): R;
    setHistoryIsCoalescing<R = void, P0 = boolean>(_v: P0): R;
    historyMomentTitle<R = NSString>(): R;
    setHistoryMomentTitle<R = void, P0 = NSString>(_v: P0): R;
    history<R = MSHistory>(): R;
    document<R = MSDocument>(): R;
  }
  namespace MSHistoryMaker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSHistoryMaker>(): R;
      new: <R = MSHistoryMaker>() => R;
    }
  }
}

declare const MSHistoryMaker: cocoa.MSHistoryMaker.CLASS;
