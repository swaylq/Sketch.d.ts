/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewLayoutHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    updateLayoutWithMinimumDocumentFrameSize<R = void, P0 = CGSize>(_updateLayoutWithMinimumDocumentFrameSize: P0): R;
    initWithScrollView<R = unknown, P0 = unknown>(_initWithScrollView: P0): R;
    contentViewInsets<R = NSEdgeInsets>(): R;
    cornerFrame<R = CGRect>(): R;
    hLegacyScrollerFrame<R = CGRect>(): R;
    vLegacyScrollerFrame<R = CGRect>(): R;
    hScrollerFrame<R = CGRect>(): R;
    vScrollerFrame<R = CGRect>(): R;
    insetContentFrame<R = CGRect>(): R;
    contentFrame<R = CGRect>(): R;
    findBarFrame<R = CGRect>(): R;
    hRulerFrame<R = CGRect>(): R;
    vRulerFrame<R = CGRect>(): R;
    headerFrame<R = CGRect>(): R;
    contentsExtendUnderInsets<R = boolean>(): R;
    cornerShown<R = boolean>(): R;
    vScrollerShown<R = boolean>(): R;
    hScrollerShown<R = boolean>(): R;
    documentMinimumSize<R = CGSize>(): R;
  }
  namespace _NSScrollViewLayoutHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollViewLayoutHelper>(): R;
      new: <R = _NSScrollViewLayoutHelper>() => R;
    }
  }
}
