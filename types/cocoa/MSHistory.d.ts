/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHistory<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    progressToNextMoment<R = boolean>(): R;
    commitCurrentMoment<R = void>(): R;
    revertToPreviousMoment<R = boolean>(): R;
    addMomentWithTitle_documentData_adaptability<R = number, P0 = unknown, P1 = unknown, P2 = number>(_addMomentWithTitle: P0, _documentData: P1, _adaptability: P2): R;
    addMomentWithTitle_documentData<R = number, P0 = unknown, P1 = unknown>(_addMomentWithTitle: P0, _documentData: P1): R;
    removeFutureMoments<R = void>(): R;
    pagesListChangedFromMoment_toMoment<R = boolean, P0 = unknown, P1 = unknown>(_pagesListChangedFromMoment: P0, _toMoment: P1): R;
    onlyPageSwitchedFromMoment_toMoment<R = boolean, P0 = unknown, P1 = unknown>(_onlyPageSwitchedFromMoment: P0, _toMoment: P1): R;
    addMoment<R = number, P0 = unknown>(_addMoment: P0): R;
    initWithInitialMoment<R = unknown, P0 = unknown>(_initWithInitialMoment: P0): R;
    indexOfCurrentMoment<R = number>(): R;
    setIndexOfCurrentMoment<R = void, P0 = number>(_v: P0): R;
    moments<R = cocoa.NSMutableArray>(): R;
    setMoments<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    allowsCoalescingOfMomentsCloseInTime<R = boolean>(): R;
    setAllowsCoalescingOfMomentsCloseInTime<R = void, P0 = boolean>(_v: P0): R;
    numberOfMoments<R = number>(): R;
    canProgressToNextMoment<R = boolean>(): R;
    canRevertToPreviousMoment<R = boolean>(): R;
    nextMoment<R = cocoa.MSMoment>(): R;
    previousMoment<R = cocoa.MSMoment>(): R;
    currentMoment<R = cocoa.MSMoment>(): R;
  }
  namespace classes {
    export interface MSHistory<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSHistory>(): R;
      new: <R = MSHistory>() => R;
    }
  }
}

declare const MSHistory: cocoa.classes.MSHistory;
