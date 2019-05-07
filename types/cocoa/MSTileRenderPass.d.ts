/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileRenderPass<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    dirtyRect<R = CGRect>(): R;
    setDirtyRect<R = void, P0 = CGRect>(_v: P0): R;
    documentData<R = MSImmutableDocumentData>(): R;
    setDocumentData<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    page<R = MSImmutablePage>(): R;
    setPage<R = void, P0 = MSImmutablePage>(_v: P0): R;
  }
  namespace MSTileRenderPass {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTileRenderPass>(): R;
      new: <R = MSTileRenderPass>() => R;
      tileRenderPassWithPage_inDocument_dirtyRect_zoomValue<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = number>(_tileRenderPassWithPage: P0, _inDocument: P1, _dirtyRect: P2, _zoomValue: P3): R;
    }
  }
}

declare const MSTileRenderPass: cocoa.MSTileRenderPass.CLASS;
