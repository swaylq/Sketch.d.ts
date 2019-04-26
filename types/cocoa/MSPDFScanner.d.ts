/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFScanner<T0 = void, T1 = void, T2 = void> extends PDFScanner {
    setTextTransform_resettingLineTransform<R = void, P0 = unknown, P1 = boolean>(_setTextTransform: P0, _resettingLineTransform: P1): R;
    gradientForLayer_pattern<R = unknown, P0 = unknown, P1 = unknown>(_gradientForLayer: P0, _pattern: P1): R;
    transformedPath<R = unknown>(): R;
    makeLayerFromPath<R = unknown, P0 = unknown>(_makeLayerFromPath: P0): R;
    doClipping<R = void>(): R;
    doRestoreState<R = void>(): R;
    doSaveState<R = void>(): R;
    doNewPath<R = void>(): R;
    doText<R = void>(): R;
    doClose<R = void>(): R;
    adjustVerticalOffset_ofChildrenInContainer<R = void, P0 = number, P1 = unknown>(_adjustVerticalOffset: P0, _ofChildrenInContainer: P1): R;
    makeCropLayerFromPDFPage<R = unknown, P0 = CGPDFPage>(_makeCropLayerFromPDFPage: P0): R;
    isPDFPageCropped<R = boolean, P0 = CGPDFPage>(_isPDFPageCropped: P0): R;
    nameForType<R = unknown, P0 = unknown>(_nameForType: P0): R;
    state<R = MSPDFState>(): R;
    setState<R = void, P0 = MSPDFState>(_v: P0): R;
    stack<R = NSMutableArray>(): R;
    setStack<R = void, P0 = NSMutableArray>(_v: P0): R;
    nextID<R = number>(): R;
    setNextID<R = void, P0 = number>(_v: P0): R;
    substituteFontName<R = NSString>(): R;
    setSubstituteFontName<R = void, P0 = NSString>(_v: P0): R;
    rootLayer<R = MSLayerGroup>(): R;
    setRootLayer<R = void, P0 = MSLayerGroup>(_v: P0): R;
  }
  namespace MSPDFScanner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends PDFScanner {
      alloc<R = MSPDFScanner>(): R;
      new: <R = MSPDFScanner>() => R;
    }
  }
}

declare const MSPDFScanner: cocoa.MSPDFScanner.CLASS;
