/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtreeRoot<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    page<R = unknown>(): R;
    overlayDirtyDiffRectForPage<R = CGRect, P0 = unknown>(_overlayDirtyDiffRectForPage: P0): R;
    contentDirtyDiffRectForPage<R = CGRect, P0 = unknown>(_contentDirtyDiffRectForPage: P0): R;
    document<R = MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    ancestorsOfObject<R = NSArray>(): R;
    setAncestorsOfObject<R = void, P0 = NSArray>(_v: P0): R;
    object<R = MSImmutableModelObject>(): R;
    setObject<R = void, P0 = MSImmutableModelObject>(_v: P0): R;
    webExportableRootLayer<R = MSWebExportableRootLayer>(): R;
    // + MSSubtreeRoot(WebExporter):
    webExportableRootLayer<R = MSWebExportableRootLayer>(): R;
  }
  namespace MSSubtreeRoot {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSubtreeRoot>(): R;
      new: <R = MSSubtreeRoot>() => R;
  
  }
  }
}

declare const MSSubtreeRoot: cocoa.MSSubtreeRoot.CLASS;
