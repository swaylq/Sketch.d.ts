/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableSwipeData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    hasMoreThanOneButtonAndAConsumer<R = boolean>(): R;
    setHasMoreThanOneButtonAndAConsumer<R = void, P0 = boolean>(_v: P0): R;
    swipeToDeleteScanLineView<R = NSTableDeleteScanLineView>(): R;
    setSwipeToDeleteScanLineView<R = void, P0 = NSTableDeleteScanLineView>(_v: P0): R;
    swipeToDeleteFinishAnimation<R = NSTableRowViewSpringAnimation>(): R;
    setSwipeToDeleteFinishAnimation<R = void, P0 = NSTableRowViewSpringAnimation>(_v: P0): R;
    swipeToDeleteCatchupAnimation<R = NSTableRowViewSpringAnimation>(): R;
    setSwipeToDeleteCatchupAnimation<R = void, P0 = NSTableRowViewSpringAnimation>(_v: P0): R;
    swipeToDeleteButtonPercentage<R = number>(): R;
    setSwipeToDeleteButtonPercentage<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteConsumePercentage<R = number>(): R;
    setSwipeToDeleteConsumePercentage<R = void, P0 = number>(_v: P0): R;
    swipeToDeletePercentage<R = number>(): R;
    setSwipeToDeletePercentage<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteLastPercentage<R = number>(): R;
    setSwipeToDeleteLastPercentage<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteToken<R = number>(): R;
    setSwipeToDeleteToken<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteCellOffset<R = number>(): R;
    setSwipeToDeleteCellOffset<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteTotalSlideAmount<R = number>(): R;
    setSwipeToDeleteTotalSlideAmount<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteEdge<R = number>(): R;
    setSwipeToDeleteEdge<R = void, P0 = number>(_v: P0): R;
    swipeToDeleteRowView<R = NSTableRowView>(): R;
    setSwipeToDeleteRowView<R = void, P0 = NSTableRowView>(_v: P0): R;
    swipeToDeleteRow<R = number>(): R;
    setSwipeToDeleteRow<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTableSwipeData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableSwipeData>(): R;
      new: <R = NSTableSwipeData>() => R;
    }
  }
}

declare const NSTableSwipeData: cocoa.NSTableSwipeData.CLASS;
